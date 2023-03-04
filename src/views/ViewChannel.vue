<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import AppChartArea from '@/components/AppChartArea.vue';
import AppTabList from '@/components/AppTabList.vue';
import AppTabListItem from '@/components/AppTabListItem.vue';
import AppVideoPlayer from '@/components/AppVideoPlayer.vue';
import { IconBell, IconCalendar, IconConfetti, IconFutures, IconHeadDiamond, IconLike, IconLocationDot, IconVideoGallery } from '@/components/icons';
import { usePostStore } from '@/stores/community-post';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

type ContentTabsTypes = 'content' | 'token';

const activeContentTab = ref<ContentTabsTypes>('content');
const setActiveContentTab = (tab: ContentTabsTypes) => {
    activeContentTab.value = tab;
};

const dataStats =  ref({
    'Members': 550122,
    'Views': 767168,
    'Shares': 987310,
    'Floor Price': '25 NIMBL',
    'Volume': '232 NIMBL',
    'Listings': 25
})

const postStore = usePostStore()
const {postList} = storeToRefs(postStore)

const baseUrl = import.meta.env.BASE_URL;
</script>

<template>
    <div class="grid h-full w-full grid-cols-12 gap-5 overflow-hidden py-5">
        <!-- Left Side -->
        <section class="col-span-4 pl-5">
            <AppVideoPlayer />
            <div class="mt-5 bg-light-glass p-5 backdrop-blur-sm">
                <section class="mb-8">
                    <div class="mb-4 flex items-center gap-5 text-lg">
                        <img :src="baseUrl + 'img/users/11.png'"
                            alt="avatar" width="64" height="64"
                            class="h-16 w-16 rounded-full object-cover" />
                        <div class="flex flex-col justify-center gap-1">
                            <h3>Helen_NFT</h3>
                            <span class="text-sm text-white/50">245,511 members</span>
                        </div>
                        <AppButton class="ml-auto">
                            <IconBell class="h-7 w-7" />
                        </AppButton>
                        <AppButton>Subscribe</AppButton>
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
                <h4 class="mb-5 text-xl font-semibold">Announcements</h4>
                <section class="space-y-3 ">
                    <article v-for="post in postList" :key="post.id" class="bg-light-glass-mute flex p-5 ">
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
            </div>
        </section>
        <!--  -->
        <!-- Right Side -->
        <section class="col-span-8">
             <!-- header Content -->
            <head class="w-full grid grid-cols-8 gap-5 pr-5 mb-5">
                <AppTabList class="h-14 !bg-gradient-tab-list-mute col-span-4" @change-tab="setActiveContentTab" v-slot="{ onChange }">
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
                    <AppButton>Channels community</AppButton>
                </div>               
            </head>
            <!--   -->
            <!-- Stats & Chart section  -->
            <section class="w-full grid grid-cols-8 gap-5 pr-5">
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
            <!--  -->
        </section>
    </div>
</template>

<style scoped></style>
