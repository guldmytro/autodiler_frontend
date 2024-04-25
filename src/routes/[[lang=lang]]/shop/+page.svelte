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

    export let data;
</script>

<svelte:head>
	<title>Магазин - Авто Ділер</title>
</svelte:head>


<BreadCrumbs items={{}} extraPath="product-cat/" currentPage='Магазин' />
<main class="products">
    <div class="container">
        <SectionHeader title="Магазин" />
        <div class="row-products">
            <div class="row-products__content">
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
            <Aside aside={true} />
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