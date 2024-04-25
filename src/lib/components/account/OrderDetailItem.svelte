<script>
    import { locale } from "$i18n/i18n-svelte";
    import LL from "$i18n/i18n-svelte";
    export let item;
    $: localePrefix = $locale === 'uk' ? '' : $locale + '/';
</script>

<tr class="order-item">
    <td>
        <a href="/{localePrefix}product/{item.product.slug}" class="order-item__thumb">
            <img src={item.product.image} class="order-item__img" loading="lazy" alt={item.product.name}>
        </a>
    </td>
    <td data-label="Товар">
        <a href="/{localePrefix}product/{item.product.slug}" class="order-item_link">
            {item.product.name}
        </a>
    </td>
    <td class="cnt" data-label={$LL.account.orderDetail.quantity()}>
        {item.quantity} шт
    </td>
    <td class="total" data-label={$LL.total()}>
        {item.quantity * item.price} грн.
    </td>
</tr>

<style>
    :global(.order-item + .order-item td) {
        border-top: 1px solid #f5f5f5;

    }

    .order-item td {
        text-align: left;
        font-size: 1.5rem;
        padding: 0.2rem 1rem;
    }

    .order-item td:first-child {
        width: 1%;
        padding-left: 0;
    }

    .order-item td:last-child {
        padding-right: 0;
    }

    .order-item__thumb {
        display: block;
        width: 12rem;
        aspect-ratio: 150 / 113;
    }
    
    .order-item__img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .order-item_link {
        color: #5285cc;
        font-weight: normal;
        text-decoration: none;
    }

    .order-item_link:hover {
        text-decoration: underline;
    }

    .cnt {
        white-space: nowrap;
    }

    .total {
        white-space: nowrap;
    }

    @media (max-width: 767px) {
        .order-item td:first-child,
        .order-item td {
            width: 100%;
            padding: 0.8rem 0;
            display: flex;
            justify-content: space-between;
            font-weight: 500;
            column-gap: 1.4rem;
            text-align: right;
        }

        td::before {
            font-weight: normal;
            content: attr(data-label);
            opacity: 0.7;
        }

        .order-item__thumb {
            width: 12rem;
            height: 10rem;
        }
    }
</style>

