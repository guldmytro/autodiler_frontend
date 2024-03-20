import type { LayoutServerLoad } from './$types';
import { loadLocaleAsync } from '$i18n/i18n-util.async'
import { PUBLIC_API_URL } from '$env/static/public';

export const load: LayoutServerLoad = async ({ locals: { locale, LL } }) => {
	const apiUrl = PUBLIC_API_URL.replace('[lang]', 'uk');
	let terms = [];
	try {
		terms = await fetch(`${apiUrl}category/dump/`).then(r => r.json());
	} catch(e) {
		console.warn(e);
	}
	let termsWithImage = terms.filter(item => item.data && item.data.image);
	let termsWithoutImage = terms.filter(item => !item.data || !item.data.image || item?.data?.image === '');
	terms = termsWithImage.concat(termsWithoutImage);

	await loadLocaleAsync(locale);
	return { locale, terms };
}
