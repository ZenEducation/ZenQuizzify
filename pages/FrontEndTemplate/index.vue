<script setup>
definePageMeta({
  layout: "frontend",
});
import Hero from "@/components/FrontEndTemplate/Hero/layout1.vue";
import Heading from "@/components/FrontEndTemplate/Heading/heading.vue";
import ServiceArea from "@/components/FrontEndTemplate/ServiceArea/Index.vue";
import AboutArea from "@/components/FrontEndTemplate/AboutArea/Index.vue";
</script>

<template>
    <div>
        <Heading />
         <Hero />
         <ServiceArea />
         <AboutArea />
    </div>
</template>
