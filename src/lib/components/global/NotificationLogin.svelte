<script>
    import { fly } from 'svelte/transition';
    import { onMount } from "svelte";
    import { removeNotification } from "$lib/stores/notifications";
    import LL from '$i18n/i18n-svelte';

    
    export let notification;
    
    $: title = notification.title || $LL.login.errors.title();

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
        removeNotification('login', notification.id);
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
    
    <div class="notifivation-item__status">
        {#if notification.type === 'success'}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14 19.2857L15.8 21L20 17M4 21C4 17.134 7.13401 14 11 14C12.4872 14 13.8662 14.4638 15 15.2547M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        {:else}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 16L20 21M20 16L15 21M4 21C4 17.134 7.13401 14 11 14M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="tomato" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        {/if}
    </div>
    <div class="content-box">    
        <h3 class="notifivation-item__title">
            {title}
        </h3>
        <p class="notifivation-item__p">{notification.message}</p>
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