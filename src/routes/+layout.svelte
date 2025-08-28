<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { menu, mobileMenu, termsMenu, searchMenu } from '$lib/stores/menu';
	import '$lib/assets/css/all.css';
	import LL, { setLocale } from '$i18n/i18n-svelte'
	import Header from '$lib/components/global/Header.svelte'
	import Footer from '$lib/components/global/Footer.svelte'
	import HeadHrefLangs from '$lib/HeadHrefLangs.svelte'
    import Notifications from '$lib/components/global/Notifications.svelte';
	import CookieBanner from '$lib/components/global/CookieBanner.svelte';
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

		(function(c,l,a,r,i,t,y){ c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); })(window, document, "clarity", "script", "svpo1i489i");

		if (window && window?.clarity) {
			// За замовчуванням — denied
			window.clarity('consentv2', {
				ad_storage: "denied",
				analytics_storage: "denied"
			});

			// Якщо збережено вибір у localStorage — застосувати його
			const saved = localStorage.getItem("cookieConsent");
			if (saved === "accepted") {
				window.clarity("consentv2", {
					ad_storage: "granted",
					analytics_storage: "granted"
				});
			} else if (saved === "rejected") {
				window.clarity("consentv2", {
					ad_storage: "denied",
					analytics_storage: "denied"
				});
			}
		}

	});
	beforeNavigate(() => {
		$menu = false;
		$mobileMenu = false;
		$termsMenu = false;
		// $searchMenu = false;
	});
</script>

<svelte:head>
	<HeadHrefLangs />
	<link rel="canonical" href={$page.url.toString()}>
</svelte:head>

<ProgressBar color="#5285cc" />
<div class="content">
	<Header />
	<Notifications />
	<slot />
	<CookieBanner />
</div>
<Footer />

