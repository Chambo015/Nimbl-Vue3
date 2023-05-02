<script setup lang="ts">
import { useVideoStore } from '@/stores/video';
import { storeToRefs } from 'pinia';
import {  defineAsyncComponent } from 'vue';

const CardMintsItem = defineAsyncComponent(() =>
  import('./CardMintsItem.vue')
)

const videoStore = useVideoStore()
const {videoList} = storeToRefs(videoStore)
</script>

<template>
   <section>
    <h2 class="uppercase text-4xl font-bold">mints</h2>
        <div
            class="grid grid-cols-[repeat(auto-fill,minmax(475px,1fr))] gap-5 mt-8">
            <CardMintsItem v-for="video in videoList" :video="video" :key="video.id" />
        </div>
   </section>
</template>
