<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import AppTabList from '@/components/AppTabList.vue';
import AppTabListItem from '@/components/AppTabListItem.vue';
import { IconClock, IconComments, IconEye, IconFutures, IconVideoGallery } from '@/components/icons';
import { useVideoStore } from '@/stores/video';
import { randomNumber } from '@/utils';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import VideoPlayer from '@/components/AppVideoPlayer/VideoPlayer.vue'

type SidebarTabsTypes = 'videos' | 'comments' | 'trade';

const activeSidebarTab = ref<SidebarTabsTypes>('videos');
const setActiveSidebarTab = (tab: SidebarTabsTypes) => {
    activeSidebarTab.value = tab;
};

const route = useRoute();
const idParams = computed(() => parseInt(route.params.id as string));

const videoStore = useVideoStore();
const { videoList } = storeToRefs(videoStore);
const video = computed(() => videoStore.getVideoById(idParams.value));


const views = computed(() => randomNumber(90000, 999999));
</script>

<template>
    <div class="grid h-full w-full grid-cols-12 gap-5 overflow-hidden py-5">
        <div class="video-scrollbar col-span-8 overflow-scroll pl-5 pb-height-navigation flex flex-col">
            <VideoPlayer class="aspect-video min-h-[65vh] w-auto self-center" />
            <div class="w-full p-4">
                <h1 class="mb-4 truncate text-2xl">{{ video?.title }}</h1>
                <div class="mb-4 flex items-center text-lg">
                    <div class="mr-4">100k views</div>
                    <div class="mr-6">4 hours ago</div>
                    <div class="flex gap-2 text-base text-[#6BB8FF]">
                        <div class="cursor-pointer bg-[rgba(17,17,17,0.3)] p-1 before:content-['#']">ETH-NFT</div>
                        <div class="cursor-pointer bg-[rgba(17,17,17,0.3)] p-1 before:content-['#']">NFT-Trading</div>
                        <div class="cursor-pointer bg-[rgba(17,17,17,0.3)] p-1 before:content-['#']">Discord-Tips</div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="inline-flex bg-gradient-tab-list-mute">
                        <div class="inline-flex items-center gap-3 py-3 px-4">
                            <IconVideoGallery class="h-6 w-6" /> <span class="text-lg leading-none">5 304</span>
                        </div>
                        <div class="inline-flex items-center gap-3 py-3 px-4">
                            <IconComments class="h-6 w-6" /> <span class="text-lg leading-none">5 304</span>
                        </div>
                        <div class="inline-flex items-center gap-3 py-3 px-4">
                            <IconFutures class="h-6 w-6" /> <span class="text-lg leading-none">5 304</span>
                        </div>
                    </div>
                    <div class="ml-auto mr-32 text-xl">
                        <AppButton class="mr-5">Subscribe</AppButton> <AppButton>Channel page</AppButton>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-4 flex flex-col overflow-hidden">
            <div class="mb-5 flex pr-5">
                <AppTabList class="h-14 flex-grow !bg-gradient-tab-list-mute dark:!bg-none" @change-tab="setActiveSidebarTab" v-slot="{ onChange }">
                    <AppTabListItem value="videos" :active-value="activeSidebarTab" @click="() => onChange('videos')">
                        <IconVideoGallery class="mr-4 h-6 w-6 translate-y-[2px]" />
                        <span class="text-xl leading-none">Videos</span>
                    </AppTabListItem>
                    <AppTabListItem
                        value="comments"
                        :active-value="activeSidebarTab"
                        @click="() => onChange('comments')">
                        <IconComments class="mr-4 h-6 w-6 translate-y-[3px]" />
                        <span class="text-xl leading-none">Comments</span>
                    </AppTabListItem>
                    <AppTabListItem value="trade" :active-value="activeSidebarTab" @click="() => onChange('trade')">
                        <IconFutures class="mr-4 h-6 w-6" />
                        <span class="text-xl leading-none">Trade</span>
                    </AppTabListItem>
                </AppTabList>
            </div>
            <div class="mr-[5px] overflow-y-scroll pr-[10px] pb-height-navigation">
                <div
                    v-for="video in videoList"
                    :key="video.id"
                    class="mb-4 flex last:mb-0 cursor-pointer hover:bg-gradient-active-tab"
                    aria-orientation="horizontal">
                    <img :src="video.poster" class="aspect-video w-60" alt="poster" />
                    <div class="flex flex-col py-1 pl-5 pr-2" aria-orientation="vertical">
                        <div class="mb-5 line-clamp-2">{{ video.title }}</div>
                        <div class="flex mt-auto items-center gap-2">
                            <img :src="video.avatar" class="block h-6 w-6 rounded-full object-cover" alt="avatar" />
                            <div class="text-white/50">{{ video.channel }}</div>
                        </div>
                        <div class="flex items-center gap-6 pt-[5px]">
                            <div class="inline-flex items-center">
                                <IconEye class="mr-2 inline-block w-4 translate-y-[1px]" />
                                <span class="text-xs leading-none">{{ views }}</span>
                            </div>
                            <div class="inline-flex items-center">
                                <IconClock class="mr-2 inline-block h-3 w-3" />
                                <span class="text-xs leading-none">9 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.video-scrollbar {
    &::-webkit-scrollbar {
        width: px;
    }
    &::-webkit-scrollbar-thumb {
        background: transparent;
    }
}
</style>
