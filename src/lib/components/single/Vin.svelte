<script lang="ts">
    export let vin: string | null;
</script>

{#if vin}
    <div>
        <h3>Vin-код:</h3>
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