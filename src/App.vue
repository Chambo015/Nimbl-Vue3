<script setup lang="ts">
import TheBlobs from './components/TheBlobs.vue';
import { useBlobsStore } from './stores/blobs';
// import TheLaunchButton from './components/TheLaunchButton.vue';

const blobs = useBlobsStore();
</script>

<template>
    <div class="relative overflow-hidden bg-gradient-main dark:bg-dark-violet dark:bg-none">
        <TheBlobs v-if="blobs.visibleBlobs" />
        <RouterView />
       <!--  <TheLaunchButton /> -->
    </div>
</template>

