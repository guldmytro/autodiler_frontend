<script>
    import LL from '$i18n/i18n-svelte';
    import { getMetaValue } from "$lib/utils";
    import SeoContent from "$lib/components/global/SeoContent.svelte";
    import { page } from '$app/stores';
    import Main from '$lib/components/dropshipping/Main.svelte';
    import Stats from '$lib/components/dropshipping/Stats.svelte';
    import List from '$lib/components/dropshipping/List.svelte';
    import Feadback from '$lib/components/dropshipping/Feadback.svelte';
    import TakeOffer from '$lib/components/dropshipping/TakeOffer.svelte';
    export let data;

    $: extraTitle = getMetaValue(data?.meta, 'title_tag');
    $: extraDescription = getMetaValue(data?.meta, 'meta_description') || false;
    $: extraContent = getMetaValue(data?.meta, 'content') || false;
</script>

<svelte:head>
    {#if extraTitle}
        <title>{extraTitle}</title>    
    {:else}
        <title>{$LL.menu.dropshipping()} - Авто Ділер</title>
    {/if}
    {#if extraDescription}
        <meta name="description" content={extraDescription}>
    {/if}

    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Авто Ділер">
    <meta property="og:title" content={$LL.faq.title()}>
    <meta property="og:description" content={$LL.ogDescription()}>
    <meta property="og:url" content={$page.url.toString()}>
    <meta property="og:image" content="https://www.avtodiler.com.ua/_app/immutable/assets/shop-2.xx4Bla7R.jpg">
</svelte:head>

<Main />
<Stats />
<List />
<Feadback />
<TakeOffer />
<SeoContent content={extraContent} />
