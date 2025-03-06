<script lang="ts">
    export let data;
    import BreadCrumbs from '$lib/components/global/BreadCrumbs.svelte';
    const crumbs = {'parents': []};
    import SectionHeader from '$lib/components/global/SectionHeader.svelte';
</script>


<BreadCrumbs items={crumbs} currentPage="Оплата замовлення" />

<main class="pay">
    <div class="container">
        <div class="pay-row">
            <SectionHeader title={`Оплата замовлення ${data.order.id}`} />
            <h2>Ваше замовлення:</h2>
            <ol>
                {#each data.order.items as p}
                    <li>
                        {p.productObj.name}
                        {p.price} x {p.quantity} = {p.price * p.quantity} (грн.)
                    </li>
                {/each}
            </ol>
            <p class="total">До сплати: <strong>{data.order.total_cost} грн.</strong></p>
            {@html data.LiqPayForm}
        </div>
    </div>
</main>

<style>
    .pay-row {
        margin: 0 auto;
        max-width: 500px;
        margin-bottom: 60px;
    }
    ol {
        margin: 1.4em 0;
        list-style-position: inside;
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        row-gap: 0.4em;
    }

    .total {
        margin-bottom: 1.4em;
    }

    :global(.lp-submit) {
        display: flex;
        flex-flow: row nowrap;
        column-gap: 1rem;
        background: #fff;
        cursor: pointer;
        border: none !important;
        text-align: center !important;
        padding: 10px 24px !important;
        color: #fff;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.12);
        font-size: 16px !important;
        line-height: 1.75 !important;
        font-weight: 600 !important;
        font-family: 'Open Sans', sans-serif;
        cursor: pointer !important;
        border-radius: 8px !important;
        background: #77CC5D !important;
        text-transform: uppercase;     
    }

    :global(.lp-submit:hover) {
        opacity: 0.8;
    }
</style>
