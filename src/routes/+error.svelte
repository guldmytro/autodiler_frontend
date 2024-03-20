<script>
    // @ts-nocheck
    import BreadCrumbs from "$lib/components/global/BreadCrumbs.svelte";
    import LL from '$i18n/i18n-svelte';
    import {page} from '$app/stores';
    $: errorMessage = $page.status === 404 ? $LL.page404() : $LL.page500();
</script>
<BreadCrumbs currentPage={errorMessage} />

<main class="error">
    <div class="container">
        <h1>{errorMessage}</h1>
    </div>
</main>