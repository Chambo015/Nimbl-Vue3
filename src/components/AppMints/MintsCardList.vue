<script setup lang="ts">
import { ref } from 'vue';
import MintsCard from './MintsCardItem.vue';
import MintsPlayer from './MintsVideoPlayer.vue';
import { storeToRefs } from 'pinia';
import {useVideoStore} from '@/stores/video'

const isOpenPlayer = ref(false)

const videoStore = useVideoStore()
const {clipList} = storeToRefs(videoStore)
</script>

<template>
    <section class="py-4 overflow-hidden flex flex-col bg-default-glass backdrop-blur-sm">
        <div class="relative flex items-center gap-8 px-4 mb-4 [&>span]:cursor-pointer ">
            <span class="relative pl-6"
                ><span
                    class="absolute left-2 top-1/2 flex h-2 w-2 -translate-y-1/2 rounded-full bg-gradient-text"></span>
                Live Mints</span
            ><span class="text-white/50 hover:text-white">Upcoming</span>
        </div>
        <div v-if="!isOpenPlayer" class="overflow-y-auto pb-height-navigation">
            <ul  class="grid grid-cols-[repeat(auto-fill,minmax(175px,1fr))] gap-5 pl-3 ">
                <li v-for="c in clipList" :key="c.id" ><MintsCard :open-video="() => isOpenPlayer = true" :title="c.title" :preview-img-url="c.poster" :channel-img-url="c.avatar" :price="c.price"/></li>
            </ul>
        </div>
        <MintsPlayer :close-video="() => isOpenPlayer = false" v-else />
    </section>
</template>

<style scoped></style>
