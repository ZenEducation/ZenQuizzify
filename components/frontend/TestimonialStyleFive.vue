<template>
    <div class="testimonial-section" :class="addClassName" :style="bgImg">
        <div class="container animation-shape">
            <div class="row">
                <div class="col-lg-12">
                    <div class="testimonial-slider-three">
                        <swiper
                            :slides-per-view="1"
                            :space-between="30"
                            :speed="1000"
                            :loop="false"
                        >
                            <swiper-slide v-for="testimonial in testimonials" :key="testimonial.id">
                                <div class="testimonial-four">
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
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>

            <!-- Animation Shape Start -->
            <ShapeWithAnimation addClassName="shape-1" dataDepth="4" />
            <ShapeWithAnimation addClassName="shape-2" dataDepth="4" />
            <ShapeWithAnimation addClassName="shape-3" dataDepth="4" />
            <ShapeWithAnimation addClassName="shape-4" dataDepth="4" />
            <ShapeWithAnimation addClassName="shape-5" dataDepth="4" />
            <ShapeWithAnimation addClassName="shape-6" dataDepth="4" />
            <!-- Animation Shape End -->
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue'

    export default {
        props: ['addClassName', 'bgImg'],

        components: {
            Swiper,
            SwiperSlide,
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },

        data () {
            return {
                testimonials: [
                    {
                        name: "Uzzal Hossain",
                        position: "Front-end Developer",
                        text: "I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation."
                    },
                    {
                        name: "Hossain Uzzal",
                        position: "Vue JS Developer",
                        text: "I'm a very strict person so I require everything to be organized and neat. MaxCoach guys just got me."
                    }
                ]
            }
        }
    };
</script>