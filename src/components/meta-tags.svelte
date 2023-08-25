<script lang="ts">
  import { MetaTags, type MetaTagsProps } from 'svelte-meta-tags';
  import type { Image } from '../types';

  export let title = 'Klynge Næringsforening';
  export let description =
    'Klynge er en gruppe menneske som deler erfaringer, nettverk, samarbeider og støtter hverandre.';

  export let useTitleTemplate = true;
  export let path = '/';
  export let images: Image[] = [
    {
      url: 'https://klyngeorg.no/assets/klynge-default-seo.jpg',
      width: 1200,
      height: 628
    }
  ];

  function parseUrl(imageUrl: string | URL) {
    if (typeof imageUrl === 'string') {
      return new URL(imageUrl, 'https://klyngeorg.no');
    }

    return imageUrl;
  }

  const parsedImages = images.map((image) => {
    return {
      ...image,
      url: parseUrl(image.url).toString()
    };
  });

  const cononicalUrl = new URL(path, 'https://klyngeorg.no');

  const tags: MetaTagsProps = {
    title,
    titleTemplate: useTitleTemplate ? '%s | Klynge Næringsforening' : undefined,
    canonical: cononicalUrl.toString(),
    description,
    openGraph: {
      type: 'website',
      url: cononicalUrl.toString(),
      description,
      images: parsedImages,
      site_name: 'Klynge Næringsforening'
    },
    twitter: {
      cardType: 'summary_large_image',
      image: images.length > 0 ? parsedImages[0].url : undefined
    }
  };
</script>

<MetaTags {...tags} />
