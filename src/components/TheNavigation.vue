<template>
    <nav class="flex bg-gradient-nav backdrop-blur-md">
        <TheNavigationItem v-for="route of routers" :key="route.name" class="flex-grow" :to="route.slug" >
            <template #icon="iconProps">
                <component :is="route.asyncIcon" :class="iconProps.class" />
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


const routers = reactive([
    {
        slug: '/',
        name: 'content',
        asyncIcon: shallowRef(IconContent)
    },
    {
        slug: '/community',
        name: 'community',
        asyncIcon: shallowRef(IconCommunity)
    },
    {
        slug: '/marketplace',
        name: 'marketplace',
        asyncIcon: shallowRef(IconMarketplace)
    },
    {
        slug: '/settings',
        name: 'settings',
        asyncIcon: shallowRef(IconSettings)
    }
])
</script>
