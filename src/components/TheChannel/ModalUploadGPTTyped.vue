<script setup lang="ts">
import Typed from 'typed.js';
import { onMounted, ref } from 'vue';

const text = ['The video is a bankless weekly roll-up discussing the news in the crypto world. They cover topics such as the Arbitrum airdrop, a banking crisis fallout, whether Ethereum is a security, a hack of $196 million in D5 protocol Oiler, Fidelity giving access to Bitcoin and Ether, and the fragility of D5 protocols due to their reliance on USDC stablecoin. They also mention the launch of the Bankless website, an NFT sale by Starbucks, and a crypto game pipeline by Epic. The transcript also includes various opinions and discussions related to the covered topics.']


const typingRef = ref(null);
const typed = ref<Typed | null>(null);
onMounted(() => {
    typed.value = new Typed(typingRef.value, {
            strings: [...text],
            typeSpeed: 10,
            autoInsertCss: true,
            startDelay: 2000,
            onComplete: (self: Typed) => {
                setTimeout(() => {
                    self.cursor.remove();
                }, 200);
            },
        });
        typed.value.cursor.classList.add('typed-cursor--blink'); // включил мигание курсора
})
</script>


<template>
    <div>
        <span ref="typingRef"></span>
    </div>
</template>


<style scoped>

</style>