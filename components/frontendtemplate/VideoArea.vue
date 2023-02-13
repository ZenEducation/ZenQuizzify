<template>
  <div>
    <frontendtemplateSection
    class="video-area tw-relative tw-mb-[140px]"
    space={{this.space}}
    bg={{this.bg}}
    >
    <div className="tw-container tw-relative tw-z-10">

      <AnimatedSectionTitle v-if="section_title"
        className="tw-mb-7.5 md:tw-mb-15"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
        variants={scrollUpVariants}
      />

      <div v-else className="tw-indent-[-9999px]">
          <h2>Video Area</h2>
      </div>

      <AnimatedVideo v-if="this.video && this.images[0]"
          video={video}
          class="tw-max-w-[970px] tw-mx-auto -tw-bottom-[140px] -tw-mt-[140px]"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={scrollUpVariants}
      />

      <div
        class="tw-absolute tw-z-1 tw-left-0 -tw-top-[90px] tw-w-[120px] tw-h-[130px] md:-tw-top-[120px] md:tw-w-[226px] md:tw-h-[226px]"
      >
        <Shape2 className="tw-fill-putty tw-w-full tw-h-full" />
      </div>

      <div
        class="tw-absolute tw-z-1 tw-top-0 tw-left-5 tw-w-[90px] tw-h-[90px] md:tw-w-auto md:tw-h-auto"
      >
          <img
            src="../../assets/images/shape-animation/shape-3.png"
            alt="shape"
            loading="lazy"
            width={178}
            height={178}
          />
      </div>
      <div
        class="tw-absolute tw-z-10 tw-top-10 tw-right-0"
      >
        <span className="tw-block -tw-indent-[99999px] tw-border-desert tw-rounded-full tw-border-[6px] tw-w-[45px] tw-h-[45px] md:tw-border-[12px] md:tw-w-[90px] md:tw-h-[90px]">
          shape 3
        </span>
      </div>

      <div
        class="tw-absolute tw-z-1 -tw-bottom-[45px] tw-right-5 tw-w-[85px] md:tw-w-auto"
      >
        <img
        src="../../assets/images/shape-animation/shape-1.png"
        alt=""
        loading="lazy"
        width={136}
        height={136}
        />
      </div>
    </div>
    <frontendtemplateBottomShape />
    </frontendtemplateSection>
  </div>
</template>

<script>
export default {
    name:'VideoArea',
    data(){
      return{
      section_title:{
          title,
          subtitle
      },
      images:[],
      video,
      bg:'tw-bg-spring',
      space:'top-bottom',
    }
    }
  }
</script>
<style scoped>
.video-area{
  background-image: "../assets/images/bg/background-pattern-grid-line.png";
}
</style>

