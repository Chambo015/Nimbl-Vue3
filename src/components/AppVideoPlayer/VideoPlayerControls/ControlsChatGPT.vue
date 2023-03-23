<script setup lang="ts">
import TheChatGPTItem from '@/components/TheChatGPTItem.vue';
import { useChatGPTStore } from '@/stores/chatGPT';
import { onUnmounted } from 'vue';

const chatStore = useChatGPTStore();
const tabsGtp = ['summary', 'similar videos', 'links', 'transcription']

onUnmounted(() => {
    chatStore.resetVideoChat()
})

</script>

<template>
    <div class="w-[min(45%,600px)] overflow-hidden flex flex-col justify-end self-end max-h-[500px] bg-[#343541]/40 backdrop-blur">
        <div class="flex justify-start gap-2 p-4">
            <button @click="() => tab === 'summary' ? chatStore.summarizeVideo() : null" v-for="tab in tabsGtp" :key="tab" class="px-4 whitespace-nowrap py-1 bg-[#2C2E35]">{{ tab }}</button>
        </div>
        <div  v-auto-animate="{ duration: 500 }" class="overflow-y-scroll justify-end [overflow-anchor:none]">
            <TheChatGPTItem
                    v-for="msg in chatStore.innerVideoChat"
                    :key="msg.id"
                    :message="msg"
                    isInnerVideoChat
                    @complete-typing="() => chatStore.setShowStatus({ id: msg.id })" />
            <div id="anchor" class="[overflow-anchor:auto] h-[1px]"></div>
        </div>
    </div>
</template>



<style scoped>

</style>