<script lang="ts">
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import '@splidejs/svelte-splide/css';
    // import '@splidejs/splide/css/sea-green';

    export let images: string[];

    let main;
    let thumbnails;
	import { onMount } from "svelte";

	onMount(() => {
		// Get actual Splide instances
		const mainInstance = main?.splide;
		const thumbsInstance = thumbnails?.splide;

		if (mainInstance && thumbsInstance) {
			mainInstance.sync(thumbsInstance);
		}
	});

    import BuyPlaces from "./BuyPlaces.svelte";
</script>

<div class="product-slider">
    <div class="main-sl">

        <Splide options={{
                    type: 'slide',
                    perPage: 1,
                    pagination: false,
                    arrows: false,
                    gap: 0
                }} bind:this={main}>
            {#each images as image}
                <SplideSlide>
                    <img class="product-slider__img" src={image} alt="фото">
                </SplideSlide>
            {/each}
        </Splide>
    </div>
    <div class="thumbs">
        <Splide options={{
                    fixedWidth : 100,
                    fixedHeight: 60,
                    gap        : 10,
                    rewind     : true,
                    pagination : false,
                    cover      : true,
                    isNavigation: true,
                    breakpoints: {
                        600: {
                            fixedWidth : 60,
                            fixedHeight: 44,
                        },
                    },
                }} bind:this={thumbnails}>
            {#each images as image}
                <SplideSlide>
                    <img class="product-slider__img" src={image} alt="фото">
                </SplideSlide>
            {/each}
        </Splide>
    </div>
    {#if false}
        <div class="places">
            <BuyPlaces />
        </div>
    {/if}
</div>

<style>
    .product-slider {
        align-self: start;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    :global(.product-slider .splide) {
        padding: 0!important;
    }

    :global(.product-slider .splide__track) {
        padding-block: 0;
    }

    .product-slider__img {
        display: block;
        width: 100%;
        aspect-ratio: 630 / 410;
        object-fit: contain;
    }

    :global(.thumbs .splide__slide) {
        opacity: 0.3;
    }

    :global(.product-slider .splide__slide.is-active) {
        opacity: 1;
    }

    .main-sl {
        aspect-ratio: 630 / 410;
    }
    .thumbs {
        padding-inline: 40px;
        height: 60px;
    }

    :global(.thumbs .splide__arrow--prev) {
        top: 30px;
        left: -40px;
        width: 30px;
        height: 30px;
    }
    
    :global(.thumbs .splide__arrow--next) {
        top: 30px;
        right: -40px;
        z-index: 2;
        width: 30px;
        height: 30px;
    }

    :global(.thumbs .splide__arrows) {
        top: 0;
        left: 0;
        right: 0;
        position: absolute;
        z-index: 10;
        height: 0;
    }

    :global(.splide__track--nav>.splide__list>.splide__slide.is-active) {
        border-color: var(--color-primary) !important;
        border-radius: 4px;
    }

    .places {
        margin-top: 40px;
    }

    @media (max-width: 991px) {
        .places {
            display: none;
        }
    }

    @media (max-width: 600px) {
        :global(.thumbs .splide__arrow--prev) {
            top: 22px;
        }
        
        :global(.thumbs .splide__arrow--next) {
            top: 22px;
        }
    }
</style>