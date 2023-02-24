import { mkdir, readFile, writeFile } from 'fs/promises';
import { getEventsFromGoogleCalendar } from '../libs/get-events.js';

async function generateSeoImages() {
	const events = await getEventsFromGoogleCalendar();

	await mkdir('build/assets/images/social', { recursive: true }).catch();

	const template = readFile('src/assets/social-template.svg');

	await Promise.all(
		events.map(async (event) => {
			const svg = (await template)
				.toString()
				.replace('{{TITLE}}', event.title)
				.replace('{{DATE}}', event.startDate)
				.replace('{{LOCATION}}', event.location);

			await writeFile(`build/assets/images/social/${event.slug}.svg`, svg);
		})
	);
}

await generateSeoImages();
