<script>
    import LL from '$i18n/i18n-svelte';
    import QuestionForm from '$lib/components/forms/QuestionForm.svelte';
    import BreadCrumbs from '$lib/components/global/BreadCrumbs.svelte';
    import About from '$lib/components/sections/About.svelte';
    import details from '$lib/assets/img/details.png';
    import { getMetaValue } from "$lib/utils";
    import { page } from '$app/stores';
    
    export let data;

    $: extraTitle = getMetaValue(data?.meta, 'title_tag');
    $: extraDescription = getMetaValue(data?.meta, 'meta_description') || false;
    $: extraContent = getMetaValue(data?.meta, 'content') || false;
    import SeoContent from "$lib/components/global/SeoContent.svelte";
</script>

<svelte:head>
    {#if extraTitle}
        <title>{extraTitle}</title>    
    {:else}
        <title>{$LL.about.title()} - Авто Ділер</title>
    {/if}
    {#if extraDescription}
        <meta name="description" content={extraDescription}>
    {/if}

    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Авто Ділер">
    <meta property="og:title" content={$LL.about.title()}>
    <meta property="og:description" content={$LL.ogDescription()}>
    <meta property="og:url" content={$page.url.toString()}>
    <meta property="og:image" content="https://www.avtodiler.com.ua/_app/immutable/assets/shop-2.xx4Bla7R.jpg">
</svelte:head>

<BreadCrumbs items={{}} currentPage={$LL.about.title()} />
<About />
<QuestionForm><img src={details} class="questions__img" alt="деталі"></QuestionForm>    
<SeoContent content={extraContent} />
