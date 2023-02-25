import type { Person } from 'schema-dts';
import { graphQlClient, imageUrlBuilder } from '../../../clients';
import { graphql } from '../../../gql';

export const prerender = true;

const getMembersDocument = graphql(`
	query getMembers {
		members: allMembership(
			where: {
				year: { year: { eq: 2023 } }
				status: {
					in: ["pending", "pending-invoicing", "pending-payment", "active", "pending-expelled"]
				}
				member: { privacy: { showPublicly: { eq: true } } }
			}
		) {
			status
			member {
				givenName
				familyName
				email
				phone
				address {
					streetAddress
					postalCode
					addressLocality
				}
				image {
					hotspot {
						x
						y
						height
						width
					}
					crop {
						top
						bottom
						left
						right
					}
					asset {
						_id
						altText
						assetId
						extension
						url
					}
				}
				worksFor {
					name
					worksFor {
						name
						legalName
						email
						phone
						address {
							streetAddress
							postalCode
							addressLocality
						}
						sameAs
					}
				}
			}
		}
	}
`);

interface LoadOutput {
	members: Omit<Person, '@type'>[];
}

function notEmpty<T>(value: T | null | undefined): value is T {
	return value !== null && value !== undefined;
}

export const load = async (): Promise<LoadOutput> => {
	const { members } = await graphQlClient.request(getMembersDocument);

	const output = members
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
		.filter(notEmpty);

	return {
		members: output.sort((a, b) => {
			const aGivenName = a.givenName ?? '';
			const bGivenName = b.givenName ?? '';
			return aGivenName > bGivenName ? 1 : -1;
		})
	};
};
