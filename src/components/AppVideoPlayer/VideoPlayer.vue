<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useFullscreen, useMediaControls } from '@vueuse/core'
import Controls from './VideoPlayerControls'
import { IconPlay, IconPause, IconFullScreenOn, IconFullScreenOff, IconVolume } from '../icons';
import IconAirPlay from '../icons/IconAirPlay.vue';
import type { SoundVolumeType } from '@/types';

const video = ref<HTMLVideoElement>()
const loop = ref(false)

const videoWrap = ref(null)
const { isFullscreen, toggle: toggleFullscreen } = useFullscreen(videoWrap)

const visibleControls = ref(false)
const setVisibleControls = () => {
    if(!visibleControls.value) {
        visibleControls.value = true
        setTimeout(() => {
            visibleControls.value = false
        }, 4000)
    }   
    return /* Если уже true ничего не делаем */
}

const controls = useMediaControls(video, {
  src: {
    src: 'https://storage.googleapis.com/nimbl_next/NFTs%20and%20the%20%2413B%20marketplace%2C%20explained.mp4',
    type: 'video/mp4',
  }
})

const {
  playing,
  buffered,
  currentTime,
  duration,
  tracks,
  waiting,
  selectedTrack,
  volume,
  muted,
  isPictureInPicture,
  supportsPictureInPicture,
  togglePictureInPicture,
  enableTrack,
  disableTrack,
} = controls
// const text = reactive(controls)
const endBuffer = computed(() => buffered.value.length > 0 ? buffered.value[buffered.value.length - 1][1] : 0)
const formatDuration = (seconds: number) => new Date(1000 * seconds).toISOString().slice(14, 19)

// Change initial media properties
onMounted(() => {
  volume.value = 0.5
})

watch(muted, () => {
  if (muted.value) {
    volume.value = 0
  } else if( volume.value === 0) {
    volume.value = 0.5
  }
})

const soundVolume = computed<SoundVolumeType>(() => {
  if(volume.value === 0 || muted.value) {
    return 'off'
  } else if(volume.value > 0.5) {
    return 'high'
  } else if(volume.value < 0.2) {
    return 'low'
  } else {
    return 'medium'
  }
})
</script>

