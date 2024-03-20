<script>
    import iconMenu from '$lib/assets/img/icon-menu.svg';
    import { page } from "$app/stores";
    import { fly } from "svelte/transition";
    import AsideList from '../archive/AsideList.svelte';
    import { menu } from '$lib/stores/menu';
    import LL from '$i18n/i18n-svelte';
</script>

<div class="header-shop">
    <div class="container">
        <button type="button" class="header-shop-btn" class:active={$menu} on:click={() => $menu = !$menu}>
            <span class="header-shop-btn__text">{$LL.catalog()}</span>
            <img class="header-shop-btn__icon" src={iconMenu} alt="меню" width="24" height="24">
        </button>
        {#if $menu}
            <div class="menu" 
                in:fly={{ y: 30, duration: 180 }}
                out:fly={{ y: 30, duration: 0 }}>
                <AsideList items={$page.data.terms} />
            </div>
        {/if}
    </div>
</div>

<style>
    .header-shop {
        --padding: 1rem 2rem;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 2;
    }

    .header-shop .container {
        position: relative;
    }

    .header-shop-btn {
        position: absolute;
        left: 15px;
        display: flex;
        align-items: center;
        column-gap: 1em;
        border: none;
        background-color: var(--color-primary);
        color: var(--color-text-invert);
        padding: var(--padding);
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        transition: background-color 150ms;
    }

    .header-shop-btn.active {
        background-color: var(--color-secondary);
    }

    .header-shop-btn__text {
        white-space: nowrap;
        text-transform: uppercase;
        font-size: 1.7rem;
        font-weight: 500;
    }

    .menu {
        position: absolute;
        left: 15px;
        top: 5rem;
        overflow: hidden;
        width: fit-content;
        padding: var(--padding);
        padding-right: 0;
        background-color: var(--color-text-invert);
        border: 1px solid var(--color-border);
        box-shadow: var(--box-shadow);
    }

    :global(.menu .list-item__btn) {
        margin-right: 2rem;
    }

    @media (max-width: 991px) {
        .header-shop-btn {
            display: none;
        }
    }
</style>