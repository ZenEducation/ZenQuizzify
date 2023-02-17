<template>
    <div class="related-courses-section section-padding">
        <div class="container">
            <div class="section-title text-center mb-35" data-aos="fade-up">
                <h3 class="title">Related Courses​</h3>
            </div>

            <!-- Courses Wrapper Start -->
            <div class="courses-slider" data-aos="fade-up">
                <swiper
                    :slides-per-view="3"
                    :space-between="30"
                    :speed="1000"
                    :pagination="swiperOptions.pagination"
                    :breakpoints="swiperOptions.breakpoints"
                >
                    <swiper-slide class="mb-30" v-for="course in courseData.coursePostItem.slice(0, 5)" :key="course.id">
                        <CourseItem :course="course" />
                    </swiper-slide>
                </swiper>
                <div class="swiper-pagination text-center"></div>
            </div>
            <!-- Courses Wrapper End -->
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import SwiperCore, { Pagination } from 'swiper/core'
    SwiperCore.use([Pagination])

    import courseData from "~/data/courses.json"

    export default {
        components: {
            Swiper,
            SwiperSlide,
            CourseItem: () => import('@/components/CourseItem'),
        },

        data () {
            return {
                courseData,
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    },
                    breakpoints: {
                        992: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 2
                        },
                        320: {
                            slidesPerView: 1
                        }
                    }
                },
            }
        }
    };
</script>