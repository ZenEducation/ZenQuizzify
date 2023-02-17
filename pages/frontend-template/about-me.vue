<template>
    <div class="about-me-page-wrapper">
        <HeaderStyleTwo />
        <OffCanvasMobileMenu />

        <div class="page-title-section section-padding-top-0 bg-f5f5f5">
            <div class="page-breadcrumb position-static">
                <div class="container">
                    <ul class="breadcrumb">
                        <li>
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li class="current">About Me</li>
                    </ul>
                </div>
            </div>
        </div>

        <OnlineCoachingLessons class="bg-f5f5f5" />
        <VideoAbout />
        <TestimonialStyleNine class="pt-0" />
        <BrandLogoCarousel class="pt-0" />
        <CounterUpFour :style="{ backgroundColor: '#f5f7fa' }" />
        <NewsletterOne />
        <FooterStyleOne addClassName="light-color" addBackgroundColor="bg-navy-blue" />
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: 'About Me'
            }
        },
    };
</script>


