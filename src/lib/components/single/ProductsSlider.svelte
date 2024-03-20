<script>
    import Item from "../archive/Item.svelte";
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import '@splidejs/svelte-splide/css';
    import '$lib/assets/css/splide.css';
    export let products;
    const options = {
        perPage: 4,
        gap: '2rem',
        breakpoints: {
            1199: {
                perPage: 3
            },
            991: {
                perPage: 2
            },
            500: {
                perPage: 1,
            }
        }
    };
</script>

{#if Array.isArray(products) && products.length}
    <Splide {options}>
        {#each products as product (product.id)}
            <SplideSlide>
                <div class="archive-product-item">
                    <Item {product} />
                </div>
            </SplideSlide>
        {/each}
    </Splide>
{/if}
