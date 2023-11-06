import type { Person } from 'schema-dts';
import { q, sanityImage } from 'groqd';
import { sanityClient, imageUrlBuilder } from '../../../clients.js';

const address = q.object({
  streetAddress: q.string(),
  postalCode: q.string().length(4),
  addressLocality: q.string()
});

const membershipQuery = q(
  `*[ _type == "person" && !(_id in path("drafts.**")) && privacy.showPublicly == true ]`,
  {
    isArray: true
  }
)
  .grab$({
    givenName: q.string(),
    familyName: q.string(),
    email: q.string().email().optional(),
    phone: q.string().optional(),
    address: address.optional(),
    image: sanityImage('image', { withCrop: true, withHotspot: true }).nullable(),

    memberships: q('*[_type == "membership" && references(^._id)]', { isArray: true }),
    worksFor: q('worksFor[]', { isArray: true })
      .grab$({
        name: q.string(),
        worksFor: q('worksFor')
          .deref()
          .grab$({
            _id: q.string(),
            name: q.string(),
            email: q.string().email().optional(),
            phone: q.string().optional(),
            address: address.optional(),
            sameAs: q.array(q.string().url()).or(q.string().url()).optional()
          })
      })
      .nullable()
  })
  .filter(
    'count(memberships) > 0 || "be371197-3960-4240-9fe2-2e34ed476b1d" in worksFor[].worksFor._id'
  );

interface LoadOutput {
  members: Omit<Person, '@type'>[];
}

function notEmpty<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

export const load = async (): Promise<LoadOutput> => {
  const { schema, query } = membershipQuery;
  const people = schema.parse(await sanityClient.fetch(query));

  console.log({ query, people });

  return {
    members: people
      .map((person) => {
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
