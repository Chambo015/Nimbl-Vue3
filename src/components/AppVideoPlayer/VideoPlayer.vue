<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useFullscreen, useMediaControls, useElementSize, useToggle  } from '@vueuse/core';
import Controls from './VideoPlayerControls';
import {
    IconPlay,
    IconPause,
    IconFullScreenOn,
    IconFullScreenOff,
    IconVolume,
    IconSettingsSolid,
    IconChatGPT,
} from '../icons';
import IconAirPlay from '../icons/IconAirPlay.vue';
import type { SoundVolumeType } from '@/types';
import ControlsChatGPT from './VideoPlayerControls/ControlsChatGPT.vue';

const videoEl = ref<HTMLVideoElement>();
const loop = ref(false);

const videoWrap = ref(null);
const { isFullscreen, toggle: toggleFullscreen } = useFullscreen(videoWrap);
const { width: widthVideo, height: heightVideo } = useElementSize(videoWrap);

const controls = useMediaControls(videoEl, {
    src: {
        src: 'https://storage.googleapis.com/nimbl_next/NFTs%20and%20the%20%2413B%20marketplace%2C%20explained.mp4',
        type: 'video/mp4',
    },
});

const {
    playing,
    buffered,
    currentTime,
    duration,
    waiting,
    volume,
    muted,
    supportsPictureInPicture,
    togglePictureInPicture,
} = controls;

/* Computed for duration Video */
const endBuffer = computed(() => (buffered.value.length > 0 ? buffered.value[buffered.value.length - 1][1] : 0));
const formatDuration = (seconds: number) => new Date(1000 * seconds).toISOString().slice(14, 19);


/* Visible Controls and Menu */
const [visibleChatGPT, toggleChatGPT] = useToggle()
const visibleControls = ref(false);
const mousemoveHandler = () => {
    if (!visibleControls.value) {
        visibleControls.value = true;
        console.log('debug');
        setTimeout(() => {
            visibleControls.value = false;
        }, 4000);
    }
    return;
};





/* Change initial media properties */
onMounted(() => {
    volume.value = 0.5;
});
watch(muted, () => {
    if (muted.value) {
        volume.value = 0;
    } else if (volume.value === 0) {
        volume.value = 0.5;
    }
});

/* Computed Volume Icon */
const soundVolume = computed<SoundVolumeType>(() => {
    if (volume.value === 0 || muted.value) {
        return 'off';
    } else if (volume.value > 0.5) {
        return 'high';
    } else if (volume.value < 0.2) {
        return 'low';
    } else {
        return 'medium';
    }
});

</script>

