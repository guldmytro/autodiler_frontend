<script>
    export let content;
</script>

{#if content}
    <div class="seo-section">
        <div class="container">
            <div class="post__content">
                {@html content}
            </div>
        </div>
    </div>
{/if}

<style>
    .seo-section {
        padding: var(--padding-section) 0;
    }

    :global(.faq + .seo-section),
    :global(.contacts + .seo-section) {
        padding-top: 0;
    }

    .post__content {
        max-width: 100%;
    }
</style>
