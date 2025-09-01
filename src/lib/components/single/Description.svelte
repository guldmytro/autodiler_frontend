<script>
    export let description;
    import LL from "$i18n/i18n-svelte";
</script>

{#if description}
    <div class="desc">
        <h3 class="desc__title">{$LL.description()}</h3>
        <pre class="desc__text">{@html description}</pre>
    </div>
{/if}

<style>
    .desc__title {
        padding-bottom: 0.3em;
    }
    .desc__text {
        font-family: inherit;
        white-space: pre-wrap;
    }
</style>
