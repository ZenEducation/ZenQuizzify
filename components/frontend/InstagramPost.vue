<template>
    <div class="item-grid grid-style--1">
        <div class="thumb">
            <NuxtLink to="/">
                <img :src="instagram.imgSrc" :alt="instagram.alt">
            </NuxtLink>
            <div class="item-info">
                <div class="inner">
                    <NuxtLink to="">
                        <i class="fas fa-heart"></i>
                        {{ instagram.like }}
                    </NuxtLink>
                    <NuxtLink to="">
                        <i class="fas fa-comment-dots"></i>
                        {{ instagram.comment }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['instagram']
    };
</script>