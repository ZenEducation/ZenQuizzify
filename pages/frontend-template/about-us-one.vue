<template>
    <div class="about-page-wrapper-01">
        <HeaderStyleTwo />
        <OffCanvasMobileMenu />
        <PageBannerOne bgImg="backgroundImage: url('/images/page-banner/about-us-01-hero-bg.jpg')" title="Grow strong to take up the challenges of life. The top lessons for getting you back on track." />
        <AboutUsOne />
        <AboutVideoOne addClassName="pt-0" />
        <TestimonialStyleTwo />
        <CallToActionOne addClassName="bg-f8f8f8 pt-0" />
        <TeamStyleTwo />
        <NewsletterOne />
        <FooterStyleOne addClassName="light-color" addBackgroundColor="bg-navy-blue" />
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: 'About Us'
            }
        },
    };
</script>


