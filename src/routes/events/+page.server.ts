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
		maxResults: 100,
		singleEvents: true,
		orderBy: 'startTime',

		// Get events that happened a week ago or later
		timeMin: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
		// Get events that happen in the next 6 months
		timeMax: new Date(Date.now() + 6 * 30 * 24 * 60 * 60 * 1000).toISOString(),

		timeZone: 'Europe/Oslo'
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
