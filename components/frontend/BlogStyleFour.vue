<template>
    <div class="blog-section section-padding bg-f8f8f8">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title text-center" data-aos="fade-up">
                <span class="sub-title">Articles & Tips</span>
                <h2 class="title playfair-font">Latest from <span>the blog</span></h2>
            </div>
            <!-- Section Title End -->

            <div class="row max-mb-n30">
                <div class="grid-item col-lg-3 col-md-6 max-mb-30" data-aos="fade-up" v-for="blog in blogs.slice(9, 13)" :key="blog.id">
                    <div class="blog-2 health-blog">
                        <div class="thumbnail">
                            <NuxtLink :to="`/blog/${blog.slug}`" class="image">
                                <img :src="blog.imgSrc" :alt="blog.title">
                            </NuxtLink>
                        </div>
                        <div class="info">
                            <NuxtLink to="/blog/blog-grid" class="category">
                                {{ blog.categories.name }}
                            </NuxtLink>
                            <h3 class="title">
                                <NuxtLink :to="`/blog/${blog.slug}`">{{ blog.title }}</NuxtLink>
                            </h3>
                            <p>{{ blog.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row max-mt-70">
                <div class="text-center col-lg-7 mx-auto">
                    <NuxtLink to="/blog/blog-grid" class="link link-lg link-color">
                        Wanna transform your life?​ 
                        <mark>
                            View all posts 
                            <i class="far fa-long-arrow-right"></i>
                        </mark>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '~/data/blog.json'

    export default {
        data () {
            return {
                data
            }
        },

        computed: {
            blogs() {
                return this.data.blogs.filter(item => {
                    return item.categories
                })
            }
        }
    };
</script>