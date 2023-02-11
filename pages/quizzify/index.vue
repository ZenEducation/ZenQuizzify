<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain class="text-center">
        <div class="flex justify-center items-center h-full">
          <div v-if="quizes === null">
            <div class="flex flex-column flex-wrap justify-start">
              <select-square v-for="category in quiz_categories" :key="category.id" :category="category" @click="() => selectCategory(category.id)" />
            </div>
          </div>
          <div v-else-if="quiz_index < quizes.length">
            <h1 class="text-3xl font-sans mt-24 md:mt-24 lg:mt-32 font-bold text-gray-800 dark:text-gray-300 text-center">
              {{ quizes[quiz_index].text }}
            </h1>
            <div class="flex flex-row justify-center mt-16">
              <div class="bg-gray-50 dark:bg-gray-800 shadow-lg dark:shadow-dark rounded-2xl min-w-80 w-96">
                <div
                  class="pt-6 pb-2 cursor-pointer"
                >
                  <div 
                    v-for="choice, index in quizes[quiz_index].choices"
                    :key="choice.id" 
                    @click="() => checkSelect(index)"
                    class="bg-gray-100 dark:bg-gray-900 mx-6 h-16 w-auto mb-4 rounded-md flex items-center"
                  >
                    <input type="radio" name="answer" class="ml-5 dark:bg-gray-800" :value="choice">
                    <label class="text-gray-700 dark:text-gray-400 text-lg ml-4 cursor-pointer">{{ choice }}</label>
                  </div>
                </div>
              </div>
            </div>
            <h1 v-if="result !== null" class="text-3xl font-sans mt-12 lg:mt-12 font-bold text-center" :class="result?'text-green-600':'text-red-600'">
              {{ result ? "Correct" : "Wrong" }}
            </h1>
            <BaseButton
              class="mt-12"
              color="danger"
              small
              label="Cancel"
              :outline="true"
              @click.prevent="cancelTest"
            />
          </div>
          <div v-else>
            <h1 class="text-4xl font-bold mt-48 mb-48 text-center">You got <span :class="corrections/quizes.length < 0.7 ? 'text-red-500' : 'text-green-500'">{{ (corrections/quizes.length*100).toFixed(1) }}%.</span></h1>
            <BaseButton
              class="mt-12"
              color=""
              small
              label="Go to home"
              :outline="true"
              @click.prevent="cancelTest"
            />
          </div>
        </div>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SectionMain from "@/components/Sections/SectionMain.vue";
import SelectSquare from "@/components/SelectSquare/index.vue";
import { loadQuizCategory, loadQuestions } from '~~/API/index';
import BaseButton from '~~/components/Buttons/BaseButton.vue';

const corrections = ref(0)
const quiz_index = ref(0);
const quiz_categories = ref(null);
const quizes = ref(null);
const result = ref(null);
const selectCategory = async (id) => {
  const quiz_category = await loadQuestions(id);
  quizes.value = quiz_category.questions.items
}
const cancelTest = () => {
  quizes.value = null
  quiz_index.value = 0
  corrections.value = 0
}
quiz_categories.value = await loadQuizCategory();

const checkSelect = (index) => {
  result.value = index === quizes._rawValue[quiz_index._rawValue].correctChoiceIndex
  setTimeout(() => {
    quiz_index.value++
    if(result.value) corrections.value++
    result.value = null
  }, 1000);
}
</script>