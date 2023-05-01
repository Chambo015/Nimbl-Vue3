<template>
    <section class="aspect-video w-full relative">
        <div class="w-full absolute h-full before:absolute before:w-full before:h-full before:bg-black/70 isolate before:z-20 -z-[1]">
            <img src="/img/drop-slider/1.png" alt="slider_bg" class="w-full h-full object-cover z-10 relative block">
        </div>
        <div class="absolute inset-x-3 inset-y-3 []">
            <!-- Left Top -->
            <div class="bg-gradient-line-right w-[30%] h-[2px] absolute left-0 top-0"></div>
            <div class="bg-gradient-line-right w-[15%] h-[2px] absolute left-0 top-0 rotate-90 origin-bottom-left"></div>

            <!-- Left Bottom -->
            <div class="bg-gradient-line-right w-[30%] h-[2px] absolute left-0 bottom-0"></div>
            <div class="bg-gradient-line-right w-[15%] h-[2px] absolute left-0 bottom-0 origin-bottom-left -rotate-90"></div>

            <!-- Right Top -->
            <div class="bg-gradient-line-left w-[30%] h-[2px] absolute right-0 top-0"></div>
            <div class="bg-gradient-line-left w-[15%] h-[2px] absolute right-0 top-0 rotate-[270deg] origin-top-right"></div>

            <!-- Right Bottom -->
            <div class="bg-gradient-line-left w-[30%] h-[2px] absolute right-0 bottom-0"></div>
            <div class="bg-gradient-line-left w-[15%] h-[2px] absolute right-0 bottom-0 rotate-90 origin-bottom-right"></div>
        </div>
        <div class="absolute w-[55%] left-14 top-1/2 -translate-y-1/2">
            <h3 class="font-ethnocentric text-2xl">MAKOTO NO-MIN E</h3>
            <p class="mt-5">Enjoy 0% marketplace fees for Makoto No-Min E 24h post-mint, only on Nimbl</p>
            <button class="text-lg leading-none px-4 bg-[#393939] h-10 mt-9">Make an offer</button>
        </div>
        <div class="absolute bottom-4 inset-x-0 z-50 flex justify-center items-center gap-1">
            <button class="bg-light-blue scale-125 w-2 h-2 rounded-full"></button>
            <button class="bg-white/10 w-2 h-2 rounded-full"></button>
            <button class="bg-white/10 w-2 h-2 rounded-full"></button>
            <button class="bg-white/10 w-2 h-2 rounded-full"></button>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>