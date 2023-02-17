<template>
    <div class="intro11-slider-wrap">
        <div class="intro11-slider">
            <swiper
                :slides-per-view="1"
                :space-between="30"
                :speed="1000"
                :loop="false"
                :navigation="swiperOptions.navigation"
            >
                <swiper-slide v-for="(hero, index) in heroItems" :key="index">
                    <div class="intro11-section section-fluid-two">
                        <div class="container">
                            <div class="row align-items-center">
                                <!-- Intro Content Start -->
                                <div class="col-md-6">
                                    <div class="intro11-content text-left">
                                        <span class="sub-title">{{ hero.subTitle }}</span>
                                        <h2 class="title">{{ hero.title }}</h2>
                                        <NuxtLink to="/contact-us" class="btn btn-primary-three btn-hover-secondary-three"> 
                                            Get started today 
                                        </NuxtLink>
                                    </div>
                                </div>
                                <!-- Intro Content End -->

                                <!-- Intro Image Start -->
                                <div class="col-md-6">
                                    <div class="intro-image">
                                        <img :src="hero.imgSrc" alt="intro image">
                                    </div>
                                </div>
                                <!-- Intro Image End -->
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="home11-slider-prev swiper-button-prev main-slider-nav">
                <i class="fal fa-angle-left"></i>
            </div>
            <div class="home11-slider-next swiper-button-next main-slider-nav">
                <i class="fal fa-angle-right"></i>
            </div>
        </div>

        <!-- Animation Shape Start -->
        <ShapeWithAnimation addClassName="shape-1" data-depth="3" imgSrc="/images/intro/intro11/maxcoach-shape-15.png" />
        <ShapeWithAnimation addClassName="shape-2" data-depth="3" imgSrc="/images/intro/intro11/kitchen-shape-strawberry.png" />
        <ShapeWithAnimation addClassName="shape-3" data-depth="3" imgSrc="/images/shape-animation/maxcoach-shape-16.png" />
        <!-- Animation Shape End -->
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import SwiperCore, { Navigation } from 'swiper/core'
    SwiperCore.use([Navigation])

    export default {
        components: {
            Swiper,
            SwiperSlide,
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },

        data() {
            return {
                swiperOptions: {
                    navigation: {
                        nextEl: '.home11-slider-next',
                        prevEl: '.home11-slider-prev',
                    },
                },

                heroItems: [
                    {
                        subTitle: "Family Nutrition",
                        title: "Take Your Food to The Next Level With These Methods",
                        imgSrc: "/images/intro/intro11/kitchen-hero-slider-slide-01-image.jpg",
                    },
                    {
                        subTitle: "Life Mastery",
                        title: "Be Happy, Healthy And Successful Simplified",
                        imgSrc: "/images/intro/intro11/kitchen-hero-slider-slide-02-image.jpg",
                    },
                    {
                        subTitle: "Cook with me!",
                        title: "The truth about dieting for weight loss, healthy eating",
                        imgSrc: "/images/intro/intro11/kitchen-hero-slider-slide-03-image.jpg",
                    }
                ]
            }
        }
    };
</script>