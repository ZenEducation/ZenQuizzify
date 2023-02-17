<template>
    <div class="course box-shadow">
        <div class="thumbnail">
            <NuxtLink :to="`/course/${course.slug}`" class="image">
                <img :src="course.image" :alt="course.title">
            </NuxtLink>
        </div>
        <div class="info">
            <span v-if="course.price > 0" class="price">${{ course.price }}</span>
            <span v-else class="price">Free</span>
            <h3 class="title">
                <NuxtLink :to="`/course/${course.slug}`">{{ course.title }}</NuxtLink>
            </h3>
            <ul class="meta">
                <li>
                    <i class="far fa-file-alt"></i>
                    {{ course.lessons }}
                </li>
                <li>
                    <i class="far fa-user-alt"></i>
                    {{ course.students }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['course']
    };
</script>