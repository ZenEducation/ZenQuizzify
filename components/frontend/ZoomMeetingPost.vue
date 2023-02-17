<template>
    <div class="zoom-event">
        <div class="thumbnail">
            <NuxtLink to="/" class="image">
                <img :src="post.imgSrc" :alt="post.title">
            </NuxtLink>
        </div>
        <div class="info">
            <h3 class="title">
                <NuxtLink to="/">{{ post.title }}</NuxtLink>
            </h3>
            <div class="zoom-id">
                <span class="label">Meeting ID: </span>
                <span class="value theme-color">{{ post.meetingID }}</span>
            </div>
            <ul class="meta">
                <li>
                    <i class="far fa-calendar"></i>
                    {{ post.date }} <span class="time">{{ post.time }}</span>
                </li>
                <li>
                    <i class="far fa-clock"></i>
                    {{ post.duration }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['post']
    };
</script>