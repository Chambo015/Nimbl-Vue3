<script setup lang="ts">
import nimblRankImg from '@/assets/rank-nimbl.png'
</script>

<template>
    <div class="flex">
        <div class="relative py-1">
            <svg width="164" height="56" viewBox="0 0 164 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M30.8106 54.9417L16.9241 54.9417L1.14748 39.1486L1.15917 16.8254L16.9523 1.0488L39.2755 1.06049L55.0521 16.8536L55.0404 39.1768L63.3686 47.597L163.756 47.597"
                    stroke="url(#paint0_linear_2239_33199)" />
                <circle cx="161" cy="47.597" r="2.5" fill="#62DFFF" />
                <defs>
                    <linearGradient
                        id="paint0_linear_2239_33199"
                        x1="144.814"
                        y1="1.79846"
                        x2="8.9423"
                        y2="57.9949"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#60E2FF" />
                        <stop offset="0.5" stop-color="#8C98FF" />
                        <stop offset="1" stop-color="#CC61FF" />
                    </linearGradient>
                </defs>
            </svg>
            <img src="/img/users/1.png" width="45" height="45" alt="user avatar" class="absolute top-1/2 -translate-y-1/2 user_avatar translate-x-[5px]" />
            
            <div class="absolute right-0 top-1/2 -translate-y-1/2 text-sm font-rollbox font-extrabold leading-none">
                <p>Adilkhan</p>
                <p class="text-white/50">Rank1</p>
            </div>
            <svg width="0" height="0">
                <clipPath id="clip-path-user-avatar" clipPathUnits="objectBoundingBox"><path d="M0.718,0 H0.306 L0.017,0.299 V0.71 L0.306,1 H0.568 H0.718 L1,0.71 V0.299 L0.718,0"></path></clipPath>
            </svg>
        </div>
        <img :src="nimblRankImg" alt="NimblRank1" class="flex-shrink-0 w-[54px] h-[54px] object-contain self-center ml-2">
    </div>
</template>

<style scoped lang="scss">
.user_avatar {
    -webkit-clip-path: url(#clip-path-user-avatar);
  clip-path: url(#clip-path-user-avatar);
}
</style>
