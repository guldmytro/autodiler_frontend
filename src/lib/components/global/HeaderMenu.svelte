<script>
    import { locale } from '$i18n/i18n-svelte';
    import LL from '$i18n/i18n-svelte';
    import { page } from '$app/stores';

    $: currentPath = new URL($page.url).pathname;
</script>

<nav class="header-nav">
    <a href="/{$locale}/about" class="header-nav__link" class:current={currentPath.includes('/about')}>{$LL.menu.about()}</a>
    <a href="/{$locale}/contacts" class="header-nav__link" class:current={currentPath.includes('/contacts')}>{$LL.menu.contacts()}</a>
    <a href="/{$locale}/faq" class="header-nav__link" class:current={currentPath.includes('/faq')}>{$LL.menu.support()}</a>
    <a href="/{$locale}/delivery" class="header-nav__link" class:current={currentPath.includes('/delivery')}>{$LL.menu.delivery()}</a>
</nav>

<style>
    .header-nav {
        display: flex;
        flex-flow: row wrap;
        column-gap: 3rem;
    }

    .header-nav__link {
        position: relative;
        font-size: 1.5rem;
        white-space: nowrap;
        color: inherit;
        text-decoration: none;
    }

    .header-nav__link::after {
        position: absolute;
        top: calc(100% + 2px);
        content: '';
        display: block;
        height: 2px;
        width: 100%;
        background-color: var(--color-primary);
        transform: scaleX(0);
        opacity: 0;
        transition: transform 150ms;
    }

    .header-nav__link.current::after {
        transform: scaleX(1);
        opacity: 1;
    }

    @media (max-width: 991px) {
        .header-nav {
            display: none;
        }
    }
</style>