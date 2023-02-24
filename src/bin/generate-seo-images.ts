import { format, isValid, subYears } from 'date-fns';
import { nb } from 'date-fns/locale';
import { mkdir, readFile, writeFile } from 'fs/promises';
import puppeteer from 'puppeteer-core';
import { getEventsFromGoogleCalendar } from '../libs/get-events.js';

function formatDateTime(dateString: string): string | undefined {
	if (!isValid(new Date(dateString))) {
		console.log({ dateString }, 'not valid datestring');
		return undefined;
	}

	const date = new Date(dateString);
	return [format(date, 'd. MMM yyyy', { locale: nb }), 'kl.', format(date, 'k:M')].join(' ');
}

async function generateSeoImages() {
	const events = await getEventsFromGoogleCalendar({
		timeMin: subYears(new Date(), 3)
	});

	await mkdir('build/assets/images/social', { recursive: true }).catch();

	const template = readFile('src/assets/social-template.svg');

	const browser = await puppeteer.launch({
		channel: 'chrome'
	});

	await Promise.all(
		events.map(async (event) => {
			const svg = (await template)
				.toString()
				.replace('{{TITLE}}', event.title ?? '')
				.replace('{{DATE}}', formatDateTime(event.startDate) ?? '')
				.replace('{{LOCATION}}', event.location ?? '');

			await writeFile(`build/assets/images/social/${event.slug}.svg`, svg);

			const page = await browser.newPage();
			await page.setContent(svg);
			await page.setViewport({ width: 1200, height: 627 });
			const pngBuffer = await page.screenshot({ type: 'png' });
			await writeFile(`build/assets/images/social/${event.slug}.png`, pngBuffer);
			await page.close();
		})
	);

	await browser.close();
}

await generateSeoImages();
