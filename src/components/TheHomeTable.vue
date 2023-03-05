<script setup lang="ts">
import AppTabList from './AppTabList.vue';
import AppTabListItem from './AppTabListItem.vue';
import AppButton from './AppButton.vue';

import { ref } from 'vue';

import type { RangeType } from '@/types';
import { IconChevron } from '@/components/icons';
import { useChannelStore } from '@/stores/channels';
import { storeToRefs } from 'pinia';

const channelStore = useChannelStore()
const {channelList} = storeToRefs(channelStore)

const activeRange = ref<RangeType>('1d');
const rangeArray: RangeType[] = ['1d', '1w', '1m', '3m'];
const setActiveRange = (range: RangeType) => {
    activeRange.value = range;
};

/* const handleLoadImg = async (e: any) => {
    const image = e.target as HTMLImageElement;
    const canvas = await cropImage(image.src, 1);

    image.src = canvas.toDataURL();
}; */
</script>

<template>
    <div class="pt-5 overflow-hidden flex flex-col">
        <div class="flex gap-5 px-5">
            <AppTabList @change-tab="setActiveRange" v-slot="{ onChange }">
                <AppTabListItem
                    v-for="tab of rangeArray"
                    :key="tab"
                    :value="tab"
                    :active-value="activeRange"
                    @click="onChange(tab)"
                    ><span class="text-sm">{{ tab }}</span>
                </AppTabListItem>
            </AppTabList>
            <AppButton class="h-11 self-center"
                ><span class="mr-2">All Categories</span> <IconChevron class="w-4 translate-x-2"
            /></AppButton>
            <AppButton class="ml-auto">View all</AppButton>
        </div>
        <div class="overflow-x-hidden overflow-y-auto mt-3 pb-height-navigation">
            <table class="w-full border-spacing-0">
                <thead>
                    <tr class="[&_th]:!font-normal [&_th]:pb-3">
                        <th></th>
                        <th class="text-left">Channels</th>
                        <th >Subscribers</th>
                        <th >Floor Price</th>
                        <th >Total Volume</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(channel, idx) in channelList" :key="channel.id" class="cursor-pointer [&_td]:py-2 hover:bg-gradient-active-tab will-change-[background-image]">
                        <td class="text-center px-1">{{idx+1}}</td>
                        <td>
                            <div class="flex gap-2 items-center">
                                <img width="40" height="40" :src="channel.avatar" class="w-10 h-10 object-cover rounded-full" alt="avatar"/><span
                                    >{{channel.name}}</span
                                >
                            </div>
                        </td>
                        <td class="text-center">{{channel.subscribers}}</td>
                        <td class="text-center font-ethnocentric text-sm bg-gradient-text bg-clip-text text-transparent">{{channel.price}} NMBL</td>
                        <td class="text-center font-ethnocentric text-sm bg-gradient-text bg-clip-text text-transparent">{{channel.total}} NMBL</td>
                    </tr>
             
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped></style>
