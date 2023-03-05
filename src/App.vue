<script setup lang="ts">
import TheBlobs from './components/TheBlobs.vue';
import { useBlobsStore } from './stores/blobs';


const blobs =  useBlobsStore()
</script>

<template>
    <div
        class="bg-gradient-main dark:bg-dark-violet dark:bg-none relative overflow-hidden">
        <TheBlobs v-if="blobs.visibleBlobs" />
        <RouterView />
    </div>
</template>
