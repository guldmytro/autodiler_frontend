<script>
    // @ts-nocheck
    import List from '$lib/components/archive/List.svelte';
    import SectionHeader from '$lib/components/global/SectionHeader.svelte';
    import { locale } from '$i18n/i18n-svelte';
    import BreadCrumbs from '$lib/components/global/BreadCrumbs.svelte';
    import OrderSelect from '$lib/components/archive/OrderSelect.svelte';
    import Aside from '$lib/components/archive/Aside.svelte';
    import QuestionForm from '$lib/components/forms/QuestionForm.svelte';
    import LL from '$i18n/i18n-svelte';


    export let data;
</script>

<svelte:head>
	<title>{$LL.wishlist.title()} - Авто Ділер</title>
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