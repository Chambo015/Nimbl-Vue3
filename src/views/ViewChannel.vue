<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import AppTabList from '@/components/AppTabList.vue';
import AppTabListItem from '@/components/AppTabListItem.vue';
import AppVideoGrid from '@/components/AppVideoGrid.vue';
import VideoPlayer from '@/components/AppVideoPlayer/VideoPlayer.vue';
import { IconBell, IconCalendar, IconConfetti, IconFutures, IconHeadDiamond, IconLike, IconLocationDot, IconVideoGallery } from '@/components/icons';
import { useAnnouncementStore } from '@/stores/announcement.js';
import { storeToRefs } from 'pinia';
import { defineAsyncComponent, ref } from 'vue';

const AppChartArea = defineAsyncComponent(() =>
  import('@/components/AppChartArea.vue')
)

type ContentTabsTypes = 'content' | 'token';

const activeContentTab = ref<ContentTabsTypes>('content');
const setActiveContentTab = (tab: ContentTabsTypes) => {
    activeContentTab.value = tab;
};

const tabVideoArr = ['Most watched', 'Recent videos', 'Playlists'];
const activeTabVideo = ref('Most watched');
const setActiveTabVideo = (tab: string): void => {
    activeTabVideo.value = tab;
};

const dataStats =  ref({
    'Members': 550122,
    'Views': 767168,
    'Shares': 987310,
    'Floor Price': '25 NIMBL',
    'Volume': '232 NIMBL',
    'Listings': 25
})

const announceStore = useAnnouncementStore()
const {announcementList} = storeToRefs(announceStore)

const baseUrl = import.meta.env.BASE_URL;
</script>

<template>
    <div class="grid h-full w-full grid-cols-12 gap-5 overflow-hidden py-5">
        <!-- Left Side -->
        <section class="col-span-4 pl-5 overflow-hidden h-full flex flex-col">
            <VideoPlayer />
            <div class="mt-5 bg-light-glass p-5 backdrop-blur-sm overflow-hidden flex flex-col">
                <!--  -->
                <section class="mb-8">
                    <div class="mb-4 flex items-center gap-5 text-lg">
                        <img :src="baseUrl + 'img/users/11.png'"
                            alt="avatar" width="44" height="44"
                            class="h-11 w-11 rounded-full object-cover" />
                        <div class="flex flex-col justify-center gap-1">
                            <h3 class="font-medium">Helen_NFT</h3>
                            <span class="text-sm text-white/50">245,511 members</span>
                        </div>
                        <AppButton class="ml-auto h-11">
                            <IconBell class="h-7 w-7" />
                        </AppButton>
                        <AppButton class="h-11">Subscribe</AppButton>
                    </div>
                    <p class="mb-3">
                        Users who connect their crypto wallet are able to purchase NFTs and set them as their profile
                        picture which will be displayed in a special hexagonal shape.
                    </p>
                    <footer class="flex">
                        <div class="mr-5 flex items-center gap-2">
                            <IconLocationDot class="h-4 stroke-white/50 text-transparent" />
                            <span class="text-xs text-white/50">New-York, USA</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <IconCalendar class="h-4 stroke-white/50 text-transparent" />
                            <span class="text-xs text-white/50">Joined September 1, 2022</span>
                        </div>
                    </footer>
                </section>
                <!--  -->
                <h4 class="mb-5 text-xl font-semibold">Announcements</h4>
                <!-- Posts -->
                <section class="space-y-3 overflow-y-scroll pb-7">
                    <article v-for="post in announcementList" :key="post.id" class="bg-light-glass-mute flex p-5 ">
                    <img :src="post.author.avatar" alt="avatar" width="32" height="32" class="w-8 h-8 object-cover rounded-full mr-3 sticky top-1">
                    <div class="flex flex-col w-[500px]">
                        <div class="flex justify-between mb-3">
                            <div>{{ post.author.name }}</div>
                            <div class="text-white/50 text-sm">01 feb 2023</div>
                        </div>
                        <p class="mb-5 text-sm">{{ post.text }}</p>
                        <footer class="flex gap-4 text-white/50">
                            <div class="inline-flex items-center text-xs gap-1  hover:text-white transition-colors cursor-pointer">
                                <IconLike class="w-5 h-5" /> <div>{{ post.likeCount }}</div>
                            </div>
                            <div class="inline-flex items-center text-xs gap-1  hover:text-white transition-colors cursor-pointer">
                                <IconConfetti class="w-5 h-5" /> <div>1480</div>
                            </div>
                            <div class="inline-flex items-center text-xs gap-1  hover:text-white transition-colors cursor-pointer">
                                <IconHeadDiamond class="w-5 h-5" /> <div>4250</div>
                            </div>
                            <div class="ml-auto text-sm">
                                12.4k views
                            </div>
                        </footer>
                    </div>
                    </article>
                </section>
                <!--  -->
            </div>
        </section>
        <!--  -->
        <!-- Right Side -->
        <section class="col-span-8 overflow-hidden flex flex-col h-full">
             <!-- header Content -->
            <head class="w-full grid grid-cols-8 gap-5 pr-5 mb-5">
                <AppTabList class="h-14 !bg-gradient-tab-list-mute col-span-4 dark:!bg-none" @change-tab="setActiveContentTab" v-slot="{ onChange }">
                    <AppTabListItem value="content" :active-value="activeContentTab" @click="() => onChange('content')">
                        <IconVideoGallery class="mr-4 h-6 w-6 translate-y-[2px]" />
                        <span class="text-xl leading-none">Content</span>
                    </AppTabListItem>
                    <AppTabListItem value="token" :active-value="activeContentTab" @click="() => onChange('token')">
                        <IconFutures class="mr-4 h-6 w-6" />
                        <span class="text-xl leading-none">Channel token</span>
                    </AppTabListItem>
                </AppTabList>
                <div class="col-span-4 flex justify-end">
                    <AppButton @click="$router.push({name: 'community'})">Channels community</AppButton>
                </div>               
            </head>
            <!--   -->
            <!-- Stats & Chart section  -->
            <section class="w-full grid grid-cols-8 gap-5 pr-5 mb-5">
                <div class="col-span-4 grid grid-cols-3 gap-2">
                    <div v-for="(value, key) in dataStats" :key="key" class="py-3 flex items-center justify-center flex-col backdrop-blur-sm bg-light-glass">
                        <div class="font-ethnocentric gradient-text text-lg">{{value.toLocaleString('ru')}}</div> 
                        <div class="font-light text-white/50">{{ key }}</div>
                    </div>
                </div>
                <div class="col-span-4 bg-light-glass backdrop-blur-sm py-3 px-2">
                    <AppChartArea height="150" width="100%" />
                </div>
            </section>
            <!-- ---  -->
            <!-- Tabs Video -->
            <div class="pr-5 mb-5">
                <AppTabList class="h-14 !bg-gradient-tab-list-mute w-full dark:!bg-none" @change-tab="setActiveTabVideo" v-slot="{ onChange }">
                        <AppTabListItem 
                            v-for="tab in tabVideoArr"
                            :key="tab"
                            :value="tab" 
                            :active-value="activeTabVideo" 
                            @click="() => onChange(tab)">
                                <span class="text-xl font leading-none">{{tab}}</span>
                        </AppTabListItem>
                </AppTabList>
            </div>
            <!--  -->
            <AppVideoGrid class="mr-[5px] overflow-y-scroll pr-[10px] pb-height-navigation" />
        </section>
    </div>
</template>

<style scoped></style>
