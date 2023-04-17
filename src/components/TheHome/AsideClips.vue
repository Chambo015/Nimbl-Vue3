<template>
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
</template>

<script setup lang="ts">
import AppTabList from '@/components/AppTabList.vue';
import AppTabListItem from '@/components/AppTabListItem.vue';
import type { TabHomeCategoryType } from '@/types';
import  MintsCardList from '@/components/AppMints/MintsCardList.vue';
import { ref } from 'vue';

const tabCategoryArr: TabHomeCategoryType[] = ['Mints', 'Secondary Market'];
const activeTabCategory = ref<TabHomeCategoryType>('Mints');
const setActiveTabCategory = (tab: TabHomeCategoryType): void => {
    activeTabCategory.value = tab;
};
</script>

<style scoped>

</style>