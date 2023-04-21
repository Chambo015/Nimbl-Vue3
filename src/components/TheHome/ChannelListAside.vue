<script setup lang="ts">
import AppTabList from '../AppTabList.vue';
import AppTabListItem from '../AppTabListItem.vue';
import AppButton from '../AppButton.vue';

import { computed, ref } from 'vue';

import type { RangeType } from '@/types';
import { IconArrowTurnRight, IconChevron } from '@/components/icons';
import { useChannelStore } from '@/stores/channels';
import { storeToRefs } from 'pinia';
import { useVideoStore } from '@/stores/video';

const channelStore = useChannelStore()
const {channelList} = storeToRefs(channelStore);
const videoStore = useVideoStore()

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

const selectedChannelId = ref<number| null>(null)
const selectChannelHandler = (id: number) => {
    if(id) selectedChannelId.value = id
}
const selectedChannel = computed(() => {
    if(selectedChannelId.value) {
        return channelStore.getChannelById(selectedChannelId.value)
    } else {
        return null
    }
});

const dataStats =  ref({
    'Members': 550122,
    'Views': 767168,
    'Shares': 987310,
    'Floor Price': '25 NIMBL',
    'Volume': '232 NIMBL',
    'Listings': 25
})

</script>

<template>
    <div v-auto-animate="{ duration: 300 }" class="pt-5 overflow-hidden flex flex-col">
        <template v-if="!selectedChannel" >
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
                <AppButton class="h-11 self-center">
                    <span class="mr-2">All Categories</span> <IconChevron class="w-4 translate-x-2"/>
                </AppButton>
                <AppButton class="ml-auto self-center h-11">View all</AppButton>
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
                        <tr v-for="(channel, idx) in channelList" 
                        :key="channel.id" 
                        @click="selectChannelHandler(channel.id)" 
                        class="cursor-pointer [&_td]:py-2 hover:bg-gradient-active-tab will-change-[background-image]">
                            <td class="text-center px-1">{{idx+1}}</td>
                            <td>
                                <div class="flex gap-2 items-center">
                                    <img width="40" height="40" :src="channel.avatar" class="w-10 h-10 object-cover rounded-full" alt="avatar"/>
                                    <span>{{channel.name}}</span>
                                </div>
                            </td>
                            <td class="text-center">{{channel.subscribers}}</td>
                            <td class="text-center font-ethnocentric text-sm bg-gradient-text bg-clip-text text-transparent">{{channel.price}} NMBL</td>
                            <td class="text-center font-ethnocentric text-sm bg-gradient-text bg-clip-text text-transparent">{{channel.total}} NMBL</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </template>
        <!-- Details Channel  -->
        <template v-else>
            <div class="flex items-center">
                <div class="group bg-gradient-tab-list dark:bg-none dark:bg-dark-glass cursor-pointer py-1 px-2  mr-5"
                @click="selectedChannelId = null">
                    <IconArrowTurnRight class="[transform:scale(-1,1)] w-7 h-7 group-hover:fill-white/80 dark:fill-white/30 fill-[#64dbff]" />
                </div>
                <div>
                    <img width="60" height="60" :src="selectedChannel.avatar" class="w-16 h-16 object-cover rounded-full inline-block mr-5" alt="avatar"/><span class="text-xl">{{selectedChannel.name}}</span>
                </div>
                <AppButton class="ml-auto h-11">Go to channel</AppButton>
            </div>
           <div class="overflow-y-auto pb-height-navigation">
                <!-- Stats & Chart section  -->
                <div class=" grid grid-cols-3 gap-2 my-5">
                    <div v-for="(value, key) in dataStats" :key="key" class="py-3 flex items-center justify-center flex-col backdrop-blur-sm bg-light-glass dark:bg-dark-glass">
                        <div class="font-ethnocentric gradient-text">{{value.toLocaleString('ru')}}</div> 
                        <div class="font-light text-white/50 text-sm">{{ key }}</div>
                    </div>
                </div>
                <!-- ---  -->
                <!-- Trending Videos -->
                <h4 class="text-lg mb-5">Trending Videos</h4>
                <ul class="flex justify-between">
                    <li v-for="video in videoStore.videoList.slice(0, 3)" :key="video.id" :style="{backgroundImage: `url(${video.poster})`}" class="w-[calc(100%/3-10px)] bg-cover before:pt-[calc((100%*9)/16)] before:block cursor-pointer">
                    </li>
                </ul>
                <!--  -->
           </div>
        </template>
    </div>
    
</template>

<style scoped></style>
