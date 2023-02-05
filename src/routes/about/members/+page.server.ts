import { graphql } from '../../../gql';
import { client } from '../../../gql-client';

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
						asset {
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

export const load = async () => {
	const { members } = await client.request(getMembersDocument);
	return { members };
};
