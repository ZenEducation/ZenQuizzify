<script setup>
import PremAsideMenuItem from "@/components/Asidemenu/AsideMenuItem.vue";

defineProps({
  isDropdownList: Boolean,
  isCompact: Boolean,
  menu: {
    type: Array,
    default: () => [],
  },
  activeSecondaryMenuKey: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["menu-click"]);

const menuClick = (event, item) => {
  emit("menu-click", event, item);
};
let visible=ref(false);
const dropdownClick=(event)=>{

  visible.value=!visible.value;
}
const increaseProgress=(event)=>{
  console.log("Target Value",event)
}
</script>

<template>
  <ul>
    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div class="bg-blue-600 h-2.5 rounded-full" style="width: 12.6%"></div>
    </div>
    <PremAsideMenuItem
      v-for="(item, index) in menu"
      :key="index"
      :item="item"
      :is-dropdown-list="isDropdownList"
      :is-compact="isCompact"
      :active-secondary-menu-key="activeSecondaryMenuKey"
      @menu-click="menuClick"
    />

    <button
      id="dropdownDefaultButton"
      data-dropdown-toggle="dropdown"
      class="w-full text-white bg-gray-1200 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium  text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-black-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
      type="button"
      @click="dropdownClick"
    >
      Dropdown button &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <svg
        class="w-4 h-4 ml-2"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </button>
    <!-- Dropdown menu -->
    <div
      v-if="visible"
      id="dropdown"
      class="w-12  z-10 bg-white divide-y divide-gray-100  shadow w-44 dark:bg-gray-700"
      style="width:100%"
    >
      <ul
        class=" w-full py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li>
          <div v-if="!activeSecondaryMenuKey" class="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class=" w-full ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Default checkbox</label
            >
          </div>
        </li>
        <li>
          <div v-if="!activeSecondaryMenuKey" class="flex items-center">
            <input
              checked
              id="checked-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              @click="increaseProgress"
            />
            <label
              for="checked-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Checked state</label
            >
          </div>
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Earnings</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Sign out</a
          >
        </li>
      </ul>
    </div>
  </ul>
</template>
