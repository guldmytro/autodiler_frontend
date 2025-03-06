<script>
    import { locale } from '$i18n/i18n-svelte';
    import logo from '$lib/assets/img/logo-footer.svg';
    import LL from '$i18n/i18n-svelte';
    import Socials from './Socials.svelte';
    import Phones from './Phones.svelte';
    import VisaMasterCard from '$lib/assets/img/visa-mastercard.webp';

    $: localePrefix = $locale === 'uk' ? '' : $locale + '/';
    $: localePrefix2 = $locale === 'uk' ? '' : $locale;
</script>

<div class="footer">
    <div class="container">
        <div class="footer-row">
            <a href="/{localePrefix2}" class="logo">
                <img src={logo} 
                    class="logo__img"
                    alt="логотип сайту" 
                    width="211.7" height="149.1"
                    loading="lazy">
            </a>
            <ul class="footer-menu">
                <li class="footer-menu__item">
                    <a href="/{localePrefix}" class="footer-menu__link">{$LL.menu.main()}</a>
                </li>
                <li class="footer-menu__item">
                    <a href="/{localePrefix}about" class="footer-menu__link">{$LL.menu.about()}</a>
                </li>
                <li class="footer-menu__item">
                    <a href="/{localePrefix}contacts" class="footer-menu__link">{$LL.menu.contacts()}</a>
                </li>
                <li class="footer-menu__item">
                    <a href="/{localePrefix}faq" class="footer-menu__link">{$LL.menu.support()}</a>
                </li>
                <li class="footer-menu__item">
                    <a href="/{localePrefix}delivery" class="footer-menu__link">{$LL.menu.delivery()}</a>
                </li>
                <li class="footer-menu__item">
                    <a href="/{localePrefix}dropshipping" class="footer-menu__link">{$LL.menu.dropshipping()}</a>
                </li>
                <li class="footer-menu__item">
                    <a href="/{localePrefix}blog" class="footer-menu__link">{$LL.menu.blog()}</a>
                </li>
                <li class="footer-menu__item">
                    <a href="/{localePrefix}privacy-policy" class="footer-menu__link">{$LL.menu.privacyPolicy()}</a>
                </li>
                <li class="footer-menu__item">
                    <a href="/{localePrefix}returns-exchanges" class="footer-menu__link">{$LL.menu.returnsExchanges()}</a>
                </li>
                <li class="footer-menu__item">
                    <a href="/{localePrefix}terms-of-service" class="footer-menu__link">{$LL.menu.termsOfService()}</a>
                </li>
            </ul>
            <div class="footer-contacts">
                <Phones />
                <p class="working-status">{$LL.working()}</p>
                <Socials />
                <p class="methods">
                    <span>{$LL.paymentsAllowed()}</span>
                    <a href="https://www.liqpay.ua/uk" target="_blank" aria-label="лікпей">
                        <img src={VisaMasterCard} alt="віза і мастеркард" width="88" height="20" loading="lazy">
                    </a>
                </p>
            </div>
        </div>
    </div>
</div>

<style>
    .footer {
        padding: 6rem 0 8rem;
        background-color: #1c1c1c;
        color: var(--color-text-invert);
    }

    .footer-row {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        column-gap: 10rem;
    }

    .logo {
        display: block;
        height: 9rem;
    }

    .logo__img {
        height: 100%;
        width: auto;
    }

    .footer-menu {
        display: flex;
        flex-flow: column wrap;
        justify-items: center;
        max-height: 14rem;
        list-style: none;
        font-size: 1.4rem;
        column-gap: 5rem;
        row-gap: 2rem;
        margin-right: auto;
    }

    .footer-menu__link {
        color: inherit;
        text-decoration: none;
        transition: color 150ms;
        font-weight: 500;
    }

    .footer-menu__link:hover {
        color: var(--color-secondary);
    }

    .footer-contacts {
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-end;
        margin-left: auto;
    }

    .working-status {
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        column-gap: 1rem;
        margin-left: 1.25rem;
        margin-top: 0.4em;
        margin-bottom: 1.2em;
    }

    .working-status::before {
        content: '';
        display: block;
        width: 4px;
        height: 4px;
        background-color: #50C878;
        border-radius: 50%;
    }

    .methods {
        margin-top: 10px;
        display: flex;
        flex-flow: column nowrap;
        font-size: 14px;
        row-gap: 8px;
        align-items: flex-end;
    }

    @media (max-width: 1199px) {
        .footer {
            padding-bottom: calc(var(--padding-section) + 4rem);
        }
        
        .footer-row {
            flex-flow: column nowrap;
            align-items: center;
            row-gap: 3rem;
        }

        .footer-contacts {
            align-items: center;
            margin-right: auto;
        }

        .footer-menu {
            width: 100%;
            max-height: unset;
            align-items: center;
        }
        .methods {
            align-items: center;
        }
    }
</style>