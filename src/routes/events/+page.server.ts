import { getEventsFromGoogleCalendar } from '../../libs/events/get-events';

export const prerender = true;

export const load = async () => {
	return {
		events: await getEventsFromGoogleCalendar()
	};
};
