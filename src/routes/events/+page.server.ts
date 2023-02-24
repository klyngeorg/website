import { getEventsFromGoogleCalendar } from '../../libs/get-events';

export const prerender = true;

export const load = async () => {
	return {
		events: await getEventsFromGoogleCalendar()
	};
};
