<script>
    export let faqItem;
    let active = false;
</script>

<li class="accordeon-item" class:active>
    <button class="accordeon-item__title" on:click={() => active = !active}>
        {faqItem.question}
        <span class="icon"></span>
    </button>
    <div class="accordeon-item__content">
        <div class="accordeon-item__text">{faqItem.answer}</div>
    </div>
</li>