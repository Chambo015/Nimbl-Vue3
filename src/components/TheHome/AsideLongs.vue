<template>
        <VideoPlayer class="aspect-video h-auto w-full" lite  />
                <div class="mt-5 w-full overflow-hidden flex flex-col">
                <AppTabList class="h-14 w-full" @change-tab="setActiveTabCategory" v-slot="{ onChange }">
                <AppTabListItem
                v-for="tab of tabCategoryArr"
                :key="tab"
                :value="tab"
                :active-value="activeTabCategory"
                @click="onChange(tab)"
                ><span class="text-xl">{{ tab }}</span>
                </AppTabListItem>
                </AppTabList> 
                <TheHomeTable />
                </div> 
</template>

<script setup lang="ts">
import AppTabList from '@/components/AppTabList.vue';
import AppTabListItem from '@/components/AppTabListItem.vue';
import TheHomeTable from '@/components/TheHomeLeftAside.vue';
import VideoPlayer from '@/components/AppVideoPlayer/VideoPlayer.vue';

import type { TabCategoryType } from '@/types';
import { ref } from 'vue';

const tabCategoryArr: TabCategoryType[] = ['Top', 'Trending', 'Rising', 'WatchList'];
const activeTabCategory = ref<TabCategoryType>('Top');
const setActiveTabCategory = (tab: TabCategoryType): void => {
    activeTabCategory.value = tab;
};
</script>

<style lang="scss" scoped>

</style>