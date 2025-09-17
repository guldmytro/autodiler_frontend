<script>
    // @ts-nocheck
    import List from '$lib/components/archive/List.svelte';
    import SectionHeader from '$lib/components/global/SectionHeader.svelte';
    import { locale } from '$i18n/i18n-svelte';
    import BreadCrumbs from '$lib/components/global/BreadCrumbs.svelte';
    import OrderSelect from '$lib/components/archive/OrderSelect.svelte';
    import Aside from '$lib/components/archive/Aside.svelte';
    import QuestionForm from '$lib/components/forms/QuestionForm.svelte';
    import FilterButton from '$lib/components/archive/FilterButton.svelte';
    import { termsMenu } from '$lib/stores/menu';
    import { fly } from 'svelte/transition';
    import LL from '$i18n/i18n-svelte';
    import { page } from '$app/stores';

    import { getMetaValue } from "$lib/utils";
    import SeoContent from "$lib/components/global/SeoContent.svelte";
    import TermsFlat from '$lib/components/archive/TermsFlat.svelte';

    $: termsList = [
        ...data.term.parents.slice(0, 2),
        {
            name_ua: data.term.name_ua,
            name_ru: data.term.name_ru
        }
    ];
    $: key = $locale === 'uk' ? 'name_ua' : 'name_ru';
    $: title = termsList.map(item => item[key]).join('. ');
    $: titleToShow = getMetaValue(data?.meta, 'title_tag') || $LL.termTitlePattern({name: title});
    export let data;

    $: extraDescription = getMetaValue(data?.meta, 'meta_description') || false;
    $: extraContent = getMetaValue(data?.meta, 'content') || false;


    const schema = {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": `${data.term.name_ua}`,
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "17"
          },
          "offers": {
            "@type": "Offer",
            "price": "500.00",
            "priceCurrency": "UAH",
            "availability": "https://schema.org/InStock"
          }
        };
</script>

<svelte:head>
    <title>{titleToShow}</title>
    {#if extraDescription}
        <meta name="description" content={extraDescription}>
        <meta property="og:description" content={extraDescription}>
    {:else}
        <meta name="description" content="{$LL.termDescriptionPattern({name: title})}">
        <meta property="og:description" content={$LL.termDescriptionPattern({name: title})}>
    {/if}
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Авто Ділер">
    <meta property="og:title" content={$LL.termDescriptionPattern({name: title})}>
    <meta property="og:url" content={$page.url.toString()}>
    <meta property="og:image" content="https://www.avtodiler.com.ua/_app/immutable/assets/shop-2.xx4Bla7R.jpg">
    {@html 
        `
        <script type="application/ld+json">
            ${JSON.stringify(schema)}
        </script>
        `
    }
</svelte:head>
<BreadCrumbs items={data.term} extraPath="product-cat/" currentPage={data.term[key]} />
<main class="products">
    <div class="container">
        <SectionHeader {title} />
        <div class="row-products">
            <Aside aside={true} />
            <div class="row-products__content">
                <TermsFlat term={data?.term} />
                <div class="row-products__header">
                    <div class="mobile-filters">
                        <FilterButton />
                        {#if $termsMenu}
                            <div class="mobile-filters-group" 
                                in:fly={{ y: 30, duration: 180 }}
                                out:fly={{ y: 30, duration: 130 }}>
                                <Aside />
                            </div>
                        {/if}
                    </div>
                    <OrderSelect />
                </div>
                <List products={data.products} pagination={data.pagination} />
            </div>
        </div>        
    </div>
</main>
<QuestionForm />
<SeoContent content={extraContent} />

<style>
    .row-products {
        display: grid;
        grid-template-columns: minmax(0, 1.1fr) minmax(0, 3fr);
        column-gap: 2.8rem;
        align-items: start;

    }

    .row-products__content {
        position: sticky;
        top: var(--offset-header);
        display: flex;
        flex-flow: column nowrap;
        row-gap: 2rem;
    }

    .row-products__header {
        display: flex;
        flex-flow: row wrap;
        row-gap: 1rem;
    }

    .products {
        padding-bottom: 1rem;
    }

    @media (max-width: 1199px) {
        :global(.products .row-products) {
            grid-template-columns: minmax(0, 1fr);
        }

        .mobile-filters {
            position: relative;
        }

        .mobile-filters-group {
            z-index: 10;
            position: absolute;
            top: calc(100% + 1rem);
            width: 35rem;
        }

        .mobile-filters-group {
            border-radius: 2rem;
            box-shadow: 0 0 0 1000rem rgba(0, 0, 0, 0.5);
        }
    }

    @media (max-width: 575px) {
        .mobile-filters-group {
            max-width: calc(100svw - 30px);
        }
    }
</style>