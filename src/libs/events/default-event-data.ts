import type { Event } from 'schema-dts';

export const defaultEventData: Event = {
  '@type': 'Event',
  // TODO: Move this to Sanity
  eventStatus: 'https://schema.org/EventScheduled',
  organizer: {
    '@type': 'Organization',
    name: 'Klynge Næringsforening',
    url: 'https://klyngeorg.no/'
  },
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode'
};
