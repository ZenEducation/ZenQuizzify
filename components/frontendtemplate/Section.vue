<template>
    <section 
    :class="[this.classname]" 
    class="tw-py-15 md:tw-py-20 lg:tw-py-[100px]"
    this.bg
    style="[this.style]"
    >
        <slot>{{children}}</slot>
    </section>
</template>
<script>
export default {
    data(){
        space="top-bottom",
        bg,
        classname,
        style,
        children
    },
    props:['children']
}
</script>