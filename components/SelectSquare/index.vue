<template>
  <div class="text-center">
    <div
      class="bg-white dark:bg-gray-800 shadow-lg dark:shadow-none rounded-2xl h-80 w-64 m-10 hover:shadow-xl dark:hover:shadow-dark cursor-pointer"
    >
      <div class="flex justify-center pt-12">
        <img v-if="category.name === 'geography'" src="@/assets/svg/geography.svg" alt="An illustration of a globe" width="160" height="160" data-xblocker="passed" style="visibility: visible;">
        <img v-if="category.name === 'history'" src="@/assets/svg/history.svg" alt="An illustration of a globe" width="160" height="160" data-xblocker="passed" style="visibility: visible;">
        <img v-if="category.name === 'science'" src="@/assets/svg/science.svg" alt="An illustration of a globe" width="160" height="160" data-xblocker="passed" style="visibility: visible;">
        <img v-if="category.name === 'space'" src="@/assets/svg/space.svg" alt="An illustration of a globe" width="160" height="160" data-xblocker="passed" style="visibility: visible;">
      </div>
      <h2 class="text-gray-800 dark:text-gray-300 font-sans font-medium text-xl pt-8">{{ category.name }}</h2>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "@/components/Buttons/BaseButton.vue";

defineProps({
  category: {
    type: Object,
    default: null,
  },
});
</script>