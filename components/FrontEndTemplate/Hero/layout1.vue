<template>
  <div
    class="
      h-full
      md:min-h-[750px]
      xl:min-h-[820px]
      py-[50px]
      relative
      flex
      items-center
      isolate
      bg-pearl
      overflow-hidden
    "
  >
    <div class="container 3xl:max-w-full 3xl:px-37">
      <div class="grid md:gap-7.5 md:grid-cols-2">
        <div
          class="
            content
            text-center mb-7.5
            md:text-left md:self-center
          "
          style="opacity: 1; transform: none"
        >
          <span
            class="
              text-sm mb-2.5
              -tracking-tightest
              font-bold
              leading-loose
              uppercase
              text-secondary
              block
              md:mb-[18px] md:tracking-[4px]
            "
            >MaxCoach is the lifebuoy</span
          >
          <h2
            class="
              text-3xl
              sm:text-[40px]
              lg:text-[54px]
              xl:text-[63px]
              leading-[1.13] text-secondary
            "
          >
            In Mentoring <br />2B a Better You.
          </h2>
          <p
            class="
              text-md
              sm:text-[16px]
              font-medium leading-relaxed mt-3
              sm:mx-auto
              max-w-[540px]
              md:ml-0 md:text-lg
            "
          >
            The right mentoring relationship can be a powerful tool for
            professional growth. Bark up the right tree.
          </p>
          <a
            class="
              font-bold
              justify-center
              items-center
              border
              border-solid
              rounded-md
              transition-colors
              min-w-max
              inline-flex
              bg-primary
              border-primary
              text-white
              hover:bg-secondary
              hover:border-secondary
              hover:text-white
              text-md px-7 py-1 min-h-[48px]
              md:min-h-[52px] md:px-10
              mt-3
            "
            href="/start-here"
            ><i class="far fa-download mr-3"></i>Download free guide</a
          >
        </div>
        <div
          class="
            course
            flex space-between justify-center
            xl:justify-end
            relative z-10
          "
          style="opacity: 1; transform: none"
        >
          <img
            class="
              absolute left-0
              -top-7.5
              max-w-[100px] z-1
              sm:relative
              sm:left-auto
              sm:top-auto
              sm:z-20
              sm:self-end
              sm:flex-auto
              sm:ml-auto
              mr-5
              sm:mb-[100px] sm:max-w-[120px]
              md:-mr-7.5 md:-ml-[60px]
              lg:max-w-[186px]
            "
            src="../../../images/FrontEndTemplate/intro-popular-course.png"
            alt="popular"
            width="186"
            height="157"
          />
          <div
            class="
              overflow-hidden
              transition-all
              bg-gray-100
              rounded
              h-full
              group
              hover:bg-white hover:shadow-4xl hover:shadow-black/[0.12]
              max-w-[370px]
            "
          >
            <figure class="relative overflow-hidden">
              <img
                src="../../../images/FrontEndTemplate/course-2.jpg"
                alt="Customer-centric Info-Tech Strategies"
                width="370"
                height="229"
                loading="eager"
                class="
                  w-full transition-transform duration-1000 ease-out
                  group-hover:scale-110
                "
              />
            </figure>
            <div class="relative px-7.5 pt-7.5 pb-10">
              <span
                class="
                  capitalize
                  font-extrabold
                  bg-primary
                  text-white
                  leading-none
                  rounded-full
                  flex
                  justify-center
                  items-center
                  absolute
                  right-5
                  -translate-y-1/2
                  top-0 w-[60px] h-[60px] text-lg
                  md:w-[70px] md:h-[70px] md:text-2xl
                "
                >free</span
              ><span
                class="
                  font-medium
                  block
                  uppercase
                  mb-1
                  tracking-[2px]
                  text-secondary-light
                "
                >Jan 01, 2018</span
              >
              <h3 class="leading-normal text-secondary m-0">
                <a href="/courses/course-02"
                  >Customer-centric Info-Tech Strategies</a
                >
              </h3>
              <p class="mt-2.5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div
            class="
              intro1-scene
              absolute
              -z-1 -right-11 -bottom-11
              w-[136px]
            "
            style="
              transform: translateX(34.2667px) translateY(-13.3px)
                translateZ(0px);
            "
          >
            <img
              src="../../../images/FrontEndTemplate/shape-1.png"
              alt=""
              width="136"
              height="136"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        bottom-shape
        absolute
        -bottom-px
        left-0 w-full h-[70px] z-1 rotate-180
      "
    >
      <svg
        class="w-full h-full fill-white"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        height="100"
      >
        <path d="M 0 0 L100 0 Q 50 200 0 0"></path>
      </svg>
    </div>
  </div>
</template>


