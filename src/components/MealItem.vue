<template>
    <div
      class="bg-white shadow rounded-xl hover:scale-105 transition-all"
    >
      <div class="thumb-image cursor-pointer">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="rounded-t-xl w-full h-48 object-cover"
        />
      </div>
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          {{ filters.truncateWords(meal.strInstructions, 20) }}
        </p>
        <div class="flex items-center justify-between">
          <YouTubeButton :href="meal.strYoutube" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import * as filters from '../filters/index.ts'
  import YouTubeButton from './YouTubeButton.vue';
  const { meal } = defineProps({
    meal: {
      required: true,
      type: Object
    }
  })
  
  </script>