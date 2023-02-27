<script setup lang="ts">
import { useCategoryStore } from '@/stores/category';
import { storeToRefs } from 'pinia';

const categoryStore =  useCategoryStore()
const {categoryList} = storeToRefs(categoryStore)
</script>

<template>
    <div class="grid grid-cols-4 gap-5">
        <div v-for="category in categoryList" :key="category.id" class="py-12 text-xl font-bold flex justify-center items-center cursor-pointer border-2 border-transparent hover:border-[#1badf8]" :style="{background: `url(${category.img}) no-repeat 50% 50% / cover`}">
            {{ category.title }}
        </div>
    </div>
</template>