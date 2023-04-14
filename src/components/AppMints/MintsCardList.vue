<script setup lang="ts">
import { ref } from 'vue';
import MintsCard from './MintsCardItem.vue';
import MintsPlayer from './MintsPlayer.vue';

const isOpenPlayer = ref(false)
</script>

<template>
    <section class="py-4 overflow-hidden flex flex-col">
        <div class="relative flex items-center gap-8 px-4 mb-4 [&>span]:cursor-pointer ">
            <span class="relative pl-6"
                ><span
                    class="absolute left-2 top-1/2 flex h-2 w-2 -translate-y-1/2 rounded-full bg-gradient-text"></span>
                Live Mints</span
            ><span class="text-white/50 hover:text-white">Upcoming</span>
        </div>
        <ul v-if="!isOpenPlayer" class="grid grid-cols-[repeat(auto-fill,minmax(175px,1fr))] gap-5 px-3">
            <MintsCard :open-video="() => isOpenPlayer = true" v-for="i in 8" :key="i" />
        </ul>
        <MintsPlayer v-else />
    </section>
</template>

<style scoped></style>
