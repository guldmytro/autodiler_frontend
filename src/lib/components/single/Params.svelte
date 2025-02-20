<script>
    import Box from "./Box.svelte";
    export let params;
</script>

{#if Array.isArray(params) && params.length}
    <Box title="Характеристики">
        <table class="params">
            <tbody>
                {#each params as param}
                    {#if param.value !== 'отсутствует'}
                        <tr>
                            <th>
                                {param.name}
                                {#if param.units}
                                    ({param.units})
                                {/if}
                            </th>
                            <td>{param.value}</td>
                        </tr>
                    {/if}
                {/each}
            </tbody>
        </table>  
    </Box>
{/if}

<style>
    .params {
        width: 100%;
        text-align: left;
        border-collapse: collapse;
        font-size: 1.4rem;
    }

    .params td,
    .params th {
        padding: 1rem 2rem;
    }

    .params td {
        width: 99%;
    }

    .params th {
        white-space: nowrap;
        font-weight: normal;
        border-right: 2px solid #fff;
    }
    
    .params th {
        padding-left: 2rem;
        text-align: left;
    }

    .params tr:nth-child(odd) th,
    .params tr:nth-child(odd) td {
        background-color: #f5f5f5;
    }
</style>