<script>
	import Saos from 'saos';
  import heroImage from '../../assets/priscilla-du-preez-Q7wGvnbuwj0-unsplash.jpg';
</script>

<Saos animation={'load 1s both'}>
	<p class="highlight">
			Vi er en gruppe mennesker med interesse for forretningsliv, som har kommet sammen for å støtte
			og oppmuntre hverandres suksess. Vi tror at ved å dele våre erfaringer og samarbeide, kan vi
			alle nå våre mål.
	</p>
  <p>
    Vår organisasjon er frivillig, demokratisk og åpen for alle.
  </p>
</Saos>

<img src={heroImage} alt="Oslo" />

<style>
  img {
		width: 100%;
	}
	p {
		font-size: var(--font-size-lg);
		max-width: 820px;
	}
  .highlight {
    font-weight: bold;
  }
</style>
