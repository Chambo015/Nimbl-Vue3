<script setup lang="ts">
import HomeCategory from '@/components/AppCategories/HomeCategory.vue';
import AppVideoGrid from '@/components/AppVideoGrid.vue';


import { useCategoryStore } from '@/stores/category';
import { storeToRefs } from 'pinia';
import AsideLongs from '@/components/TheHome/AsideLongs.vue';
import AsideClips from '@/components/TheHome/AsideClips.vue';

const categoryStore =  useCategoryStore()
const { getActiveHomeCategory } = storeToRefs(categoryStore)


</script>

<template>
    <div class="grid w-full h-full grid-cols-12 gap-5 py-5 overflow-hidden">
        <div v-auto-animate class="col-span-4 h-full flex flex-col overflow-hidden pl-5 relative">
            <AsideLongs v-if="getActiveHomeCategory === 'Longs' " />
            <AsideClips v-else />
        </div>
        <div class="col-span-8 h-full flex flex-col overflow-hidden">
            <HomeCategory class="pr-5 mb-10" />
            <AppVideoGrid class="mr-[5px] overflow-y-scroll pr-[10px] pb-height-navigation" />
        </div> 
    </div>
</template>
