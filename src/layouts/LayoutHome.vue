<script setup lang="ts">
import TheBlobs from '@/components/TheBlobs.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheNavigation from '@/components/TheNavigation.vue';
import { useBlobsStore } from '@/stores/blobs';

const blobs =  useBlobsStore()
</script>

<template>
    <div class="flex flex-col h-screen overflow-hidden ">
        <header><TheHeader /></header>
        <TheBlobs v-if="blobs.visibleBlobs" />
        <main class="flex-grow overflow-hidden relative z-10"><RouterView /></main>
        <footer class="mt-auto fixed z-[999999] inset-x-0 bottom-0"><TheNavigation /></footer>
    </div>
</template>
