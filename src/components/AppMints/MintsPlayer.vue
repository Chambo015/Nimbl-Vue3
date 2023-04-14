<script setup lang="ts">
import { IconConfetti, IconHeadDiamond, IconLike } from '../icons';



</script>

<template>
    <div class="overflow-hidden pb-height-navigation relative">
        <figure class="h-full w-auto flex justify-center items-center bg-black">
            <video autoplay muted loop class="h-full object-cover " playsinline>
                <source src="/shorts.mp4" type="video/mp4" />
            </video>
        </figure>
        <div class="absolute inset-x-0 bottom-0 mb-height-navigation pb-5 pt-10 font-bold px-5 bg-gradient-to-t from-black to-transparent">
            <p>Gary Vee Explains How He Made $90 Million on NFTs & Why...</p>
            <div class="flex gap-6 mt-6">
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