<script lang="ts">
    import LL from "$i18n/i18n-svelte";
    import { page } from "$app/stores";
    import type { Child } from "./product";

    $: lang = $page.params.lang ? '/' + $page.params.lang + '/' : '/';

    export let children: Child[] | undefined;

</script>

{#if Array.isArray(children) && children.length}
    <div class="colors-wrapper">
        <h3 class="colors-wrapper__p">{$LL.color()}</h3>
        <ul class="colors">
            <li class="color">
                <a href={`${lang}product-cat/${children[0].parentCategorySlug}/${children[0].parentSlug}`} 
                   class="color__link color__link_empty" class:active={!!!$page.params.child_slug}>
                    <span class="color__box"></span>
                    <span class="color__text">Без покраски</span>
                </a>
            </li>
            {#each children as child}
                <li class="color">
                    <a href={`${lang}product-cat/${child.parentCategorySlug}/${child.parentSlug}/${child.slug}`} 
                       class="color__link" class:active={$page.params.child_slug == child.slug}>
                        <span class="color__box" style={`background-color: ${child.color.hex_code}`}></span>
                        <span class="color__text">{child.color.name}</span>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
{/if}

<style>
    .colors-wrapper__p {
        margin-bottom: 0.3em;
    }
    
    .colors {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 10px;
        list-style: none;
    }

    .color__link {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        color: var(--color-text);
        text-decoration: none;
        gap: 10px;
        border-radius: 10px;
        padding: 3px;
        border: 3px solid transparent;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }

    .color__link.active {
        border: 3px solid var(--color-border);
    }

    .color__box {
        width: 36px;
        aspect-ratio: 1 / 1;
        border-radius: 5px;
        flex-shrink: 0;
    }

    .color__link_empty .color__box {
        background: repeating-linear-gradient(
                    45deg,
                    var(--color-border) 0px, 
                    var(--color-border) 2px, 
                    transparent 2px,
                    transparent 6px 
                    );
    }
    @media (max-width: 575px) {
        .colors {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }
</style>