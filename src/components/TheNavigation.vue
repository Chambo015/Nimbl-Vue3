<template>
    <nav class="flex bg-gradient-nav backdrop-blur-md dark:bg-none dark:bg-dark-glass" aria-orientation="horizontal">
        <TheNavigationItem v-for="route of routers" :key="route.name" class="flex-grow font-['Starzone']" :to="route.slug" :is-active="isActiveRoute(route.name, route.children)" >
            <template #icon="iconProps">
                <!-- <component :is="route.icon" :class="iconProps.class" /> -->
                <img :src="route.iconImg" :alt="route.name"  :class="iconProps.class">
            </template>
            <template #default>{{ capitalize(route.title) }}</template>
        </TheNavigationItem>
    </nav>
</template>
<script setup lang="ts">
import { reactive, shallowRef } from 'vue';
import { capitalize } from '@/utils'
import TheNavigationItem from './TheNavigationItem.vue';
import {IconContent, IconCommunity, IconMarketplace, IconSettings} from './icons';
import { useRoute } from 'vue-router';

import ContentIconImg from '@/assets/content-icon.png'
import CommunityIconImg from '@/assets/community-icon.png'
import MarketplaceIconImg from '@/assets/marketplace-icon.png'
// import SettingsIconImg from '@/assets/settings-icon.png'
import MyChannelIconImg from '@/assets/my-channel-icon.png'


const routers = reactive([
    {
        slug: '/',
        name: 'content',
        children: [
            'video',
        ],
        title: 'Content',
        icon: shallowRef(IconContent),
        iconImg: ContentIconImg
    },
    {
        slug: '/community',
        name: 'community',
        title: 'Community',
        icon: shallowRef(IconCommunity),
        iconImg: CommunityIconImg
    },
    {
        slug: '/marketplace',
        name: 'marketplace',
        children: [
            'rankings'
        ],
        title: 'Marketplace',
        icon: shallowRef(IconMarketplace),
        iconImg: MarketplaceIconImg
    },
    {
        slug: '/channel',
        name: 'channel',
        children: [
            'settings',
        ],
        title: 'My Channel',
        icon: shallowRef(IconSettings),
        iconImg: MyChannelIconImg
    }
/*     {
        slug: '/settings',
        name: 'settings',
        icon: shallowRef(IconSettings),
        iconImg: SettingsIconImg
    } */
])

const route = useRoute()
const isActiveRoute = (name: string, children?: string[]): boolean => {
    return name === route.name || (children ? children.includes(route.name as string) : false)
}

</script>
