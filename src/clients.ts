import createClient from '@sanity/client';
import sanityImageUrlBuilder from '@sanity/image-url';
import { GraphQLClient } from 'graphql-request';

if (!process.env.SANITY_TOKEN) {
	console.warn(
		'WARNING: Sanity token not set. This will cause problems when fetching data from Sanity.'
	);
}

export const graphQlClient = new GraphQLClient(
	'https://95rc74zt.api.sanity.io/v1/graphql/production/default',
	{
		headers: {
			Authorization: `Bearer ${process.env.SANITY_TOKEN}`
		}
	}
);

export const sanityClient = createClient({
	projectId: '95rc74zt',
	dataset: 'production',
	useCdn: false,
	apiVersion: '2022-01-12',
	token: process.env.SANITY_TOKEN
});

export const imageUrlBuilder = sanityImageUrlBuilder(sanityClient);
