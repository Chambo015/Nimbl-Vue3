<script setup lang="ts">
import { useMetamask } from '@/composables/useMetamask';
import { IconChevron, IconBell, IconLogout } from './icons';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { useDark, useFullscreen, useToggle } from '@vueuse/core';
import { useRouter } from 'vue-router';
import { useBlobsStore } from '@/stores/blobs';
import { useAuth } from '@/composables/useAuth';
import TheChatGPT from './TheChatGPT.vue';


const isDark = useDark();
const toggleDark = useToggle(isDark);

const { toggle: toggleFullScreen } = useFullscreen(document.documentElement);

const router = useRouter();

const blobs = useBlobsStore();

const { logoutMetaMask, account } = useMetamask();
const { logoutUser } = useAuth();

const logout = () => {
    if (account) logoutMetaMask();
    logoutUser()
        .then(() => router.push({ name: 'login' }))
        .catch((err) => console.error(err));
};


</script>

<template>
    <div
        class="relative z-50 grid w-full grid-cols-12 items-center gap-5 bg-gradient-header px-[22px] dark:bg-dark-glass dark:bg-none">
        <div class="col-span-4 flex cursor-pointer items-center gap-2" @click="$router.push({ name: 'content' })">
            <img src="/logo.png" alt="logo" loading="lazy" class="h-14 object-contain" />
            <span class="gradient-text font-ethnocentric text-2xl">NIMBL</span>
        </div>
        <!-- Search panel -->
        <TheChatGPT />
        <!-- --- -->
        <div class="col-span-4 flex items-center justify-end gap-7">
            <div class="inline-flex cursor-pointer items-center justify-center gap-2 font-ethnocentric">
                Wallet <IconChevron />
            </div>
            <div class="inline-flex cursor-pointer items-center justify-center gap-2 font-ethnocentric">
                wls <IconChevron />
            </div>
            <div class="inline-flex cursor-pointer items-center justify-center gap-2 font-ethnocentric">
                Airdrops <IconChevron />
            </div>
            <IconBell notification class="h-6" />
            <Popover class="relative">
                <PopoverButton>
                    <img src="/img/users/1.png" width="45" height="45" alt="user avatar" class="rounded-full ring"
                /></PopoverButton>
                <PopoverPanel
                    class="absolute right-0 z-10 min-w-[150px] bg-gradient-header py-3 px-5 backdrop-blur-md dark:bg-dark-glass dark:bg-none">
                    <ul>
                        <li class="text-white/50">
                            Theme
                            <ul class="whitespace-nowrap pl-4 text-white [&_li]:cursor-pointer">
                                <li @click="toggleDark(true)">Dark</li>
                                <li @click="toggleDark(false)">Light</li>
                                <li @click="blobs.setVisibleBlobs(!blobs.visibleBlobs)">Theme +</li>
                            </ul>
                        </li>
                        <li class="text-white/50">
                            Settings
                            <ul class="whitespace-nowrap pl-4 text-white [&_li]:cursor-pointer">
                                <li>Sound</li>
                                <li @click="toggleFullScreen">Fullscreen</li>
                            </ul>
                        </li>
                    </ul>
                    <p class="mt-2 w-[100px] truncate text-sm text-light-blue">{{ account }}</p>
                    <div @click="logout" class="mt-3 inline-flex cursor-pointer items-center gap-1">
                        <IconLogout class="h-5 translate-y-[1px] stroke-white text-transparent" />
                        <span class="leading-none">Logout</span>
                    </div>
                </PopoverPanel>
            </Popover>
        </div>
    </div>
</template>

<style scoped></style>
