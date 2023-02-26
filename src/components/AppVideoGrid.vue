<script setup lang="ts">
import { key } from '@/store';
import { computed, defineAsyncComponent } from 'vue';
import { useStore } from 'vuex';

const AppVideoGridItem = defineAsyncComponent(() =>
  import('./AppVideoGridItem.vue')
)

const store = useStore(key);
const videos = computed(() => store.state.videos.videos);
</script>

<template>
    <div
        class="mr-[5px] grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-5 overflow-y-scroll pr-[10px] pb-height-navigation">
        <AppVideoGridItem v-for="video in videos" :video="video" :key="video.id" />
    </div>
</template>
