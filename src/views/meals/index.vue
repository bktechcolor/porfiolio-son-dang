<template>
    <div class="p-8 pb-0 text-orange-500">
        <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
    </div>
    <Meals :meals="meals" />
</template>

<script lang="ts" setup >
import {ref,onMounted} from 'vue'
import Meals from '../../components/Meals.vue';
import axios from 'axios'
const meals = ref([]);

onMounted(async () => {

  await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
  .then(({data}) => {
    meals.value =data.meals
    console.log(meals.value)
  })
})
</script>

<style scoped>

</style>