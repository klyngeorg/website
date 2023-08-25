import { graphQlClient } from '../../clients';
import { graphql } from '../../gql';

const getEventsDocument = graphql(`
  query GetEvents($dateFrom: DateTime!, $dateTo: DateTime!) {
    events: allEvent(where: { date: { lte: $dateTo, gte: $dateFrom } }) {
      date
      slug {
        current
      }
      calendarId
      eventAttendanceMode
      offers {
        price
        priceCurrency
        url
        availability
        description
      }
      image {
        hotspot {
          x
          y
          height
          width
        }
        crop {
          top
          bottom
          left
          right
        }
        asset {
          _id
          altText
          assetId
          extension
          url
        }
      }
    }
  }
`);

export async function getSanityEvents(dateFrom: Date, dateTo: Date) {
  const { events } = await graphQlClient.request(getEventsDocument, {
    dateFrom: dateFrom.toISOString(),
    dateTo: dateTo.toISOString()
  });

  return events;
}
