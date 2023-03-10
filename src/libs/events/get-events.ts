import * as google from '@googleapis/calendar';
import { format } from 'date-fns';
import slugify from 'slugify';
import { invariant } from 'ts-invariant';
import { config } from '../../config.js';
import { getSanityEvents } from './sanity-calendar-query.js';
import type { EventData, GetEventsFromGoogleCalendarOptions, Nullable } from './types.js';

function makeSlug(summary: Nullable<string>, startDateTime: Nullable<string>) {
	invariant(summary, 'Summary is required');
	invariant(startDateTime, 'Start date is required');

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

	// Get events that happen in the next 6 months
	const timeMax = new Date(Date.now() + 6 * 30 * 24 * 60 * 60 * 1000);

	const calendar = google.calendar('v3');
	const events = await calendar.events.list({
		calendarId: config.calendarId,
		auth: config.googleApiKey,
		maxResults: 100,
		singleEvents: true,
		orderBy: 'startTime',

		timeMin: timeMin.toISOString(),
		timeMax: timeMax.toISOString(),

		timeZone: 'Europe/Oslo'
	});

	if (!events.data.items) {
		return [];
	}

	const sanityEvents = await getSanityEvents(timeMin, timeMax);

	return events.data.items
		.filter((item) => item.summary)
		.map((item) => {
			invariant(item.summary, 'Start date is required');
			invariant(item.start?.dateTime, 'Start date is required');
			invariant(item.end?.dateTime, 'End date is required');
			invariant(item.htmlLink, 'URL is required');

			const event: EventData = {
				name: item.summary,
				description: item.description ?? '',
				startDate: new Date(item.start.dateTime),
				endDate: new Date(item.end.dateTime),
				location: item.location ?? undefined,
				slug: makeSlug(item.summary, item.start.dateTime),
				url: item.htmlLink
			};

			const sanityEvent = sanityEvents.find((sanityEvent) => sanityEvent.calendarId === item.id);

			if (sanityEvent) {
				event.image = sanityEvent.image;
				event.offers = sanityEvent.offers;
				event.eventAttendanceMode = sanityEvent.eventAttendanceMode ?? undefined;
			}

			return event;
		})
		.filter((event) => event);
}
