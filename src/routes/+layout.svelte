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
	<link rel="canonical" href={$page.url.toString()}>
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-KD2MDCC6');</script>
	<!-- End Google Tag Manager -->
</svelte:head>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KD2MDCC6"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<ProgressBar color="#5285cc" />
<div class="content">
	<Header />
	<Notifications />
	<slot />
</div>
<Footer />

