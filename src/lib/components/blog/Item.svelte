<script>
    import LL from "$i18n/i18n-svelte";
    export let post;
    import { locale } from "$i18n/i18n-svelte";
    
    $: dateTime = new Date(post.created).toLocaleDateString('uk', {});
    $: localePrefix = $locale === 'uk' ? '' : $locale + '/';
</script>


<li class="post-item">
    <a href="/{localePrefix}blog/{post.id}" class="post-item__thumb">
        <img src={post.thumbnail} alt={post.title} loading="lazy" class="post-item__image">
    </a>
    <div class="post-item__content">
        <time class="post-item__time">{dateTime}</time>
        <h3 class="post-item__title">
            <a href=/{localePrefix}blog/{post.id}>{post.title}</a>
        </h3>
        <div class="post-item__excerpt">
            {post.excerpt}
        </div>
        <a href="/{localePrefix}blog/{post.id}" class="post-item__more-link">{$LL.blog.more()}</a>
    </div>
</li>
    

<style>
    .post-item {
        background-color: #fff;
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: var(--box-shadow);
    }

    .post-item__thumb {
        width: 100%;
        position: relative;
        display: block;
        height: 0;
        padding-top: 60%;
    }
    
    .post-item__image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .post-item__content {
        padding: 1.5rem;
        display: flex;
        flex-flow: column nowrap;
        row-gap: 0.5rem;
    }

    .post-item__title {
        font-size: 1.7rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .post-item__title a {
        color: inherit;
        text-decoration: none;
    }

    .post-item__excerpt {
        font-size: 1.4rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .post-item__more-link {
        color: var(--color-primary);
        text-decoration: none;
        font-weight: 500;
    }
</style>