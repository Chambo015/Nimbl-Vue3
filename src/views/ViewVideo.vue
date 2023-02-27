<script setup lang="ts">
import AppVideoPlayer from '@/components/AppVideoPlayer.vue';
import { useVideoStore } from '@/stores/video';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const idParams = computed(() => parseInt(route.params.id as string));

const videoStore = useVideoStore();
const video = computed(() => videoStore.getVideoById(idParams.value));
</script>

<template>
    <div class="grid h-full w-full grid-cols-12 gap-5 overflow-hidden py-5">
        <div class="video-scrollbar col-span-8 overflow-scroll pl-5 pb-height-navigation">
            <AppVideoPlayer class="aspect-video h-auto w-auto" />
            <div class="w-full bg-[rgba(192,192,192,0.1);] p-4">
                <h1 class="truncate text-[22px]">{{ video?.title }}</h1>
                <div>
                    <div>100k views</div>
                    <div>4 hours ago</div>
                    <div>
                        <div class="before:content-['#']">ETH-NFT</div>
                        <div class="before:content-['#']">ETH-NFT</div>
                        <div class="before:content-['#']">ETH-NFT</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-4"></div>
    </div>
</template>

<style scoped lang="scss">
.video-scrollbar {
    &::-webkit-scrollbar {
        width: px;
    }
    &::-webkit-scrollbar-thumb {
            background: transparent;
     }
}
</style>
