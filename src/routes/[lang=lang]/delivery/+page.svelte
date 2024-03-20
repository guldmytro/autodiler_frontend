<script>
    import LL from '$i18n/i18n-svelte';
    import BreadCrumbs from '$lib/components/global/BreadCrumbs.svelte';
    import Delivery from '$lib/components/sections/Delivery.svelte';
</script>

<svelte:head>
	<title>{$LL.delivery.title()} - Авто Ділер</title>
</svelte:head>

<BreadCrumbs items={{}} currentPage={$LL.delivery.title()} />
 
<Delivery />