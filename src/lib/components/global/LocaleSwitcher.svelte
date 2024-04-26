<script lang="ts">
	import { browser } from '$app/environment'
	import { invalidateAll } from '$app/navigation'
	import { page } from '$app/stores'
	import { setLocale, locale } from '$i18n/i18n-svelte'
	import type { Locales } from '$i18n/i18n-types'
	import { locales } from '$i18n/i18n-util'
	import { loadLocaleAsync } from '$i18n/i18n-util.async'
	import { replaceLocaleInUrl } from '../../../utils';
	import { goto } from '$app/navigation'

	const langLabels = {
		'uk': 'ua',
		'ru': 'ru'
	};

	const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return

		// load new dictionary from server
		await loadLocaleAsync(newLocale)

		// select locale
		setLocale(newLocale)

		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl($page.url, newLocale))
			// goto(replaceLocaleInUrl($page.url, newLocale));
		}

		// run the `load` function again
		invalidateAll();
	}

	// update `lang` attribute
	$: browser && document.querySelector('html')!.setAttribute('lang', $locale)

	// update locale when navigating via browser back/forward buttons
	const handlePopStateEvent = async ({ state }: PopStateEvent) => switchLocale(state.locale, false)

	// update locale when page store changes
	// $: if (browser) {
	// 	const lang = $page.params.lang as Locales
	// 	console.log($page.params.lang);
	// 	switchLocale(lang, false)
	// 	// history.replaceState({ ...history.state, locale: lang }, '', replaceLocaleInUrl($page.url, lang))
	// }
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<ul class="locales toper__locales">
	<li class="locale">
		{#if 'ru' === $locale }
			<span class="locales__item locales__item_text">
				<span class="locale">RU</span>
			</span>
		{:else}
			<a class="locales__item locales__item_link" data-sveltekit-reload href={replaceLocaleInUrl($page.url, 'ru')}>
				<span class="locale">RU</span>
			</a>
		{/if}
	</li>
	<li><div class="sep"></div></li>
	<li class="locale">
		{#if 'uk' === $locale }
			<span class="locales__item locales__item_text">
				<span class="flag"></span>
				<span class="locale">UK</span>
			</span>
		{:else}
			<a class="locales__item locales__item_link" data-sveltekit-reload href={replaceLocaleInUrl($page.url, 'uk')}>
				<span class="flag"></span>
				<span class="locale">UK</span>
			</a>
		{/if}
	</li>
</ul>

<style>
	.locales {
		display: flex;
		flex-flow: row nowrap;
		list-style: none;
		color: var(--color-text-invert);
		text-transform: uppercase;
		font-size: 1.4rem;
	}

	.toper__locales {
		margin-left: auto;
	}
	
	.locales a {
		color: var(--color-text-invert);
		text-decoration: none;
	}
	
	.flag {
		position: relative;
		display: block;
		width: 1.6rem;
		height: 1.6rem;
		background-color: #FFD800;
		border-radius: 50%;
		overflow: hidden;
	}

	.flag::before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		height: 0.8rem;
		width: 100%;
		background-color: #0056B9;
	}
		
	.locales__item {
		display: flex;
		align-items: center;
		column-gap: 0.4em;
	}

	.sep {
		width: 1px;
		height: 100%;
		background-color: var(--color-text-invert);
		margin: 0 0.6em;
	}

	.locales__item_link:hover {
		color: var(--color-secondary);
	}

	.locales__item_text .locale {
		opacity: 0.7;
	}
</style>
