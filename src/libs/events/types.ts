import type { GetEventsQuery } from '../../gql/graphql';

export type SanityEventImage = GetEventsQuery['events'][number]['image'];
export type SanityEventOffer = GetEventsQuery['events'][number]['offers'];

export interface EventData {
	name: string;
	description: string;
	startDate: Date;
	endDate: Date;
	location?: string;
	url: string;
	slug: string;
	image?: string | SanityEventImage;
	offers?: SanityEventOffer;
	eventAttendanceMode?: string;
}

export interface GetEventsFromGoogleCalendarOptions {
	/**
	 * Get events from this date and later
	 */
	timeMin?: Date;
}

export type Nullable<T> = T | null | undefined;
