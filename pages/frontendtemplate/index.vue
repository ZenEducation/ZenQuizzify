<script setup>
import CourseCard1 from '~~/components/Cards/CourseCard1.vue';

definePageMeta({
  layout: "frontend",
});
</script>

<template>
  <!-- <div
    class="overflow-hidden transition-all bg-gray-100 rounded h-full group hover:bg-white hover:shadow-4xl hover:shadow-black/[0.12] max-w-[370px] mx-2"
  >
    <figure class="relative overflow-hidden">
      <img
        src="../../images/course-2.jpg"
        alt="Customer-centric Info-Tech Strategies"
        width="370"
        height="229"
        loading="eager"
        class="w-full transition-transform duration-1000 ease-out group-hover:scale-110"
      />
    </figure>
    <div class="relative px-7.5 pt-7.5 pb-10">
      <span
        class="capitalize font-extrabold bg-primary text-white leading-none rounded-full flex justify-center items-center absolute right-5 -translate-y-1/2 top-0 w-[60px] h-[60px] text-lg md:w-[70px] md:h-[70px] md:text-2xl"
        >free</span
      ><span
        class="font-medium block uppercase mb-1 tracking-[2px] text-secondary-light"
        >Jan 01, 2018</span
      >
      <h3 class="leading-normal text-secondary m-0">
        <a href="/courses/course-02">Customer-centric Info-Tech Strategies</a>
      </h3>
      <p class="mt-2.5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div> -->
  <CourseCard1
    :thumbnail="{
      src: 'https://via.placeholder.com/370x229.png?text=Course',
      alt: 'Customer-centric Info-Tech',
      width: 370,
      height: 229,
      loading: 'eager',
    }"
    badge="50"
    total-students="10"
  />
</template>
