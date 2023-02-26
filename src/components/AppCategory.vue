<script setup lang="ts">
import { key } from '@/store';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore(key)
const categories = computed(() => store.state.category.category)
</script>

<template>
    <div class="grid grid-cols-4 gap-5">
        <div v-for="category in categories" :key="category.id" class="py-12 text-xl font-bold flex justify-center items-center cursor-pointer border-2 border-transparent hover:border-[#1badf8]" :style="{background: `url(${category.img}) no-repeat 50% 50% / cover`}">
            {{ category.title }}
        </div>
    </div>
</template>



<style scoped>

</style>