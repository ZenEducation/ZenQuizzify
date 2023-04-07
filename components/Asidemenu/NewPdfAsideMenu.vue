<template>
  <div id="app">
    <!--Sidebar with Dimmer -->
    <div class="fixed inset-0 flex z-40">
      <!-- Sidebar -->
      <div
        class="absolute flex top-0 h-screen z-20"
        :class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']"
      >
        <!--Drawer -->

        <button
          @click.prevent="toggle()"
          class="w-12 h-48 p-1 relative top my-auto rounded text-white bg-gray-600 text-center focus:outline-none hover:bg-gray-500 transition-color duration-300"
          style="position: fixed; bottom: 890px; left: 0px; height: 50px"
        >
          <span
            :class="[right ? '-rotate-360 invisible' : 'rotate-0']"
            class="block transform origin-center font-bold"
            style="display: block"
          >
            ||
          </span>
        </button>
        <!-- Sidebar Content -->
        <div
          ref="content"
          class="transition-all duration-700 bg-gray-300 overflow-hidden flex items-center justify-center"
          :class="[open ? 'max-w-lg' : 'max-w-0']"
        >
          <!-- <div class="w-48 text-center font-bold text-xl">Sidebar</div> -->
          <div
            class="container mx-auto px-4"
            style="position: relative; bottom: 300px; max-width: 300px"
          >
            <div class="grid grid-cols-6 md:gap-4 lg:gap-6">
              <div class="col-start-1 col-end-12">
                <div
                  class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
                >
                  <div
                    class="bg-blue-600 h-2.5 rounded-full"
                    style="width: 45%"
                  ></div>
                </div>
              </div>
              <div class="col-start-1 col-end-12">
                  <accordion class="mb-4">
                    <template v-slot:title>
                      <span class="font-semibold text-xl">Accordion 1</span>
                    </template>
                    <template v-slot:content>
                      <p>
                        <b>Lorem</b>, ipsum dolor sit amet consectetur
                        adipisicing elit. Quia, porro. Non a excepturi,
                        voluptatibus ipsam magnam, eligendi, accusantium ipsa
                        quae quis praesentium voluptate saepe ullam sint ea
                        itaque consectetur impedit?
                      </p>
                    </template>
                  </accordion>
              </div>
              <br />
              <div class="col-start-1 col-end-12">
                <accordion class="mb-4">
                  <template v-slot:title>
                    <span class="font-semibold text-xl">Accordion 2</span>
                  </template>
                  <template v-slot:content>
                    <p>
                      <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing
                      elit. Quia, porro. Non a excepturi, voluptatibus ipsam
                      magnam, eligendi, accusantium ipsa quae quis praesentium
                      voluptate saepe ullam sint ea itaque consectetur impedit?
                    </p>
                  </template>
                </accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <transition name="fade">
				<div
					v-if="dimmer && open"
					@click="toggle()"
					class="flex-1 bg-gray-400 bg-opacity-75 active:outline-none z-10"
				/>
			</transition> -->
    </div>

    <!-- Page Content -->
    <!-- <div
			class="absolute inset-1/2 rounded bg-green-500 w-1/2 h-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-white"
		> -->
    <slot />
    <!-- </div> -->
  </div>
</template>

<script>
import accordion from "@/components/Accordion/accordion";

export default {
  data() {
    return {
      open: false,
      dimmer: true,
      right: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
      this.$emit('clickPdf',this.open);
    },
  },
};
</script>

<style>
html {
  background: #efefef;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
