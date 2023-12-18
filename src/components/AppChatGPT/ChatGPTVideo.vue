<script setup lang="ts">
import ChatGPTTyped from '@/components/AppChatGPT/ChatGPTTyped.vue';
import { useScrollToBottom } from '@/composables/useScrollToBottom';
import { useChatGPTStore } from '@/stores/chatGPT';
import { ref , nextTick} from 'vue';
import IconSend from '../icons/IconSend.vue';

const chatStore = useChatGPTStore();
const tabsGtp = ['summary', 'similar videos', 'links', 'transcription'];
const inputText = ref<string>('');

const scrollParent = ref<HTMLElement | null>(null);
const wrapChat = ref<HTMLElement | null>(null);

useScrollToBottom(wrapChat, scrollParent);

const addAnchorTime = async (time: number) => {
    await nextTick()
    const link = wrapChat.value?.querySelector('span[data-time]');
    console.log(link);
    link?.addEventListener('click', () => {
        chatStore.changeCurrentTimeVideoFromAI = time;
    });
};

const sendMessageHandle = () => {
    if (inputText.value.trim().length > 0) {
        chatStore.innerVideoChat.push({
            id: chatStore.innerVideoChat.length,
            isChatGPT: false,
            showStatus: true,
            text: [inputText.value],
        });
        inputText.value = '';
        chatStore.innerVideoChat.push({
            id: chatStore.innerVideoChat.length,
            isChatGPT: true,
            showStatus: false,
            text: [
                'The conversation about Solana starts on <span data-time="1:27" class="text-light-blue cursor-pointer">1:27</span>',
            ],
            delayToResponse: 2500,
            onCompleteTyping: () => {
                addAnchorTime(87);
            },
        });
    }
};
</script>

<template>
    <div class="relative flex grow flex-col overflow-hidden backdrop-blur">
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
                    @complete-typing="
                        () => {
                            chatStore.setShowStatus({ id: msg.id, isVideoChat: true });
                            if (!msg.onCompleteTyping) return;
                            msg.onCompleteTyping();
                        }
                    "
                    bg-color-user="bg-[#343541]"
                    bg-color-gpt="bg-[#343541]/40" />
            </div>
        </div>
        <div class="absolute inset-x-3 bottom-3 flex h-10 bg-[#16161a]">
            <input
                v-model="inputText"
                @keydown.enter="sendMessageHandle"
                type="text"
                class="h-full w-full border-none bg-transparent px-3 py-1 outline-none"
                placeholder="Message NimblAI..." />
            <button
                @click="sendMessageHandle"
                class="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center">
                <IconSend />
            </button>
        </div>
    </div>
</template>

<style scoped></style>
