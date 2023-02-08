<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <date-picker />
      </SectionMain>
    </NuxtLayout>
  </div>
</template>

<script setup>
import SectionMain from "@/components/Sections/SectionMain.vue";
import DatePicker from "@/components/Calendars/index.vue";
</script>