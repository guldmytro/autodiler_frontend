<script>
    import iconTelegram from '$lib/assets/img/icon-tg.png';
    import iconViber from '$lib/assets/img/icon-vb.png';
</script>

<ul class="socials">
    <li class="socials-item">
        <a href="https://t.me/AvtoDiler_ua" class="socials-item__link">
            <img src={iconTelegram} alt="телеграм">
        </a>
    </li>
    <li class="socials-item">
        <a href="viber://chat?number=+380971687802" class="socials-item__link">
            <img src={iconViber} alt="вайбер">
        </a>
    </li>
</ul>

<style>
    .socials {
        list-style: none;
    }

    .socials-item {
        display: inline-block;
        width: 3.8rem;
    }

    .socials-item + .socials-item {
        margin-left: 0.5rem;
    }

    :global(.toper .container .socials-item),
    :global(.footer .container .socials-item) {
        width: 2.6rem;
    }

    :global(.footer .socials) {
        justify-content: flex-end;
    }

    @media (max-width: 575px) {
        :global(.toper .socials) {
            display: none;
        }

    }
</style>