<script>
    import { fly } from 'svelte/transition';
    import { onMount } from "svelte";
    import { removeNotification } from "$lib/stores/notifications";
    import LL from '$i18n/i18n-svelte';
    import { locale } from '$i18n/i18n-svelte';

    export let notification;
    let timer;

    function startTimer() {
        timer = setTimeout(deleteItem, 4000);    
    }

    function clearTimer() {
        if (timer) {
            clearTimeout(timer);
        }
    }

    function deleteItem() {
        removeNotification('product', notification.id);
    }

    onMount(() => {
        startTimer();
    });
</script>

<li class="notifications-item"
    on:mouseenter={clearTimer}
    on:mouseleave={startTimer}
    in:fly={{ x: 200, duration: 300 }}
    out:fly={{ x: 200, duration: 250 }}>
    <div class="notifications-item__header">
        <h3 class="notifications-item__label">{$LL.notifications.addedToCart()}</h3>
    </div>
    <div class="notifications-item__content">
        <div class="notifications-item__thumb">
            <img src={notification.image} alt={notification.title}>
        </div>
        <div class="notifications-item__body">
            <div class="notifications-item__row">
                <h4 class="notifications-item__title">{notification.title}</h4>
                <p class="price">{notification.price} грн.</p>
            </div>
            <div class="notifications-item__row">
                <div class="notifications-item__quantity">
                    {$LL.notifications.cnt()} {notification.cnt}
                </div>
                <a href="/{$locale}/cart" class="notifications-item__link">{$LL.notifications.showCart()}</a>
            </div>
        </div>
    </div>
</li>

<style>
    .notifications-item {
        --padding: 2rem;
        padding: var(--padding);
        border: 1px solid var(--color-border);
        box-shadow: var(--box-shadow);
        border-radius: 1rem;
        background-color: #fff;
    }

    .notifications-item__header {
        padding-bottom: calc(var(--padding) - 0.4rem);
        border-bottom: 1px solid var(--color-border);    
    }

    .notifications-item__label {
        font-size: 1.4rem;
        font-weight: 700;
        line-height: 1;
    }

    .notifications-item__content {
        display: flex;
        flex-flow: row nowrap;
        column-gap: var(--padding);
        padding-top: calc(var(--padding) - 0.4rem);
    }

    .notifications-item__thumb {
        width: 8.5rem;
        height: 7rem;
    }

    .notifications-item__thumb img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    
    .notifications-item__body {
        flex-grow: 1;
        font-size: 1.5rem;
        display: flex;
        flex-flow: column nowrap;
        row-gap: var(--padding);
    }

    .notifications-item__row {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }

    .notifications-item__title {
        font-weight: 700;
        font-size: 1.5rem;
    }

    .price {
        white-space: nowrap;
    }

    .notifications-item__quantity {
        color: var(--color-lighter);
    }

    .notifications-item__link {
        color: inherit;        
    }
</style>