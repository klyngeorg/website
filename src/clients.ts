import { createClient } from '@sanity/client';
import sanityImageUrlBuilder from '@sanity/image-url';

if (!process.env.SANITY_TOKEN) {
  console.warn(
    'WARNING: Sanity token not set. This will cause problems when fetching data from Sanity.'
  );
}

export const sanityClient = createClient({
  projectId: '95rc74zt',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2022-01-12',
  token: process.env.SANITY_TOKEN
});

export const imageUrlBuilder = sanityImageUrlBuilder(sanityClient);
