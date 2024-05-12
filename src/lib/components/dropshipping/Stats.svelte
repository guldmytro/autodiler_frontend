<script>
    import LL from '$i18n/i18n-svelte';
    import shieldImg from '$lib/assets/img/dropshipping/shield.svg';
</script>

<div class="stats">
    <div class="container">
        <ul class="stats-group">
            {#each Array(10) as el, i }
                {#if $LL.ds.stats[i]()}
                    <li class="stats-item">
                        <div class="stats-item__thumb">
                            <img src={shieldImg} alt="щит" class="stats-item__icon" loading="lazy" width="32" height="32">
                        </div>
                        <p class="stats-item__text">{@html $LL.ds.stats[i]()}</p>
                    </li>
                {/if}
            {/each}
        </ul>
    </div>
</div>

<style>
    .stats {
        padding: 6rem 0;
    }
        
    .stats-group {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 3.5rem;
        list-style: none;
    }
    
    .stats-item {
        display: flex;
        flex-flow: row nowrap;
        column-gap: 1.3rem;
    }

    .stats-item__thumb {
        width: 6.8rem;
        height: 6.8rem;
        border-radius: 50%;
        background-color: rgba(151, 21, 15, 0.04);
        flex-shrink: 0;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
    }

    .stats-item__text {
        align-self: center;
        font-size: 1.6rem;
    }

    :global(.stats .stats-item__text strong) {
        color: var(--color-primary);
        font-weight: 600;
    }

    @media (max-width: 1199px) {
        .stats-group {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (max-width: 575px) {
        .stats-group {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }
</style>