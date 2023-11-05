<template>
    <div class="bg-[#1B2224] py-6 px-4 md:py-20 md:px-20 w-full">
        <div class="max-w-[1000px] mx-auto">
            <HeaderNavbar/>
            <main class="bg-[#24282C] rounded-2xl">
                <router-view>
                </router-view>
            </main>
            <BottomNavbar/>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeaderNavbar from './HeaderNavbar.vue';
import BottomNavbar from './BottomNavbar.vue';
</script>

<style scoped>

</style>