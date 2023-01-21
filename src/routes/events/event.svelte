<script lang="ts">
	import { serializeSchema } from '../../utils';
	import type { WithContext, Event } from 'schema-dts';
	import type { EventData } from './+page.server';
	export let data: EventData;

	const event: WithContext<Event> = {
		'@context': 'https://schema.org',
		'@type': 'Event',
		name: data.title,
		startDate: data.startDate,
		endDate: data.endDate,
		eventStatus: 'https://schema.org/EventScheduled',
		organizer: {
			'@type': 'Organization',
			name: 'Klynge Næringsforening',
			url: 'https://klyngeorg.no/'
		},
		eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
		location: data.location,
		description: data.description
	};
</script>

<svelte:head>
	{@html serializeSchema(event)}
</svelte:head>

<article>
	<aside class="date">
		<p>
			{new Date(data.startDate).toLocaleDateString('no-NO', {
				weekday: 'long',
				month: 'long',
				day: 'numeric'
			})}
		</p>
		<p class="time">
			{new Date(data.startDate).toLocaleTimeString('no-NO', {
				hour: 'numeric',
				minute: 'numeric'
			})}
		</p>
	</aside>
	<main>
		<h2>{data.title}</h2>
		<p class="location">
			Sted: <a href={'https://www.google.com/maps/search/?api=1&query=' + data.location}
				>{data.location}</a
			>
		</p>
		<p>{@html data.description.split('\n').join('<br />')}</p>
		<p>
			<small
				>Anslått ferdig: {new Date(data.endDate).toLocaleTimeString('no-NO', {
					hour: 'numeric',
					minute: 'numeric'
				})}</small
			>
		</p>
	</main>
</article>

<style>
	article {
		display: grid;
		grid-template-columns: 1fr 3fr;
		gap: var(--space-s);
		margin: var(--space-m) 0;
		background-color: var(--light-bg-color);
		padding: var(--space-s);
		box-shadow: 0px 0px 0px 0px var(--fade-y-color);
		transition: box-shadow 0.1s ease-in-out;
		border-radius: 10px;
	}

	@media (max-width: 600px) {
		article {
			grid-template-columns: 1fr;
		}
	}

	article:hover {
		box-shadow: var(--fade-y-color) 0px 13px 27px -5px, var(--fade-x-color) 0px 8px 16px -8px;
	}

	.date {
		border-radius: 10px;
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

	.date p {
		margin: 0;
	}

	main {
		padding: var(--space-s);
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--space-xs);
	}

	main h2,
	main p {
		margin: 0;
	}

	.location {
		font-size: var(--font-size-sm);
	}

	a {
		color: inherit;
	}
</style>
