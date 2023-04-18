<script setup lang="ts">
import { useMediaControls } from '@vueuse/core';
import { IconConfetti, IconHeadDiamond, IconLike, IconArrowLeft } from '../icons';
import { onMounted, ref, type PropType } from 'vue';

const props = defineProps({
    closeVideo: Function as PropType<() => void>,
    video: {
        type: String,
        default: '/shorts1.mp4'
    }
})

const videoEl = ref(null)
const {
    playing,
    buffered,
    currentTime,
    duration,
    waiting,
    volume,
    muted,
    supportsPictureInPicture,
    togglePictureInPicture,
} = useMediaControls(videoEl, {
    src: {
        src: props.video,
        type: 'video/mp4',
    },
});

onMounted(() => {
    volume.value = 0.5;
});
</script>

<template>
    <div class="overflow-hidden pb-height-navigation relative">
        <figure class="h-full w-auto flex justify-center items-center bg-black">
            
            <video autoplay class="h-full object-cover "  crossorigin="anonymous" ref="videoEl" :loop="true" @click="playing = !playing">
               <!--  <source src="/shorts.mp4" type="video/mp4" /> -->
            </video>
        </figure>
        <!-- Верхняя часть -->
        <div class="absolute inset-x-0 top-0 pt-7 px-5 bg-gradient-to-b from-black to-transparent">
            <div class="flex">
                <button @click="closeVideo" class="self-start"><IconArrowLeft  class="w-6 h-6 cursor-pointer" /></button>
                <div class="ml-auto flex gap-3">
                    <div>
                        <p class="font-medium text-right">Helen_NFT</p>
                        <p class="text-sm text-white/50 text-right">245,511 members</p>
                    </div>
                    <div>
                        <img class="h-[50px] w-[50px] rounded-full" src="/img/users/1.png" alt="channelImg">
                    </div>
                </div>
            </div>
        </div>
        <!-- Нижняя часть -->
        <div class="absolute inset-x-0 bottom-0 mb-height-navigation pb-5 pt-10 font-bold px-5 bg-gradient-to-t from-black to-transparent">
            <p class="ine-clamp-2">Gary Vee Explains How He Made $90 Million on NFTs & Why</p>
            <div class="flex gap-6 mt-5">
                <div class="flex gap-2 hover:text-[#8C98FF] cursor-pointer">
                    <IconLike class="w-6 h-6"/><span>5 304</span>
                </div>
                <div class="flex gap-2 hover:text-[#8C98FF] cursor-pointer">
                    <IconConfetti class="w-6 h-6"/><span>5 304</span>
                </div>
                <div class="flex gap-2 hover:text-[#8C98FF] cursor-pointer">
                    <IconHeadDiamond class="w-6 h-6"/><span>5 304</span>
                </div>
            </div>
        </div>
        
    </div>
</template>


<style scoped>

</style>