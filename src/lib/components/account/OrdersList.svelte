<script>
    import OrderListItem from "./OrderListItem.svelte";
    import Pagination from "../global/Pagination.svelte";
    import LL from "$i18n/i18n-svelte";

    export let orders = [];
    export let pagination;
</script>

{#if Array.isArray(orders) && orders.length}
    <table class="orders">
        <thead>
            <tr>
                <th>{$LL.account.orders.num()}</th>
                <th>{$LL.account.orders.date()}</th>
                <th>{$LL.account.orders.quantity()}</th>
                <th>{$LL.account.orders.sum()}</th>
                <th>{$LL.account.orders.status()}</th>
            </tr>
        </thead>
        <tbody>
            {#each orders as order}
                <OrderListItem {order} />
            {/each}
        </tbody>
    </table>
    <Pagination {pagination} />
{:else}
    <p>{$LL.account.orders.empty()}</p>
{/if}


<style>
    .orders {
        border-collapse: collapse;
        width: 100%;
        box-shadow: var(--box-shadow);
    }

    .orders th {
        padding: 0.8rem 1rem;
        font-size: 1.4rem;
        font-weight: 500;
        text-transform: uppercase;
    }

    @media (max-width: 767px) {
        .orders thead {
            display: none;
        }
        :global(.orders tbody tr:nth-child(even) td) {
            background-color: #f5f5f5;
        }
    } /* 767px */
</style>