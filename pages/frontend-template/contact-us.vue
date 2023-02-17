<template>
    <div class="contact-us-page-wrapper">
        <HeaderStyleTwo />
        <OffCanvasMobileMenu />

        <div class="page-title-section section-padding-top-0">
            <div class="page-breadcrumb position-static">
                <div class="container">
                    <ul class="breadcrumb">
                        <li>
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li class="current">Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="contact-information-section section-padding-bottom">
            <div class="container">
                <div class="row margin-bottom-85">
                    <div class="col-12">
                        <div class="contact-title max-width-740">
                            <h2 class="title">{{ contactData.infoHeading }}</h2>
                        </div>
                    </div>
                </div>
                <div class="row row-30 row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30">
                    <div class="col max-mb-30">
                        <div class="contact-info">
                            <div class="icon">
                                <i class="fal fa-map-marker-alt"></i>
                            </div>
                            <div class="info">
                                <h4 class="title">{{ contactData.address.title }}</h4>
                                <span class="info-text">{{ contactData.address.location }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col max-mb-30">
                        <div class="contact-info">
                            <div class="icon">
                                <i class="fal fa-phone"></i>
                            </div>
                            <div class="info">
                                <h4 class="title">{{ contactData.contact.title }}</h4>
                                <span class="info-text"> Mobile: <strong>{{ contactData.contact.mobileNo }}</strong> 
                                    <br> 
                                    Hotline: <strong>{{ contactData.contact.hotline }}</strong>
                                    <br>
                                    Mail: <a href="mailto:hello@hasthemes.com">{{ contactData.contact.email }}</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col max-mb-30">
                        <div class="contact-info">
                            <div class="icon">
                                <i class="fal fa-clock"></i>
                            </div>
                            <div class="info">
                                <h4 class="title">{{ contactData.workingHour.title }}</h4>
                                <span class="info-text">
                                    <p>{{ contactData.workingHour.dayOne }}</p>
                                    <p>{{ contactData.workingHour.dayTwo }}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="google-map-area">
            <div class="container">
                <iframe class="event-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.986005919501!2d-73.9685579655238!3d40.75862446708152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1c884e5%3A0x24fe1071086b36d5!2sThe%20Atrium!5e0!3m2!1sen!2sbd!4v1585132512970!5m2!1sen!2sbd"></iframe>
            </div>
        </div>

        <div class="contact-form-section section-padding text-center">
            <div class="container">
                <div class="row">
                    <div class="offset-lg-2 col-lg-8">
                        <div class="contact-title max-width-600">
                            <h2 class="title">{{ contactData.contactFormHeader }}</h2>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>

        <FooterStyleOne />
    </div>
</template>

<script>
    import contactData from '~/data/contact.json';

    export default {
        data () {
            return {
                contactData
            }
        },

        head() {
            return {
                title: 'Contact Us'
            }
        },
    };
</script>


