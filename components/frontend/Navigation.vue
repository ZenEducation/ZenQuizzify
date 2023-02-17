<template>
    <nav class="site-main-menu">
        <ul>
            <li class="has-children position-static">
                <NuxtLink to="/">
                    <span class="menu-text">Home</span>
                </NuxtLink>
                <span class="menu-toggle"><i class="far fa-angle-down"></i></span>
                <ul class="mega-menu">
                    <li>
                        <ul>
                            <li>
                                <NuxtLink to="/">
                                    <span class="menu-text">MaxCoach Education <span class="badge">Hot</span></span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/course-portal">
                                    <span class="menu-text">Course Portal</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/distant-learning">
                                    <span class="menu-text">Distant Learning <span class="badge">Hot</span></span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/multimedia-pedagogy">
                                    <span class="menu-text">Multimedia Pedagogy</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/modern-schooling">
                                    <span class="menu-text">Modern Schooling</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/remote-training">
                                    <span class="menu-text">Remote Training</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/business">
                                    <span class="menu-text">Business</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/health-coaching">
                                    <span class="menu-text">Health Coaching</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/gym-coaching">
                                    <span class="menu-text">Gym Coaching <span class="badge primary">New</span></span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/kitchen-coach">
                                    <span class="menu-text">Kitchen Coach <span class="badge primary">New</span></span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item-50">
                        <NuxtLink to="/">
                            <img src="/images/others/mega-menu.jpg" alt="menu-image">
                        </NuxtLink>
                    </li>
                </ul>
            </li>
            <li class="has-children">
                <NuxtLink to="">
                    <span class="menu-text">Pages</span>
                </NuxtLink>
                <span class="menu-toggle">
                    <i class="far fa-angle-down"></i>
                </span>
                <ul class="sub-menu">
                    <li>
                        <NuxtLink to="/about-me">
                            <span class="menu-text">About Me</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about-us-one">
                            <span class="menu-text">About Us 01</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about-us-two">
                            <span class="menu-text">About Us 02</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact-me">
                            <span class="menu-text">Contact Me</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact-us">
                            <span class="menu-text">Contact Us</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/login-register">
                            <span class="menu-text">Login Register</span>
                        </NuxtLink>
                    </li>
                </ul>
            </li>
            <li class="has-children">
                <NuxtLink to="">
                    <span class="menu-text">Courses</span>
                </NuxtLink>
                <span class="menu-toggle">
                    <i class="far fa-angle-down"></i>
                </span>
                <ul class="sub-menu">
                    <li>
                        <NuxtLink to="/course/courses-grid-one">
                            <span class="menu-text">Courses Grid 01</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/course/courses-grid-two">
                            <span class="menu-text">Courses Grid 02</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/course/courses-grid-three">
                            <span class="menu-text">Courses Grid 03</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/course/course-details">
                            <span class="menu-text">Course Details</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/course/membership-levels">
                            <span class="menu-text">Membership Levels</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/course/become-a-teacher">
                            <span class="menu-text">Become a Teacher</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/course/profile">
                            <span class="menu-text">Profile</span>
                        </NuxtLink>
                    </li>
                </ul>
            </li>
            <li class="has-children">
                <NuxtLink to="">
                    <span class="menu-text">Event</span>
                </NuxtLink>
                <span class="menu-toggle">
                    <i class="far fa-angle-down"></i>
                </span>
                <ul class="sub-menu">
                    <li>
                        <NuxtLink to="/event/event">
                            <span class="menu-text">Events</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/event/event-details">
                            <span class="menu-text">Event Details</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/event/zoom-meetings">
                            <span class="menu-text">Zoom Meetings</span>
                        </NuxtLink>
                    </li>
                </ul>
            </li>
            <li class="has-children">
                <NuxtLink to="">
                    <span class="menu-text">Blogs</span>
                </NuxtLink>
                <span class="menu-toggle">
                    <i class="far fa-angle-down"></i>
                </span>
                <ul class="sub-menu">
                    <li>
                        <NuxtLink to="/blog/blog-grid">
                            <span class="menu-text">Blog Grid</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blog/blog-classic">
                            <span class="menu-text">Blog Classic</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blog/blog-details">
                            <span class="menu-text">Blog Details</span>
                        </NuxtLink>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>