<script>
    // @ts-nocheck
    import { locale } from '$i18n/i18n-svelte';
    import logo from '$lib/assets/img/logo/logo_header_new.jpg';
    import logoMobile from '$lib/assets/img/logo/logo_header_mobile_new.jpg';
    
    import LocaleSwitcher from '$lib/components/global/LocaleSwitcher.svelte';
    import Cart from './Cart.svelte';
    import Wishlist from './Wishlist.svelte';
    import Menu from './Menu.svelte';
    import DownloadLink from './DownloadLink.svelte';
    import Socials from './Socials.svelte';
    import Phones from './Phones.svelte';
    import Account from './Account.svelte';
    import MenuBtnMobile from './MenuBtnMobile.svelte';
    import MobileWrapper from './MobileWrapper.svelte';
    import Bottom from './Bottom.svelte';
    import Secure from './Secure.svelte';
    import Discounts from './Discounts.svelte';
    import HeaderSearch from './HeaderSearch.svelte';

    $: localePrefix = $locale === 'uk' ? '' : $locale;
</script>

<div class="toper">
    <div class="container">
        <div class="toper__row">
            <Socials />
            <Phones />
            <Secure />
            <LocaleSwitcher />
            <DownloadLink />
        </div>
    </div>
</div>

<header class="header">
    <div class="header-inner">
        <div class="container">
            <div class="header__row">
                <a href="/{localePrefix}" class="logo">
                    <img src={logo} 
                        class="logo__img logo__img_desktop"
                        alt="логотип сайту" 
                        width="1280" height="387" 
                        fetchpriority="high">
                    <img src={logoMobile} 
                        class="logo__img logo__img_mobile"
                        alt="логотип сайту" 
                        width="480" height="384" 
                        fetchpriority="high">                        
                </a>
                <HeaderSearch />
                <Discounts />
                <Account />
                <Bottom />
                <div class="header-controls">
                    <Wishlist />
                    <Cart />
                    <MenuBtnMobile />
                </div>
            </div>
        </div>
    </div>
    <Menu />
    <MobileWrapper />
</header>



<style>
    .toper {
        padding: 0.6rem 0;
        background-color: #1c1c1c;
        color: var(--color-text-invert);
    }

    .toper__row {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        column-gap: 4rem;
    }

    .header {
        position: sticky;
        top: 0;
        z-index: 100;
    }

    .header-inner {
        position: relative;
        padding: 1.2rem 0;
        box-shadow: var(--box-shadow-2);
        z-index: 999;
        background-color: #fff;
    }

    .header__row {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        column-gap: 1.5rem;
    }

    .logo {
        display: block;
        height: 6.5rem;
    }

    .logo__img {
        height: 100%;
        width: auto;
    }

    .logo__img_mobile {
        display: none;
    }

    .header-controls {
        display: flex;
        flex-flow: row nowrap;
        column-gap: 0.5rem;
    }

    @media (max-width: 991px) {
        .logo__img_desktop {
            display: none;
        }
        
        .logo__img_mobile {
            display: block;
        }
    }

    @media (max-width: 575px) {
        .logo {
            height: 4rem;
        }
    }
</style>