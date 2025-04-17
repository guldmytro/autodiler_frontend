import { base } from '$app/paths'
import type { Locales } from '$i18n/i18n-types.js'
import { detectLocale, i18n, isLocale } from '$i18n/i18n-util'
import { loadAllLocales } from '$i18n/i18n-util.sync'
import { redirect, type Handle, type RequestEvent } from '@sveltejs/kit'
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors'
import { getPathnameWithoutBase } from './utils.js'



loadAllLocales()
const L = i18n()

export const handle: Handle = async ({ event, resolve }) => {
	const host = event.url.host;

	// Redirect if the host starts with "www."
	if (host.startsWith('www.')) {
		const nonWwwHost = host.slice(4); // remove "www."
		throw redirect(301,`${event.url.protocol}//${nonWwwHost}${event.url.pathname}${event.url.search}`);
	}

	let [, lang] = getPathnameWithoutBase(event.url).split('/');
	if (lang === 'uk') {
		const path = event.url.pathname;
		// split pathname
		let pathParts = path.split('/').filter(item => item !== '');
		if (['uk',].includes(pathParts[0])) {
			pathParts = pathParts.slice(1);
		}
		const clearedPath = pathParts.join('/');
		let newUrl = `${base}/${clearedPath}`
		if (String(event.url.searchParams).length) {
			newUrl += `?${event.url.searchParams}`
		}
		throw redirect(302, newUrl);
	}
	
	if (!['ru', 'uk'].includes(lang)) {
		lang = 'uk';
	} 
	
	// redirect to base locale if no locale slug was found	
	// if (!lang) {
	// 	const locale = getPreferredLocale(event)
	// 	throw redirect(307, `${base}/${locale}`)
	// }

	// if slug is not a locale, use base locale (e.g. api endpoints)
	const locale = isLocale(lang) ? (lang as Locales) : getPreferredLocale(event)

	const LL = L[locale]

	// bind locale and translation functions to current request
	event.locals.locale = locale
	event.locals.LL = LL





	// replace html lang attribute with correct language
	const response = await resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', locale) })
	response.headers.append('Access-Control-Allow-Origin', `*`);
	return response;
}

const getPreferredLocale = ({ request }: RequestEvent) => {
	// detect the preferred language the user has configured in his browser
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request)

	return detectLocale(acceptLanguageDetector)
}

