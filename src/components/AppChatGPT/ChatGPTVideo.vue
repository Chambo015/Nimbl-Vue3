<script setup lang="ts">
import ChatGPTTyped from '@/components/AppChatGPT/ChatGPTTyped.vue';
import { useScrollToBottom } from '@/composables/useScrollToBottom';
import { useChatGPTStore } from '@/stores/chatGPT';
import { ref } from 'vue';

const chatStore = useChatGPTStore();
const tabsGtp = ['summary', 'similar videos', 'links', 'transcription'];

const scrollParent = ref<HTMLElement | null>(null);
const wrapChat = ref<HTMLElement | null>(null);

useScrollToBottom(wrapChat, scrollParent);
</script>

<template>
    <div class="flex flex-col overflow-hidden backdrop-blur">
        <div class="mr-[15px] flex justify-start gap-2 bg-[#343541]/40 p-4">
            <button
                @click="() => (tab === 'summary' ? chatStore.summarizeVideo() : null)"
                v-for="tab in tabsGtp"
                :key="tab"
                class="whitespace-nowrap bg-[#2C2E35] px-4 py-1">
                {{ tab }}
            </button>
        </div>
        <div
            ref="scrollParent"
            v-auto-animate="{ duration: 500 }"
            class="mr-[5px] justify-end overflow-y-auto overflow-x-hidden pr-[10px] [overflow-anchor:none]">
            <div ref="wrapChat">
                <ChatGPTTyped
                    v-for="msg in chatStore.innerVideoChat"
                    :key="msg.id"
                    :message="msg"
                    isInnerVideoChat
                    @complete-typing="() => chatStore.setShowStatus({ id: msg.id, isVideoChat: true })"
                    bg-color-user="bg-[#343541]"
                    bg-color-gpt="bg-[#343541]/40" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
