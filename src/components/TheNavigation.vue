<template>
    <nav class="flex bg-gradient-nav backdrop-blur-md dark:bg-none dark:bg-dark-glass" aria-orientation="horizontal">
        <TheNavigationItem v-for="route of routers" :key="route.name" class="flex-grow" :to="route.slug" :is-active="isActiveRoute(route.name, route.children)" >
            <template #icon="iconProps">
                <component :is="route.icon" :class="iconProps.class" />
            </template>
            <template #default>{{ capitalize(route.name) }}</template>
        </TheNavigationItem>
    </nav>
</template>
<script setup lang="ts">
import { reactive, shallowRef } from 'vue';
import { capitalize } from '@/utils'
import TheNavigationItem from './TheNavigationItem.vue';
import {IconContent, IconCommunity, IconMarketplace, IconSettings} from './icons';
import { useRoute } from 'vue-router';


const routers = reactive([
    {
        slug: '/',
        name: 'content',
        children: [
            'video',
            'channel'
        ],
        icon: shallowRef(IconContent)
    },
    {
        slug: '/community',
        name: 'community',
        icon: shallowRef(IconCommunity)
    },
    {
        slug: '/marketplace/rankings',
        name: 'marketplace',
        children: [
            'rankings'
        ],
        icon: shallowRef(IconMarketplace)
    },
    {
        slug: '/settings',
        name: 'settings',
        icon: shallowRef(IconSettings)
    }
])

const route = useRoute()
const isActiveRoute = (name: string, children?: string[]): boolean => {
    return name === route.name || (children ? children.includes(route.name as string) : false)
}

</script>
