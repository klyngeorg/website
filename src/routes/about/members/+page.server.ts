import type { Person } from 'schema-dts';
import { q, sanityImage } from 'groqd';
import { sanityClient, imageUrlBuilder } from '../../../clients.js';

const statusUnion = q.union([
  q.literal('pending'),
  q.literal('pending-invoicing'),
  q.literal('pending-payment'),
  q.literal('active'),
  q.literal('pending-expelled')
]);

const address = q.object({
  streetAddress: q.string(),
  postalCode: q.string().length(4),
  addressLocality: q.string()
});

const membershipQuery = q(
  `*[
    _type == 'membership' &&
    year->year == 2023 &&
    status in ['pending', 'pending-invoicing', 'pending-payment', 'active', 'pending-expelled'] &&
    member->privacy.showPublicly
  ]`,
  { isArray: true }
)
  .filter()
  .grab$({
    status: statusUnion,
    member: q('member')
      .deref()
      .grab$({
        givenName: q.string(),
        familyName: q.string(),
        email: q.string().email().optional(),
        phone: q.string().optional(),
        address: address.optional(),
        image: sanityImage('image', { withCrop: true, withHotspot: true }).nullable(),

        worksFor: q('worksFor[]', { isArray: true })
          // .deref()
          .grab$({
            name: q.string(),
            worksFor: q('worksFor')
              .deref()
              .grab$({
                name: q.string(),
                email: q.string().email().optional(),
                phone: q.string().optional(),
                address: address.optional(),
                sameAs: q.array(q.string().url()).or(q.string().url()).optional()
              })
          })
          .nullable()
      })
  });

interface LoadOutput {
  members: Omit<Person, '@type'>[];
}

function notEmpty<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

export const load = async (): Promise<LoadOutput> => {
  const { schema, query } = membershipQuery;
  const members = schema.parse(await sanityClient.fetch(query));

  return {
    members: members
      .map(({ member }) => {
        const person = member;

        const image = person?.image
          ? imageUrlBuilder.image(person.image).auto('format').width(200).height(200).toString()
          : undefined;

        return {
          givenName: person?.givenName,
          familyName: person?.familyName,
          email: person?.email,
          telephone: person?.phone,
          address: person?.address,
          image,
          worksFor: person?.worksFor
        };
      })
      .filter(notEmpty)
      .sort((a, b) => {
        const aGivenName = a.givenName ?? '';
        const bGivenName = b.givenName ?? '';
        return aGivenName > bGivenName ? 1 : -1;
      })
  };
};
