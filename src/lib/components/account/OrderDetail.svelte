<script>
    import LL from "$i18n/i18n-svelte";
    import OrderDetailItem from "./OrderDetailItem.svelte";
    export let order;
    const count = order.items.reduce((a, item) => a + item.quantity, 0);
    const total = order.items.reduce((a, item) => a + item.quantity * item.price, 0);
</script>


<div class="account-box">
    <h2 class="account-box__title">{$LL.account.orderDetail.title()}</h2>
    <table class="order-detail">
        <tbody>
            <tr>
                <th>{$LL.account.orderDetail.dateTime()}</th>
                <td>{new Date(order.created).toLocaleString('uk', {  year: 'numeric', 
                                                                     month: 'numeric', 
                                                                     day: 'numeric', 
                                                                     hour12: false, 
                                                                     hour: 'numeric', 
                                                                     minute: 'numeric' 
                                                                     })}</td>
            </tr>
            <tr>
                <th>{$LL.account.orderDetail.status()}</th>
                <td>{$LL.orders[order.status]()}</td>
            </tr>
            <tr>
                <th>{$LL.account.orderDetail.num()}</th>
                <td>{order.id}</td>
            </tr>
            <tr>
                <th>{$LL.account.orderDetail.quantity()}</th>
                <td>{count}</td>
            </tr>
            <tr>
                <th>{$LL.account.orderDetail.sum()}</th>
                <td>{total} грн.</td>
            </tr>
            <tr>
                <th>{$LL.account.orderDetail.delivery()}</th>
                <td>{$LL.orderDelivery[order.delivery]()}</td>
            </tr>
            {#if order.delivery === 'nd'}
                <tr>
                    <th>{$LL.account.orderDetail.address()}</th>
                    <td>{order.city}, {order.nova_office}</td>
                </tr>
            {/if}
        </tbody>
    </table>
</div>

<div class="account-box account-box_last">
    <table class="orders-list">
        <tbody>
            {#each order.items as item}
                <OrderDetailItem {item} />
            {/each}
        </tbody>
    </table>    
    <p class="total">
        <strong>{$LL.account.orderDetail.sum()}:</strong>
        <span>{total} грн.</span>
    </p>
</div>

<style>
    .order-detail {
        text-align: left;
    }

    .order-detail th {
        width: 1%;
        white-space: nowrap;
        font-size: 1.4rem;
        opacity: 0.6;
        font-weight: normal;
    }

    .order-detail td {
        font-size: 1.5rem;
        padding: 0.2em 0 0.2em 0.5em;
    }

    .total {
        margin-right: -3rem;
        margin-left: -3rem;
        padding: 2rem 5rem;
        background-color: #1c1c1c;
        color: var(--color-text-invert);
        font-size: 1.7rem;
    }

    .total > * {
        white-space: nowrap;
    }

    @media (max-width: 767px) {
        :global(.orders-list tr:nth-child(n + 2) td:first-child) {
            border-top: 1px solid #f5f5f5;
        }
    }
</style>
