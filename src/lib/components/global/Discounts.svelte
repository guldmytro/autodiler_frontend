<script>
    import percentIcon from '$lib/assets/img/percent.png';
    import LL from '$i18n/i18n-svelte';
    import { locale } from '$i18n/i18n-svelte';

    $: localePrefix = $locale === 'uk' ? '' : $locale + '/';
</script>

<!-- <a href="/{localePrefix}product-cat/aktsiia-878e1654" class="discount-link">
    <img src={percentIcon} alt="процент" class="discount-link__icon" width="32" height="32">
    <span class="discount-link__text">{$LL.discounts()}</span>
</a> -->

<style>
    .discount-link {
        position: relative;
        padding-left: calc(1.8rem + 0.5em);
        font-size: 1.4rem;
        display: flex;
        color: var(--color-primary);
        column-gap: 0.5em;
        text-decoration: none;
        align-items: center;
        font-weight: 500;
    }

    .discount-link__icon {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 1.8rem;
        height: 1.8rem;
    }

    @media (max-width: 991px) {
        .discount-link {
            display: none;
        }
    }
</style>