<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { menu, mobileMenu, termsMenu } from '$lib/stores/menu';
	import '$lib/assets/css/all.css';
	import LL, { setLocale } from '$i18n/i18n-svelte'
	import Header from '$lib/components/global/Header.svelte'
	import Footer from '$lib/components/global/Footer.svelte'
	import HeadHrefLangs from '$lib/HeadHrefLangs.svelte'
    import Notifications from '$lib/components/global/Notifications.svelte';
	import { ProgressBar } from "@prgm/sveltekit-progress-bar";
	

	beforeNavigate(() => {
		$menu = false;
		$mobileMenu = false;
		$termsMenu = false;
	});

	export let data;
	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale)
</script>

<svelte:head>
	<HeadHrefLangs />
</svelte:head>
<ProgressBar color="#5285cc" />
<div class="content">
	<Header />
	<Notifications />
	<slot />
</div>
<Footer />

