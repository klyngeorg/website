<script>
	import aboutImage from '$assets/priscilla-du-preez-Q7wGvnbuwj0-unsplash.jpg?w=1240&h=462';
	import Image from '$components/image.svelte';
	import MetaTags from '$components/meta-tags.svelte';
</script>

<MetaTags path="/about" title="Om oss" />

<p class="highlight">
	Vi er en gruppe mennesker med interesse for forretningsliv, som har kommet sammen for å støtte og
	oppmuntre hverandres suksess. Vi tror at ved å dele våre erfaringer og samarbeide, kan vi alle nå
	våre mål.
</p>
<p>Vår organisasjon er frivillig, demokratisk og åpen for alle.</p>

<Image src={aboutImage} alt="Oslo" />

<style>
	p {
		font-size: var(--font-size-lg);
		max-width: 820px;
	}
	.highlight {
		font-weight: bold;
	}
</style>
