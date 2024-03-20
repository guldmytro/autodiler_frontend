<script>
    import LL from "$i18n/i18n-svelte";
    import Item from "../blog/Item.svelte";
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import '@splidejs/svelte-splide/css';
    import '$lib/assets/css/splide.css';
    export let posts;
    const options = {
        perPage: 4,
        gap: '2rem',
        breakpoints: {
            991: {
                perPage: 3,
            },
            767: {
                perPage: 2,
            },
            450: {
                perPage: 1,
            }
        }
    }
</script>

{#if Array.isArray(posts) && posts.length}
    <section class="posts">
        <div class="container">
            <div class="section-header">
                <h2 class="section-header__title">{$LL.blog.title()}</h2>
            </div>
            <Splide {options}>
                {#each posts as post}
                    <SplideSlide>
                        <Item {post} />
                    </SplideSlide>
                {/each}
            </Splide>
        </div>
    </section>
{/if}

<style>
    .posts {
        background: url("$lib/assets/img/bg-posts.jpg") no-repeat center / cover;
    }
</style>