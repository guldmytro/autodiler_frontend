<script lang="ts">
    /**
     * @type {{ parents: any; }}
     */
     // @ts-ignore
     export let items = false;
     export let currentPage: String;
     export let extraPath = '';
    // @ts-ignore
    $: crumbs = items.parents && items.id ? [...items?.parents] : [];
    import { locale } from '$i18n/i18n-svelte';
    $: localePrefix = $locale === 'uk' ? '' : $locale + '/';
</script>

<section class="breadcrumbs">
    <div class="container">
        <ul class="breadcrumbs-group">
            <li class="breadcrumbs-group__item">
                {#if $locale == 'ru'}
                    <a class="breadcrumbs-group__link" href="/{$locale}" aria-label="вернуться на главную">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 11.75C19.8376 11.7507 19.6795 11.698 19.55 11.6L12 5.94L4.45 11.6C4.29087 11.7193 4.09085 11.7706 3.89394 11.7425C3.69702 11.7143 3.51935 11.6091 3.4 11.45C3.28066 11.2909 3.22941 11.0908 3.25754 10.8939C3.28567 10.697 3.39087 10.5193 3.55 10.4L11.55 4.4C11.6798 4.30263 11.8377 4.25 12 4.25C12.1623 4.25 12.3202 4.30263 12.45 4.4L20.45 10.4C20.5952 10.5179 20.6911 10.6859 20.7189 10.8709C20.7466 11.0559 20.7042 11.2446 20.6 11.4C20.5363 11.503 20.4482 11.5888 20.3436 11.6498C20.239 11.7108 20.121 11.7452 20 11.75Z" fill="currentColor"/>
                            <path d="M18 19.75H6C5.80189 19.7474 5.61263 19.6676 5.47253 19.5275C5.33244 19.3874 5.25259 19.1981 5.25 19V9.5C5.25 9.30109 5.32902 9.11032 5.46967 8.96967C5.61032 8.82902 5.80109 8.75 6 8.75C6.19891 8.75 6.38968 8.82902 6.53033 8.96967C6.67098 9.11032 6.75 9.30109 6.75 9.5V18.25H17.25V9.5C17.25 9.30109 17.329 9.11032 17.4697 8.96967C17.6103 8.82902 17.8011 8.75 18 8.75C18.1989 8.75 18.3897 8.82902 18.5303 8.96967C18.671 9.11032 18.75 9.30109 18.75 9.5V19C18.7474 19.1981 18.6676 19.3874 18.5275 19.5275C18.3874 19.6676 18.1981 19.7474 18 19.75Z" fill="currentColor"/>
                            <path d="M14 19.75C13.8019 19.7474 13.6126 19.6676 13.4725 19.5275C13.3324 19.3874 13.2526 19.1981 13.25 19V12.75H10.75V19C10.75 19.1989 10.671 19.3897 10.5303 19.5303C10.3897 19.671 10.1989 19.75 10 19.75C9.80109 19.75 9.61032 19.671 9.46967 19.5303C9.32902 19.3897 9.25 19.1989 9.25 19V12C9.25259 11.8019 9.33244 11.6126 9.47253 11.4725C9.61263 11.3324 9.80189 11.2526 10 11.25H14C14.1981 11.2526 14.3874 11.3324 14.5275 11.4725C14.6676 11.6126 14.7474 11.8019 14.75 12V19C14.7474 19.1981 14.6676 19.3874 14.5275 19.5275C14.3874 19.6676 14.1981 19.7474 14 19.75Z" fill="currentColor"/>
                        </svg>
                    </a>
                {:else}
                    <a class="breadcrumbs-group__link" href="/" aria-label="вернуться на главную">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 11.75C19.8376 11.7507 19.6795 11.698 19.55 11.6L12 5.94L4.45 11.6C4.29087 11.7193 4.09085 11.7706 3.89394 11.7425C3.69702 11.7143 3.51935 11.6091 3.4 11.45C3.28066 11.2909 3.22941 11.0908 3.25754 10.8939C3.28567 10.697 3.39087 10.5193 3.55 10.4L11.55 4.4C11.6798 4.30263 11.8377 4.25 12 4.25C12.1623 4.25 12.3202 4.30263 12.45 4.4L20.45 10.4C20.5952 10.5179 20.6911 10.6859 20.7189 10.8709C20.7466 11.0559 20.7042 11.2446 20.6 11.4C20.5363 11.503 20.4482 11.5888 20.3436 11.6498C20.239 11.7108 20.121 11.7452 20 11.75Z" fill="currentColor"/>
                            <path d="M18 19.75H6C5.80189 19.7474 5.61263 19.6676 5.47253 19.5275C5.33244 19.3874 5.25259 19.1981 5.25 19V9.5C5.25 9.30109 5.32902 9.11032 5.46967 8.96967C5.61032 8.82902 5.80109 8.75 6 8.75C6.19891 8.75 6.38968 8.82902 6.53033 8.96967C6.67098 9.11032 6.75 9.30109 6.75 9.5V18.25H17.25V9.5C17.25 9.30109 17.329 9.11032 17.4697 8.96967C17.6103 8.82902 17.8011 8.75 18 8.75C18.1989 8.75 18.3897 8.82902 18.5303 8.96967C18.671 9.11032 18.75 9.30109 18.75 9.5V19C18.7474 19.1981 18.6676 19.3874 18.5275 19.5275C18.3874 19.6676 18.1981 19.7474 18 19.75Z" fill="currentColor"/>
                            <path d="M14 19.75C13.8019 19.7474 13.6126 19.6676 13.4725 19.5275C13.3324 19.3874 13.2526 19.1981 13.25 19V12.75H10.75V19C10.75 19.1989 10.671 19.3897 10.5303 19.5303C10.3897 19.671 10.1989 19.75 10 19.75C9.80109 19.75 9.61032 19.671 9.46967 19.5303C9.32902 19.3897 9.25 19.1989 9.25 19V12C9.25259 11.8019 9.33244 11.6126 9.47253 11.4725C9.61263 11.3324 9.80189 11.2526 10 11.25H14C14.1981 11.2526 14.3874 11.3324 14.5275 11.4725C14.6676 11.6126 14.7474 11.8019 14.75 12V19C14.7474 19.1981 14.6676 19.3874 14.5275 19.5275C14.3874 19.6676 14.1981 19.7474 14 19.75Z" fill="currentColor"/>
                        </svg>
                    </a>
                {/if}
                <span class="sep">-</span>
            </li>
            {#each crumbs as crumb, i }
                <li class="breadcrumbs-group__item">
                    {#if $locale == 'ru'}
                        <a class="breadcrumbs-group__link" href="/{localePrefix}{extraPath}{crumb.slug}">{crumb.name_ru}</a>    
                    {:else}
                        <a class="breadcrumbs-group__link" href="/{localePrefix}{extraPath}{crumb.slug}">{crumb.name_ua}</a>
                    {/if}
                    <span class="sep">-</span>
                </li>
            {/each}
            {#if (items?.name_ua && items?.name_ru) && currentPage !== items?.name_ua && currentPage !== items?.name_ru}
                {#if $locale == 'ru'}
                    <a class="breadcrumbs-group__link" href="/{localePrefix}{extraPath}{items.slug}">{items.name_ru}</a>    
                {:else}
                    <a class="breadcrumbs-group__link" href="/{localePrefix}{extraPath}{items.slug}">{items.name_ua}</a>
                {/if}
                <span class="sep">-</span>
            {/if}
            <li class="breadcrumbs-group__item">
                <span class="breadcrumbs-group__current">{currentPage}</span>
            </li>
        </ul>
    </div>
</section>

<style>
    .breadcrumbs {
        padding: 9rem 0 2.5rem;
        font-size: 1.4rem;
        line-height: 1.4;
    }

    .breadcrumbs-group {
        display: flex;
        flex-flow: row wrap;
        list-style: none;
    }

    .sep {
        display: inline-block;
        margin-left:  0.5em;
        margin-right:  0.5em;
        color: var(--color-text-breadcrumb);
    }
    
    .breadcrumbs-group__item {
        display: flex;
        align-items: center;
    }

    .breadcrumbs-group__link {
        display: flex;
        align-items: center;
        color: var(--color-text-breadcrumb);
        text-decoration: none;
    }

    .breadcrumbs-group__link svg {
        position: relative;
        top: -1px;
    }

    .breadcrumbs-group__link:hover {
        color: var(--color-text);
    }
</style>