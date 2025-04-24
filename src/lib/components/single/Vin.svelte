<script lang="ts">
    export let vin: string | null;
    import { page } from "$app/stores";
</script>

{#if vin}
    <div>
        {#if $page.data.locale === 'uk'}
            <h3>Номер запчастини:</h3>
        {:else}
            <h3>Номер запчасти:</h3>
        {/if}
        <p class="vin">{vin}</p>
    </div>
{/if}

<style>
    h3 {
        margin-bottom: 0.2em;
    }
    .vin {
        font-size: 16px;
    }
</style>