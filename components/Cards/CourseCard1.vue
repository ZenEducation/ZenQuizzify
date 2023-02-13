<script setup>
import BasicCourseCard from "./BasicCourseCard.vue";

const props = defineProps({
  thumbnail: Object,
  title: String,
  path: String,
  currency: String,
  price: Float32Array,
  totalLectures: Number,
  totalStudents: Number,
  badge: String,
});
</script>

<template>
  <BasicCourseCard :thumbnail="thumbnail" :badge="badge">
    <span
      className="text-2xl font-extrabold leading-none inline-flex mb-2 text-primary"
    >
      {{ currency }}
      {{ price }}
      <span className="text-lg self-end">.00</span>
    </span>
    <h3 className="text-xl leading-normal mb-0">
      <Anchor path="{path}"> {{ title }}</Anchor>
    </h3>
    <ul className="meta text-md flex flex-wrap mt-[30px] text-secondary-light">
      <li className="mr-7" v-if="totalLectures">
        <i className="far fa-file-alt mr-2.5" />
        <font-awesome-icon icon="file-alt" class="mr-2.5" />
        {{ totalLectures }} Lessons
      </li>
      <li v-if="totalStudents">
        <!-- <i className="far fa-user-alt mr-2.5" /> -->
        <font-awesome-icon icon="undo" class="mr-2.5" />
        {{ totalStudents }} Students
      </li>
    </ul>
  </BasicCourseCard>
</template>
