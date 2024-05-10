<script>
    // @ts-nocheck
    // @ts-ignore
    import { flip } from "svelte/animate";
    import Item from "./Item.svelte";
    import Pagination from "../global/Pagination.svelte";
    import { termsMenu } from "$lib/stores/menu";
    export let products;
    export let pagination;
    import LL from "$i18n/i18n-svelte";
</script>

{#if Array.isArray(products) && products.length}
    <div class="products-box" class:disabled={$termsMenu}>
        <ul class="products-group">
            {#each products as product (product.id)}
                <li class="archive-product-item" animate:flip={{duration: 1000}}>
                    <Item {product} />
                </li>
            {/each}
        </ul>
        <Pagination {pagination} />
    </div>
{:else}
    <p>{$LL.emptyProducts()}</p>
{/if}

<style>
    .products-box {
        display: flex;
        flex-flow: column nowrap;
        row-gap: 3.5rem;
    }

    .products-box.disabled {
        pointer-events: none;
    }

    .products-group {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.5rem;
    }

    :global(.row-products_fluid .products-group) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    @media (max-width: 1199px) {
        :global(.row-products_fluid .products-group) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }

    @media (max-width: 991px) {
        .products-group {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (max-width: 500px) {
        .products-group {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }
</style>