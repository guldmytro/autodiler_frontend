<script lang="ts">
    export let vin: string | null;
</script>

{#if vin}
    <h3>Vin:</h3>
    <p class="vin">{vin}</p>
{/if}

<style>
    h3 {
        margin-bottom: 0.2em;
    }
    .vin {
        font-size: 16px;
    }
</style>