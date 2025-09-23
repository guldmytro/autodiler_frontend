<script>
    import { fly } from 'svelte/transition';
    import { onMount } from "svelte";
    import { removeNotification } from "$lib/stores/notifications";
    import LL from '$i18n/i18n-svelte';

    export let notification;
    let timer;

    function startTimer() {
        timer = setTimeout(deleteItem, 3000);    
    }

    function clearTimer() {
        if (timer) {
            clearTimeout(timer);
        }
    }

    function deleteItem() {
        removeNotification('email', notification.id);
    }

    onMount(() => {
        startTimer();
    });
</script>

<li class="notifications-item"
    in:fly={{ x: 200, duration: 300 }}
    out:fly={{ x: 200, duration: 250 }}>
    
    <div class="notifivation-item__status">
        {#if notification.status === 'ok'}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.8 4C1.86451 4 1.0468 4.46923 0.544325 5.16792C0.20074 5.64567 0 6.23499 0 6.86667V17.1333C0 18.682 1.21964 20 2.8 20H11.2C11.7523 20 12.2 19.5523 12.2 19C12.2 18.4477 11.7523 18 11.2 18H2.8C2.39214 18 2 17.6466 2 17.1333V7.94766L7.77948 14.3096C8.96986 15.6199 11.0301 15.6199 12.2205 14.3096L18 7.94766V13.1333C18 13.6856 18.4477 14.1333 19 14.1333C19.5523 14.1333 20 13.6856 20 13.1333V6.86667C20 6.235 19.7993 5.64567 19.4557 5.16792C18.9532 4.46923 18.1355 4 17.2 4H2.8ZM9.25983 12.9647L2.9327 6H17.0673L10.7402 12.9647C10.3434 13.4015 9.65662 13.4015 9.25983 12.9647ZM22.7894 16.6139C23.1284 16.178 23.0499 15.5497 22.6139 15.2106C22.178 14.8716 21.5497 14.9501 21.2106 15.3861L17.2268 20.5081L15.6941 19.0302C15.2966 18.6468 14.6635 18.6583 14.2802 19.0559C13.8968 19.4534 13.9083 20.0865 14.3059 20.4698L16.6392 22.7198C16.8434 22.9167 17.1216 23.0177 17.4045 22.9975C17.6875 22.9773 17.9485 22.8379 18.1227 22.6139L22.7894 16.6139Z" fill="#228B22"/>
            </svg>
        {:else}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.8 4C1.86451 4 1.0468 4.46923 0.544325 5.16792C0.20074 5.64567 0 6.23499 0 6.86667V17.1333C0 18.682 1.21964 20 2.8 20H12.2C12.7523 20 13.2 19.5523 13.2 19C13.2 18.4477 12.7523 18 12.2 18H2.8C2.39214 18 2 17.6466 2 17.1333V7.94766L7.77948 14.3096C8.96986 15.6199 11.0301 15.6199 12.2205 14.3096L18 7.94766V12.1333C18 12.6856 18.4477 13.1333 19 13.1333C19.5523 13.1333 20 12.6856 20 12.1333V6.86667C20 6.235 19.7993 5.64567 19.4557 5.16792C18.9532 4.46923 18.1355 4 17.2 4H2.8ZM9.25983 12.9647L2.9327 6H17.0673L10.7402 12.9647C10.3434 13.4015 9.65662 13.4015 9.25983 12.9647ZM16.7071 15.2929C16.3166 14.9024 15.6834 14.9024 15.2929 15.2929C14.9024 15.6834 14.9024 16.3166 15.2929 16.7071L17.5858 19L15.2929 21.2929C14.9024 21.6834 14.9024 22.3166 15.2929 22.7071C15.6834 23.0976 16.3166 23.0976 16.7071 22.7071L19 20.4142L21.2929 22.7071C21.6834 23.0976 22.3166 23.0976 22.7071 22.7071C23.0976 22.3166 23.0976 21.6834 22.7071 21.2929L20.4142 19L22.7071 16.7071C23.0976 16.3166 23.0976 15.6834 22.7071 15.2929C22.3166 14.9024 21.6834 14.9024 21.2929 15.2929L19 17.5858L16.7071 15.2929Z" fill="tomato"/>
            </svg>
        {/if}
    </div>
    <div class="content-box">
        {#if notification.status === 'ok'}
            <h3 class="notifivation-item__title">{$LL.feadback.notification.success.header()}</h3>
            <p class="notifivation-item__p">{$LL.dLSuccess()}</p>
        {:else}
        <h3 class="notifivation-item__title">{$LL.feadback.notification.error.header()}</h3>
        <p class="notifivation-item__p">{$LL.feadback.notification.error.p()}</p>
        {/if}
        
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
        display: flex;
        flex-flow: row nowrap;
        gap: 1.5rem;
        width: 100%;
    }

    .notifivation-item__status {
        align-self: center;
        flex-shrink: 0;
    }

    .notifivation-item__title {
        font-size: 1.4rem;
        font-weight: 700;
        line-height: 1;
    }

    .notifivation-item__p {
        margin-top: 0.2em;
        font-size: 1.5rem;
        white-space: wrap;
    }
</style>