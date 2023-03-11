<script setup lang="ts">
import {IconConfetti, IconHeadDiamond, IconLike} from '@/components/icons'
import type { IAnnouncement } from '@/types';
import type { PropType } from 'vue';

defineProps({
    announcement: {
        type: Object as PropType<IAnnouncement>,
        required: true,
    },
});
</script>
<!-- light-glass-mute -->
<template>
    <article class="flex relative bg-light-glass-mute p-5 bg-hover-mixin z-10 ">
        <img
            :src="announcement.author.avatar"
            alt="avatar"
            width="40"
            height="40"
            class="sticky top-1 mr-3 h-10 w-10 rounded-full object-cover z-20" />
        <div class="flex flex-grow flex-col relative z-20">
            <div class="mb-3 flex justify-between">
                <div>{{ announcement.author.name }}</div>
                <div class="text-white/50">01 feb 2023</div>
            </div>
            <p class="mb-5">{{ announcement.text }}</p>
            <div v-if="announcement.attachImg" class="mb-5">
                <img :src="announcement.attachImg" alt="attach_img" class="block aspect-video h-auto w-full" />
            </div>
            <footer class="flex gap-4 text-white/50">
                <div
                    class="inline-flex cursor-pointer items-center gap-1 text-xs transition-colors hover:text-light-blue">
                    <IconLike class="h-5 w-5" />
                    <div>{{ announcement.likeCount }}</div>
                </div>
                <div
                    class="inline-flex cursor-pointer items-center gap-1 text-xs transition-colors hover:text-light-blue">
                    <IconConfetti class="h-5 w-5" />
                    <div>1480</div>
                </div>
                <div
                    class="inline-flex cursor-pointer items-center gap-1 text-xs transition-colors hover:text-light-blue">
                    <IconHeadDiamond class="h-5 w-5" />
                    <div>4250</div>
                </div>
                <div class="ml-auto">12.4k views</div>
            </footer>
        </div>
    </article>
</template>

<style scoped lang="scss">

</style>
