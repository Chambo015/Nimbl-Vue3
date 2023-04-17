<script setup lang="ts">
import AppCategory from '@/components/AppCategories/AppCategory.vue';
import { RouterView } from 'vue-router';


</script>

<template>
    <div class="flex flex-col w-full h-full overflow-hidden">
        <div class="px-5 py-4 flex justify-center"><AppCategory /></div>
        <main v-auto-animate="{ duration: 300 }" class="overflow-hidden flex-grow flex-col flex "><RouterView /></main>
    </div>
</template>

<style scoped>

</style>