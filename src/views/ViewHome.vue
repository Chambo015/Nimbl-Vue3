<script setup lang="ts">
import AppTabList from '@/components/AppTabList.vue';
import AppTabListItem from '@/components/AppTabListItem.vue';
import { ref } from 'vue';
import TheHomeTable from '@/components/TheHomeTable.vue';
import AppCategory from '@/components/AppCategory.vue';
import AppVideoGrid from '@/components/AppVideoGrid.vue';

import type { TabCategoryType } from '@/types';
import VideoPlayer from '@/components/AppVideoPlayer/VideoPlayer.vue';

const tabCategoryArr: TabCategoryType[] = ['Top', 'Trending', 'Rising', 'WatchList'];
const activeTabCategory = ref<TabCategoryType>('Top');
const setActiveTabCategory = (tab: TabCategoryType): void => {
    activeTabCategory.value = tab;
};
</script>

<template>
    <div class="grid w-full h-full grid-cols-12 gap-5 py-5 overflow-hidden">
        <div class="col-span-4 h-full flex flex-col overflow-hidden pl-5">
            <VideoPlayer class="aspect-video h-auto w-full"  />
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
        </div>
        <div class="col-span-8 h-full flex flex-col overflow-hidden">
            <AppCategory class="pr-5 mb-10" />
            <AppVideoGrid class="mr-[5px] overflow-y-scroll pr-[10px] pb-height-navigation" />
        </div> 
    </div>
</template>
