<script setup>
import Navigation from "./Navigation.vue";
</script>

<template>
  <header class="header relative" :class="{ 'is-sticky': isSticky }">
    <div
      class="
        header-inner
        py-[19px]
        xl:py-0
        z-50
        transition-all
        left-0
        top-0
        w-full
        h-auto
        absolute
        bg-white
      "
    >
      <div
        class="
          container
          grid grid-flow-col
          xl:grid-cols-[22%_minmax(56%,_1fr)_22%]
          items-center
          max-w-full
          px-3.8
          3xl:px-37
        "
      >
          <!-- Header Logo Start -->

          <NuxtLink to="/">
                               <img
              src="/images/logo/dark-logo.png"
              alt="Logo"
              width="158"
              height="26"
          />
                            </NuxtLink>
          <!-- Header Logo End -->

          <!-- Header Main Menu Start -->
          <div class="col d-none d-xl-block position-static">
            <Navigation />
          </div>
          <!-- Header Main Menu End -->

          <!-- Header Right Start -->
          <div class="col-xl-3 col-auto">
            <div class="header-right">
              <div class="inner">
                <ColorMode />

                <!-- Header Login Start -->
                <div class="header-login">
                  <NuxtLink to="/course/profile">
                    <i class="far fa-user-circle"></i>
                  </NuxtLink>
                </div>
                <!-- Header Login End -->

                <!-- Header Search Start -->
                <div class="header-search">
                  <button
                    class="header-search-toggle"
                    @click="isHidden = !isHidden"
                  >
                    <i class="far fa-search"></i>
                  </button>
                  <div class="header-search-form" v-show="!isHidden">
                    <form>
                      <input type="text" placeholder="Search..." />
                      <button>
                        <i class="fas fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <!-- Header Search End -->

                <!-- Header Mobile Menu Toggle Start -->
                <div class="header-mobile-menu-toggle d-xl-none ml-sm-2">
                  <button class="toggle">
                    <i class="icon-top"></i>
                    <i class="icon-middle"></i>
                    <i class="icon-bottom"></i>
                  </button>
                </div>
                <!-- Header Mobile Menu Toggle End -->
              </div>
            </div>
          </div>
          <!-- Header Right End -->
      </div>
    </div>
  </header>
</template>