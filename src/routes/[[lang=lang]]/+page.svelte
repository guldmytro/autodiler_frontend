<script>
    import MainSearch from "$lib/components/forms/MainSearch.svelte";
    import Advantages from "$lib/components/sections/Advantages.svelte";
    import QuestionForm from '$lib/components/forms/QuestionForm.svelte';
    import details from '$lib/assets/img/details.png';
    import Stats from "$lib/components/sections/Stats.svelte";
    import Contacts from "$lib/components/sections/Contacts.svelte";
    import LL from "$i18n/i18n-svelte";
    import Posts from "$lib/components/sections/Posts.svelte";
    import { getMetaValue } from "$lib/utils";
    import SeoContent from "$lib/components/global/SeoContent.svelte";
    import { page } from "$app/stores";
    import bgMobile from '$lib/assets/img/bg-search_mobile.jpg';

    export let data;

    $: extraTitle = getMetaValue(data?.meta, 'title_tag');
    $: extraDescription = getMetaValue(data?.meta, 'meta_description') || false;
    $: extraContent = getMetaValue(data?.meta, 'content') || false;
</script>

<svelte:head>
    {#if extraTitle}
    <title>{extraTitle}</title>    
    {:else}
    <title>{$LL.menu.main()} - Авто Ділер</title>
    {/if}
    <link rel="preload" as="image" href={bgMobile}>
    {#if extraDescription}
        <meta name="description" content={extraDescription}>
        <meta property="og:description" content={extraDescription}>
    {:else}
        <meta property="og:description" content={$LL.ogDescription()}>
    {/if}
    
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Авто Ділер">
    <meta property="og:title" content={$LL.menu.main()}>
    
    <meta property="og:url" content={$page.url.toString()}>
    <meta property="og:image" content="https://www.avtodiler.com.ua/_app/immutable/assets/shop-2.xx4Bla7R.jpg">
</svelte:head>

<MainSearch />
<Advantages />
<QuestionForm><img src={details} class="questions__img" alt="деталі"></QuestionForm>
<Stats />
<Posts posts={data.posts} />
<Contacts />
<SeoContent content={extraContent} />
