import type { Person } from 'schema-dts';
import createClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../../gql-client';
import { graphql } from '../../../gql';

export const sanityClient = createClient({
	projectId: '95rc74zt',
	dataset: 'production',
	useCdn: false,
	apiVersion: '2022-01-12',
	token: process.env.SANITY_TOKEN
});

const builder = imageUrlBuilder(sanityClient);

export const prerender = true;

const getMembersDocument = graphql(`
	query getMembers {
		members: allMembership(
			where: {
				year: { year: { eq: 2023 } }
				status: {
					in: ["pending", "pending-invoicing", "pending-payment", "active", "pending-expelled"]
				}
				member: { person: { privacy: { showPublicly: { eq: true } } } }
			}
		) {
			status
			member {
				person {
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
	}
`);

export interface LoadOutput {
	members: Omit<Person, '@type'>[];
}

export function notEmpty<T>(value: T | null | undefined): value is T {
	return value !== null && value !== undefined;
}

export const load = async (): Promise<LoadOutput> => {
	const { members } = await client.request(getMembersDocument);

	const output = members
		.map(({ member }) => {
			const person = member?.person;

			const image = person?.image
				? builder.image(person.image).auto('format').width(200).height(200).toString()
				: undefined;

			return {
				givenName: person?.givenName,
				familyName: person?.familyName,
				email: person?.email,
				phone: person?.phone,
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
