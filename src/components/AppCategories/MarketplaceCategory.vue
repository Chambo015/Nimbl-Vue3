<script setup lang="ts">
import { useCategoryStore } from '@/stores/category';
import { storeToRefs } from 'pinia';

const categoryStore =  useCategoryStore()
const { marketplaceCategoryList, activeMarketplace } = storeToRefs(categoryStore)
</script>

<template>
    <div class="grid grid-cols-4 gap-5 ">
        <div v-for="category in marketplaceCategoryList" :key="category.id" :class="['card overflow-hidden relative',  category.title === activeMarketplace && 'active']" @click="activeMarketplace = category.title">
            <div class="group py-11 min-w-[290px] bg-clip-padding border border-transparent text-2xl font-tt-octosquares font-bold uppercase flex relative  before:bg-black/80 before:absolute before:inset-0 before:z-[-1] isolate  justify-center items-center cursor-pointer bg-custom-center hover:bg-[length:_105%_auto] hover:shadow-md hover:before:bg-black/40 before:transition-colors  transition-[background-size] duration-300 will-change-[background-size]" :style="{backgroundImage: `url(${category.img})`}">
                <span v-for="(w, idx) of category.title.split(' ')[0]" :key="w" class="transition-all group-hover:mx-[1.5px]" :style="{transitionDelay: idx * 50 + 'ms'}">{{ w }}</span>
                <template v-if="category.title.split(' ')[1]"><span class="mx-1"> </span><span v-for="(w, idx) of category.title.split(' ')[1]" :key="w" class="transition-all group-hover:mx-[1.5px]" :style="{transitionDelay: idx * 50 + 'ms'}">{{ w }}</span></template>
            </div>
            <div class="border_gradient"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    .border_gradient {
        opacity: 0;
        position: absolute;
        z-index: -2;
        left: -50%;
        top: -150%;
        right: -50%;
        bottom: -150%;
        transition: all 0.3s linear;
        background-clip:  border-box;
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
            opacity: .2;
            animation: rotate-gradient 5s infinite normal;
        }
    }
    &.active {
        .border_gradient {
            opacity: 1;
        }
    }
}
</style>