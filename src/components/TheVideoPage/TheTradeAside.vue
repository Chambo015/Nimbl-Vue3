<template>
    <aside class="bg-[#16161A]  overflow-y-auto overflow-x-hidden">
        <section class="p-6">
            <h3 class="text-2xl font-bold">@BlueWard2</h3>
            <div class="mt-5 grid grid-cols-3 gap-2">
                <div
                    v-for="stat of tableStats"
                    :key="stat.value + stat.key"
                    class="bg-default-glass px-2 py-4 text-center">
                    <p class="text-xl font-medium">{{ stat.value }}</p>
                    <p class="text-sm">{{ stat.key }}</p>
                </div>
            </div>
        </section>
        <AppTabList class="h-14 flex-grow w-full !bg-gradient-tab-list-mute dark:!bg-none" @change-tab="setActiveChartTab" v-slot="{ onChange }">
            <AppTabListItem value="Floor" :active-value="activeChartTab" @click="() => onChange('Floor')">
                <span class="text-lg leading-none">Floor</span>
            </AppTabListItem>
            <AppTabListItem
                value="Followers"
                :active-value="activeChartTab"
                @click="() => onChange('Followers')">
                <span class="text-lg leading-none">Followers</span>
            </AppTabListItem>
            <AppTabListItem value="Views" :active-value="activeChartTab" @click="() => onChange('Views')">
                <span class="text-lg leading-none">Views</span>
            </AppTabListItem>
        </AppTabList>
       <section :key="activeChartTab" class="p-6 bg-[rgba(33,35,52,0.45)] backdrop-blur-2xl [box-shadow:inset_3.27811px_3.27811px_22.1273px_rgba(255,255, 255,0.04)]"> 
        <AppTabList @change-tab="setActiveRange" v-slot="{ onChange }">
                    <AppTabListItem
                        v-for="([key, value]) of rangeArray"
                        :key="key"
                        :value="key"
                        :active-value="activeRange"
                        @click="onChange(key)"
                        ><span class="text-lg">{{ value }}</span>
                    </AppTabListItem>
        </AppTabList>
        <AppChartArea :data="chartStore.videoTradeSidebar" height="300" width="100%" :y-max="50" :range="activeRange" class="mt-4" />
        <div class="flex gap-2 mt-5">
            <div class="text-xl font-medium px-4 py-3 border-[rgba(140,152,255,0.5)] border flex justify-between flex-grow">
                <span class="text-[#8A8A8A]">Supply</span> <span>{{ randomNumber(1000, 10000) }}</span>
            </div>
            <div class="text-xl font-medium px-4 py-3 border-[rgba(140,152,255,0.5)] border flex justify-between flex-grow">
                <span class="text-[#8A8A8A]">Supply</span> <span>{{ randomNumber(1000, 10000) }}</span>
            </div>
        </div>
        </section>
        <section class="flex px-6 py-9 justify-between gap-2">
            <button class="text-xl border border-white/20 self-center px-4 py-2 font-medium text-white/50">7 days <IconChevron class=" ml-2 inline" /> </button>
            <div v-for="stat of tableFooterStats" :key="stat.key" class="text-center">
                <p class="text-xl font-medium"> {{ stat.value }} </p>
                <p class="text-white/50">{{ stat.key }}</p>
            </div>
        </section>
    </aside>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import AppTabList from '../AppTabList.vue';
import AppTabListItem from '../AppTabListItem.vue';
import AppChartArea from '../AppChartArea.vue';
import { useChartStore } from '@/stores/chart';
import type { ChartRangeType } from '@/types';
import { randomNumber } from '@/utils';
import { IconChevron } from '../icons';

const tableStats = [
    {
        key: 'total volume',
        value: '1600 NMB',
    },
    { key: 'total volume', value: '167k NMB' },
    { key: 'followers', value: '14k NMB' },
    { key: 'listed', value: '14%' },
    { key: 'unique owners', value: '67%' },
    { key: 'notable', value: '9%' },
];
const tableFooterStats = [
    {
        key: 'Views',
        value: '47k',
    },
    { key: 'Comments', value: '12k' },
    { key: 'Notable viewers', value: '4%' },
    { key: 'Price change', value: '14%' }
];

type ChartTabsTypes = 'Floor' | 'Followers' | 'Views' ;
const activeChartTab = ref<ChartTabsTypes>('Floor');
const setActiveChartTab = (range: ChartTabsTypes) => {
    activeChartTab.value = range;
    activeRange.value = 'ALL'
};

const chartStore = useChartStore();

const activeRange = ref<ChartRangeType>('ALL');
const rangeArray: [ChartRangeType , string][] = [['ALL', 'All'], ['ONE_YEAR', '1y'], ['ONE_MONTH','1m'], ['ONE_WEEK' ,'1w'], ['ONE_DAY','1d']];
const setActiveRange = (range: ChartRangeType) => {
    activeRange.value = range;
};
</script>

<style scoped></style>
