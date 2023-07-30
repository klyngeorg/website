<script lang="ts">
	import { notEmpty } from '../../../utils';
	import { invariant } from 'ts-invariant';
  import { JsonLd } from 'svelte-meta-tags';
  import StructuredText from '$components/structured-text.svelte';
	import { defaultEventData } from '../../../libs/events/default-event-data';
	import type { EventData } from '../../../libs/events/types';
	export let data: EventData;

	const date = new Date(data.startDate).toLocaleDateString('no-NO', {
		weekday: 'long',
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});

	const time = new Date(data.startDate).toLocaleTimeString('no-NO', {
		hour: 'numeric',
		minute: 'numeric'
	});

	const timeFinished = new Date(data.endDate).toLocaleTimeString('no-NO', {
		hour: 'numeric',
		minute: 'numeric'
	});

	const offers = (data.offers ?? [])
    .filter((offerItem) => offerItem && offerItem.url)
    .filter(notEmpty);
</script>

<JsonLd schema={{
		...defaultEventData,
		name: data.name,
		startDate: data.startDate.toISOString(),
		endDate: data.endDate.toISOString(),
		location: {
			'@type': 'Place',
			address: data.location ?? 'Oslo, Norway'
		},
		image: new URL(
			['assets', 'images', 'social', `${data.slug}.png`].join('/'),
			'https://klyngeorg.no/'
		).toString(),
		description: data.description,
    offers: offers
			.map((offerItem) => {
				invariant(offerItem && offerItem.url, 'Offer must have a url');
				return {
					'@type': 'Offer',
					url: offerItem.url,
          price: offerItem.price,
          priceCurrency: offerItem.priceCurrency,
          availability: offerItem.availability,
				};
			})
	}} />

<article>
	<aside class="date">
		{date}
		<div class="time">
			{time}
		</div>
	</aside>
	<main>
		<a href={`/events/${data.slug}`} rel="noreferrer" target="_blank" class="heading">
			<h2>
				{data.name}
			</h2>
		</a>
		{#if data.location}
			<p class="location">
				Sted:
				<a
					href={'https://www.google.com/maps/search/?api=1&query=' + data.location}
					rel="noreferrer"
					target="_blank"
				>
					{data.location}
				</a>
			</p>
		{/if}
		<p>
      <StructuredText data={data.description} />
    </p>
		<p>
			<small>Anslått ferdig: {timeFinished}</small>
		</p>
		{#each offers as offer}
			<div class="offer-box">
				<div class="description">
					{#if offer.price}
						<p><strong>{offer.price} {offer.priceCurrency}</strong></p>
					{/if}
					{#if offer.description}
						<p class="description-paragraph">
              <StructuredText data={offer.description.split('\n').join('<br />')} />
						</p>
					{/if}
					{#if offer.availability === 'LimitedAvailability'}
						<p><strong>Merk:</strong> Det er begrensede plasser</p>
					{/if}
					{#if offer.availability === 'SoldOut'}
						<p><strong>Varsel:</strong> Det er ikke flere plasser</p>
					{/if}
					{#if offer.availability === 'BackOrder'}
						<p><strong>Varsel:</strong> Det er venteliste</p>
					{/if}
				</div>
				<div class="actions">
					<a href={offer.url} class="button" rel="noreferrer" target="_blank"> Påmelding → </a>
				</div>
			</div>
		{/each}
	</main>
</article>

<style>
	article {
		display: grid;
		grid-template-columns: 1fr 3fr;
		gap: var(--space-s);
		background-color: var(--light-bg-color);
		box-shadow: 0px 0px 0px 0px var(--fade-y-color);
		transition: box-shadow 0.1s ease-in-out;
		border-radius: 16px;
	}

	.heading {
		text-decoration: none;
	}

	.date {
		border-radius: 16px 0 0 16px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		padding: var(--space-s);

		background-color: var(--primary-color);
		color: var(--muted-color);

		font-size: var(--font-size-sm);
	}

	.date .time {
		font-size: var(--font-size-lg);
	}

	main {
		word-wrap: break-word;
		overflow: auto;
		display: flex;
		flex-direction: column;
		justify-content: top;

		padding: var(--space-s);
		padding-top: var(--space-l);
		padding-bottom: var(--space-l);

		gap: var(--space-xs);
	}

	main h2,
	main p {
		margin: 0;
	}

	.location {
		font-size: var(--font-size-sm);
	}

	.offer-box {
		display: flex;
		justify-content: space-between;
		/* align-items: center; */

		background-color: var(--muted-color);
		padding: var(--space-s);
		border-radius: 16px;

		font-size: var(--font-size-sm);
		gap: var(--space-l);
	}

	.offer-box .description {
		flex: 1;
	}

	.offer-box .description .description-paragraph {
		padding-bottom: var(--space-xs);
	}

	.offer-box .button {
		display: block;
		background-color: var(--primary-color);
		color: var(--muted-color);
		border-radius: 16px;
		padding: var(--space-2xs);
		text-decoration: none;
		font-size: var(--font-size-sm);
	}

	@media (max-width: 800px) {
		article {
			grid-template-columns: 1fr;
		}

		.date {
			border-radius: 16px 16px 0 0;
			padding: var(--space-m);
			font-size: var(--font-size-m);
		}

		main {
			padding-top: 0px;
		}
	}
</style>
