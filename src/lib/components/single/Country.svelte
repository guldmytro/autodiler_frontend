<script lang="ts">
    import LL from '$i18n/i18n-svelte';
    export let country: string;
</script>

{#if country}
    <p class="country">
        <span class="label">{$LL.country()}</span>
        <span class="value">{country}</span>
    </p>
{/if}

<style>
    .value {
        color: var(--color-lighter);
    } 
</style>