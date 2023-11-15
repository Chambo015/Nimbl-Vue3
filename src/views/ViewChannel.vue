<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import AppTabList from '@/components/AppTabList.vue';
import AppTabListItem from '@/components/AppTabListItem.vue';
import AppVideoGrid from '@/components/AppVideoGrid.vue';
import VideoPlayer from '@/components/AppVideoPlayer/VideoPlayer.vue';
import {
    IconCalendar,
    IconConfetti,
    IconFutures,
    IconHeadDiamond,
    IconLike,
    IconLocationDot,
    IconVideoGallery,
} from '@/components/icons';
import { useAnnouncementStore } from '@/stores/announcement.js';
import { storeToRefs } from 'pinia';
import { defineAsyncComponent, ref } from 'vue';

import settingsImg from '@/assets/settings-icon.png';
import videoImg from '@/assets/video-icon.png';
import { useChartStore } from '@/stores/chart';
import { useElementHover } from '@vueuse/core';

const ModalUploadVideo = defineAsyncComponent(() => import('@/components/TheChannel/ModalUploadVideo.vue'));
const AppChartArea = defineAsyncComponent(() => import('@/components/AppChartArea.vue'));

type ContentTabsTypes = 'content' | 'token';
const activeContentTab = ref<ContentTabsTypes>('content');
const setActiveContentTab = (tab: ContentTabsTypes) => {
    activeContentTab.value = tab;
};

const tabVideoArr = ['My videos', 'My playlists'];
const activeTabVideo = ref('My videos');
const setActiveTabVideo = (tab: string): void => {
    activeTabVideo.value = tab;
};

const dataStats = ref({
    Members: 550122,
    Views: 767168,
    Shares: 987310,
    'Floor Price': '25 NIMBL',
    Volume: '232 NIMBL',
    Listings: 25,
});

const chartStore = useChartStore();
const announceStore = useAnnouncementStore();
const { announcementList } = storeToRefs(announceStore);

const isOpenModal = ref(false);

const announceListElement = ref();
const announceListHovered = useElementHover(announceListElement);

const baseUrl = import.meta.env.BASE_URL;
</script>

