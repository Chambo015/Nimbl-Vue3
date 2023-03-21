import { defineStore } from 'pinia';
import type { TypeMessageGPT } from '@/types';
import AppVideoCardPreview from '@/components/AppVideoCardPreview.vue';
import { shallowRef } from 'vue';


interface Store {
    chat: TypeMessageGPT[];
}


export const useChatGPTStore = defineStore('chatGPT', {
    state: (): Store => ({
        chat: [
            {
                id: 0,
                text: [
                    "Welcome to Nimbl, I'm ChatGPT, your AI assistant for knowledge discovery.",
                    "I'll do my best to provide you with personalized results.",
                ],
                isChatGPT: true,
                showStatus: false,
            },
        ],
    }),
    actions: {
        addMessage(payload: { message: TypeMessageGPT }) {
            this.chat.push(payload.message);
            this.chat.push({
                id: this.chat.length + 1,
                isChatGPT: true,
                showStatus: false,
                text: ['Sure, below is the last video you watched about arbitrum NFTs'],
                attachComponent: shallowRef(AppVideoCardPreview),
                delayToResponse: 3500
            });
            
        },
        setShowStatus(payload: { id: number }) {
            const message = this.chat.find((m) => m.id === payload.id);
            if (message) message.showStatus = true;
        },
    },
});
