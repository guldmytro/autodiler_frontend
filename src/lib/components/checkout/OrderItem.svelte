<script>
    // @ts-nocheck
    // @ts-ignore
    import { deleteItemFromCart, addItemToCart } from '$lib/stores/cart';
    import { locale } from '$i18n/i18n-svelte';
    export let item;

    $: quantity = item.cnt;
    let timer = null;

    let loading = false;
    async function deleteItem() {
        loading = true;
        await deleteItemFromCart(item.product.id);
        loading = false;
    }

    function changeQuantity() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(async () => {
            loading = true;
            await addItemToCart(item.product.id, quantity, true);
            loading = false;
        }, 600);
    }

    function decrease() {
        if (quantity > 1) {
            quantity--;
            changeQuantity();
        }
    }

    function increase() {
        quantity++;
        changeQuantity();
    }
</script>

<li class="order-item">
    <a href="/{$locale}/product/{item.product.id}" class="item-thumb">
        <div class="img-wrapper">
            <img src={item.product.image} alt={item.product.name} class="item-thumb__img" loading="lazy">
        </div>
    </a>
    <div class="order-item__content">
        <h3 class="item-title"><a href="/{$locale}/product/{item.product.id}">{item.product.name}</a></h3>
        <p class="order-item__price">{item.product.price} <span class="currency">грн.</span></p>
        <div class="content-row">
            <p class="quantity-controls">
                <button class="btn-cnt btn-cnt_minus" type="button" aria-label="Зменшити кількість" on:click={decrease}></button>
                <input class="cnt-input" type="text" bind:value={quantity} inputmode="numeric" disabled>
                <button class="btn-cnt btn-cnt_plus" type="button" aria-label="Збільшити кількість" on:click={increase}></button>
            </p>
            <p class="order-item__sum">{item.cnt * item.product.price} <span class="currency">грн.</span></p>
            <button type="button" class="order-item__delete" on:click={deleteItem}>Видалити</button>
        </div>
    </div>
</li>

<style>
    .order-item {
        padding: 1rem 0;
        display: flex;
        flex-flow: row nowrap;
        column-gap: 2rem;
    }

    .item-thumb {
        display: block;
        width: 12rem;
        flex-shrink: 0;
    }

    .img-wrapper {
        position: relative;
        height: 0;
        width: 100%;
        padding-top: 75%;
    }

    .item-thumb__img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .item-title {
        font-size: 1.6rem;
        font-weight: 400;
    }

    .item-title a {
        color: inherit;
        text-decoration: none;
    }

    .order-item__content {
        flex-grow: 1;
        display: flex;
        flex-flow: column nowrap;
        row-gap: 1rem;
    }

    .order-item__price {
        font-weight: 500;
    }

    :global(.order-item + .order-item) {
        border-top: 2px solid #f5f5f5;
    }

    .btn-cnt {
        width: 3rem;
        height: 3rem;
    }

    .content-row {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
    }

    .order-item__sum {
        font-weight: 700;
        font-size: 1.7rem;
    }

    .cnt-input {
        font-size: 1.7rem;
    }

    .order-item__delete {
        border: none;
        background-color: transparent;
        color: red;
        font-size: 1.35rem;
        opacity: 0.8;
    }

    @media (max-width: 399px) {
        .item-thumb {
            display: none;
        }
    }
</style>