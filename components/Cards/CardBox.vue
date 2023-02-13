<script setup>
import { computed, useSlots } from "vue";
import CardBoxComponentBody from "@/components/Cards/CardBoxComponentBody.vue";
import CardBoxComponentFooter from "@/components/Cards/CardBoxComponentFooter.vue";

const props = defineProps({
  rounded: {
    type: String,
    default: "rounded-2xl",
  },
  flex: {
    type: String,
    default: "flex-col",
  },
  thumbnail: Object,
  hasComponentLayout: Boolean,
  hasTable: Boolean,
  isForm: Boolean,
  isHoverable: Boolean,
  isModal: Boolean,
});

const emit = defineEmits(["submit"]);

const slots = useSlots();

const hasFooterSlot = computed(() => slots.footer && !!slots.footer());

const componentClass = computed(() => {
  const base = [
    props.rounded,
    props.flex,
    props.isModal ? "dark:bg-slate-900" : "dark:bg-slate-900/70",
  ];

  if (props.isHoverable) {
    base.push("hover:shadow-lg transition-shadow duration-500");
  }

  return base;
});

const submit = (event) => {
  emit("submit", event);
};
</script>

<template>
  <component
    :is="isForm ? 'form' : 'div'"
    :class="componentClass"
    class="bg-white flex"
    @submit="submit"
  >
  <div
    class="overflow-hidden transition-all bg-gray-100 rounded h-full group hover:bg-white hover:shadow-4xl hover:shadow-black/[0.12] max-w-[370px] mx-2"
  >
    <figure class="relative overflow-hidden">
      {{ thumbnail?.src && (
                        <img v
                            className="tw-w-full tw-rounded-t"
                            src={thumbnail.src}
                            alt={thumbnail?.alt || "Course"}
                            width={thumbnail?.width || 370}
                            height={thumbnail?.height || 229}
                            loading={thumbnail?.loading || "lazy"}
                        />
                    )}}
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
  </div>
    <slot v-if="hasComponentLayout" />
    <template v-else>
      <CardBoxComponentBody :no-padding="hasTable">
        <slot />
      </CardBoxComponentBody>
      <CardBoxComponentFooter v-if="hasFooterSlot">
        <slot name="footer" />
      </CardBoxComponentFooter>
    </template>
  </component>
</template>
