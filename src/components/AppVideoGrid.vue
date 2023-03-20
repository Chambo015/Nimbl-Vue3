<script setup lang="ts">
import { useVideoStore } from '@/stores/video';
import { storeToRefs } from 'pinia';
import {  defineAsyncComponent } from 'vue';

const AppVideoGridItem = defineAsyncComponent(() =>
  import('./AppVideoGridItem.vue')
)

const videoStore = useVideoStore()
const {videoList} = storeToRefs(videoStore)
</script>

<template>
    <div
        class="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-5 ">
        <AppVideoGridItem v-for="video in videoList" :video="video" :key="video.id" />
    </div>
</template>
