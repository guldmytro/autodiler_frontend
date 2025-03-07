<script lang="ts">
    export let src: string;
    export let alt: string;
    import BuyPlaces from "./BuyPlaces.svelte";
</script>

<div class="left">
    <div class="img-wrapper">
        {#if src}
            <img {src} {alt} fetchpriority="high" />
        {/if}
    </div>
    <div class="places">
        <BuyPlaces />
    </div>
</div>

<style>
    .left {
        width: 100%;
        position: sticky;
        top: var(--offset-header);
    }
    
    img {
        width: 100%;
        aspect-ratio: 100 / 65;
        object-fit: contain;
        background-color:fff;
        border-radius: 1rem;
        margin-bottom: 30px;
    }

    @media (max-width: 991px) {
        .left{
            position: relative;
            top: unset;
        }
        .places {
            display: none;
        }
    }
</style>