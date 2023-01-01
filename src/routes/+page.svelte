<script>
	import Saos from 'saos';
	import osloHero from '../assets/oslo-hero.jpg';
</script>

<main>
	<Saos animation={'load 1s both'}>
		<p class="headline">
			Vi er en gruppe mennesker med interesse for forretningsliv, som har kommet sammen for å støtte
			og oppmuntre hverandres suksess. Vi tror at ved å dele våre erfaringer, nettverk og
			samarbeide, kan vi alle nå våre mål.
		</p>

		<p>
			<b>Vi jobber med å lage en nettside –</b> enn så lenge, kan du ta kontakt med Bjørn Niklas på b@obj.no
			for å vite mer!
		</p>
	</Saos>
	<Saos animation={'load 1s both'}>
		<img src={osloHero} alt="Oslo" />
		<div class="hero">Vi er organisert som en frivillig, demokratisk åpen organisasjon.</div>
	</Saos>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;

		gap: var(--space-m);
	}

	.headline {
		font-size: var(--font-size-lg);
		max-width: 820px;
	}

	img {
		width: 100%;
	}

	.hero {
		background-color: var(--primary-color);
		color: white;
		font-size: var(--font-size-md);
		padding: var(--space-xl);
		text-align: center;
	}
</style>
