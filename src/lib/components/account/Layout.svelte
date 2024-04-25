<script>
    import { page } from "$app/stores";
    import { locale } from "$i18n/i18n-svelte";
    import { enhance } from "$app/forms";
    import LL from "$i18n/i18n-svelte";
    import BreadCrumbs from "../global/BreadCrumbs.svelte";

    $: currentPath = new URL($page.url).pathname;
    $: localePrefix = $locale === 'uk' ? '' : $locale + '/';
</script>

<BreadCrumbs items={{}} currentPage={$LL.account.title()} />

<main class="account">
    <div class="container">
        <div class="account-row">
            <ul class="account-nav">
                <li class="account-nav__item">
                    <a href="/{localePrefix}account/info" class="menu-item"
                        class:active={currentPath.includes('/account/info')}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="menu-item__icon"><path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <span class="menu-item__text">{$LL.account.menu.info()}</span>
                    </a>
                </li>
                <li class="account-nav__item">
                    <a href="/{localePrefix}account/dashboard" class="menu-item"
                        class:active={currentPath.includes('/account/dashboard')}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="menu-item__icon">
                            <path d="M8 6L21 6.00078M8 12L21 12.0008M8 18L21 18.0007M3 6.5H4V5.5H3V6.5ZM3 12.5H4V11.5H3V12.5ZM3 18.5H4V17.5H3V18.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span class="menu-item__text">{$LL.account.menu.orders()}</span>
                    </a>
                </li>
                <li class="account-nav__item">
                    <form action="/{localePrefix}account/logout" method="POST" use:enhance>
                        <button type="submit" class="menu-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="menu-item__icon">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9908 7.82251C16.2897 7.5357 16.7644 7.54547 17.0512 7.84433L20.541 11.4807C20.8195 11.7709 20.8195 12.2291 20.541 12.5193L17.0512 16.1557C16.7644 16.4545 16.2897 16.4643 15.9908 16.1775C15.692 15.8907 15.6822 15.4159 15.969 15.1171L18.2404 12.7502L11.2727 12.7502C10.8585 12.7502 10.5227 12.4144 10.5227 12.0002C10.5227 11.586 10.8585 11.2502 11.2727 11.2502L18.2408 11.2502L15.969 8.88295C15.6822 8.58409 15.692 8.10932 15.9908 7.82251Z" fill="currentColor"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 4C3.25 3.58579 3.58579 3.25 4 3.25H13.4545C13.8688 3.25 14.2045 3.58579 14.2045 4V7C14.2045 7.41421 13.8688 7.75 13.4545 7.75C13.0403 7.75 12.7045 7.41421 12.7045 7V4.75H4.75V19.25H12.7045V17C12.7045 16.5858 13.0403 16.25 13.4545 16.25C13.8688 16.25 14.2045 16.5858 14.2045 17V20C14.2045 20.4142 13.8688 20.75 13.4545 20.75H4C3.58579 20.75 3.25 20.4142 3.25 20V4Z" fill="currentColor"/>
                            </svg>
                            <span class="menu-item__text">{$LL.account.menu.exit()}</span>
                        </button>
                    </form>
                </li>
            </ul>
            <div class="account-content">
                <slot />
            </div>
        </div>
    </div>
</main>

<style>
    .account {
        padding-bottom: var(--padding-section);
    }

    .account-row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 3fr);   
        align-items: start;
        gap: 2.5rem;
    }
    
    .account-nav {
        list-style: none;
        padding: 1rem 0;
        box-shadow: var(--box-shadow);
    }

    .menu-item {
        width: 100%;
        display: flex;
        column-gap: 1rem;
        padding: 1rem 2rem;
        align-items: center;
        background-color: transparent;
        border: none;
        text-decoration: none;
        color: inherit;
        transition: background-color 150ms, color 150ms;
    }

    .menu-item.active {
        background-color: #f5f5f5;
    }

    .menu-item:hover {
        color: var(--color-secondary);
    }

    .menu-item__icon {
        width: 24px;
        flex-shrink: 0;
    }

    .menu-item__text {
        white-space: nowrap;
        font-size: 1.5rem;
        line-height: 1;
    }

    .account-content {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        row-gap: 1.5rem;
    }

    @media (max-width: 1199px) {
        .account-row {
            grid-template-columns: minmax(0, 1fr);
        }

        .account-nav {
            display: flex;
            padding: 0;
            box-shadow: none;
            border-bottom: 1px solid var(--color-border);
            overflow-x: auto;
            column-gap: 2rem;
        }

        .account-nav__item {
            flex-shrink: 0;
        }

        .menu-item {
            padding-right: 1.5rem;
            padding-left: 1.5rem;
        }
    }
</style>