<script>
    import { locale } from '$i18n/i18n-svelte';
    import LL from '$i18n/i18n-svelte';
    import { page } from '$app/stores';

    $: currentPath = new URL($page.url).pathname;
    $: localePrefix = $locale === 'uk' ? '' : $locale + '/';
</script>

<nav class="mobile-nav">
    <a href="/{localePrefix}about" class="header-nav__link" class:current={currentPath.includes('/about')}>{$LL.menu.about()}</a>
    <a href="/{localePrefix}contacts" class="header-nav__link" class:current={currentPath.includes('/contacts')}>{$LL.menu.contacts()}</a>
    <a href="/{localePrefix}faq" class="header-nav__link" class:current={currentPath.includes('/faq')}>{$LL.menu.support()}</a>
    <a href="/{localePrefix}delivery" class="header-nav__link" class:current={currentPath.includes('/delivery')}>{$LL.menu.delivery()}</a>
    <a href="/{localePrefix}dropshipping" class="header-nav__link" class:current={currentPath.includes('/dropshipping')}>{$LL.menu.dropshipping()}</a>
</nav>

<style>
    .mobile-nav {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
    }

    .header-nav__link {
        color: inherit;
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 500;
        padding: 0.3em 0;
    }
</style>