<template>
    <div
        class="group/video outline-none"
        :tabindex="0"
        autofocus
        ref="videoWrap"
        @keydown.prevent.space="playing = !playing"
        @keydown.right="currentTime += 10"
        @keydown.left="currentTime -= 10"
        @mousemove="mousemoveHandler">
        <div class="relative h-full w-full overflow-hidden bg-black shadow">
            <!-- crossorigin="anonymous" -->
            <video ref="videoEl" class="block w-full" :loop="loop" @click="playing = !playing" />
            <div
                v-if="waiting"
                class="pointer-events-none absolute inset-0 grid place-items-center bg-black bg-opacity-20">
                <Controls.Spinner />
            </div>

            <!-- Controls -->
            <div
                :class="[
                    'absolute inset-x-0 bottom-0 z-20 flex h-1/2 flex-col justify-end bg-gradient-to-t from-black/70 via-black/30',
                    !playing || visibleControls ? 'visible' : 'invisible',
                ]">
                <!-- заполнитель пространства  -->
                <div class="flex-grow" @click="playing = !playing"></div>
                <!--  -->

                <!-- Wrap Menu Controls -->
                <div class="flex" @click.self="playing = !playing">
                    <ControlsChatGPT v-if="visibleChatGPT" class="ml-auto" />
                </div>
                <!-- --- -->

                <!-- Линия перемотки -->
                <Controls.Scrubber v-model="currentTime" :max="duration" :secondary="endBuffer" class="flex-shrink-0">
                    <template #default="{ position, pendingValue }">
                        <div
                            class="absolute bottom-0 mb-4 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-xs text-white"
                            :style="{ left: position }">
                            {{ formatDuration(pendingValue) }}
                        </div>
                    </template>
                </Controls.Scrubber>
                <!-- --- -->

                <!-- Строка Контролеров -->
                <div :class="['flex flex-row  items-center gap-4', isFullscreen ? 'py-3 px-4' : 'h-10 py-1 px-2']">
                    <!-- toggle Play -->
                    <button @click="playing = !playing">
                        <IconPlay v-if="!playing" class="inline-block h-8 w-8 align-middle" />
                        <IconPause v-else class="inline-block h-8 w-8 align-middle" />
                    </button>
                    <!--  -->

                    <!-- toggle Muted -->
                    <button @click="muted = !muted" title="Volume">
                        <IconVolume class="inline-block h-8 w-8 align-middle" :volume="soundVolume" />
                    </button>
                    <!--  -->

                    <!-- Линия звука -->
                    <Controls.Scrubber v-model="volume" :max="1" class="ml-2 w-32" />
                    <!-- --- -->

                    <div class="ml-2 flex flex-1 flex-col text-sm">
                        {{ formatDuration(currentTime) }} / {{ formatDuration(duration) }}
                    </div>
                    <!-- toggle ChatGPT -->
                    <button class="flex items-center justify-center rounded-sm bg-white p-[2px]" title="ChatGPT" @click="toggleChatGPT()">
                        <IconChatGPT class="inline-block h-6 w-6 align-middle text-black" />
                    </button>
                    <!-- --- -->

                    <!-- toggle Picture In Picture -->
                    <button @click="togglePictureInPicture" v-if="supportsPictureInPicture" title="Picture In Picture">
                        <IconAirPlay class="inline-block h-8 w-8 align-middle" />
                    </button>
                    <!-- --- -->

                    <!-- toggle Settings -->
                    <button title="Settings">
                        <IconSettingsSolid class="inline-block h-8 w-8 align-middle" />
                    </button>
                    <!-- --- -->

                    <!-- toggle FullScreen toggle  -->
                    <button @click="toggleFullscreen" title="Fullscreen">
                        <IconFullScreenOn v-if="!isFullscreen" class="inline-block h-8 w-8 align-middle" />
                        <IconFullScreenOff v-else class="inline-block h-8 w-8 align-middle" />
                    </button>
                    <!-- --- -->
                </div>
                <!--  -->
            </div>
            <!--  -->

            <div
                :class="['absolute inset-x-0 top-0 z-20 flex flex-col h-1/3  bg-gradient-to-b from-black/70 via-black/30 px-5 pt-5',
                    !playing || visibleControls ? 'visible' : 'invisible']">
                <div class="flex justify-between">
                  <h2 class="max-w-[60%] text-2xl font-semibold">
                      IGNORE THE FUD Binance CZ | AAVE Freezes Lending Markets | Polygon Solana NFT
                  </h2>
                  <div class="flex gap-3">
                      <div class="text-right">
                          <p class="text-2xl">Helen_NFT</p>
                          <p class="text-xl text-[#A9A9B7]">245,511 members</p>
                      </div>
                      <img
                          src="/img/users/11.png"
                          alt="userAvatar"
                          width="64"
                          height="64"
                          class="h-16 w-16 rounded-full" />
                  </div>
                </div>
                <!-- заполнитель пространства  -->
                <div class="flex-grow" @click="playing = !playing"></div>
                <!--  -->
            </div>
        </div>
    </div>
    <!-- <pre class="code-block" lang="yaml">{{ text }}</pre> -->
</template>
