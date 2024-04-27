<script>
    // @ts-nocheck
    import List from '$lib/components/archive/List.svelte';
    import SectionHeader from '$lib/components/global/SectionHeader.svelte';
    import BreadCrumbs from '$lib/components/global/BreadCrumbs.svelte';
    import QuestionForm from '$lib/components/forms/QuestionForm.svelte';
    import LL from '$i18n/i18n-svelte';


    import { getMetaValue } from "$lib/utils";
    import SeoContent from "$lib/components/global/SeoContent.svelte";
    export let data;
    const extraTitle = getMetaValue(data?.meta, 'title_tag');
    const extraDescription = getMetaValue(data?.meta, 'meta_description');
    const extraContent = getMetaValue(data?.meta, 'content');
</script>

<svelte:head>
    {#if extraTitle}
        <title>{extraTitle}</title>    
    {:else}
        <title>{$LL.wishlist.title()} - Авто Ділер</title>
    {/if}
    {#if extraDescription}
        <meta name="description" content={extraDescription}>
    {/if}
</svelte:head>

<BreadCrumbs items={{}} currentPage={$LL.wishlist.fullTitle()} />

<main class="products">
    <div class="container">
        <SectionHeader title={$LL.wishlist.fullTitle()} />
        <div class="row-products row-products_fluid">
            {#if Array.isArray(data?.products) && data?.products.length}
                <div class="row-products__content">
                    <List products={data.products} pagination={data.pagination} />
                </div>
            {:else}
                <p class="empty">{$LL.wishlist.empty()}</p>
            {/if}
        </div>        
    </div>
</main>
<QuestionForm />
<SeoContent content={extraContent} />

<style>
    .row-products {
        display: grid;
        grid-template-columns: minmax(0, 3fr) minmax(0, 1.1fr);
        column-gap: 2.8rem;
        align-items: start;
    }

    .row-products_fluid {
        grid-template-columns: minmax(0, 1fr);
    }

    .row-products__content {
        position: sticky;
        top: var(--offset-header);
        display: flex;
        flex-flow: column nowrap;
        row-gap: 2rem;
    }

    .products {
        padding-bottom: 1rem;
    }
</style>