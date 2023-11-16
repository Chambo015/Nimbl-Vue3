<script setup lang="ts">
import { useMetamask } from '@/composables/useMetamask';
import { IconReload, IconLogout, IconPlus, IconArrowLeft } from './icons';
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
            <picture><source srcset="/logo.webp" type="image/webp" /><img src="/logo.png" alt="logo" loading="lazy" class="h-14 object-contain" /></picture>
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
            <div class="relative shadow-[0px_1px_5px_2px_rgba(0,0,0,0.6)_inset] flex h-[50px] px-4 items-center justify-between cursor-pointer hover:bg-dark-glass transition-colors bg-default-glass">
                <p class="font-rollbox leading-none translate-y-1">22.554 <span class="text-xs gradient-text uppercase">nimbl</span></p>
                <IconPlus class="ml-5 cursor-pointer text-white/50" />
            </div>
            <!-- <IconBell notification class="h-6" /> -->
            <Popover class="relative">
                <PopoverButton class="text-left outline-none">
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
