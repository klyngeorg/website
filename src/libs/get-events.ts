import * as google from '@googleapis/calendar';
import { format } from 'date-fns';
import slugify from 'slugify';
import { config } from '../config.js';

export interface EventData {
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	location: string;
	url: string;
	slug: string;
}

export interface GetEventsFromGoogleCalendarOptions {
	/**
	 * Get events from this date and later
	 */
	timeMin?: Date;
}

type Nullable<T> = T | null | undefined;

function makeSlug(summary: Nullable<string>, startDateTime: Nullable<string>) {
	if (!summary || !startDateTime) {
		return '';
	}

	const date = format(new Date(startDateTime), 'yyyy-MM-dd');
	return slugify(`${date}-${summary}`, {
		lower: true
	});
}

export async function getEventsFromGoogleCalendar(
	opts: GetEventsFromGoogleCalendarOptions = {}
): Promise<EventData[]> {
	const {
		// Get events that happened three days ago or later
		timeMin = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
	} = opts;

	const calendar = google.calendar('v3');
	const events = await calendar.events.list({
		calendarId: config.calendarId,
		auth: config.googleApiKey,
		maxResults: 100,
		singleEvents: true,
		orderBy: 'startTime',

		timeMin: timeMin.toISOString(),
		// Get events that happen in the next 6 months
		timeMax: new Date(Date.now() + 6 * 30 * 24 * 60 * 60 * 1000).toISOString(),

		timeZone: 'Europe/Oslo'
	});

	if (!events.data.items) {
		return [];
	}

	return events.data.items
		.filter((item) => item.summary)
		.map(
			(item) =>
				({
					title: item.summary,
					description: item.description ?? '',
					startDate: item.start?.dateTime,
					endDate: item.end?.dateTime,
					location: item.location,
					slug: makeSlug(item.summary, item.start?.dateTime),
					url: item.htmlLink
				} as EventData)
		)
		.filter((event) => event);
}
