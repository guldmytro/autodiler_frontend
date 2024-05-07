<script>
    export let title;
</script>

<div class="params-box">
    {#if title}
        <h2 class="params-box__title">{title}</h2>
    {/if}
    <slot />
</div>

<style>
    .params-box {
        padding: 3rem 2rem;
        box-shadow: var(--box-shadow);
    }

    .params-box__title {
        font-size: 1.8rem;
        margin-bottom: 1em;
    }
</style>