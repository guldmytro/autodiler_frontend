<script>
    // @ts-nocheck
    import { flip } from 'svelte/animate';
    import { notifications } from "$lib/stores/notifications";
    import NotificationsProduct from "./NotificationsProduct.svelte";
    import NotificationsEmail from './NotificationsEmail.svelte';
    import NotificationLogin from './NotificationLogin.svelte';
</script>

<ul class="notifications">
    {#each $notifications.product as notification (notification.id) }
        <div class="notifications-item-wrapper" 
            animate:flip={{duration: 300}}>
            <NotificationsProduct {notification} />
        </div>
    {/each}
    {#each $notifications.email as notification (notification.id) }
        <div class="notifications-item-wrapper" 
            animate:flip={{duration: 300}}>
            <NotificationsEmail {notification} />
        </div>
    {/each}
    {#each $notifications.login as notification (notification.id) }
        <div class="notifications-item-wrapper" 
            animate:flip={{duration: 300}}>
            <NotificationLogin {notification} />
        </div>
    {/each}
</ul>

<style>
    .notifications {
        display: flex;
        flex-flow: column nowrap;
        row-gap: 2rem;
        position: fixed;
        right: 15px;
        top: calc(var(--offset-header) + 3rem);
        list-style: none;
        width: 45rem;
        max-width: calc(100% - 30px);
        z-index: 99;
    }
</style>