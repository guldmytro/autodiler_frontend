<script lang="ts">
    import LL from '$i18n/i18n-svelte';
    export let sku: string;
</script>

{#if sku}
    <p class="sku">
        <span class="label">{$LL.sku()}</span>
        <span class="value">{sku}</span>
    </p>
{/if}

<style>
    .value {
        color: var(--color-lighter);
    } 
</style>