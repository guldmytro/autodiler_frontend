import type { LayoutLoad } from './$types'
import type { Locales } from '$i18n/i18n-types'
import { loadLocaleAsync } from '$i18n/i18n-util.async'
import { i18nObject } from '$i18n/i18n-util.js'
import { PUBLIC_API_URL } from '$env/static/public';

export const load: LayoutLoad<{ locale: Locales }> = async ({ data: { locale }, fetch }) => {
	const apiUrl = PUBLIC_API_URL.replace('[lang]', 'uk');
	let terms = [];
	try {
		terms = await fetch(`${apiUrl}category/dump/`).then(r => r.json());
		let termsWithImage = terms.filter(item => item.data && item.data.image);
		let termsWithoutImage = terms.filter(item => !item.data || !item.data.image || item?.data?.image === '');
		terms = termsWithImage.concat(termsWithoutImage);
	} catch(e) {
		console.warn(e);
	}
	
	// load dictionary into memory
	await loadLocaleAsync(locale)
	// if you need to output a localized string in a `load` function,
	// you always need to create a new `i18nObject` instance in each `load` function
	// to not run into shared server state issues
	const LL = i18nObject(locale)

	// pass locale to the "rendering context"
	return { locale, terms }
}
