<template>
  <div class="w-auto min-w-[376px]">
    <div>
      <h3 class="sidebar-title">Search</h3>
      <div
        class="flex items-center h-[52px] bg-[#222] rounded-md border-[1px] border-[#333] relative px-[12px] md:max-w-[346px]"
      >
        <input
          type="search"
          name="searchinput"
          placeholder="Search..."
          class="bg-[#222] w-[230px] pl-2 placeholder:font-light"
        />
        <button
          class="absolute right-0 top-0 bottom-0 h-[100%] w-[48px] bg-[#222] hover:bg-[#20c997] rounded-r-md hover:text-white"
        >
          <icon class="w-4 h-4 text-[#20c997]" name="uil:search" />
        </button>
      </div>

      <div class="mt-[30px]">
        <h3 class="sidebar-title">Popular posts</h3>

        <ul class="flex flex-col">
          <li class="link">
            <icon class="w-4 h-4 mr-4 mt-2" name="uil:arrow-from-right" />
            <div>
              Brush Strokes Energize Trees in<br />
              Paintings
            </div>
          </li>

          <li class="link">
            <icon class="w-4 h-4 mr-4 mt-2" name="uil:arrow-from-right" />
            <div>
              Pocket-Sized Notebooks Hold<br />
              Miniature Paintings
            </div>
          </li>

          <li class="link">
            <icon class="w-4 h-4 mr-4 mt-2" name="uil:arrow-from-right" />
            <div>
              Connection Between Self-Portraits<br />
              and Identity
            </div>
          </li>

          <li class="link">
            <icon class="w-4 h-4 mr-4 mt-2" name="uil:arrow-from-right" />
            <div>12 Essential Bodyweight Exercises</div>
          </li>

          <li class="link">
            <icon class="w-4 h-4 mr-4 mt-2" name="uil:arrow-from-right" />
            <div>
              How to Keep Workout Fresh in the<br />
              New Year
            </div>
          </li>
        </ul>
      </div>

      <div class="mt-10">
        <h3 class="sidebar-title">Popular posts</h3>

        <div class="flex flex-wrap gap-2">
          <button class="purplebtn">Lifestyle</button>
          <button class="purplebtn">Health Care</button>
          <button class="purplebtn">Education</button>
          <button class="purplebtn">Kitchen</button>
          <button class="purplebtn">Course</button>
          <button class="purplebtn">Business</button>
          <button class="purplebtn">Gym</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.purplebtn {
  padding: 8px 20px;
  border-radius: 4px;
  color: white;
  font-size: small;
  background: #3f3a54;
  transition: all 0.3s ease-in-out;
}

.purplebtn:hover {
  background: #20ad96;
}

.link {
  display: flex;
  margin-left: 0;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 18px;
  color: #ddd;
  font-weight: 700;
  line-height: 1.78;
  position: relative;
  padding: 16px 30px 15px 0px;
  border-bottom: solid 0.5px #696969;
}

.sidebar-title {
  font-size: 24px;
  margin-bottom: 30px;
  font-weight: 700;
  line-height: 1.3;
  margin-top: 0;
  color: white;
}
</style>