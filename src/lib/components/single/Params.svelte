<script>
    export let params;
</script>

{#if params}
    <div class="params-box">
        <h2 class="params-box__title">Характеристики</h2>
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
    </div>
{/if}

<style>
    .params-box {
        padding: 3rem 2rem;
        box-shadow: var(--box-shadow);
    }

    .params-box__title {
        font-size: 1.8rem;
        margin-bottom: 1em;
    }

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

    @media (max-width: 575px) {
        .params-box {
            padding: 25px 15px;
        }
    }
</style>