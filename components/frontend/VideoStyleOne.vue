<template>
    <div id="video-section-1" class="bg-pattern position-relative video-section-1" :style="{ 'background-color': '#f5f1ed', backgroundImage: `url('/images/bg/background-pattern-grid-line.png')` }">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title text-center" data-aos="fade-up">
                <span class="sub-title">The combination of all senses into learning</span>
                <h2 class="title">Learn with all your <span>SENSES​</span></h2>
            </div>
            <!-- Section Title End -->

            <!-- About Me Video Wrapper Start -->
            <div class="about-me-video-wrapper">
                <div class="about-me-video video-popup">
                    <img class="image" src="/images/about/about-me/about-me-popup-video-poster.jpg" alt="image">
                </div>

                <!-- Animation Shape Start -->
                <ShapeWithAnimation addClassName="shape-1" dataDepth="3" imgSrc="/images/shape-animation/shape-2.svg" />
                <ShapeWithAnimation addClassName="shape-2" dataDepth="-3" imgSrc="/images/shape-animation/shape-3.png" />
                <ShapeWithAnimation addClassName="shape-3" dataDepth="3" />
                <ShapeWithAnimation addClassName="shape-4" dataDepth="4" imgSrc="/images/shape-animation/shape-1.png" />
            </div>
        </div>

        <!-- Section Bottom Shape Start -->
        <div class="section-bottom-shape">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" height="100">
                <path class="elementor-shape-fill" d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
            </svg>
        </div>
        <!-- Section Bottom Shape End -->
    </div>
</template>

<script>

    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    };
</script>