<template>
  <div class="bg-[#111] pt-[100px]">
    <aboutone />

    <div class="mb-[-140px] relative flex justify-center items-center">
      <img
        class="image"
        src="/images/about/about-me/video-about-us-2.jpg"
        alt="image"
      />
      <img
        class="youtube"
        src="/images/icons/icon-youtube-play.png"
        alt="icon"
      />
    </div>

    <div class="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        height="100"
        width="100%"
        fill="#161821"
      >
        <path
          class="elementor-shape-fill"
          d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"
        ></path>
      </svg>
    </div>

    <div class="blue">
      <abouttwo />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "frontend",
});
</script>

<style scoped>
.youtube {
  position: absolute;
  z-index: 9;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* .image {
  margin-bottom: -140px !important;
} */
</style>