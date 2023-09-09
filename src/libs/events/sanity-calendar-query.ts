import { q, sanityImage } from 'groqd';
import { sanityClient } from '../../clients';

const eventsQuery = q(
  `*[
      _type == 'event' &&
    date >= $dateFrom &&
    date <= $dateTo
  ]`,
  { isArray: true }
)
  .filter()
  .grab$({
    _id: q.string(),
    date: q.date(),
    slug: ['slug.current', q.string().optional()],
    calendarId: q.string(),
    eventAttendanceMode: q.string(),
    offers: q
      .array(
        q.object({
          price: q.number().optional(),
          priceCurrency: q.string().optional(),
          url: q.string().url().optional(),
          availability: q.string(),
          description: q.string().optional()
        })
      )
      .optional(),
    image: sanityImage('image', { withCrop: true, withHotspot: true }).nullable()
  });

export async function getSanityEvents(dateFrom: Date, dateTo: Date) {
  const { schema, query } = eventsQuery;
  return schema.parse(await sanityClient.fetch(query, { dateFrom, dateTo }));
}
