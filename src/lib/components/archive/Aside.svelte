<script>
    // @ts-nocheck
    import { page } from "$app/stores";
    import AsideList from "./AsideList.svelte";
    import LL from '$i18n/i18n-svelte';
    export let aside = false;
</script>
<div class="archive-aside-wrapper" class:aside>
    <aside class="archive-aside">
        <h2 class="archive-aside__title">{$LL.terms()}</h2>
        <AsideList items={$page.data.terms} />
    </aside>
</div>

<style>
    .archive-aside-wrapper:not(.aside) {
        display: none;
    }

    .archive-aside-wrapper {
        position: sticky;
        top: var(--offset-header);
    }

    .archive-aside-wrapper.aside::before {
        position: absolute;
        content: '';
        display: block;
        width: 75%;
        height: 6rem;
        background-color: var(--color-primary);
        border-radius: 1rem;
        z-index: 1;
        top: -1rem;
        left: 50%;
        transform: translateX(-50%);
    }

    .archive-aside {
        position: relative;
        padding: 3rem 2.5rem;
        border-radius: 2rem;
        background-color: #fff;
        z-index: 3;
        box-shadow: var(--box-shadow);
    }

    .archive-aside__title {
        text-transform: uppercase;
        font-size: 1.8rem;
        margin-bottom: 0.4em;
    }

    @media (max-width: 1199px) {
        .archive-aside-wrapper.aside {
            display: none;
        }
        
        .archive-aside-wrapper:not(.aside) {
            display: block;
        }

    }
</style>