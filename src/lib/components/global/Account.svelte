<script>
    import userIcon from '$lib/assets/img/user.png';
    import { locale } from "$i18n/i18n-svelte";
    import { page } from '$app/stores';
    import LL from "$i18n/i18n-svelte";
    export let mobile = false;

    $: localePrefix = $locale === 'uk' ? '' : $locale + '/';
</script>

{#if $page.data.user}
    <a href="/{localePrefix}account/dashboard" class="account-link" class:mobile>
        <img src={userIcon} alt="користувач" class="account-link__icon" width="80" height="92">
        <span class="account-link__text">
            {$LL.yourCabinet()}
        </span>
    </a>
{:else}
    <a href="/{localePrefix}account/login" class="account-link" class:mobile>
        <img src={userIcon} alt="користувач" class="account-link__icon" width="80" height="92">
        <span class="account-link__text">
            {$LL.enter()}
        </span>
    </a>
{/if}

<style>
    .account-link {
        position: relative;
        padding-left: calc(1.7rem + 0.5em);
        font-size: 1.4rem;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        column-gap: 0.5em;
        color: var(--color-text);
        text-decoration: none;
        font-weight: 500;
    }

    .account-link__icon {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0.29;
        width: 1.7rem;
        height: auto;
    }

    @media (max-width: 991px) {
        .account-link:not(.mobile) {
            display: none;
        }
    }

</style>
