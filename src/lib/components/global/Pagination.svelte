<script>
    // @ts-nocheck

    import { generatePagination } from "$lib/utils";
    import { page } from "$app/stores";
    /**
     * @type {{ currentPage: any; totalPages: any; }}
     */
    export let pagination;

    
    $: ordering = new URL($page.url).searchParams.get('ordering') || false;
    $: s = new URL($page.url).searchParams.get('s') || false;
    $: nextPage = pagination.next ? pagination.currentPage + 1 : false;
    $: previousPage = pagination.previous ? pagination.currentPage - 1 : false;
    $: pages = generatePagination(pagination.currentPage, pagination.totalPages);

    /**
     * @param {number} page
     */
    function getPagiLink(page, ordering=null, s) {
        let link = `?page=${page}`;
        if (ordering) {
            link += `&ordering=${ordering}`;
        }
        if (s) {
            link += `&s=${s}`;
        }
        return link;
    }
</script>

{#if pages && pages.length > 1}
    <nav class="pagination">
        {#if previousPage}
            <a class="pagination__item pagination__item_link" href={getPagiLink(previousPage, ordering, s)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12H20M4 12L8 8M4 12L8 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        {/if}
        {#each pages as page}
            {#if page === '...'}
                <span class="pagination__item pagination__item_dots">{page}</span>
            {:else if page == pagination.currentPage}
                <span class="pagination__item pagination__item_text">{page}</span>
            {:else}
                <a class="pagination__item pagination__item_link" href={getPagiLink(page, ordering, s)}>{page}</a>
            {/if}
        {/each}
        {#if nextPage}
            <a class="pagination__item pagination__item_link" href={getPagiLink(nextPage, ordering, s)}>
                <svg width="24" height="24" viewBox="0 0 24 24" class="right" fill="none">
                    <path d="M4 12H20M4 12L8 8M4 12L8 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        {/if}
    </nav>
{/if}

<style>
    .pagination {
        display: flex;
        flex-flow: row wrap;
        column-gap: 0.4em;
        justify-content: center;
    }

    .pagination__item {
        border-radius: 50%;
        transition: background-color 150ms, color 150ms;
    }

    .pagination__item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 0.4em;
        height: 4rem;
        min-width: 4rem;
        line-height: 1;
        font-size: 1.6rem;
        font-weight: 700;
        text-align: center;
        text-decoration: none;
        color: inherit;
        color: var(--color-text-invert);
        background-color: var(--color-primary);
    }

    .pagination__item_text {
        color: var(--color-text);
        background-color: var(--color-secondary);
    }

    .pagination__item_dots {
        min-width: unset;
        background-color: transparent;
        color: var(--color-primary);
    }

    .pagination__item_link:hover {
        color: var(--color-text);
        background-color: var(--color-secondary);
    }

    .right {
        transform: scaleX(-1);
    }
</style>