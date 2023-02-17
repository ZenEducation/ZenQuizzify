<template>
    <div class="testimonial-section section-padding">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title text-center margin-bottom-100" data-aos="fade-up">
                <h2 class="title fz-48">Why People Talk About <span>MaxCoach</span>?</h2>
            </div>
            <!-- Section Title End -->

            <div class="row">
                <div class="col-lg-12">
                    <div class="testimonial-slider-three" data-aos="fade-up">
                        <swiper
                            :slides-per-view="1"
                            :space-between="30"
                            :speed="1000"
                            :loop="false"
                            :autoplay="{'delay': 3000}"
                        >
                            <swiper-slide v-for="testimonial in testimonials" :key="testimonial.index">
                                <div class="testimonial-five">
                                    <div class="author-image">
                                        <img :src="testimonial.imgSrc" :alt="(testimonial.name) + 'Thumbnail'">
                                    </div>
                                    <div class="author-content">
                                        <div class="content">
                                            <h3 class="title">{{ testimonial.text }}</h3>
                                        </div>
                                        <div class="author-info">
                                            <div class="cite">
                                                <h6 class="name">{{ testimonial.name }}</h6>
                                                <span class="position">/ {{ testimonial.position }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Animation Shape Start -->
                                    <ShapeWithAnimation addClassName="shape-1" dataDepth="3" imgSrc="/images/shape-animation/shape-2.svg" />
                                    <ShapeWithAnimation addClassName="shape-2" dataDepth="-3" imgSrc="/images/shape-animation/shape-3.png" />
                                    <!-- Animation Shape End -->
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import SwiperCore, { Autoplay} from 'swiper/core';
    SwiperCore.use([Autoplay]);

    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data () {
            return {
                testimonials: [
                    {
                        name: "Uzzal Hossain",
                        position: "Front-end Developer",
                        text: "I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation.",
                        imgSrc: "/images/testimonial/200/testimonial-avata-01.jpg"
                    },
                    {
                        name: "Maria Merry",
                        position: "Head of Marketing",
                        text: "I'm a very strict person so I require everything to be organized and neat. MaxCoach guys just got me.",
                        imgSrc: "/images/testimonial/200/testimonial-avata-02.jpg"
                    }
                ]
            }
        }
    };
</script>