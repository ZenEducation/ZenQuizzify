<template>
    <div class="blog">
        <div class="thumbnail">
            <NuxtLink :to="`/blog/${blog.slug}`" class="image">
                <img :src="blog.imgSrc" :alt="blog.alt">
            </NuxtLink>
        </div>
        <div class="info">
            <NuxtLink to="/blog/blog-grid" class="category">{{ blog.categories.name }}</NuxtLink>
            <h3 class="title">
                <NuxtLink :to="`/blog/${blog.slug}`">{{ blog.title }}</NuxtLink>
            </h3>
            <ul class="meta">
                <li><i class="far fa-calendar"></i>{{ blog.date }}</li>
                <li><i class="far fa-eye"></i>{{ blog.view }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['blog']
    };
</script>