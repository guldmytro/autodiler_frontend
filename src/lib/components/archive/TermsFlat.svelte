<script lang="ts">
    import { PUBLIC_API_MEDIA } from '$env/static/public';
    export let term : any = null;
    import { locale } from '$i18n/i18n-svelte';
    type Term = {
        data: {
            source_id: string;
            name_ua: string;
            name_ru: string;
            slug: string;
            quantity: number;
            image: string | null;
            updated: string;
            is_car_brand: boolean;
            visible: boolean;
        },
        id: number;
    };
    $: children = term?.tree[0]?.children || [];

    $: key = $locale === 'uk' ? 'name_ua' : 'name_ru';
	$: localePrefix = $locale === 'uk' ? '' : $locale + '/';
</script>

{#if Array.isArray(children) && children.length}
    <ul class="terms-flat">
        {#each children as item}
            {#if item?.data?.quantity > 0 }
            <li class="terms-flat__item">
                <a href="/{localePrefix}product-cat/{item.data.slug}" class="terms-flat__link">
                    {#if item.data.image}
                        <img src="{PUBLIC_API_MEDIA}{item.data.image}" alt={item.data.name_ua} class="terms-flat__image" loading="lazy" width="100" height="100" />
                    {/if}
                    <span class="terms-flat__name">
                        {item.data[key]} 
                        <sup class="terms-flat__count">({item.data.quantity})</sup>
                    </span>
                    
                </a>
            </li>
            {/if}
        {/each}
    </ul>
{/if}

<style>
    .terms-flat {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .terms-flat__item {
        box-sizing: border-box;
    }

    .terms-flat__link {
        height: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: inherit;
        padding: 1.2rem 1rem;
        border-radius: 0.5rem;
        transition: color 0.15s ease;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
        border-radius: 1rem;
    }

    .terms-flat__link:hover {
        color: var(--color-secondary);
    }

    .terms-flat__image {
        width: 70px;
        height: 50px;
        object-fit: contain;
        flex-shrink: 0;
        /* filter: var(--filter-color-text); */
    }

    .terms-flat__name {
        font-size: 1.5rem;
        text-wrap: balance;
        line-height: 1;
    }

    .terms-flat__name:first-child:last-child {
        width: 100%;
        text-align: center;
    }

    .terms-flat__count {
        font-size: 0.7em;
        position: relative;
    }

    @media (max-width: 1399px) {
        .terms-flat {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }

    @media (max-width: 1199px) {
        .terms-flat {
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }
    }

    @media (max-width: 991px) {
        .terms-flat {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }

    @media (max-width: 768px) {
        .terms-flat {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (max-width: 480px) {
        .terms-flat {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }
</style>