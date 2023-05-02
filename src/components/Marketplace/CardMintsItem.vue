<template>
    <div class="p-5 group bg-default-glass hover:bg-dark-glass transition-colors flex gap-4 cursor-pointer">
        <div class="relative flex-shrink-0 isolate">
            <img src="/img/marketplace/mints_card/1.png" alt="mints" class="w-[270px] h-[150px] object-cover relative z-20">
            <IconCornerMarketCard class="absolute left-0 top-0 group-hover:-translate-x-[37%] group-hover:-translate-y-[39%] z-10 transition-transform" />
            <IconCornerMarketCard class="absolute transition-transform right-0 rotate-90 top-0 group-hover:translate-x-[39%] group-hover:-translate-y-[39%] z-10" />
            <IconCornerMarketCard class="absolute transition-transform left-0 bottom-0 -rotate-90 group-hover:-translate-x-[37%] group-hover:translate-y-[39%] z-10" />
            <IconCornerMarketCard class="absolute transition-transform right-0 bottom-0 rotate-180 group-hover:translate-x-[37%] group-hover:translate-y-[39%] z-10" />
        </div>
        <div class="flex-grow flex flex-col">
            <p class="text-lg font-bold">Kage’s nft tutorials</p>
            <div class="flex items-center text-sm justify-between mt-4 text-white/50"><p>Floor</p><p class="group-hover:text-white"><img src="/img/marketplace/mints_card/floor_icon.png" alt="icon_nimbl" class="inline-block grayscale group-hover:grayscale-0"> 19.5 NMBL</p></div>
            <div class="flex items-center text-sm justify-between mt-2 text-white/50"><p>Total mints</p><p class="group-hover:text-white">1720L</p></div>
            <div class="text-sm text-white/50 mt-auto self-end">#1</div>
          
        </div>
        
    </div>
</template>

<script setup lang="ts">
import  IconCornerMarketCard from '../icons/IconCornerMarketCard.vue';
import IconNimblMarket from '../icons/IconNimblMarket.vue';


</script>

<style scoped>

</style>
