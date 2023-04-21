<template>
    <aside class="">
        <div class="p-6">
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
        </div>
        <AppTabList class="h-14 flex-grow w-full !bg-gradient-tab-list-mute dark:!bg-none" @change-tab="(tab) => activeChartTab = tab" v-slot="{ onChange }">
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
        <AppChartArea height="400" width="100%" />
    </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppTabList from '../AppTabList.vue';
import AppTabListItem from '../AppTabListItem.vue';
import AppChartArea from '../AppChartArea.vue';

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

type ChartTabsTypes = 'Floor' | 'Followers' | 'Views' ;
const activeChartTab = ref<ChartTabsTypes>('Floor');
</script>

<style scoped></style>