<template>
  <div
    class="outline-none group/video"
    :tabindex="0"
    autofocus
    ref="videoWrap"
    @keydown.prevent.space="playing = !playing"
    @keydown.right="currentTime += 10"
    @keydown.left="currentTime -= 10"
    @mousemove="setVisibleControls"
  >
    <div class="relative w-full h-full bg-black shadow overflow-hidden">
        <!-- crossorigin="anonymous" -->
      <video
        ref="video"
        class="w-full block"
        :loop="loop"
        @click="playing = !playing"
      />
      <div
        v-if="waiting"
        class="absolute inset-0 grid place-items-center pointer-events-none bg-black bg-opacity-20"
      >
        <Controls.Spinner />
      </div>

      <!-- Controls -->
      <div :class="[' absolute inset-x-0 bottom-0 z-20 h-1/2 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30', !playing || visibleControls ?  'visible' : 'invisible']">
        <div class="flex-grow" @click="playing = !playing"></div> <!-- Field от центра видео до controls -->

        <!-- Линия перемотки -->
        <Controls.Scrubber v-model="currentTime" :max="duration" :secondary="endBuffer" class="">
            <template #default="{ position, pendingValue }">
                <div class="absolute transform -translate-x-1/2 bg-black rounded px-2 bottom-0 mb-4 py-1 text-xs text-white" :style="{ left: position }">
                    {{ formatDuration(pendingValue) }}
                </div>
            </template>
        </Controls.Scrubber>
        <!--  -->

        <!-- Строка Контролеров -->
        <div :class="['flex flex-row  items-center ', isFullscreen ? 'py-3 px-4 gap-4' : 'h-10 gap-2 py-1 px-2']">
        <button @click="playing = !playing">
            <IconPlay v-if="!playing" class="inline-block align-middle w-7 h-7" />
            <IconPause v-else class="inline-block align-middle w-7 h-7" />
        </button>
        <button @click="muted = !muted">
            <IconVolume class="inline-block align-middle w-7 h-7" :volume="soundVolume" />
        </button>
        
        <Controls.Scrubber v-model="volume" :max="1" class="w-32 ml-2" />
        <div
            class="flex flex-col flex-1 text-sm ml-2"
        >
            {{ formatDuration(currentTime) }} / {{ formatDuration(duration) }}
        </div>

    <!--     <Controls.Menu class="mr-2">
            <template #default="{ open }">
            <button @click="open">
                <i i-carbon-closed-caption inline-block align-middle />
            </button>
            </template>
            <template #menu="{ close }">
            <div class="absolute bottom-0 right-0 bg-black rounded py-2 shadow">
                <Controls.MenuItem
                @keydown.stop.prevent.enter.space="disableTrack()"
                @click="() => { disableTrack(); close() }"
                >
                <span class="flex-1">Off</span>
                <i i-carbon-checkmark inline-block align-middle :class="{ 'opacity-0': selectedTrack !== -1 }" />
                </Controls.MenuItem>
                <Controls.MenuItem
                v-for="track in tracks"
                :key="track.id"
                @keydown.stop.prevent.enter.space="enableTrack(track)"
                @click="() => { enableTrack(track); close() }"
                >
                <span class="flex-1">{{ track.label }}</span>
                <i i-carbon-checkmark inline-block align-middle :class="{ 'opacity-0': track.mode !== 'showing' }" />
                </Controls.MenuItem>
            </div>
            </template>
        </Controls.Menu> -->
      <!--   <Controls.Menu class="mr-2">
            <template #default="{ open }">
            <button class="block" @click="open()">
                <i i-carbon-settings inline-block align-middle />
            </button>
            </template>
            <template #menu="{ close }">
            <div class="absolute bottom-0 right-0 shadow py-2 bg-black rounded">
                <Controls.MenuItem
                v-if="supportsPictureInPicture"
                @click="() => { togglePictureInPicture(); close(); }"
                >
                <i i-carbon-popup />
                <span>{{ isPictureInPicture ? 'Exit' : 'Enter' }} Picture in Picture</span>
                </Controls.MenuItem>
                <Controls.MenuItem @click="() => { loop = !loop; close(); }">
                <i i-carbon-repeat />
                <span class="flex-1">Loop</span>
                <i v-if="loop" i-carbon-checkmark />
                </Controls.MenuItem>
            </div>
            </template>
        </Controls.Menu> -->
      <!--   <Controls.Menu>
            <template #default="{ open }">
            <button class="block" @click="open()">
                <i i-carbon-meter inline-block align-middle />
            </button>
            </template>
            <template #menu="{ close }">
            <div class="absolute bottom-0 right-0 shadow py-2 bg-black rounded">
                <Controls.MenuItem @click="() => { controls.rate.value = 2; close(); }">
                <i i-carbon-meter-alt />2x
                </Controls.MenuItem>
                <Controls.MenuItem @click="() => { controls.rate.value = 1; close(); }">
                <i i-carbon-meter-alt />1x
                </Controls.MenuItem>
            </div>
            </template>
        </Controls.Menu> -->
        <button @click="togglePictureInPicture" v-if="supportsPictureInPicture">
            <IconAirPlay class="inline-block align-middle w-7 h-7" />
        </button>
        <button @click="toggleFullscreen">
            <IconFullScreenOn v-if="!isFullscreen" class="inline-block align-middle w-7 h-7" />
            <IconFullScreenOff v-else  class="inline-block align-middle w-7 h-7" />
        </button>
        </div>
        <!--  -->
      </div>
      <!--  -->
    
    </div>

    

    
  </div>
  <!-- <pre class="code-block" lang="yaml">{{ text }}</pre> -->
</template>