<template>
    <div class="faq-section section-padding" :style="{backgroundColor: '#323043', backgroundImage: `url('/images/bg/map-dots-top-right-transparent.png')`}">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-6 col-lg-6">
                    <div class="about-me-video-wrapper about-us-one-video ml-minus-150 pr-60 pr-lg-0 pr-md-0 pr-sm-0 pr-xs-0">
                        <a href="https://www.youtube.com/watch?v=9No-FiEInLA" target="_blank">
                            <div class="about-me-video video-popup">
                                <img class="image" src="/images/video/home-business-video.jpg" alt="image">
                                <img class="icon" src="/images/icons/icon-youtube-play.png" alt="icon">
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="faq-info">
                        <h2 class="title">To Thrive In Business Today, You’ll Need a Good Plan</h2>
                        <AccordionStyleTwo />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            AccordionStyleTwo: () => import('@/components/AccordionStyleTwo'),
        }
    };
</script>