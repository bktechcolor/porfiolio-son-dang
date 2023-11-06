<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
    <div v-for="meal in props.meals" :key="meal.idMeal">
      <MealItem :meal="meal" />
    </div>
  </div>
  <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
    There are no meals
  </div>
</template>

<script setup lang="ts">
import MealItem from './MealItem.vue';
const  props  = defineProps({
  meals: {
    required: true,
    type: Array<{
      idMeal: string
    }>,
  }
})

</script>