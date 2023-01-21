<script>
	import KlyngeLogo from './klynge-logo.svelte';
</script>

<nav>
	<a href="/" class="logo" aria-label="Go back to home"><KlyngeLogo /></a>
	<ul class="menu">
		<!-- <li><a href="/about">Om foreningen</a></li> -->
		<li><a href="/events">Aktiviteter →</a></li>
		<!-- <li class="focus"><a href="/contact">Bli medlem</a></li> -->
	</ul>
</nav>

<style>
	.logo {
		max-height: 18px;
		padding: var(--space-xs);
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: var(--space-s);
	}

	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		justify-content: space-between;
		margin: var(--space-m) 0;
		gap: var(--space-s);
		font-size: var(--font-size-m);
	}

	li a {
		padding: var(--space-xs);
	}

	@media only screen and (max-width: 630px) {
		nav {
			flex-direction: column;
			align-items: flex-start;
		}

		ul {
			gap: var(--space-xs);
		}

		li a,
		.logo {
			margin-left: calc(var(--space-xs) * -1);
		}
	}

	a {
		color: var(--primary-color);
		text-decoration: none;
	}

	.focus a {
		color: white;
	}

	.focus {
		background: var(--primary-color);
		padding: var(--space-xs);
		padding-left: var(--space-s);
		padding-right: var(--space-s);
		border-radius: 50px;
	}
</style>
