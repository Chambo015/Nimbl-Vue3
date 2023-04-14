<script setup lang="ts">
import AppTabList from '@/components/AppTabList.vue';
import AppTabListItem from '@/components/AppTabListItem.vue';
import { ref } from 'vue';

// Компоненты левой колонки
// import TheHomeTable from '@/components/TheHomeLeftAside.vue';
// import VideoPlayer from '@/components/AppVideoPlayer/VideoPlayer.vue';

import AppCategory from '@/components/AppCategory.vue';
import AppVideoGrid from '@/components/AppVideoGrid.vue';

import type { TabHomeCategoryType } from '@/types';
import  MintsCardList from '@/components/AppMints/MintsCardList.vue';

const tabCategoryArr: TabHomeCategoryType[] = ['Mints', 'Secondary Market'];
const activeTabCategory = ref<TabHomeCategoryType>('Mints');
const setActiveTabCategory = (tab: TabHomeCategoryType): void => {
    activeTabCategory.value = tab;
};
</script>

<template>
    <div class="grid w-full h-full grid-cols-12 gap-5 py-5 overflow-hidden">
        <div class="col-span-4 h-full flex flex-col overflow-hidden pl-5">
           <div class="w-full overflow-hidden flex flex-col">
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
                <MintsCardList />
            </div>
        </div>
        <div class="col-span-8 h-full flex flex-col overflow-hidden">
            <AppCategory class="pr-5 mb-10" />
            <AppVideoGrid class="mr-[5px] overflow-y-scroll pr-[10px] pb-height-navigation" />
        </div> 
    </div>
</template>
