<template>
  <div class="blue py-[100px] px-5 md:px-[100px]">
    <h2 class="title">Login Register</h2>

    <div
      class="flex flex-col lg:flex-row items-start justify-center lg:justify-between gap-4"
    >
      <login />
      <register />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "frontend",
});
</script>

<style scoped>
.title {
  font-size: 48px;
  margin: 0;
  padding-bottom: 80px;
  text-align: center;
  font-weight: 700;
  line-height: 1.3;
  color: white;
}
</style>