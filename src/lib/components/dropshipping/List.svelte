<script>
    import LL from "$i18n/i18n-svelte";
</script>

<section class="list">
    <div class="container">
        <div class="list-row">
            <div class="section-header">
                <h2 class="section-header__title">{$LL.ds.list.title()}</h2>
            </div>
            <ul class="list-group">
                {#each Array(20) as el, i }
                    {#if $LL.ds.list.features[i]()}
                        <li class="list-item">
                            <p class="list-item__text">{$LL.ds.list.features[i]()}</p>
                        </li>        
                    {/if}
                {/each}
            </ul>
        </div>
    </div>
</section>

<style>
    .list {
        position: relative;
        background-color: #F9F9F9;
        overflow: hidden;
    }

    .list::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 60%;
        background: url("$lib/assets/img/dropshipping/man-with-notebook.jpg") no-repeat top center / cover;;
    }

    .list-row {
        width: 42%;
        position: relative;
        z-index: 2;
    }

    .list-row::after {
        content: '';
        display: block;
        position: absolute;
        top: -20rem;
        left: 0;
        right: -12rem;
        bottom: -20rem;
        background-color: #F9F9F9;
        rotate: 15deg;
        z-index: -1;
    }

    .list-group {
        counter-reset: section;
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        row-gap: 1.8rem;
        list-style: none;
    }

    .list-item {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        border: 1px solid var(--color-primary);
        border-radius: 0.8rem;
        padding: 1.6rem;
        gap: 1.5rem;
    }

    .list-item::before {
        counter-increment: section;
        content: counter(section);
        min-width: 5.5rem;
        height: 5.5rem;
        line-height: 5.5rem;
        text-align: center;
        border-radius: 50%;
        color: var(--color-primary);
        background-color: rgba(151, 21, 15, 0.04);
        font-size: 2.7rem;
        font-weight: 500;
        flex-shrink: 0;
    }
    
    .list-item__text {
        align-self: center;
    }

    @media (max-width: 767px) {
        .list-row {
            width: 100%;
            position: relative;
            z-index: 2;
        }

        .list::after {
            content: none;
        }
    }

    @media (max-width: 575px) {
        
    }
</style>