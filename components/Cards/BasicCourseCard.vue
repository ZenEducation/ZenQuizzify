<script setup>
import { computed, useSlots } from "vue";

const props = defineProps({
  cardClass: {
    type: String,
    default: ""
  },
  thumbnail: Object,
  thumbnailClass:
  {
    type: String,
    default: ""
  },
  bodyClass: {
    type: String,
    default: ""
  },
  badge: String,
  badgeClass: {
    type: String,
    default: ""
  }

});
</script>

<template>
    <div
      :class="`overflow-hidden transition-all bg-gray-100 rounded h-full group hover:bg-white hover:shadow-4xl hover:shadow-black/[0.12] max-w-[370px] mx-2 ${cardClass}`"
    >
      <figure class="relative overflow-hidden">
        <slot name="thumbnail"></slot>
        <img v-if = "thumbnail?.src"
            :class="`w-full transition-transform duration-1000 ease-out group-hover:scale-110 ${thumbnailClass}`"
            :src="thumbnail?.src || 'https://via.placeholder.com/370x229.png?text=Course'"
            :alt="thumbnail?.alt || 'Course'"
            :width="thumbnail?.width || 370"
            :height="thumbnail?.height || 229"
            :loading="thumbnail?.loading || 'lazy'"
        />
      </figure>
      <div :class="`relative px-7.5 pt-7.5 pb-10 ${bodyClass}`">
        <span v-if="badge.length" :class="`capitalize font-extrabold bg-primary text-white leading-none rounded-full flex justify-center items-center absolute right-5 -translate-y-1/2 top-0 w-[60px] h-[60px] text-lg md:w-[70px] md:h-[70px] md:text-2xl ${badgeClass}`">
            {{ badge }}
        </span>
        <slot></slot>
      </div>
    </div> ̰
  </template>
