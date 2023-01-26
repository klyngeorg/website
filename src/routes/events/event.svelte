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
</script>

<svelte:head>
	{@html serializeSchema(event)}
</svelte:head>

<article>
	<aside class="date">
		{date}
		<div class="time">
			{time}
		</div>
	</aside>
	<main>
		<h2>
			<a href={data.url} rel="noreferrer" target="_blank">{data.title}</a>
		</h2>
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
		<p>{@html data.description.split('\n').join('<br />')}</p>
		<p>
			<small>Anslått ferdig: {timeFinished}</small>
		</p>
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

	article:hover {
		box-shadow: var(--fade-y-color) 0px 13px 27px -5px, var(--fade-x-color) 0px 8px 16px -8px;
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

	@media (max-width: 800px) {
		article {
			grid-template-columns: 1fr;
		}

		.date {
			border-radius: 16px 16px 0 0;
			padding: var(--space-m);
			font-size: var(--font-size-lg);
		}
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;

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
</style>
