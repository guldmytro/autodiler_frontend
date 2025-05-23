<script>
	import { PUBLIC_API_MEDIA } from '$env/static/public';
    import { onMount } from 'svelte';
	import { locale } from '$i18n/i18n-svelte';
	import { page } from '$app/stores';

    export let items = [];
    export let depth = 0;
	$: currentCategory = $page?.data?.term?.id || null;
	$: termAncestorIds = Array.isArray($page?.data?.term?.parents) ? $page?.data.term.parents.map(item => item.id) : [];
    let expandedItems = {};

    onMount(() => {
        items.forEach((item, index) => {
			if (termAncestorIds.includes(item.id)) {
				expandedItems[index] = true;
			} else {
				expandedItems[index] = false;
			}
        });
    });

    function toggle(index) {
        expandedItems[index] = !expandedItems[index];
        expandedItems = { ...expandedItems };
    }

	$: key = $locale === 'uk' ? 'name_ua' : 'name_ru';
	$: localePrefix = $locale === 'uk' ? '' : $locale + '/';
</script>

<ul class="list">
    {#each items as item, index (index)}
	{#if item?.data?.quantity > 0 }
    <li class={`list__item list-item list__item_depth_${depth}`}>
        <div class="list-item__element" class:accent={termAncestorIds.includes(item.id)} class:current={currentCategory && currentCategory == item.id}>
            <a href="/{localePrefix}product-cat/{item.data.slug}" class="term-link">
				{#if item.data?.image}
					<img src="{PUBLIC_API_MEDIA}{item.data.image}" loading="lazy" height="10" class="term-img" alt={item.data[key]}>
				{/if}
				<span>
					{item.data[key]} ({item.data.quantity})
				</span>
			</a>
            {#if item.children}
            <button type="button" class="list-item__btn" on:click={() => toggle(index)}>
                {expandedItems[index] ? '-' : '+'}
            </button>
            {/if}
        </div>
        {#if item.children && expandedItems[index]}
        <svelte:self items={item.children} let:item depth={depth + 1}></svelte:self>
        {/if}
    </li>
	{/if}
    {/each}
</ul>

<style>
	:global(.archive-aside > .list) {
		overflow-y: hidden;
		margin-left: -1rem;
	}

	:global(.header-shop .list) {
		padding-right: 20px;
		max-height: calc(100svh - 230px);
		overflow-y: auto;
	}

	:global(.header-shop .list button.list-item__btn) {
		display: none;
	}

	:global(.header-shop .list .list) {
		display: none;
	}

	.list-item {
		list-style: none;
	}

	.list-item__element {
		position: relative;
		display: flex;
		width: 100%;
		font-weight: 500;
	}

	.list-item__element::after {
		position: absolute;
		content: '';
		height: 1px;
		width: 90rem;
		right: 0;
		bottom: 0;
		background-color: var(--color-border);
	}

	.list-item__element a {
		flex-grow: 1;
		color: inherit;
		text-decoration: none;
		height: 3.9rem;
		line-height: 3.9rem;
		font-size: 1.4rem;
		padding-right: 1.5rem;
		
	}

	.list-item__element a span {
		display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
	}

	.list__item_depth_0 > .list-item__element a,
	.list__item_depth_1 > .list-item__element a {
		text-transform: capitalize;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: flex-start;
		column-gap: 1ch;
	}

	.list-item__btn {
		display: block;
		height: 3.9rem;
		width: 3.9rem;
		border: none;
		background-color: transparent;
		border-left: 1px solid transparent;
		font-size: 1.7rem;
		color: var(--color-text);
		transition: color 150ms;
	}

	.list-item__btn:hover {
		color: var(--color-secondary);
	}

	.list-item__element:hover .list-item__btn {
		border-left-color: var(--color-border);
	}

	.list {
		padding-left: 1rem;
	}

	.list-item__element a:hover {
		color: var(--color-secondary);
	}

	.list-item:has(.current) > .list-item__element {
		font-weight: 800;
	}

	.accent, .current {
		position: relative;
		font-weight: 700;
		isolation: isolate;
	}

	.accent::before, 
	.current::before {
		position: absolute;
		content: '';
		display: block;
		top: 0;
		right: 0;
		bottom: 0;
		width: 900px;
		z-index: -1;
		background-color: #f5f5f5;
	}

	.term-img {
		height: 2rem;
		width: 3rem;
		object-fit: contain;
		flex-shrink: 0;
		filter: var(--filter-color-text);
	}
</style>