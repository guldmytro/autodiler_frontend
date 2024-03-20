<script>
    import { locale } from "$i18n/i18n-svelte";
    export let order;
    const count = order.items.reduce((a, item) => a + item.quantity, 0);
    const total = order.items.reduce((a, item) => a + item.quantity * item.price, 0);
    import LL from "$i18n/i18n-svelte";
</script>

<tr>
    <td data-label={$LL.account.orders.num()}><a href="/{$locale}/account/dashboard/{order.id}">{order.id}</a></td>
    <td data-label={$LL.account.orders.date()}>{new Date(order.created).toLocaleDateString('uk', {})}</td>
    <td data-label={$LL.account.orders.quantity()}>{count}</td>
    <td data-label={$LL.account.orders.sum()}>{total} грн.</td>
    <td data-label={$LL.account.orders.status()}>{$LL.orders[order.status]()}</td>
</tr>

<style>
    tr {
        font-size: 1.5rem;
        text-align: center;
    }

    td {
        padding: 1.5rem;
        border-top: 1px solid #f5f5f5;
    }
    
    a {
        color: var(--color-primary);
    }

    @media (max-width: 767px) {
        td {
            display: flex;
            justify-content: space-between;
            column-gap: 1.4rem;
            text-align: right;
            font-weight: 500;
        }

        td::before {
            font-weight: normal;
            content: attr(data-label);
            opacity: 0.7;
        }
    }
</style>