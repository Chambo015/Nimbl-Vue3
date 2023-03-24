<script setup lang="ts">
import { ref, type PropType, onMounted, onUnmounted } from 'vue';
import Typed from 'typed.js';
import type { TypeMessageGPT } from '@/types';
import { IconChatGPT } from './icons';

const props = defineProps({
    message: {
        type: Object as PropType<TypeMessageGPT>,
        required: true,
    },
    isInnerVideoChat: Boolean,
    bgColorUser: {
        type: String
    },
    bgColorGpt: {
        type: String,
    }

});
const emit = defineEmits(['completeTyping']);

const typingRef = ref(null);
const typed = ref<Typed | null>(null);

onMounted(() => {
    if (typingRef.value && props.message.isChatGPT && !props.message.showStatus) {
        typed.value = new Typed(typingRef.value, {
            strings: [props.message.text.join('^500 <p class="my-4"></p>')],
            typeSpeed: 20,
            autoInsertCss: true,
            startDelay: props.message.delayToResponse || 500,
             onComplete: (self: Typed) => {
                emit('completeTyping');
                setTimeout(() => {
                    self.cursor.remove();
                }, 200);
            },
        });
        typed.value.cursor.classList.add('typed-cursor--blink'); // включил мигание курсора
    }
});

onUnmounted(() => {
    typed.value?.destroy();
});
</script>

<!-- isInnerVideoChat ? {'!bg-[#343541] ': !message.isChatGPT , 'bg-[#343541]/40': message.isChatGPT} : {'!bg-[#343541] dark:bg-[#333042]': !message.isChatGPT}  -->
<template>
    <div :class="['flex gap-5 py-3 px-5 backdrop-blur', message.isChatGPT ? bgColorGpt : bgColorUser]">
        <div :class="['self-center ', message.isChatGPT ? 'bg-[#11A37F] p-1' : '']"> 
            <IconChatGPT class="h-8 w-8" v-if="message.isChatGPT" />
            <img v-else src="/img/users/1.png" width="32" height="32" alt="user avatar" class="h-10 w-10 object-cover" />
        </div>
        <div class="p-4 leading-normal space-y-4">
            <span v-if="message.isChatGPT && !message.showStatus"  ref="typingRef"></span>
            <template v-else>
                <p v-for="item in message.text" :key="item">{{ item }}</p>
            </template>
            <Transition  enter-active-class="transition duration-500 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100">
                <component  key="contentAttach" v-if="message.isChatGPT && message.showStatus" :is="message.attachComponent" />
            </Transition>
        </div>
    </div>
</template>

<style scoped>
</style>
