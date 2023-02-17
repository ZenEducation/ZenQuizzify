<template>
    <div class="section section-padding fix">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title text-center" data-aos="fade-up">
                <span class="sub-title">equip yourself with the power of education</span>
                <h2 class="title">Learn the secrets to <span>Life Success</span>, <br class="d-none d-md-block">these people have got the key.​</h2>
            </div>
            <!-- Section Title End -->

            <!--Testimonial Slider Start -->
            <div class="testimonial-slider" data-aos="fade-up">
                <swiper
                    :slides-per-view="2"
                    :space-between="30"
                    :speed="1000"
                    :pagination="swiperOptions.pagination"
                    :breakpoints="swiperOptions.breakpoints"
                >
                    <swiper-slide v-for="testimonial in testimonialData" :key="testimonial.id">
                        <div class="testimonial-two">
                            <div class="author-info">
                                <div class="image">
                                    <img :src="testimonial.imgSrc" :alt="testimonial.alt">
                                </div>
                                <div class="cite">
                                    <div class="testimonial-rating">
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                    <h6 class="name">{{ testimonial.name }}</h6>
                                    <span class="position">/ {{ testimonial.position }}</span>
                                </div>
                            </div>
                            <div class="content">
                                <p>{{ testimonial.text }}</p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <!-- add pagination -->
                <div class="swiper-pagination text-center"></div>
            </div>
            <!--Testimonial Slider End -->
        </div>
    </div>
</template>

<script>
    import SwiperCore, { Pagination } from 'swiper/core'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    SwiperCore.use([Pagination])

    import testimonialData from '../data/testimonial.json'

    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        
        data () {
            return {
                testimonialData,

                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                    },
                    breakpoints: {
                        992: {
                            slidesPerView: 2
                        },
                        320: {
                            slidesPerView: 1
                        },
                    }
                }
            }
        },
    };
</script>