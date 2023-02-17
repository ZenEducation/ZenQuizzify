<template>
    <div class="testimonial-section section section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="about-content testimonial-content mb-sm-50 mb-xs-50">
                        <span class="sub-title">Testimonials</span>
                        <h2 class="title">Why Do People <span>Hearts </span> Us?</h2>
                        <p>Seeking for verbals of our service quality? Find them here. Everything is transparent and straightforward for your sense of jusitifcation. </p>
                        <NuxtLink to="/contact-us" class="link link-lg"> 
                            Have questions?​ <mark>Get Free Form <i class="far fa-long-arrow-right"></i></mark>
                        </NuxtLink>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="testimonial-slider-vertical">
                        <swiper
                            :slides-per-view="1"
                            :space-between="30"
                            :speed="1000"
                            :loop="false"
                            :autoplay='{
                                "delay": 2500
                            }'
                        >
                            <swiper-slide v-for="testimonial in testimonials" :key="testimonial.id">
                                <div class="testimonial-two testimonial-three bg-f5f5f5">
                                    <div class="content">
                                        <h4 class="title">{{ testimonial.heading }}</h4>
                                        <p>{{ testimonial.text }}</p>
                                    </div>
                                    <div class="author-info">
                                        <div class="image">
                                            <img :src="testimonial.image" :alt="testimonial.alt">
                                        </div>
                                        <div class="cite">
                                            <h6 class="name">{{ testimonial.name }}</h6>
                                            <span class="position">/ {{ testimonial.position }}</span>
                                        </div>
                                    </div>
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
                        id: 1,
                        heading: "High level of efficiency and scientific teaching methods",
                        text: "I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to adopt for learners.",
                        name: "Florence Themes",
                        position: "Multimedia Admin",
                        image: "/images/testimonial/70/testimonial-1.jpg",
                        alt: "image"
                    },
                    {
                        id: 2,
                        heading: "Professional team of specialists and passionate mentors at reach",
                        text: "I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
                        name: "Madley Pondor",
                        position: "Multimedia Admin",
                        image: "/images/testimonial/70/testimonial-2.jpg",
                        alt: "image"
                    },
                    {
                        id: 3,
                        heading: "Professional team of specialists and passionate mentors at reach",
                        text: "I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
                        name: "Madley Pondor",
                        position: "Multimedia Admin",
                        image: "/images/testimonial/70/testimonial-2.jpg",
                        alt: "image"
                    }
                ]
            }
        }
    };
</script>