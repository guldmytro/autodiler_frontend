<script>
    /**
     * @type {any}
     */
     export let title;
</script>

{#if title}
    <div class="section-header">
        <h1 class="section-header__title">{title}</h1>
    </div>
{/if}

<style>
    @media (max-width: 575px) {
        .section-header__title {
            font-size: 2.8rem;
        }
    }
</style>