<script>
    import LL from "$i18n/i18n-svelte";
</script>

<a href="https://api.avtodiler.com.ua/media/output/2025/02/25/export-products-25-02-25_15-34-09.xlsx" download="true" class="download-link">
    <svg height="16" width="16" version="1.1"  
	 viewBox="0 0 512 512"  xml:space="preserve">
        <g>
            <path fill="#ffffff" d="M243.591,309.362c3.272,4.317,7.678,6.692,12.409,6.692c4.73,0,9.136-2.376,12.409-6.689l89.594-118.094
                c3.348-4.414,4.274-8.692,2.611-12.042c-1.666-3.35-5.631-5.198-11.168-5.198H315.14c-9.288,0-16.844-7.554-16.844-16.84V59.777
                c0-11.04-8.983-20.027-20.024-20.027h-44.546c-11.04,0-20.022,8.987-20.022,20.027v97.415c0,9.286-7.556,16.84-16.844,16.84
                h-34.305c-5.538,0-9.503,1.848-11.168,5.198c-1.665,3.35-0.738,7.628,2.609,12.046L243.591,309.362z"/>
            <path fill="#ffffff" d="M445.218,294.16v111.304H66.782V294.16H0v152.648c0,14.03,11.413,25.443,25.441,25.443h461.118
                c14.028,0,25.441-11.413,25.441-25.443V294.16H445.218z"/>
        </g>
    </svg>
    <span>{$LL.downloadLink()}</span>
</a>


<style>
    .download-link {
        display: flex;
        flex-flow: row nowrap;
        font-size: 1.4rem;
        background-color: var(--color-primary);
        color: var(--color-text-invert);
        text-decoration: none;
        border-radius: 1rem;
        padding: 0.5rem 2rem;
        transition: background-color 150ms;
        column-gap: 0.5rem;
    }

    .download-link:hover {
        background-color: var(--color-secondary);
    }

    @media (max-width: 991px) {
        :global(.toper .download-link) {
            display: none;
        }
        .download-link {
            height: 36px;
            align-items: center;
        }
    }
</style>