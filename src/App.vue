<template>
  <main class="max-w-[1100px] mx-auto py-20">
    <router-view></router-view>
  </main>
  
</template>
<script lang="ts" setup>
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
