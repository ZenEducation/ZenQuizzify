<template>
    <div class="intro8-section-wrap intro8-slider">
        <swiper
            :slides-per-view="1"
            :space-between="30"
            :speed="1000"
            :autoplay='{
                "delay": 7000
            }'
        >
            <swiper-slide v-for="(hero, index) in heroItems" :key="index">
                <div class="intro8-section">
                    <div class="intro8-section-bg bg-cover" :style="{backgroundImage: `url('${hero.bgImgSrc}')`}"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="intro8-content text-left">
                                    <span class="label">{{ hero.label }}</span>
                                    <h1 class="title">{{ hero.title }}</h1>
                                    <p>{{ hero.desc }}</p>
                                    <NuxtLink to="/contact-us" class="btn btn-primary-two btn-hover-secondary">Get start for free</NuxtLink>
                                </div>
                                <div class="intro8-slide-pages">
                                    <span class="current">{{`${index + 1}`.padStart(2, 0)}}<span class="separator">/</span></span>
                                    <span class="total">{{ `${heroItems.length}`.padStart(2, 0) }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import SwiperCore, { Pagination, Autoplay } from 'swiper/core'
    SwiperCore.use([Pagination, Autoplay])

    export default {
        components: {
            Swiper,
            SwiperSlide
        },

        data() {
            return {
                heroItems: [
                    {
                        label: "Bestseller",
                        title: "MaxHome: Body Confidence in 4 Weeks - Week One Trial",
                        desc: "The best method for fat loss! This is Week One of our online HIIT training fitness course designed for the busy person!",
                        bgImgSrc: "/images/intro/intro8/hero-slider-slide-bg-01.jpg"
                    },
                    {
                        label: "Bestseller",
                        title: "Online Fitness Business: Sell Products, Training & Coaching",
                        desc: "How To Start A Health And Fitness Business: For Personal Training, Health And Wellness Coaching & Information Products",
                        bgImgSrc: "/images/intro/intro8/hero-slider-slide-bg-02.jpg"
                    },
                    {
                        label: "Bestseller",
                        title: "Use Your Health & Fitness Expertise to Earn A Living Online",
                        desc: "I turned my experience as a personal trainer into an online health business that allowed me to quit working at the gym!",
                        bgImgSrc: "/images/intro/intro8/hero-slider-slide-bg-03.jpg"
                    }
                ]
            }
        }
    }
</script>