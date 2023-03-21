<template>
    <div class="mt-4 grid cursor-pointer grid-cols-2 gap-x-4">
        <img src="/img/video-card/15.png" alt="video-card" class="aspect-video w-full" />
        <div class="flex flex-col justify-between">
            <p>Arbitrum NFT Ecosystem (My Favorite NFTs on Arbitrum)</p>
            <div class="flex items-center gap-3 text-xs">
                <IconEye class="inline-block h-4 w-4" /><span>932 456</span>
                <IconClock class="inline-block h-3 w-4" /><span>3 days ago</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IconClock, IconEye } from './icons';

</script>

