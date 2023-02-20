<template>
  <div>
    <div class="w-full">
      <div class="flex justify-center">
        <button
          class="
            flex
            justify-center
            items-center
            text-[#20ad96] text-[14px]
            font-bold
            py-3
            px-20
            rounded-md
            border border-white
          "
        >
          Load More
          <icon class="w-4 h-4 ml-3 text-[#20ad96]" name="uil:rotate-360" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
data(){
    return{}
},


}
</script>

<style>
button::after {
  content: "";
}
</style>