<script>
    import LL from '$i18n/i18n-svelte';
    import { locale } from '$i18n/i18n-svelte';
    $: localePrefix = $locale === 'uk' ? '' : $locale + '/';
</script>

<form action="/{localePrefix}shop" method="get" class="search-form active">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-form__icon">
        <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <input type="search" placeholder={$LL.headerSearch.placeholder()} name="s" class="input">
    <button type="submit" class="button button_search">{$LL.headerSearch.submit()}</button>
</form>

<style>
    .search-form {
        position: relative;
        flex-grow: 1;
        max-width: 50rem;
        display: flex;
        flex-flow: row nowrap;
    }

    .input {
        height: auto;
        padding-left: calc(1rem + 22px + 0.8rem);
    }

    .button_search {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border: none;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .search-form__icon {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
    }

    @media (max-width: 1199px) {
        .search-form {
            max-width: 40rem;
        }
    }

    @media (max-width: 991px) {
        .search-form {
            opacity: 0;
            position: absolute;
            top: calc(100% + 10px);
            left: calc(50%);
            transform: translateX(-50%);
            width: calc(var(--width-container) - 30px);
            max-width: unset;
            box-shadow: var(--box-shadow);
            pointer-events: none;
            transition: opacity 150ms;
        }

        .search-form::before {
            content: '';
            display: block;
            position: absolute;
            top: -10px;
            right: -15px;
            bottom: -10px;
            left: -15px;
            background-color: white;
            border-bottom: 2px solid var(--color-border);
            z-index: -1;
        }

        .search-form::after {
            content: '';
            display: block;
            position: absolute;
            top: -10px;
            right: -15px;
            left: -15px;
            height: 0.7rem;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.15), transparent);
        }

        .search-form.active {
            opacity: 1;
            pointer-events: all;
        }
    }

    @media (max-width: 575px) {
        .search-form input {
            height: 40px;
        }
    }
</style>