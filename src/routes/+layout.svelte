<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { menu, mobileMenu, termsMenu, searchMenu } from '$lib/stores/menu';
	import '$lib/assets/css/all.css';
	import LL, { setLocale } from '$i18n/i18n-svelte'
	import Header from '$lib/components/global/Header.svelte'
	import Footer from '$lib/components/global/Footer.svelte'
	import HeadHrefLangs from '$lib/HeadHrefLangs.svelte'
    import Notifications from '$lib/components/global/Notifications.svelte';
	import { ProgressBar } from "@prgm/sveltekit-progress-bar";
	import { cart, getCart } from '$lib/stores/cart';
	import { wishlist, getWishlist } from '$lib/stores/wishlist';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let data;
	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale)


	onMount(async() => {
		$cart = await getCart();
		$wishlist = await getWishlist();
	});
	beforeNavigate(() => {
		$menu = false;
		$mobileMenu = false;
		$termsMenu = false;
		$searchMenu = false;
	});
</script>

<svelte:head>
	<HeadHrefLangs />
	<meta name="robots" content="noindex">
	<link rel="canonical" href={$page.url.toString()}>
</svelte:head>

<ProgressBar color="#5285cc" />
<div class="content">
	<Header />
	<Notifications />
	<slot />
</div>
<Footer />

