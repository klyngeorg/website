import { getEventsFromGoogleCalendar } from '../../../libs/events/get-events';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const events = await getEventsFromGoogleCalendar();

	return {
		event: events.find((event) => event.slug === params.slug)
	};
};

export const prerender = true;
