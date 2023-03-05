<script setup lang="ts">
import { IconChevron, IconSearch, IconBell } from './icons';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
    <div class="grid w-full items-center grid-cols-12 gap-5 bg-gradient-header dark:bg-dark-glass dark:bg-none px-[22px]">
        <div class="flex col-span-4 items-center gap-2">
            <img src="/logo.png" alt="logo" loading="lazy" class="h-14 object-contain" />
            <span class="font-ethnocentric text-2xl gradient-text">NIMBL</span>
        </div>
        <div class="col-span-4 relative">
            <IconSearch class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-6 w-5 text-white/50"/>
            <input type="search" class="w-full py-2 pr-2 pl-12 bg-[rgba(34,32,47,0.40)]" placeholder="Search Channels, Videos or NFTs">
        </div>
        <div class="col-span-4 gap-7 flex justify-end items-center">
            <div class="font-ethnocentric gap-2 inline-flex cursor-pointer justify-center items-center">Wallet <IconChevron /></div>
            <div class="font-ethnocentric gap-2 inline-flex cursor-pointer justify-center items-center">wls <IconChevron /></div>
            <div class="font-ethnocentric gap-2 inline-flex cursor-pointer justify-center items-center">Airdrops <IconChevron /></div>
            <IconBell notification class="h-6" />
            <Popover class="relative">
                <PopoverButton> <img src="/img/users/1.png" width="45" height="45" alt="user avatar" class="rounded-full ring"></PopoverButton>
                <PopoverPanel class="absolute z-10 right-0 bg-gradient-header backdrop-blur-md p-3 min-w-[150px]">
                <ul>
                    <li class="text-white/50">Theme
                        <ul class="pl-4 text-white whitespace-nowrap">
                            <li @click="toggleDark()" >Dark</li>
                            <li>Light</li>
                            <li>Theme +</li>
                        </ul>
                    </li>
                    <li class="text-white/50">Settings
                        <ul class="pl-4 text-white whitespace-nowrap">
                            <li>Sound</li>
                            <li>Fullscreen</li>
                        </ul>
                    </li>
                </ul>
                </PopoverPanel>
            </Popover>
        </div>
        
    </div>
</template>

<style scoped></style>
