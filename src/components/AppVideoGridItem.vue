<script setup lang="ts">
import type { VideoI } from '@/types';
import { computed, type PropType } from 'vue';
import { cropImage, randomNumber } from '@/utils';

import * as Icon from '@/components/icons';
import { useRouter } from 'vue-router';
import videosModule from '@/store/modules/videos';

const props = defineProps({
    video: {
        type: Object as PropType<VideoI>,
        required: true,
    },
});

const router = useRouter()

/* const handleLoadImg = async (e: any) => {
    const image = e.target as HTMLImageElement;
    const canvas = await cropImage(image.src, 1);

    image.src = canvas.toDataURL();
};
 */

const handleClickVideo = () => {
    router.push({name: 'video', params: {id : props.video.id}})
} 

const views = computed(() => randomNumber(90000, 999999));
</script>

<template>
    <div
        class="group flex cursor-pointer flex-col transition-shadow duration-300 hover:bg-gradient-active-tab hover:shadow-md"
        aria-orientation="vertical"
        @click="handleClickVideo">
        <div class="relative aspect-video w-full overflow-hidden">
            <img
                :src="video.poster"
                alt="preview"
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-300 will-change-transform group-hover:scale-105" />
        </div>
        <div class="flex items-center bg-default-glass py-1 px-2 backdrop-blur-sm">
            <div class="flex items-center">
                <img
                    :src="video.avatar"
                    width="30"
                    height="30"
                    :alt="video.channel"
                    loading="lazy"
                    class="mr-2 h-8 w-8 rounded-full object-cover" />
                <RouterLink to="/channel" class="text-[white]/80 hover:text-white" @click.stop="() => {}">{{ video.channel }}</RouterLink>
            </div>
            <div class="ml-auto">
                <div class="mb-1 text-right leading-none">Floor Price:</div>
                <div class="gradient-text text-right font-ethnocentric text-[15px] leading-none">
                    {{ video.price }} NMBL
                </div>
            </div>
        </div>
        <div class="flex flex-grow flex-col p-2">
            <p class="line-clamp-2" :title="video.title">{{ video.title }}</p>
            <div class="mt-auto flex items-center gap-6 pt-[5px]">
                <div class="inline-flex items-center">
                    <Icon.IconEye class="mr-2 inline-block w-4 translate-y-[1px]" />
                    <span class="text-xs leading-none">{{ views }}</span>
                </div>
                <div class="inline-flex items-center">
                    <Icon.IconClock class="mr-2 inline-block h-3 w-3" />
                    <span class="text-xs leading-none">9 days ago</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
