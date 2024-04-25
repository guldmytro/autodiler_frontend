// Replaces the locale slug in a URL.
//
// If the `full` argument is set to `true`, the full URL is returned as a string.
// e.g. https://mywebsite.com/en/blog/article-1 => https://mywebsite.com/de/blog/article-1
//
// Otherwise (default) the URL relative to the base is returned.

import { base } from '$app/paths'
import { PUBLIC_API_URL } from '$env/static/public'

// e.g. https://mywebsite.com/en/blog/article-1 => /de/blog/article-1
export const replaceLocaleInUrl = (url: URL, locale: string, full = false): string => {
	const path = url.pathname;
	
	// split pathname
	let pathParts = path.split('/').filter(item => item !== '');
	if (['uk', 'ru'].includes(pathParts[0])) {
		pathParts = pathParts.slice(1);
	}

	if (locale !== 'uk') {
		pathParts.unshift('ru');
	}

	const localizedPath = pathParts.join('/');


	if (!full) {
		return `/${localizedPath}${url.search}`
	}
	return `/${localizedPath}`;
	
	const newUrl = new URL(url.toString())
	newUrl.pathname = base + localizedPath
	// console.log(newUrl.toString());
	return newUrl.toString()
}

// ----------------------------------------------------------------------------

const REGEX_START_WITH_BASE = new RegExp(`^${base}`)

export const getPathnameWithoutBase = (url: URL) => url.pathname.replace(REGEX_START_WITH_BASE, '')
