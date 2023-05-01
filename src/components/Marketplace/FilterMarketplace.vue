<template>
    <section class=" bg-dark-glass">
        <div class="px-6 py-5 hover:bg-default-glass">
            <h4 class="font-semibold text-xl leading-none">Status</h4>
            <div class="bg-dark-glass w-full h-9 flex items-center justify-between mt-4">
                <button class="self-stretch pl-2 pr-3"><IconArrowSolid class="text-white/50 rotate-180"/></button>
                <span>Listed</span>
                <button class="self-stretch pl-3 pr-2"><IconArrowSolid class="text-white/50"/></button>
            </div>
        </div>
        <div class="px-6 py-5 hover:bg-default-glass">
            <h4 class="font-semibold text-xl leading-none">Price</h4>
            <div class="flex">
                <div class="bg-dark-glass h-9 inline-flex items-center justify-between mt-4">
                    <button class="self-stretch pl-2 pr-3"><IconArrowSolid class="text-white/50 rotate-180"/></button>
                    <span>USD</span>
                    <button class="self-stretch pl-3 pr-2"><IconArrowSolid class="text-white/50"/></button>
                </div>
                <div class="ml-8">
                    <p class="text-white/50 text-center">Min</p>
                    <FilterRangeSlider  :max="100" v-model="rangeMin" class="w-[180px]" />
                </div>
                <div class="ml-5">
                    <p class="text-white/50 text-center">Max</p>
                    <FilterRangeSlider   :max="100" v-model="rangeMax" class="w-[180px]" />
                </div>
            </div>
            <div class="flex"><button class="text-lg leading-none px-7 bg-[#393939] h-10 mt-5 ml-auto">Apply</button></div>
        </div>
        <div class="px-6 py-5 hover:bg-default-glass">
            <h4 class="font-semibold text-xl leading-none">Quantity</h4>
            <div class="bg-dark-glass w-full h-9 flex items-center justify-between mt-4">
                <button class="self-stretch pl-2 pr-3"><IconArrowSolid class="text-white/50 rotate-180"/></button>
                <span>All items</span>
                <button class="self-stretch pl-3 pr-2"><IconArrowSolid class="text-white/50"/></button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import  { IconArrowSolid } from '../icons';
import  FilterRangeSlider from './FilterRangeSlider.vue';


const rangeMin = ref(0)
const rangeMax = ref(0)

</script>

<style scoped>

</style>