<script>
	import aboutImage from '$assets/priscilla-du-preez-W3SEyZODn8U-unsplash.jpg?w=1240&h=400';
	import graphImage from '$assets/priscilla-du-preez-W3SEyZODn8U-unsplash.jpg?w=1200&h=627&format=jpg';
	import Image from '$components/image.svelte';
	import MetaTags from '$components/meta-tags.svelte';
</script>

<MetaTags
	title="Klynge starter med fast nettverkslunsj"
	description="Vi vil bygge sterke relasjoner, dele kunnskap og inspirere hverandre – derfor starter vi nå med nettverkslunsjer."
	images={[
		{
			url: graphImage.img.src,
			width: graphImage.img.w,
			height: graphImage.img.h,
			alt: 'Oslo'
		}
	]}
/>

<h1 class="pitch">
	Vi vil bygge sterke relasjoner, dele kunnskap og inspirere hverandre – derfor starter vi nå med
	nettverkslunsjer.
</h1>

<Image src={aboutImage} class="hero-image" alt="Oslo" />

<p>
	Vi er en gruppe mennesker som deler erfaringer, nettverk, samarbeider og støtter hverandre. I
	løpet av høsten har vi satt oss et mål om å samle medlemmer, gjester til faste månedlige
	nettverkslunsjer.
</p>

<p>
	For å få i gang dette prosjektet trenger vi to ting fra deg; tilbakemeldinger og vite om du vil
	være med.
</p>

<div>
	<a
		href="https://forms.gle/SmR6EwA5nGJDARr37"
		rel="noopener noreferrer"
		target="_blank"
		class="button"
	>
		Jeg vil bli med!
	</a>
</div>

<style>
	.pitch {
		max-width: 30ch;
	}

	p {
		font-size: 1.2em;
		max-width: 60ch;
		line-height: 1.5;
		margin: 0px;
	}

	:global(.hero-image) {
		object-fit: cover;
		width: 100%;

		max-height: 400px;
	}

	.button {
		display: inline-block;
		padding: 0.5em 1em;
		border-radius: 0.5em;
		color: white;
		text-decoration: none;
		font-weight: bold;
		font-size: 1.2em;

		background-color: var(--primary-color);
		padding: var(--space-xs);
		padding-left: var(--space-s);
		padding-right: var(--space-s);
		border-radius: 50px;
	}
</style>
