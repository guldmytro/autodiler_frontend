<script>
    export let description;
    import LL from "$i18n/i18n-svelte";
</script>

{#if description}
    <div class="desc">
        <h3 class="desc__title">{$LL.description()}</h3>
        <div class="desc__text">{@html description}</div>
    </div>
{/if}

<style>
    .desc__title {
        padding-bottom: 0.2em;
    }
</style>
