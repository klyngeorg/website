<script>
	import osloHero from '$assets/oslo-hero.jpg?w=1240&h=462';
	import Image from '$components/image.svelte';
</script>

<div class="content">
	<strong>
		Vi er en gruppe mennesker som deler erfaringer, nettverk, samarbeider og støtter hverandre.
	</strong>

	<p>
		Som en nylig etablert forening arrangerer foreløpig
		<a href="/events"> månedlige møter og andre arrangementer </a>
		for medlemmer og gjester. Om du er nysjerrig, ta kontakt med oss på
		<a href="mailto:hei@klyngeorg.no">hei@klyngeorg.no</a>
		eller med <a href="/about/members">en av oss</a>.
	</p>
	<p>
		Sjekk ut
		<a href="https://www.linkedin.com/company/klyngeorg">Linkedin-siden vår</a>.
	</p>
</div>

<div class="hero">
	<Image class="oslo-hero" src={osloHero} alt="Oslo" />
	<p>Vi er organisert som en frivillig, demokratisk åpen organisasjon.</p>
</div>

<style>
	.content {
		max-width: 60ch;
		margin-top: var(--space-xl);
	}

	.content p {
		line-height: 1.5;
	}

	strong {
		font-size: var(--font-size-lg);
		font-weight: bold;
	}

	.hero {
		background-color: var(--primary-color);
		border-radius: 16px;
	}

	:global(.oslo-hero) {
    height: 100%;
    width: 100%;
		border-radius: 16px 16px 0 0;
	}

	.hero p {
		color: var(--muted-color);
		padding: var(--space-xl);
		font-size: var(--font-size-md);
		text-align: center;
		margin: 0;
	}
</style>
