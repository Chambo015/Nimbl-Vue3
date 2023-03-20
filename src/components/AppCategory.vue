<script setup lang="ts">
import { useCategoryStore } from '@/stores/category';
import { storeToRefs } from 'pinia';

const categoryStore =  useCategoryStore()
const {categoryList} = storeToRefs(categoryStore)
</script>

<template>
    <div class="grid grid-cols-4 gap-5">
        <div v-for="category in categoryList" :key="category.id" class="py-12 min-w-[290px] text-xl font-bold flex justify-center items-center cursor-pointer bg-custom-center hover:bg-[length:_105%_auto] hover:shadow-md  transition-[background-size] duration-300 will-change-[background-size]" :style="{backgroundImage: `url(${category.img})`}">
            {{ category.title }}
        </div>
    </div>
</template>