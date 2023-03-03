<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheNavigation from '@/components/TheNavigation.vue';
</script>

<template>
    <div class="flex flex-col h-screen overflow-hidden">
        <header><TheHeader /></header>
        <main class="flex-grow overflow-hidden"><RouterView /></main>
        <footer class="mt-auto fixed z-[999999] inset-x-0 bottom-0"><TheNavigation /></footer>
    </div>
</template>
