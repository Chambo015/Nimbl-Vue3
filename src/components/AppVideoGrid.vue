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
        class="mr-[5px] grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-5 overflow-y-scroll pr-[10px] pb-height-navigation">
        <AppVideoGridItem v-for="video in videoList" :video="video" :key="video.id" />
    </div>
</template>