<template>
    <div
        class="grid h-full w-full grid-cols-12 gap-5 overflow-hidden py-5"
        :style="{ filter: isOpenModal ? 'blur(8px)' : undefined }">
        <!-- Left Side -->
        <section class="col-span-4 flex h-full flex-col overflow-hidden pl-5">
            <VideoPlayer lite />
            <div class="mt-5 flex flex-col overflow-hidden bg-light-glass py-5 backdrop-blur-sm dark:bg-dark-glass">
               <TransitionGroup name="left_list">
                    <div class="flex items-center gap-5 px-5 text-lg">
                        <img
                            :src="baseUrl + 'img/users/11.png'"
                            alt="avatar"
                            width="44"
                            height="44"
                            class="h-11 w-11 rounded-full object-cover" />
                        <div class="flex flex-col justify-center gap-1">
                            <h3 class="font-medium">Helen_NFT</h3>
                            <span class="text-sm text-white/50">245,511 members</span>
                        </div>
                        <button class="ml-auto" @click="$router.push({ name: 'settings' })">
                            <img
                                :src="settingsImg"
                                width="45"
                                height="45"
                                alt="settings"
                                class="h-12 w-12 object-contain" />
                        </button>
                    </div>
                    <div class="px-5" v-if="!announceListHovered">
                        <p class="mb-3 mt-4">
                            Users who connect their crypto wallet are able to purchase NFTs and set them as their profile
                            picture which will be displayed in a special hexagonal shape.
                        </p>
                        <div class="flex">
                            <div class="mr-5 flex items-center gap-2">
                                <IconLocationDot class="h-4 stroke-white/50 text-transparent" />
                                <span class="text-xs text-white/50">New-York, USA</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <IconCalendar class="h-4 stroke-white/50 text-transparent" />
                                <span class="text-xs text-white/50">Joined September 1, 2022</span>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                    <div class="my-5 flex items-center px-5">
                        <h4 class="text-xl font-semibold">Announcements</h4>
                        <button
                            class="ml-auto bg-[linear-gradient(88.76deg,#393939_0.58%,#4D4D4D_98.96%)] px-5 py-1 text-lg font-medium">
                            Share news
                        </button>
                    </div>
                    <!-- Posts -->
                    <section ref="announceListElement" class="mr-[5px] space-y-3 overflow-y-scroll pb-7 pl-5 pr-[10px]">
                        <article v-for="post in announcementList" :key="post.id" class="flex bg-light-glass-mute p-5">
                            <img
                                :src="post.author.avatar"
                                alt="avatar"
                                width="32"
                                height="32"
                                class="sticky top-1 mr-3 h-8 w-8 rounded-full object-cover" />
                            <div class="flex w-[500px] flex-col">
                                <div class="mb-3 flex justify-between">
                                    <div>{{ post.author.name }}</div>
                                    <div class="text-sm text-white/50">01 feb 2023</div>
                                </div>
                                <p class="mb-5 text-sm">{{ post.text }}</p>
                                <footer class="flex gap-4 text-white/50">
                                    <div
                                        class="inline-flex cursor-pointer items-center gap-1 text-xs transition-colors hover:text-white">
                                        <IconLike class="h-5 w-5" />
                                        <div>{{ post.likeCount }}</div>
                                    </div>
                                    <div
                                        class="inline-flex cursor-pointer items-center gap-1 text-xs transition-colors hover:text-white">
                                        <IconConfetti class="h-5 w-5" />
                                        <div>1480</div>
                                    </div>
                                    <div
                                        class="inline-flex cursor-pointer items-center gap-1 text-xs transition-colors hover:text-white">
                                        <IconHeadDiamond class="h-5 w-5" />
                                        <div>4250</div>
                                    </div>
                                    <div class="ml-auto text-sm">12.4k views</div>
                                </footer>
                            </div>
                        </article>
                    </section>
                </TransitionGroup>
            </div>
        </section>
        <!--  -->
        <!-- Right Side -->
        <section class="col-span-8 flex h-full flex-col overflow-hidden">
            <!-- header Content -->
            <head class="mb-5 grid w-full grid-cols-8 gap-5 pr-5">
                <AppTabList
                    class="col-span-4 h-14 !bg-gradient-tab-list-mute dark:!bg-none"
                    @change-tab="setActiveContentTab"
                    v-slot="{ onChange }">
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
                    <AppButton class="text-xl" @click="$router.push({ name: 'community' })">My community</AppButton>
                </div>
            </head>
            <!--   -->
            <!-- Stats & Chart section  -->
            <section class="mb-5 grid w-full grid-cols-8 gap-5 pr-5">
                <div class="col-span-4 grid grid-cols-3 gap-2">
                    <div
                        v-for="(value, key) in dataStats"
                        :key="key"
                        class="flex flex-col items-center justify-center bg-light-glass py-3 backdrop-blur-sm dark:bg-dark-glass">
                        <div class="text-lg">{{ value.toLocaleString('ru') }}</div>
                        <div class="font-light text-white/50">{{ key }}</div>
                    </div>
                </div>
                <div class="relative col-span-4 bg-light-glass px-2 py-3 backdrop-blur-sm dark:bg-dark-glass">
                    <p class="absolute left-1/2 -translate-x-1/2 font-medium leading-none">Community Stats</p>
                    <AppChartArea :data="chartStore.areaChart" height="150" width="100%" />
                </div>
            </section>
            <!-- ---  -->
            <!-- Tabs Video -->
            <div class="mb-5 grid grid-cols-8 gap-5 pr-5">
                <AppTabList
                    class="col-span-4 h-14 !bg-gradient-tab-list-mute dark:!bg-none"
                    @change-tab="setActiveTabVideo"
                    v-slot="{ onChange }">
                    <AppTabListItem
                        v-for="tab in tabVideoArr"
                        :key="tab"
                        :value="tab"
                        :active-value="activeTabVideo"
                        @click="() => onChange(tab)">
                        <span class="font text-xl leading-none">{{ tab }}</span>
                    </AppTabListItem>
                </AppTabList>
                <div class="col-span-4 flex justify-end">
                    <AppButton class="items-center !px-5 !py-1 text-xl !leading-snug" @click="isOpenModal = true">
                        <img :src="videoImg" alt="videoimg" class="mr-3 h-11 w-11" />
                        <span>Upload Video</span></AppButton
                    >
                </div>
            </div>
            <!--  -->
            <AppVideoGrid class="mr-[5px] overflow-y-scroll pb-height-navigation pr-[10px]" />
        </section>
        <ModalUploadVideo v-if="isOpenModal" @close-modal="() => (isOpenModal = false)" />
    </div>
</template>

<style scoped>
/* we will explain what these classes do next! */
.left_list-move, /* apply transition to moving elements */
.left_list-enter-active,
.left_list-leave-active {
  transition: all 0.5s ease;
}

.left_list-enter-from,
.left_list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.left_list-leave-active {
  position: absolute;
}
</style>
