<template>
    <div class="footer-section" :class="addBackgroundColor">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-md-5 max-mb-50">
                    <div class="footer-widget" :class="addClassName">
                        <h4 class="footer-widget-title">Address</h4>
                        <div class="footer-widget-content">
                            <div class="content">
                                <p>Your address goes here</p>
                                <p>0123456789 (9am - 5pm EST, Monday - Friday)</p>
                                <p>
                                    <a href="mailto:info@example.com">info@example.com</a>
                                </p>
                            </div>
                            <div class="footer-social-inline">
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i class="fab fa-facebook-square"></i>
                                </a>
                                <a href="https://twitter.com/" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-4 col-sm-7 max-mb-50">
                    <div class="footer-widget" :class="addClassName">
                        <h4 class="footer-widget-title">Explore</h4>
                        <div class="footer-widget-content">
                            <ul class="column-2">
                                <li>
                                    <NuxtLink to="/">Start here</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/">Success story</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/blog/blog-grid">Blog</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/course/courses-grid-one">Courses</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/about-us-one">About us</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/contact-us">Contact us</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-3 col-sm-5 col-12 max-mb-50">
                    <div class="footer-widget" :class="addClassName">
                        <h4 class="footer-widget-title">Information</h4>
                        <div class="footer-widget-content">
                            <ul>
                                <li>
                                    <NuxtLink to="/">Membership</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/">Purchase guide</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/">Privacy policy</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/">Terms of service</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Copyright Start -->
            <div class="row max-mt-20">
                <div class="col">
                    <p class="copyright">&copy; {{ new Date().getFullYear() }} <b>Maxcoach</b> Made with <i class="fa fa-heart text-danger"></i> by <a href="https://hasthemes.com/" target="_blank"><b>HasThemes</b></a></p>
                </div>
            </div>
            <!-- Footer Copyright End -->
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'addClassName', 
            'addBackgroundColor' 
        ],
    }
</script>