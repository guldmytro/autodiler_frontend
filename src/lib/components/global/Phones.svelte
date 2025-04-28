<script>
    import iconKr from '$lib/assets/img/icon-kr.png';
    import iconLc from '$lib/assets/img/icon-lc.svg';
    import iconVf from '$lib/assets/img/icon-vf.svg';
</script>

<ul class="contacts-item__list">
    <li class="contacts-item__element">
        <a href="tel:+380990791764" class="contacts-item__link contacts-link">
            <img src={iconVf} alt="лайфсел" width="64" height="64" class="contacts-link__img">
            +38 (099) 079-17-64
        </a>
    </li>
    <li class="contacts-item__element">
        <a href="tel:+380960046045" class="contacts-item__link contacts-link">
            <img src={iconKr} alt="київстар" width="64" height="64" class="contacts-link__img">
            +38 (096) 004-60-45
        </a>
    </li>
</ul>

<style>
    .contacts-item__list {
        list-style: none;
        display: flex;
        flex-flow: column nowrap;
        row-gap: 0.4rem;
    }
    
    .contacts-link {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        font-weight: 500;
        color: inherit;
        text-decoration: none;
        column-gap: 0.6rem;
    }

    .contacts-link__img {
        width: 2.5rem;
        flex-shrink: 0;
        object-fit: contain;
    }

    :global(.toper .contacts-item__list) {
        flex-flow: row nowrap;
        column-gap: 4rem;
        margin-right: auto;
        font-size: 1.4rem;
    }

    @media (max-width: 767px) {
        :global(.toper .contacts-item__element:nth-child(n + 2)) {
            display: none;
        }
    } /* 767px */
</style>