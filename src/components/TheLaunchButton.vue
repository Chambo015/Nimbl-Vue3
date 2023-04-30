<template>
    <div v-if="!personStore.enabledFullscreen" class="fixed inset-0 z-[999999] bg-black/50 backdrop-blur-md flex items-center justify-center">
            <button
                @click="() => {personStore.setFullscreen(true);  enterFullScreen()}"
                class="bg-btn-steel-hero bottom-[2%] left-[25%] isolate flex w-[50%] items-center justify-center overflow-hidden rounded-lg border-t border-white/10 p-3 backdrop-blur-3xl sm:bottom-[6%] sm:left-[31.8%] sm:w-[37%]">
                <div
                    class="absolute -inset-2 z-50 bg-[auto_100%] bg-no-repeat opacity-100 mix-blend-overlay bg-gradient-main"
                   ></div>
                <div
                    class="border_blur absolute inset-x-2 bottom-5 top-2 z-20 rounded-md border-4 border-[#CA12F6] blur-sm duration-200 sm:inset-x-3 md:border-[7px]"></div>
                <span
                    class="absolute z-50 font-['Rollbox'] text-sm font-extrabold uppercase sm:text-base md:text-lg lg:text-2xl xl:text-lg 2xl:text-2xl"
                    >Launch open prototype 1</span
                >
            </button>
        </div>
</template>

<script setup lang="ts">
import { usePersonFeature } from '@/stores/personFeature';
import { useFullscreen } from '@vueuse/core';

const personStore = usePersonFeature();
const {  enter: enterFullScreen } = useFullscreen(document.documentElement);
</script>

<style scoped lang="scss">
button {
    will-change: transform;
    transform: perspective(500px) rotateX(4deg); /* Поворачиваем относительно оси X */
    transform-origin: 50% 80%;
    box-shadow: inset 0px -12px 2px 0px rgb(17 17 28 / 70%), -1px 9px 6px 2px rgba(0, 0, 0, 0.5),
        8px 7px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.2s linear;
    outline: none;
    @media (max-width: 640px) {
        box-shadow: inset 0px -8px 2px 0px rgb(17 17 28 / 70%), -1px 9px 6px 2px rgba(0, 0, 0, 0.5),
            8px 7px 5px 0px rgba(0, 0, 0, 0.1);
    }
    &::before {
        content: '';
        display: block;
        inset: 0;
        width: 100%;
        transition: padding-top 0.2s linear;
        padding-top: calc(100% / 5.4);
    }
    &:active {
        box-shadow: inset 0px -2px 1px 0px rgb(17 17 28 / 59%), 1px 1px 20px 0px rgba(0, 0, 0, 0.5),
            4px 4px 5px 0px rgba(0, 0, 0, 0.1);
        transform: perspective(500px) rotateX(5deg) translateY(2px);
        &::before {
            padding-top: calc(100% / 6);
        }
        span {
            text-shadow: 0px 1px 3px rgba(255, 255, 255, 0.75);
        }
        .border_blur {
            bottom: 0.5rem;
            left: 0.5rem;
            right: 0.5rem;
        }
    }
}
span {
    transition: all 0.2s ease-in-out;
    text-shadow: 0px 2px 5px rgba(255, 255, 255, 0.75);
    letter-spacing: 0.025em;
}
</style>
