<template>
    <div class="gym-coaching-page-wrapper">
        <HeaderTransparentTwo class="header-light header-sticky-bg-dark" />
        <OffCanvasMobileMenu />
        <SearchPopupFullscreen />
        <HeroGymCoaching />
        <CounterUpFive />
        <LearnGym />
        <GymOnlineCourse />
        <AboutApp />
        <BrandLogoCarousel :style="{ backgroundColor: '#161821' }" />
        <TestimonialStyleTen />
        <BlogStyleFive />
        <CallToActionThree />
        <FooterStyleOne addClassName="light-color" :style="{ backgroundColor: '#171621' }" />
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: 'Gym Coaching'
            }
        },
    };
</script>


