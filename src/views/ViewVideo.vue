<script setup lang="ts">
import AppVideoPlayer from '@/components/AppVideoPlayer.vue';
import { key } from '@/store';
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute()
const idParams = computed(() => parseInt(route.params.id as string))

const store = useStore(key);
const video = computed(() => store.getters.getVideoById);
</script>

<template>
    <div class="grid w-full h-full grid-cols-12 gap-5 py-5 overflow-hidden">
        <div class="col-span-8 pl-5">
            <AppVideoPlayer class="aspect-video max-h-[65vh] h-auto w-auto" />
            <div class="w-full p-4 bg-[rgba(192,192,192,0.1);]"></div>
        </div>
        <div class="col-span-4">
            
        </div>
    </div>
</template>

<style scoped>

</style>