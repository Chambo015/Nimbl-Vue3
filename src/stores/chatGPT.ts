import { defineStore } from 'pinia';
import type { TypeMessageGPT } from '@/types';
import AppVideoCardPreview from '@/components/AppVideoCardPreview.vue';
import { shallowRef } from 'vue';


interface Store {
    chat: TypeMessageGPT[];
    innerVideoChat: TypeMessageGPT[];
}

const initialInnerVideoChat = () => ([
    {
        id: 0,
        text: [
            "Hi, I'm ChatGPT! Explore similar videos, summaries, links, and access transcripts.",
            "Let's dive in!",
        ],
        isChatGPT: true,
        showStatus: false,
    }
]) 

export const useChatGPTStore = defineStore('chatGPT', {
    state: (): Store => ({
        chat: [
            {
                id: 0,
                text: [
                    "Welcome to Nimbl, I'm NimblAI, your AI assistant for knowledge discovery.",
                    "I'll do my best to provide you with personalized results.",
                ],
                isChatGPT: true,
                showStatus: false,
            },
        ],
        innerVideoChat: initialInnerVideoChat()
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
        summarizeVideo() {
            this.innerVideoChat.push(
                {
                    id: this.innerVideoChat.length ,
                     isChatGPT: false,
                     showStatus: false,
                     text: ['summarize video']
                }, {
                    id: this.innerVideoChat.length  + 1,
                    isChatGPT: true,
                    showStatus: false,
                    text: ['The video is a bankless weekly roll-up discussing the news in the crypto world. They cover topics such as the Arbitrum airdrop, a banking crisis fallout, whether Ethereum is a security, a hack of $196 million in D5 protocol Oiler, Fidelity giving access to Bitcoin and Ether, and the fragility of D5 protocols due to their reliance on USDC stablecoin. They also mention the launch of the Bankless website, an NFT sale by Starbucks, and a crypto game pipeline by Epic. The transcript also includes various opinions and discussions related to the covered topics.'],
                    delayToResponse: 3500
                }
            )
        },
        resetVideoChat() {
            this.innerVideoChat = initialInnerVideoChat()
        },
        setShowStatus(payload: { id: number, isVideoChat?: boolean }) {
            let message = null

            if(payload.isVideoChat) {
                message = this.innerVideoChat.find((m) => m.id === payload.id);
            } else {
                 message = this.chat.find((m) => m.id === payload.id);
            }
            if (message) message.showStatus = true;
        },
    },
});
