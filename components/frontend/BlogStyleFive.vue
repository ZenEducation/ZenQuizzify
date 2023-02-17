<template>
    <div class="blog-section section-padding" :style="{ backgroundColor: '#161821' }">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title color-light text-center" data-aos="fade-up">
                <span class="sub-title">Wanna transform your life?</span>
                <h2 class="title fz-48">Latest From <span>The Blog</span></h2>
            </div>
            <!-- Section Title End -->
            <div class="row">
                <div class="col-lg-6">
                    <!-- Blog Start -->
                    <div class="blog-4" data-aos="fade-up">
                        <div class="thumbnail">
                            <NuxtLink to="/blog/blog-details" class="image">
                                <img src="/images/blog/570/blog-1.jpg" alt="Blog Image">
                            </NuxtLink>
                            <div class="post-overlay-content">
                                <ul class="meta">
                                    <li>
                                        <NuxtLink to="/blog/blog-details" class="category">Gym Coaching</NuxtLink>
                                    </li>
                                    <li>
                                        <i class="far fa-calendar"></i>Apr 06, 2020
                                    </li>
                                    <li>
                                        <i class="far fa-eye"></i>70 views
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="info">
                            <h3 class="title">
                                <NuxtLink to="/blog/blog-details">10 Essential Bodyweight Exercises</NuxtLink>
                            </h3>
                            <div class="desc">
                                <p>Essential bodyweight exercises are crucial to a well-rounded training routine because they’re versatile and can be done anywhere…</p>
                            </div>
                            <NuxtLink to="/blog/blog-details" class="blog-btn link link-lg"> 
                                <mark>Read more <i class="far fa-long-arrow-right"></i> </mark>
                            </NuxtLink>
                        </div>
                    </div>
                    <!-- Blog End -->
                </div>
                <div class="col-lg-6">
                    <div class="blog-list-wrap">
                        <div class="single-blog-list">
                            <div class="thumbnail">
                                <NuxtLink to="/blog/blog-details" class="image">
                                    <img src="/images/blog/200/blog-1.jpg" alt="Blog Image">
                                </NuxtLink>
                            </div>
                            <div class="info">
                                <ul class="meta">
                                    <li><i class="far fa-calendar"></i>May 15, 2020</li>
                                    <li><i class="far fa-eye"></i>52 views</li>
                                </ul>
                                <h3 class="title">
                                    <NuxtLink to="/blog/blog-details">How to Keep Workouts Fresh in the New Year</NuxtLink>
                                </h3>
                            </div>
                        </div>

                        <div class="single-blog-list">
                            <div class="thumbnail">
                                <NuxtLink to="/blog/blog-details" class="image">
                                    <img src="/images/blog/200/blog-2.jpg" alt="Blog Image">
                                </NuxtLink>
                            </div>
                            <div class="info">
                                <ul class="meta">
                                    <li><i class="far fa-calendar"></i>Jun 18, 2020</li>
                                    <li><i class="far fa-eye"></i>98 views</li>
                                </ul>
                                <h3 class="title">
                                    <NuxtLink to="/blog/blog-details">Approved Foods to Support a Healthy Immune System</NuxtLink>
                                </h3>
                            </div>
                        </div>

                        <div class="single-blog-list">
                            <div class="thumbnail">
                                <NuxtLink to="/blog/blog-details" class="image">
                                    <img src="/images/blog/200/blog-3.jpg" alt="Blog Image">
                                </NuxtLink>
                            </div>
                            <div class="info">
                                <ul class="meta">
                                    <li><i class="far fa-calendar"></i>Dec 26, 2020</li>
                                    <li><i class="far fa-eye"></i>85 views</li>
                                </ul>
                                <h3 class="title">
                                    <NuxtLink to="/blog/blog-details">Self-care And Stress Management</NuxtLink>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>