<script>
    // @ts-nocheck
    // @ts-ignore
    import OrderItem from "./OrderItem.svelte";
    import LL from "$i18n/i18n-svelte";
    import { pluralize } from "$lib/utils";
    export let cart;
    export let loading;
    // import SchedulerWarning from "./SchedulerWarning.svelte";
</script>

<div class="orders">
    <div class="orders__header">
        <h2 class="orders__title">
            {$LL.checkout.orderInfo()}
        </h2>
        <p class="orders__count">{$LL.checkout.orderInfoCnt({ cnt: cart.cnt, product: pluralize(cart.cnt, $LL.checkout.product()) })}</p>
    </div>
    <ul class="orders-group">
        {#each cart.items as item, i}
            <OrderItem {item} />
        {/each}
    </ul>
    <div class="orders-total">
        <div class="orders-result">
            <h2 class="orders-result__title">{$LL.checkout.total()}</h2>
            <table class="table-result">
                <tbody>
                    <tr>
                        <th>{$LL.checkout.deliveryCost()}</th>
                        <td>{$LL.deliveryCost()}</td>
                    </tr>
                    <tr>
                        <th>{$LL.checkout.totalCost()}</th>
                        <td>{cart.total} грн.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button type="submit" class="orders-total__button button" disabled={loading}>{$LL.checkout.createOrder()}</button>
        <p class="orders-total__agree">{$LL.checkout.notification()}</p>
    </div>
</div>

<style>
    .orders__title {
        font-size: 1.6rem;
        font-weight: 700;
    }

    .orders__count {
        margin-top: 0.2em;
        color: var(--color-lighter);
    }

    .orders__header {
        margin-bottom: 1.6rem;
    }

    .button {
        width: 100%;
        display: block;
        font-size: 1.9rem;
    }

    .orders-result {
        padding: 2.5rem 2rem;
        background-color: #1c1c1c;
        color: var(--color-text-invert);
    }

    .orders-result__title {
        line-height: 1;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0.5em;
    }

    .table-result {
        width: 100%;
        text-align: left;
    }

    .table-result td,
    .table-result th {
        padding-right: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        font-weight: 400;
    }
    
    .table-result td {
        font-weight: 700;
    }
    
    .table-result tr:last-child td,
    .table-result tr:last-child th {
        padding-bottom: 0;
    }

    .orders-total__button {
        margin-top: 2rem;
    }

    .orders-total__agree {
        margin-top: 1.5rem;
        padding: 0 2rem;
        text-align: center;
        font-size: 1.4rem;
        opacity: 0.8;
    }

    :disabled {
        position: relative;
        opacity: 1;
        color: transparent;
    }

    :disabled::after {
        position: absolute;
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        border: 2px solid rgba(255, 255, 255, 0.4);
        border-top-color: rgba(255, 255, 255, 0.8);
        top: 50%;
        left: 50%;
        border-radius: 50%;
        translate: -50% -50%;
        animation: spin .5s linear infinite;
    }

    @keyframes spin {
        from {
            rotate: 0deg;
        }
        to {
            rotate: 360deg;
        }
    }

    @media (max-width: 575px) {
        .orders-result {
            margin-right: -15px;
            margin-left: -15px;
            padding-right: 15px;
            padding-left: 15px;
        }
    }
</style>