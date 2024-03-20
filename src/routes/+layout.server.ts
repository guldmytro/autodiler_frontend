import type { LayoutServerLoad } from './$types';
import { loadLocaleAsync } from '$i18n/i18n-util.async'

export const load: LayoutServerLoad = async ({ locals: { locale, LL } }) => {
	await loadLocaleAsync(locale);
	return { locale }
}
