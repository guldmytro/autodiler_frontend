<script>
    import LL from '$i18n/i18n-svelte';
    import BreadCrumbs from '$lib/components/global/BreadCrumbs.svelte';
    import Delivery from '$lib/components/sections/Delivery.svelte';
    import { getMetaValue } from "$lib/utils";
    import SeoContent from "$lib/components/global/SeoContent.svelte";
    export let data;
    const extraTitle = getMetaValue(data?.meta, 'title_tag');
    const extraDescription = getMetaValue(data?.meta, 'meta_description');
    $: extraContent = getMetaValue(data?.meta, 'content') || false;
    import { page } from '$app/stores';
</script>

<svelte:head>
    {#if extraTitle}
        <title>{extraTitle}</title>    
    {:else}
        <title>{$LL.delivery.title()} - Авто Ділер</title>
    {/if}
    {#if extraDescription}
        <meta name="description" content={extraDescription}>
    {/if}
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Авто Ділер">
    <meta property="og:title" content={$LL.delivery.title()}>
    <meta property="og:description" content={$LL.ogDescription()}>
    <meta property="og:url" content={$page.url.toString()}>
    <meta property="og:image" content="https://www.avtodiler.com.ua/_app/immutable/assets/shop-2.xx4Bla7R.jpg">
</svelte:head>

<BreadCrumbs items={{}} currentPage={$LL.delivery.title()} />
<Delivery />
<SeoContent content={extraContent} />