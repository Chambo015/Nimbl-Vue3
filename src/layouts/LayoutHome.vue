<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheNavigation from '@/components/TheNavigation.vue';
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <header><TheHeader /></header>
        <main class="flex-grow"><RouterView /></main>
        <footer class="mt-auto"><TheNavigation /></footer>
    </div>
</template>
