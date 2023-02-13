<template>
    <div>
        <VideoArea v-if="this.content" :data="video-area" space="none" />
        <VideoArea v-else space="none" />
    </div>
  </template>
  
  <script>
  import { reactive, toRefs } from "vue";
  
  export default {
    data() {
        page: {
            content: [];
        }
    },
    setup() {
      const state = reactive({
        count: 0,
      });
  
      return {
        ...toRefs(state),
      };
    },
  };
  </script>
  
  <style lang="scss" scoped></style>