import * as google from '@googleapis/calendar';
import { config } from '../../config';
export const prerender = true;

export interface EventData {
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	location: string;
	url: string;
}

export const load = async () => {
	const calendar = google.calendar('v3');
	const events = await calendar.events.list({
		calendarId: config.calendarId,
		auth: config.googleApiKey,
		maxResults: 10,
		timeMin: new Date().toISOString()
	});

	if (!events.data.items) {
		return {};
	}

	return {
		events: events.data.items
			.filter((item) => item.summary)
			.map(
				(item) =>
					({
						title: item.summary,
						description: item.description ?? '',
						startDate: item.start?.dateTime,
						endDate: item.end?.dateTime,
						location: item.location,
						url: item.htmlLink
					} as EventData)
			)
			.filter((event) => event)
	};
};
