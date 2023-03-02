<script setup lang="ts">
import { useChannelStore } from '@/stores/channels';
import { usePostStore } from '@/stores/community-post';
import { storeToRefs } from 'pinia';

import {IconLike} from '@/components/icons'


const channelStore = useChannelStore();
const {channelList} = storeToRefs(channelStore)

const postStore = usePostStore()
const {postList} = storeToRefs(postStore)

</script>

<template>
    <!-- pl-[calc(theme(spacing.width-sidebar-community)+5px)]  -->
    <div class="relative h-full w-full flex items-start overflow-hidden">
        <div class="w-width-sidebar-community absolute inset-y-0 left-0  bg-light-glass backdrop-blur-sm pb-height-navigation hover:w-52 transition-all pt-5 overflow-x-hidden ">
            <div class="flex flex-col px-4">
                <div v-for="channel in [...channelList, ...channelList, ...channelList]" :key="channel.id" class="py-4 flex items-center gap-5 cursor-pointer">
                    <img :src="channel.avatar" alt="avatar" width="45" height="45" class="object-cover rounded-full w-11 h-11 block" >
                    <div>{{  channel.name }}</div>
                </div>
            </div>
        </div>
        <div class="w-full h-full flex justify-center items-start  overflow-y-scroll">
            <div class="bg-light-glass p-5 mt-3 space-y-3 mb-[calc(theme(spacing.height-navigation)+theme(spacing.3))] ">
                <div v-for="post in [...postList,...postList]" :key="post.id" class="bg-light-glass-mute flex p-5 ">
                    <img :src="post.author.avatar" alt="avatar" width="40" height="40" class="w-10 h-10 object-cover rounded-full mr-3 sticky top-1">
                    <div class="flex flex-col w-[500px]">
                        <div class="flex justify-between mb-3">
                            <div>{{ post.author.name }}</div>
                            <div class="text-white/50">01 feb 2023</div>
                        </div>
                        <p class="mb-5">{{ post.text }}</p>
                        <div class="flex">
                            <div class="inline-flex items-center text-xs gap-1 text-white/50 hover:text-white transition-colors cursor-pointer">
                                <IconLike class="w-5 h-5" /> <div>{{ post.likeCount }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>