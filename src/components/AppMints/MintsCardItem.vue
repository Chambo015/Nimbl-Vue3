<script setup lang="ts">
import { computed, ref, type PropType } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: 'What You Need To Know About The NFT World',
    },
    previewImgUrl: {
        type: String,
        default: '/img/video-card/1.jpg'
    },
    channelImgUrl: {
        type: String,
        default: '/img/users/1.png',
    },
    openVideo: {
        type: Function as PropType<() => void>
    }
});

const channelImg = computed(() => (new URL(props.channelImgUrl, import.meta.url).href))
const previewImg = computed(() => (new URL(props.previewImgUrl, import.meta.url).href))

const isHover = ref(false);
</script>

<template>
    <li class="card relative overflow-hidden p-[1px]" @click="openVideo && openVideo()">
        <div class="border_gradient"></div>
        <!-- Content inner card -->
        <div
            class="group flex h-full cursor-pointer flex-col bg-dark-violet p-[6px]"
            @mouseenter="() => (isHover = true)"
            @mouseleave="() => (isHover = false)">
            <div class="relative w-full flex-shrink-0 overflow-hidden before:block before:pt-[100%]">
                <img
                    :src="previewImg"
                    alt="poster"
                    width="165"
                    height="165"
                    class="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div class="mt-3 flex items-center">
                <p class="truncate" :title="title">{{ title }}</p>
                <div class="ml-auto h-5 w-5 flex-shrink-0 overflow-hidden rounded-full">
                    <img :src="channelImg" alt="channelImgUrl" class="h-full w-full object-cover" />
                </div>
            </div>
            <TransitionGroup
                mode="out-in"
                name="list"
                class="relative mt-2 grid grid-cols-2 gap-y-1 leading-none"
                tag="div">
                <p key="total" class="mb-1 text-xs text-white/50">Total mints</p>
                <p :key="1"  :class="[isHover ? 'col-span-1 ml-auto' : 'col-span-2']">50<span class="text-white/40">/2000</span></p>
                <div
                    v-if="!isHover"
                    key="line"
                    class="col-span-2 mt-2 h-[1px] w-full overflow-hidden bg-[#2C2C35] before:block before:h-full before:w-[20%] before:bg-gradient-text"></div>
                <div v-if="!isHover" key="price" class="col-span-2 flex justify-between text-xs">
                    <p class="text-white/50">Floor price</p>
                    <p class="font-ethnocentric">8 nimbl</p>
                </div>
                <button
                    key="Get Pre-mint Token"
                    v-if="isHover"
                    class="col-span-2 w-full border border-[rgba(135,68,174,0.5)] py-1 text-xs uppercase leading-none hover:bg-[rgba(135,68,174,0.5)]">
                    Get Pre-mint Token
                </button>
                <button
                    key="mint"
                    v-if="isHover"
                    class="col-span-2 w-full bg-gradient-mint-btn py-1 text-xs uppercase leading-none">
                    mint
                </button>
            </TransitionGroup>
        </div>
    </li>
</template>

<style lang="scss" scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.4s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.list-leave-active {
    position: absolute;
}
.card {
    .border_gradient {
        opacity: 0;
        position: absolute;
        z-index: -1;
        left: -50%;
        top: -50%;
        width: 200%;
        height: 200%;
        transition: all 0.3s linear;
        background: linear-gradient(90deg, rgba(215, 11, 218, 0.5) -0.01%, #649BFF 18.66%, #FFC240 40.99%, #FFC240 48.1%, #ABDD42 54.72%, #07FFFF 62.16%, #0F50C7 70.43%, rgba(215, 11, 218, 0.5) 76.72%);

        @keyframes rotate-gradient {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
       
    }

    &:hover {
        .border_gradient {
            opacity: 1;
            animation: rotate-gradient 5s infinite alternate;
        }
    }
}


</style>
