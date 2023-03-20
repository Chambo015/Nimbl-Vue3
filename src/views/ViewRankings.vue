<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import AppTabList from '@/components/AppTabList.vue';
import AppTabListItem from '@/components/AppTabListItem.vue';
import { IconChevron, IconPlay } from '@/components/icons';
import { useVideoStore } from '@/stores/video';
import type { RangeType } from '@/types';
import { ref } from 'vue';


const activeRange = ref<RangeType>('1d');
const rangeArray: RangeType[] = ['1d', '1w', '1m', '3m'];
const setActiveRange = (range: RangeType) =>  activeRange.value = range;


const activeViewTab = ref<'grid' | 'list'>('grid');
const setActiveViewTab = (tab: 'grid' | 'list') => activeViewTab.value = tab;

const videoStore = useVideoStore()

</script>

<template>

            <div class="flex gap-5 px-5 my-5">
                <AppButton class="h-11 self-center"
                    ><span class="mr-2">Top Creators</span> <IconChevron class="w-4 translate-x-2"
                /></AppButton>
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
                <AppTabList @change-tab="setActiveViewTab" v-slot="{ onChange }">
                    <AppTabListItem
                        value="grid"
                        :active-value="activeViewTab"
                        @click="onChange('grid')"
                        ><span >View as Grid</span>
                    </AppTabListItem>
                    <AppTabListItem
                        value="list"
                        :active-value="activeViewTab"
                        @click="onChange('list')"
                        ><span >View as List</span>
                    </AppTabListItem>
                </AppTabList>
                <AppButton class="ml-auto self-center h-11">View all</AppButton>
            </div>
            <section key="grid" v-if="activeViewTab === 'grid'" class="grid overflow-y-auto mb-height-navigation pb-8  grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 pl-5 pr-[10px] mr-[5px] ">
                    <div class="group/card flex flex-col cursor-pointer border border-white/20  duration-300 hover:shadow-2xl" v-for="item in videoStore.videoList" :key="item.id">
                        <div class="w-full relative overflow-hidden">
                            <img :src="item.poster" alt="card_img" class="w-full object-cover aspect-[16/7] group-hover/card:rotate-[2deg] group-hover/card:scale-110 duration-300 will-change-transform" />
                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light-glass-mute backdrop-blur-md rounded-full p-2"><IconPlay class="w-10 h-10" /></div>
                        </div>
                        <div class="py-2 backdrop-blur-lg bg-gradient-nav dark:bg-none dark:bg-default-glass bg-[length:150%_150%] hover:bg-[length:100%_100%] duration-300">
                            <p class="text-center text-xl font-bold mb-2">{{ item.channel }}</p>
                            <div class="flex  [&>div]:w-1/2 gap-2 [&>div]:bg-light-glass [&>div]:p-2 mb-2 [&>div]:backdrop-blur-sm">
                                <div class="flex flex-col items-center justify-center [&>p]:leading-none">
                                    <p class="font-ethnocentric">{{ item.price * 12 }}K</p>
                                    <p>members</p>
                                </div>
                                <div class="flex flex-col items-center justify-center [&>p]:leading-none">
                                    <p class="font-ethnocentric gradient-text">{{ item.price }} NMBL</p>
                                    <p>members</p>
                                </div>
                            </div>
                            <div class="flex justify-around w-full text-sm  text-[#6BB8FF] font-medium">
                                <span >#ETH-NFTs</span><span>#NFT-Trading</span>
                            </div>
                        </div>
                    </div>
            </section>
            <section key="list" v-else-if="activeViewTab === 'list'" class="overflow-y-auto mb-height-navigation pb-8 pl-5 pr-[10px] mr-[5px]">
                <table class="w-full">
                    <thead>
                        <tr class="[&>th]:pb-4 [&>th]:font-normal">
                            <th></th>
                            <th>Ranking</th>
                            <th>Level</th>
                            <th>Categories</th>
                            <th>The # of Listings</th>
                            <th>Floor Price</th>
                            <th>Community Size</th>
                            <th>Total Volume</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in videoStore.videoList" :key="item.id" class="cursor-pointer transition-colors hover:bg-light-glass dark:hover:bg-default-glass">
                            <td class="w-[250px]">
                                <img :src="item.poster" alt="poster" class="w-[220px] aspect-video" >
                            </td>
                            <td>
                                <div class="flex flex-col justify-center">
                                    <p class="font-ethnocentric text-[#00EAF2]">RANK 1</p>
                                    <p>{{ item.channel }}</p>
                                </div>
                            </td>
                            <td>
                                <span class="text-white/70 bg-light-glass font-ethnocentric border px-4 py-2 border-[#EA00D5]">level 14 creator</span>
                            </td>
                            <td>
                                <div class="flex gap-2 flex-wrap text-sm text-[#6BB8FF]">
                                    <span class="bg-light-glass py-1 px-2">#ETH-NFT</span>
                                    <span class="bg-light-glass py-1 px-2">#NFT-Trading</span>
                                    <span class="bg-light-glass py-1 px-2">#Discord-Tips</span>
                                </div>
                            </td>
                            <td>
                                <span class="font-ethnocentric ">480/4022</span>
                            </td>
                            <td>
                                <span class="font-ethnocentric font-bold gradient-text-v2">{{ item.price }} NMBL</span>
                            </td>
                            <td class="text-center">
                                <span class="font-ethnocentric">6700</span> <!-- Community Size -->
                            </td>
                            <td>
                                <span class="font-ethnocentric gradient-text-v2 font-bold">{{item.price * 12}}k NMBL</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

</template>



<style scoped>
table
{
    border-collapse:separate;
    border-spacing:0 16px;
}
</style>