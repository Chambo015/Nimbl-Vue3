<script setup lang="ts">
import { useMetamask } from '@/composables/useMetamask';
import { IconChevron, IconReload, IconLogout, IconPlus, IconArrowLeft } from './icons';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { useDark, useFullscreen, useToggle } from '@vueuse/core';
import { useRouter } from 'vue-router';
import { useBlobsStore } from '@/stores/blobs';
import { useAuth } from '@/composables/useAuth';
import ChatGPTSearch from './AppChatGPT/ChatGPTSearch.vue';
import HeaderUserRank from './TheHeader/HeaderUserRank.vue';

import bellImg from '@/assets/bell-icon.png';
import coinImg from '@/assets/nimbl-coin.png';

const isDark = useDark({
    initialValue: 'dark',
});
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
        <div class="col-span-4 flex cursor-pointer items-center gap-2 h-full" @click="$router.push({ name: 'content' })">
            <img src="/logo.png" alt="logo" loading="lazy" class="h-14 object-contain" />
            <span class="gradient-text font-ethnocentric text-2xl">NIMBL</span>
            <div class="self-stretch ml-16">
                <button @click="$router.go(-1)" class="h-full bg-[#22202F] px-4" title="back">
                    <IconArrowLeft class="h-6 w-6" />
                </button>
                <button @click="$router.go(1)" class="h-full bg-[#22202F] px-4" title="forward">
                    <IconArrowLeft class="h-6 w-6 rotate-180" />
                </button>
                <button @click="$router.go(0)" class="py-2 px-2 bg-[#22202F] ml-4" title="reload">
                    <IconReload class="h-6 w-6" />
                </button>
            </div>
        </div>

        <!-- Search panel -->
        <ChatGPTSearch />
        <!-- --- -->
        <div class="col-span-4 flex items-center justify-end gap-7">
            <!--     <div class="inline-flex cursor-pointer items-center justify-center gap-2 font-ethnocentric">
                Wallet <IconChevron />
            </div>
            <div class="inline-flex cursor-pointer items-center justify-center gap-2 font-ethnocentric">
                wls <IconChevron />
            </div>
            <div class="inline-flex cursor-pointer items-center justify-center gap-2 font-ethnocentric">
                Airdrops <IconChevron />
            </div> -->
            <img :src="bellImg" alt="bell" class="h-12 w-12 cursor-pointer object-contain" />
            <div class="relative flex h-[50px] w-[190px] items-center justify-between px-3 py-6">
                <img :src="coinImg" alt="coin" class="mr-2 h-7 w-7" />
                <p class="font-rollbox">22.554</p>
                <IconPlus class="ml-5 -translate-y-[2px] cursor-pointer text-white/50" />
                <svg
                    width="190"
                    height="50"
                    viewBox="0 0 190 50"
                    fill="none"
                    class="pointer-events-none absolute inset-0"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5.5V45" stroke="url(#paint0_linear_2263_33906)" />
                    <path d="M188.5 5V45" stroke="url(#paint1_linear_2263_33906)" />
                    <path
                        d="M187.873 43C186.927 43 186.099 43.5878 185.863 44.3893H157.201L152.059 49.0382H37.882L32.7405 44.3893H4.07777C3.84138 43.5878 3.07331 43 2.06864 43C0.945783 43 0 43.855 0 44.8702C0 45.8855 0.945783 46.7404 2.06864 46.7404C3.01421 46.7404 3.84138 46.1527 4.07777 45.3512H32.3268L37.4682 50H152.532L157.674 45.3512H185.922C186.159 46.1527 186.927 46.7404 187.932 46.7404C189.055 46.7404 190 45.8855 190 44.8702C190 43.855 189.055 43 187.932 43H187.873Z"
                        fill="url(#paint2_linear_2263_33906)" />
                    <path
                        d="M2.1278 7C3.07337 7 3.90054 6.41222 4.13693 5.61069H32.7996L37.9411 0.961836H152.118L157.26 5.61069H185.922C186.159 6.41222 186.927 7 187.932 7C189.055 7 190 6.14504 190 5.12978C190 4.11451 189.055 3.25955 187.932 3.25955C186.986 3.25955 186.159 3.84733 185.922 4.64886H157.674L152.532 0H37.4682L32.3268 4.64886H4.07777C3.84138 3.84733 3.07331 3.25955 2.06864 3.25955C0.945783 3.25955 0 4.11451 0 5.12978C0 6.14504 0.945783 7 2.06864 7H2.1278Z"
                        fill="url(#paint3_linear_2263_33906)" />
                    <defs>
                        <linearGradient
                            id="paint0_linear_2263_33906"
                            x1="4"
                            y1="25.25"
                            x2="3"
                            y2="25.25"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#60E2FF" />
                            <stop offset="0.5" stop-color="#8C98FF" />
                            <stop offset="1" stop-color="#CC61FF" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_2263_33906"
                            x1="189.5"
                            y1="25"
                            x2="188.5"
                            y2="25"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#60E2FF" />
                            <stop offset="0.5" stop-color="#8C98FF" />
                            <stop offset="1" stop-color="#CC61FF" />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_2263_33906"
                            x1="190"
                            y1="46.5"
                            x2="1.23627e-08"
                            y2="46.5"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#60E2FF" />
                            <stop offset="0.5" stop-color="#8C98FF" />
                            <stop offset="1" stop-color="#CC61FF" />
                        </linearGradient>
                        <linearGradient
                            id="paint3_linear_2263_33906"
                            x1="190"
                            y1="3.5"
                            x2="1.23627e-08"
                            y2="3.5"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#60E2FF" />
                            <stop offset="0.5" stop-color="#8C98FF" />
                            <stop offset="1" stop-color="#CC61FF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <!-- <IconBell notification class="h-6" /> -->
            <Popover class="relative">
                <PopoverButton class="text-left">
                    <HeaderUserRank />
                </PopoverButton>
                <PopoverPanel
                    class="absolute right-0 z-10 min-w-[150px] bg-gradient-header px-5 py-3 backdrop-blur-md dark:bg-dark-glass dark:bg-none">
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

<style lang="scss" scoped>
.wallet {
    height: 50px;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        background-color: rgba(255, 255, 255, 0.411);
        width: 100%;
        height: 100%;
        inset: 0;
        clip-path: polygon(
            0 0.3571rem,
            calc(100% - 2.4286rem) 0.3571rem,
            calc(100% - 1.8571rem) 0,
            100% 0,
            100% 100%,
            2.4286rem 100%,
            1.8571rem calc(100% - 0.3571rem),
            0 calc(100% - 0.3571rem),
            0 calc(100% - 2px - 0.3571rem),
            calc(1.8571rem + 1px) calc(100% - 2px - 0.3571rem),
            calc(2.4286rem + 1px) calc(100% - 2px),
            calc(100% - 2px) calc(100% - 2px),
            calc(100% - 2px) 2px,
            calc(100% - 1.8571rem + 2px - 1px) 2px,
            calc(100% - 2.4286rem + 2px - 1px) calc(0.3571rem + 2px),
            2px calc(0.3571rem + 2px),
            2px calc(100% - 2px - 0.3571rem),
            0 calc(100% - 2px - 0.3571rem)
        );
    }
}
</style>
