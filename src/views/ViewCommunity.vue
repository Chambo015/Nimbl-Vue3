<script setup lang="ts">
import { useChannelStore } from '@/stores/channels';
import { useAnnouncementStore } from '@/stores/announcement.js';
import { storeToRefs } from 'pinia';

import {IconLogout} from '@/components/icons'
import { useCategoryStore } from '@/stores/category';
import { ref } from 'vue';
import AppAnnouncementCard from '@/components/AppAnnouncementCard.vue';


const channelStore = useChannelStore();
const {channelList} = storeToRefs(channelStore)

const announcementStore = useAnnouncementStore()
const {announcementList} = storeToRefs(announcementStore)

const categoryStore = useCategoryStore()
const {categoryList} = storeToRefs(categoryStore)

const showChat = ref<boolean>(false)

</script>

<template>
    <!-- pl-[calc(theme(spacing.width-sidebar-community)+5px)]  -->
    <div v-auto-animate="{ duration: 500 }" class="relative h-full w-full flex items-start overflow-hidden justify-end">
        <!-- ASIDE -->
        <aside key="aside" class="group peer/aside  w-width-sidebar-community absolute inset-y-0 left-0 z-20 bg-light-glass backdrop-blur-sm pb-height-navigation will-change-[width] delay-300 hover:w-[380px] transition-[width] duration-500 hover:duration-300 hover:delay-[150ms] overflow-x-hidden">
            <div class="flex flex-col">
                <div v-for="channel in [...channelList, ...channelList, ...channelList]" @click="() => showChat = true" :key="channel.id" class="bg-hover-mixin relative py-3 px-4 flex items-center cursor-pointer overflow-hidden">
                    <img :src="channel.avatar" alt="avatar" width="44" height="44" class="object-cover rounded-full w-11 h-11 block flex-shrink-0 mr-4 relative z-20" >
                    <div class="flex flex-col overflow-hidden justify-between self-stretch z-20">
                        <span class="text-sm">{{  channel.name }}</span>
                        <span class="truncate text-sm">Reading about people grabbing multi-figures monthly as incomes in investments even in this crazy</span>
                    </div>
                    <div class="z-20 flex flex-col text-xs overflow-hidden self-start flex-shrink-0 items-end gap-1 opacity-0 transition-opacity group-hover:opacity-100 group-hover:delay-100 delay-300 ">
                        <span>12:04p.m</span>
                        <span class="bg-gradient-tab-list px-1">144</span>
                    </div>
                </div>
            </div>
        </aside>
        <!--  -->

        <!-- Chat --> <!-- ml-[calc(theme(spacing.width-sidebar-community)+15px)] -->
        <section key="chat" v-if="showChat" class="flex-grow peer-hover/aside:ml-[calc(380px+15px)] peer-hover/aside:delay-[150ms] will-change-[margin-lef] ml-[calc(theme(spacing.width-sidebar-community)+15px)] transition-all delay-500 duration-300 bg-light-glass self-stretch  mb-[calc(theme(spacing.height-navigation)+theme(spacing.3))] mr-5 mt-3 px-5 pt-5 peer-hover/aside:[&_header]:grid-cols-[repeat(3,minmax(0,auto))_0px]">
            <header class="grid grid-cols-[repeat(3,minmax(0,auto))_50px] gap-1 mb-5 transition-all [&>div]:cursor-pointer [&>div]:relative [&>div>*]:z-20">
                <div class="row-span-2 col-span-1 col-start-1 bg-light-glass flex gap-3 justify-center p-2 items-center bg-hover-mixin">
                    <img src="/img/users/10.png" alt="avatar" class="w-16 h-16 object-cover block">
                    <div>
                        <h3 class="text-2xl font-semibold mb-1">Bankless</h3>
                        <div class="whitespace-nowrap">Community Size: <span class="font-ethnocentric gradient-text">4.2k</span></div>
                    </div>
                </div>
                <div class="bg-light-glass p-2 col-start-2 flex items-center justify-center bg-hover-mixin">
                   <p> Floor Price: <span class="font-ethnocentric gradient-text">20 NMBL</span></p>
                </div>
                <div class="bg-light-glass p-2 col-start-3 flex items-center justify-center bg-hover-mixin">
                    <p>Volume: <span class="font-ethnocentric gradient-text">34 NMBL</span></p>
                </div>
                <div class="bg-light-glass p-2 flex items-center col-start-2 justify-center bg-hover-mixin">
                    <p>Floor Price: <span class="font-ethnocentric gradient-text">20 NMBL</span></p>
                </div>
                <div class="bg-light-glass p-2 flex items-center justify-center col-start-3 bg-hover-mixin">
                    <p>Volume: <span class="font-ethnocentric gradient-text">40 NMBL</span></p>
                </div>
                <div class="bg-light-glass col-start-4 row-span-2 row-start-1 cursor-pointer flex justify-center items-center bg-hover-mixin" @click="showChat = false">
                    <IconLogout class="w-[80%] stroke-white text-transparent"/>
                </div>
            </header>
            <div class="space-y-5">
                <div v-for="msg in announcementList" :key="msg.id" class="py-1 flex">
                    <img :src="msg.author.avatar" alt="avatar" class="w-12 h-12 object-cover rounded-full block mr-5">
                    <div>
                        <div class="gradient-text mb-1">{{ msg.author.name }} <span class="font-light text-xs text-[#82868D] ml-2">Today at 09:26</span></div>
                        <p class="font-light">{{ msg.text }}</p>
                    </div>
                </div>
            </div>
      
        </section>
        <!--  -->

        <!-- Posts --> <!-- :class="{'flex-grow': !showChat}" -->
        <div key="posts" class="relative flex-shrink-0 h-full pr-5 mr-1 mt-3 flex justify-center items-start overflow-y-scroll pb-[calc(theme(spacing.height-navigation)+theme(spacing.6))]" :class="[{'flex-grow': !showChat}]">

            <section key="category" v-if="!showChat" class="w-[250px] sticky top-3 -ml-[calc(250px+20px)] mr-5 ">
                <div v-for="category in categoryList" :key="category.id" class="flex items-center justify-center w-full h-[110px] mb-6 cursor-pointer bg-custom-center hover:bg-[length:105%_auto] hover:shadow-md  transition-[background-size] duration-300 will-change-[background-size]" :style="{backgroundImage: `url(${category.img})`}">
                    <span class="text-xl font-bold">{{ category.title }}</span>
                </div>
            </section>


            <section key="postInside" class="bg-light-glass p-5 space-y-3 w-[630px]">
                <AppAnnouncementCard  v-for="announce in [...announcementList,...announcementList]" :key="announce.id" :announcement="announce" />
            </section>
        </div>
    </div>
</template>

<style scoped>

</style>