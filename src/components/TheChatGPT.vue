<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { IconSearch } from './icons';
import { useChatGPTStore } from '@/stores/chatGPT';
import TheChatGPTItem from './TheChatGPTItem.vue';
import type { HtmlAttributes } from 'csstype';
import Typed from 'typed.js';

const inputText = ref<string>('');

const chatStore = useChatGPTStore();

const isOpenPopover = ref<boolean>(false);

const openPopover = () => (isOpenPopover.value ||= true);
const closePopover = () => (isOpenPopover.value &&= false);

const inputHandler = (e: any) => e instanceof InputEvent && openPopover();

/* Click outside */
const popoverRef = ref<HTMLElement | null>(null);
onClickOutside(popoverRef, (e) => closePopover());
/* *** */

const sendMessageHandle = () => {
    if (inputText.value.trim().length > 0) {
        chatStore.addMessage({
            message: { text: [inputText.value], id: chatStore.chat.length + 1, isChatGPT: false, showStatus: true },
        });
        inputText.value = '';
    }
};

const inputRef = ref<HTMLInputElement | null>(null)
onMounted(() => {
    if (inputRef.value) {
        new Typed(inputRef.value, {
            strings: ['GPT Search Channels', 'GPT Search Channels', 'GPT Search Videos', 'GPT Search NFTs'],
            typeSpeed: 80,
            backSpeed: 0,
            loop: true,
            attr: 'placeholder',
            bindInputFocusEvents: false,
            smartBackspace: true,
        });
    }
});
</script>

<template>
    <div tabindex="0" ref="popoverRef" class="relative col-span-4" @keydown.tab.escape="closePopover">
        <label class="w-full" :aria-expanded="isOpenPopover" aria-controls="widgetChatGpt" @click="openPopover">
            <IconSearch class="absolute top-1/2 left-6 w-5 -translate-y-1/2 -translate-x-1/2 text-white/50" />
            <input
                ref="inputRef"
                type="search"
                class="relative z-50 w-full bg-[rgba(34,32,47,0.40)] py-2 pr-2 pl-12"
                @keydown.enter="sendMessageHandle"
                @focus="openPopover"
                @input="inputHandler"
                v-model="inputText" />
        </label>
        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-2 opacity-0">
            <div
                v-auto-animate="{ duration: 500 }"
                v-if="isOpenPopover"
                id="widgetChatGpt"
                class="absolute z-10 mt-2 min-w-full bg-[#444654] dark:bg-[#22202F] max-h-[max(500px,55vh)] overflow-y-auto">
                <TheChatGPTItem
                    v-for="msg in chatStore.chat"
                    :key="msg.id"
                    :message="msg"
                    @complete-typing="() => chatStore.setShowStatus({ id: msg.id })" />
            </div>
        </transition>
    </div>
    <div
        v-if="isOpenPopover"
        aria-hidden="true"
        class="fixed inset-0 -z-10 backdrop-blur-sm"
        @click.prevent="closePopover"></div>
</template>

<style scoped></style>
