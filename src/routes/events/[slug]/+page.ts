import type { EventData } from '../../../libs/events/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const apiEvents = await fetch('/api/events');
	const events = (await apiEvents.json()) as EventData[];

	return events
		.map((event) => ({
			...event,
			startDate: new Date(event.startDate),
			endDate: new Date(event.endDate)
		}))
		.find((event) => event.slug === params.slug);
};

export const prerender = true;
