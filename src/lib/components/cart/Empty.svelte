<script>
    import cartEmpty from '$lib/assets/img/empty-cart.png';
    import LL from '$i18n/i18n-svelte';
</script>

<div class="empty-cart">
    <img src={cartEmpty} alt="корзина" width="512" height="512" class="empty-cart__img">
    <p class="empty-cart__text">{$LL.cartTitleEmpty()}</p>
</div>

<style>
    .empty-cart {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }

    .empty-cart__img {
        margin-top: -2rem;
        width: 30rem;
    }

    .empty-cart__text {
        font-size: 1.8rem;
    }
</style>