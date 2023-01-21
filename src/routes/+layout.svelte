<script lang="ts">
	import '@fontsource/outfit';
	import '@fontsource/outfit/600.css';
	import Header from '../components/header.svelte';
	import type { WithContext, LocalBusiness } from 'schema-dts';
	import { serializeSchema } from '../utils';

	const localBusiness: WithContext<LocalBusiness> = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Klynge Næringsforening',
		url: 'https://klyngeorg.no/',
		logo: 'https://klyngeorg.no/assets/klynge-logo.svg',
		image: 'https://klyngeorg.no/assets/klynge-logo.svg',
		telephone: '+47 95308087',
		email: 'hei@klyngeorg.no',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Myntgata 2',
			addressLocality: 'Oslo',
			addressRegion: 'Oslo',
			postalCode: '0151',
			addressCountry: 'NO'
		}
	};
</script>

<svelte:head>
	{@html serializeSchema(localBusiness)}
</svelte:head>

<div class="container">
	<Header />
	<main>
		<slot>
			<!-- +page.svelte is rendered here -->
		</slot>
	</main>
	<footer>
		<b>Klynge Næringsforening</b><br />
		Organisasjonsnummer: 930 334 693
	</footer>
</div>

<style>
	@keyframes -global-load {
		from {
			opacity: 0.8;
			-webkit-transform: translate3d(0, 1%, 0);
			transform: translate3d(0, 1%, 0);
		}

		to {
			opacity: 1;
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
	}

	:global(:root) {
		--primary-color: #344e4c;
		--primary-muted: #f2f2f2;

		--font-size-sm: clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem);
		--font-size-base: clamp(1rem, 0.34vw + 0.91rem, 1.19rem);
		--font-size-md: clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem);
		--font-size-lg: clamp(1.56rem, 1vw + 1.31rem, 2.11rem);
		--font-size-xl: clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem);
		--font-size-xxl: clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem);
		--font-size-xxxl: clamp(3.05rem, 3.54vw + 2.17rem, 5rem);

		--space-3xs: clamp(0.31rem, calc(0.31rem + 0vw), 0.31rem);
		--space-2xs: clamp(0.56rem, calc(0.54rem + 0.11vw), 0.63rem);
		--space-xs: clamp(0.88rem, calc(0.85rem + 0.11vw), 0.94rem);
		--space-s: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);
		--space-m: clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem);
		--space-l: clamp(2.25rem, calc(2.16rem + 0.43vw), 2.5rem);
		--space-xl: clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem);
		--space-2xl: clamp(4.5rem, calc(4.33rem + 0.87vw), 5rem);
		--space-3xl: clamp(6.75rem, calc(6.49rem + 1.3vw), 7.5rem);
	}

	:global(body) {
		font-family: 'Outfit', sans-serif;
		color: var(--primary-color);

		font-smooth: always;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		font-size: var(--font-size-base);
	}

	main {
		display: flex;
		flex-direction: column;

		gap: var(--space-m);
	}

	.container {
		animation: load 1s both;
		max-width: 1240px;
		min-width: 320px;
		margin: 0 auto;
		padding: 0 var(--space-s);
	}

	footer {
		margin-top: var(--space-xl);
	}
</style>
