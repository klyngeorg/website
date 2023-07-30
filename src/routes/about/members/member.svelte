<script lang="ts">
	import type { WithContext, Person } from 'schema-dts';
	import md5 from 'md5';
	import { JsonLd } from 'svelte-meta-tags';
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
		...person
	};

	const worksFor = Array.isArray(data.worksFor) ? data.worksFor : [];
	const email = String(data.email) || '';

	if (!data.image) {
		const defaultImage = encodeURIComponent('https://klyngeorg.no/assets/default-avatar.jpg');
		const emailHash = md5(email.toLowerCase().trim());
		data.image = `https://www.gravatar.com/avatar/${emailHash}?d=${defaultImage}&s=200`;
	}

	const name = [data.givenName, data.familyName].join(' ');
</script>

<JsonLd schema={{
  '@type': 'Person',
  ...person,
}} />

<article>
	{#if typeof data.image === 'string'}
		<img src={data.image} alt={name} />
	{/if}
	<section>
		<header>
			<h2>{name}</h2>
			<div class="roles">
				{#each worksFor as role}
					<p>
						{role.name} ved
						{#if role.worksFor?.sameAs && Array.isArray(role.worksFor.sameAs) && role.worksFor.sameAs.length > 0 && !role.worksFor.sameAs[0].includes('klyngeorg.no')}
							<a href={role.worksFor.sameAs[0]} target="_blank" rel="noreferrer">
								{role.worksFor.name}
							</a>
						{:else}
							{role.worksFor.name}
						{/if}
					</p>
				{/each}
			</div>
		</header>
		<div class="contact-details">
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
		word-wrap: break-word;
		overflow: auto;
	}

	.roles,
	.contact-details {
		font-size: var(--font-size-sm);
	}

	.roles a {
		text-decoration: none;
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
