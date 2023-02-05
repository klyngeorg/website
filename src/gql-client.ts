import { GraphQLClient } from 'graphql-request';

export { graphql } from './gql';

if (!process.env.SANITY_TOKEN) {
	console.warn(
		'WARNING: Sanity token not set. This will cause problems when fetching data from Sanity.'
	);
}

export const client = new GraphQLClient(
	'https://95rc74zt.api.sanity.io/v1/graphql/production/default',
	{
		headers: {
			Authorization: `Bearer ${process.env.SANITY_TOKEN}`
		}
	}
);
