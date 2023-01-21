<script lang="ts">
	import type { WithContext, Person } from 'schema-dts';
	import md5 from 'md5';
	import { serializeSchema } from '../utils';
	export let person: Omit<Person, '@type'>;

	if (typeof person === 'string') {
		person = {
			'@type': 'Person',
			givenName: person
		};
	}

	const data: WithContext<Person> = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		image: 'default-avatar.jpg',
		...person
	};

	const schema = {
		...data
	};

	const worksFor = Array.isArray(data.worksFor) ? data.worksFor : [];
	const email = String(data.email) || '';
	const defaultImage = encodeURIComponent('https://klyngeorg.no/assets/images/default-avatar.jpg');
	const emailHash = md5(email.toLowerCase().trim());
	const image = `https://www.gravatar.com/avatar/${emailHash}?d=${defaultImage}&s=200`;
	const name = [data.givenName, data.familyName].join(' ');
</script>

<svelte:head>
	{@html serializeSchema(schema)}
</svelte:head>

<article>
	<img src={image} alt={name} />
	<section>
		<header>
			<h2>{name}</h2>
			<div class="roles">
				{#each worksFor as role}
					<p>{role.name} ved {role.worksFor.name}</p>
				{/each}
			</div>
		</header>
		<div>
			{#if data.telephone}
				<p><a href={`tel:${data.telephone}`}>{data.telephone}</a></p>
			{/if}
			{#if data.email}
				<p><a href={`mailto:${data.email}`}>{data.email}</a></p>
			{/if}
		</div>
	</section>
</article>

<style>
	article {
		display: flex;
		gap: var(--space-s);

		font-size: var(--font-size-base);
	}

	header {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	.roles {
		font-size: var(--font-size-sm);
	}

	article p {
		margin: 0;
	}

	img {
		max-height: 150px;
		border-radius: 100%;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	h2 {
		font-size: var(--font-size-md);
		font-weight: bold;
		margin: 0px;
	}
</style>
