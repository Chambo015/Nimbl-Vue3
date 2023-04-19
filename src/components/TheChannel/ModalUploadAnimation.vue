<template>
    <div class="relative">
        <img src="/img/video-card/2.jpg" alt="video_preview" class="aspect-video ">
        <div class="absolute inset-x-0 inset-y-0 bg-black/70 px-3 flex items-center flex-col justify-center">
            <p v-if="!doneLoading" class="text-3xl font-medium h-[60px]">{{ integerLoading }}</p>
            <div v-else class="w-[60px] h-[60px] rounded-full bg-[#44475B] flex items-center justify-center">
                <div class="check_icon"></div>
            </div>
            <span class="bg-white/20 w-full h-[2px] block mt-5">
                <span class="bg-[#8C98FF] h-full block transition-[width]" :style="{width: integerLoading}"></span>
            </span>
            
        </div>
    </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { computed, ref } from 'vue';

let tl = gsap.timeline()


const loading = ref(0)
const integerLoading = computed(() => Math.ceil(loading.value) + '%' );
const doneLoading = computed(() => Math.ceil(loading.value) >= 100 );
tl.to(loading, {value: 20, duration: 7});
tl.to(loading, {value: 80, duration: 7});
tl.to(loading, {value: 100, duration: 5});
</script>

<style scoped lang="scss">
.check_icon {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDM4IDM4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzQuOTI3IDcuODIzYTIuMzc5IDIuMzc5IDAgMCAxIDAgMy4zNjJsLTE5IDE5YTIuMzc5IDIuMzc5IDAgMCAxLTMuMzYyIDBsLTkuNS05LjVhMi4zNzkgMi4zNzkgMCAwIDEgMy4zNjItMy4zNjJsNy44MjMgNy44MTVMMzEuNTczIDcuODIzYTIuMzc5IDIuMzc5IDAgMCAxIDMuMzYyIDBoLS4wMDhaIi8+PC9zdmc+");
    background-repeat: no-repeat;
    background-position: center;

width: 38px;
height: 38px;
}
</style>