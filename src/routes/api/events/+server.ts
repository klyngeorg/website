import { json } from '@sveltejs/kit';
import { getEventsFromGoogleCalendar } from '$libs/events/get-events.js';

export const prerender = true;

export async function GET() {
  const events = await getEventsFromGoogleCalendar();
  return json(events);
}
