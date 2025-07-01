<script lang="ts">
    export let producer: string | null;
    import LL from "$i18n/i18n-svelte";
</script>

{#if producer}
    <div>
        <h3>{$LL.producer()}:</h3>
        <p class="producer">{producer}</p>
    </div>
{/if}

<style>
    h3 {
        margin-bottom: 0.3em;
    }
    .producer {
        font-size: 16px;
    }
</style>