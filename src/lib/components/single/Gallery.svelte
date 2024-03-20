<script lang="ts">
    export let src: string;
    export let alt: string;
</script>

<div class="img-wrapper">
    {#if src}
        <img {src} {alt} fetchpriority="high" />
    {/if}
</div>

<style>
    .img-wrapper {
        position: sticky;
        top: var(--offset-header);
        width: 100%;
        height: 0;
        padding-top: 65%;
    }
    
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        background-color: #fff;
        border-radius: 1rem;
    }

    @media (max-width: 991px) {
        .img-wrapper {
            position: relative;
            top: unset;
        }
    }
</style>