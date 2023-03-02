<template>
  <div class="py-[100px] pt-5 md:pt-[100px]">
    <headers class="flex flex-col items-center justify-center text-center">
      <template v-slot:headertwo>
        Sign up for our
        <span class="text-[#20AD96] font-[400]">Newsletter</span>
      </template>
    </headers>

    <div class="text-[18px] text-center mb-14 text-[#ddd]">
      Enter your email address to register to our newsletter subscription <br />
      delivered on a regular basis!
    </div>

    <div
      class="flex flex-col sm:flex-row items-center justify-start sm:justify-center min-h-[52px]"
    >
      <input
        class="inputstyle h-[56px] w-10/12 sm:w-8/12 md:w-4/12"
        placeholder="Your E-mail"
        type="email"
        name=""
        id=""
      />
      <button class="subscribe">Subscribe</button>
    </div>
  </div>
</template>