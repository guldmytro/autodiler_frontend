<script>
    import AccardeonItem from "../global/AccardeonItem.svelte";
    import FaqContacts from "../global/FaqContacts.svelte";
    import BreadCrumbs from "../global/BreadCrumbs.svelte";
    import LL from '$i18n/i18n-svelte';
    export let faq;
</script>

<BreadCrumbs items={{}} currentPage={$LL.faq.title()} />

<main class="faq">
    <div class="container"> 
        <div class="section-header">
            <h1 class="section-header__title">{$LL.faq.title()}</h1>
        </div>
        <div class="faq-row">
            <ul class="accordeon">
                {#each faq as faqItem}
                    <AccardeonItem {faqItem} />
                {/each}
            </ul>
            <FaqContacts />
        </div>
    </div>
</main>

<style>
    .faq {
        padding-bottom: var(--padding-section);
    }

    .faq-row {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        row-gap: calc(var(--padding-section) / 2);
    }
</style>