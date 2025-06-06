<script>
    import Gallery from '$lib/components/single/Gallery.svelte';
    import Info from '$lib/components/single/Info.svelte';
    import Layout from '$lib/components/single/Layout.svelte';
    import QuestionForm from '$lib/components/forms/QuestionForm.svelte';
    import LL from '$i18n/i18n-svelte';
    import { getMetaValue } from "$lib/utils";
    import SeoContent from "$lib/components/global/SeoContent.svelte";
    import { page } from '$app/stores';
    import Params from '$lib/components/single/Params.svelte';
    import BuyPlaces from '$lib/components/single/BuyPlaces.svelte';
    import GallerySlider from '$lib/components/single/GallerySlider.svelte';

    export let data;
    
    $: titleToShow = getMetaValue(data?.meta, 'title_tag') || $LL.titlePattern({name: data.item.name});
    $: extraDescription = getMetaValue(data?.meta, 'meta_description') || false;
    $: extraContent = getMetaValue(data?.meta, 'content') || false;

    $: images = [data.item.image, data.item.image2, data.item.image3, data.item.image4, data.item.image5].filter(i => !!i);
</script>

<svelte:head>
    <title>{titleToShow}</title>
    {#if extraDescription}
        <meta name="description" content={extraDescription}>
    {:else}
        <meta name="description" content="{$LL.descriptionPattern({name: data.item.name, price: data.item.price})}">
    {/if}

    <meta property="og:type" content="article">
    <meta property="og:site_name" content="Авто Ділер">
    <meta property="og:title" content={$LL.descriptionPattern({name: data.item.name, price: data.item.price})}>
    <meta property="og:url" content={$page.url.toString()}>
    <meta property="og:image" content={data.item.image}>
    {#if data?.item?.description}
        <meta property="og:description" content={data?.item?.description}>
    {:else}
        <meta property="og:description" content={data?.item?.name}>
    {/if}
</svelte:head>

<Layout {data}>
    <div class="row">
        {#if images.length <= 1}
            <Gallery src={data.item.image} alt={data.item.alt} />
        {:else}
            <GallerySlider {images} />
        {/if}
        <Info product={data.item} />
    </div>
    <div class="row row_fluid">
        <div class="places">
            <BuyPlaces />
        </div>
        <Params params={data?.item?.params} />
    </div>
</Layout>

<QuestionForm />
<SeoContent content={extraContent} />

<style>
    .row {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 3rem;
        align-items: start;
    }

    .row_fluid {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    .places {
        display: none;
    }

    @media (max-width: 991px) {
        .row {
            grid-template-columns: minmax(0, 1fr);
        }
        .places {
            display: block;
        }
    }
</style>
