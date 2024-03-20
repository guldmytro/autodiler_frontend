<script>
    import Socials from "./Socials.svelte";
    import LL from "$i18n/i18n-svelte";
</script>

<div class="faq-contacts">
    <span class="faq-contacts__title">{$LL.faq.phone()} <a href="tel:+380993177130">+38 (099) 317-71-30</a></span>
    <Socials />
</div>

<style>
    .faq-contacts {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        column-gap: 3rem;
        row-gap: 1.5rem;
    }

    .faq-contacts__title {
        font-size: 1.8rem;
    }

    .faq-contacts__title a {
        text-decoration: none;
        color: #49b24a;
        font-weight: 500;
        white-space: nowrap;
    }
</style>