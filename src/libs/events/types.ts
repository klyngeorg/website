import type { Offer } from 'schema-dts';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface EventData {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location?: string;
  url: string;
  slug?: string | null;
  image?: SanityImageSource;
  offers?: Offer[];
  eventAttendanceMode?: string;
}

export interface GetEventsFromGoogleCalendarOptions {
  /**
   * Get events from this date and later
   */
  timeMin?: Date;
}

export type Nullable<T> = T | null | undefined;
