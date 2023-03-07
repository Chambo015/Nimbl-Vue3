<script setup lang="ts">
import AppTabList from '@/components/AppTabList.vue';
import AppTabListItem from '@/components/AppTabListItem.vue';
import { IconSpinner } from '@/components/icons';
import { useMetamask } from '@/composables/useMetamask';
import type { IUser } from '@/types';
import { computed, onMounted, reactive, ref } from 'vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
import { useFullscreen } from '@vueuse/core';
import { animate } from 'motion';
import { Motion, Presence } from 'motion/vue';

const activeTab = ref<'Sign in' | 'Sign up'>('Sign in');
const setActiveTab = (tab: 'Sign in' | 'Sign up'): void => {
    activeTab.value = tab;
};

const isSignUp = computed(() => activeTab.value === 'Sign up');

const { enter: enterFullscreen } = useFullscreen(document.documentElement);

const userStore = useUserStore();
const router = useRouter();

const form = reactive<IUser>({
    username: '',
    password: '',
});

const dataUsers: IUser[] = [
    {
        username: 'Era',
        password: 'Era',
    },
    {
        username: 'Adilkhan',
        password: '7u8i9o8i',
    },
    {
        username: 'Warwick',
        password: 'TtY6630&j',
    },
];

const submitHandler = () => {
    if (!form.username.trim() && !form.password.trim()) {
        return;
    }
    const result = dataUsers.findIndex(
        ({ username, password }) =>
            username.toLocaleLowerCase() === form.username.toLocaleLowerCase() && password === form.password
    );
    if (result !== -1) {
        userStore.login(form.username);
        enterFullscreen();
        router.push({ name: 'content' });
    }
};

const { connectMetaMask, isLoading, errorMsg, errorConnect } = useMetamask();

/* Анимация  [" translate(0px, 0px) rotate(0deg)", " translate(-55px,-45px) rotate(180deg)", " translate(0px, 0px) rotate(360deg)"] */
onMounted(() => {
    animate(
        "img[alt='seashell']",
        { transform: ' translate(0, -15px) rotate(5deg)' },
        { duration: 5, easing: 'ease-in-out', repeat: Infinity, direction: 'alternate', delay: 1 }
    );
    animate(
        "img[alt='infinity']",
        { transform: ' translate(-15px, 15px) rotate(5deg)' },
        { duration: 5, easing: 'ease-in-out', repeat: Infinity, direction: 'alternate', delay: .5 }
    );
    animate(
        "img[alt='mobile']",
        { transform: ['translate(-30px, -30px)'] },
        { duration: 5, easing: 'ease-in-out', repeat: Infinity, direction: 'alternate' }
    );
    animate(
        '.mobile-back',
        {
            transform: [
                'matrix(0.99,-0.12,-0.4,0.92,0,0) scale(.95)',
                'translate(15px, 15px) matrix(0.99,-0.12,-0.4,0.92,0,0)  scale(1)',
            ],
        },
        { duration: 5, easing: 'linear', repeat: Infinity, direction: 'alternate' }
    );
});

/*   */
</script>
<template>
    <div class="relative z-50 grid min-h-screen grid-cols-2 overflow-hidden">
        <!-- Left Side -->
        <div class="col-span-1 flex flex-col">
            <div
                class="relative z-40 mb-3 flex w-full flex-grow flex-col items-center justify-center bg-light-glass backdrop-blur-sm">
                <!-- Logo -->
                <div class="mb-10 flex items-center gap-2">
                    <div class="relative flex items-center justify-center">
                        <div
                            class="absolute inline-flex h-[60%] w-[60%] animate-ping rounded-full bg-gradient-tab-list-mute"></div>
                        <img src="/logo.png" alt="logo" loading="lazy" class="h-[100px] object-contain opacity-90" />
                    </div>
                    <span class="gradient-text font-ethnocentric text-4xl">NIMBL</span>
                </div>
                <!--  -->
                <form class="flex w-[min(80%,460px)] flex-col p-2">
                    <label for="Username">Username</label>
                    <input v-model="form.username" id="Username" type="text" placeholder="Enter username" />
                    <label for="Password">Password</label>
                    <input v-model="form.password" id="Password" type="password" placeholder="Enter password" />
                    <div class="mt-2 flex flex-col gap-5">
                        <button
                            type="submit"
                            @click.prevent="submitHandler"
                            class="cursor-pointer border-none bg-gradient-tab-list py-3 px-4 text-xl text-white">
                            Sign in
                        </button>
                        <button
                            type="button"
                            @click="connectMetaMask"
                            class="flex cursor-pointer items-center justify-center border-none bg-gradient-metamask-btn py-3 px-4 text-xl text-white">
                            <IconSpinner v-if="isLoading" />
                            Sign in with MetaMask
                        </button>
                    </div>
                    <p class="text-red-600">{{ errorConnect || errorMsg }}</p>
                </form>
            </div>
            <AppTabList class="h-16 w-full bg-gradient-tab-list-mute" @change-tab="setActiveTab" v-slot="{ onChange }">
                <AppTabListItem value="Sign in" :active-value="activeTab" @click="onChange('Sign in')"
                    ><span class="text-xl">Sign in</span>
                </AppTabListItem>
                <AppTabListItem value="Sign up" :active-value="activeTab" @click="onChange('Sign up')"
                    ><span class="text-xl">Sign up</span>
                </AppTabListItem>
            </AppTabList>
        </div>
        <!--  -->
        <!-- Right Side -->
        <div class="relative col-span-1">
            <img
                src="/img/login/image1.png"
                alt="seashell"
                width="643"
                height="593"
                loading="lazy"
                :class="[
                    'absolute -left-[17%] z-[2] object-cover transition-all duration-[2s]',
                    isSignUp ? 'top-[40%]' : 'top-8',
                ]" />
            <img
                src="/img/login/image3.png"
                width="505"
                height="405"
                alt="infinity"
                loading="lazy"
                :class="[
                    'absolute -right-[10%]  z-[2] transition-all duration-[2s]',
                    isSignUp ? 'bottom-[70%]' : 'bottom-[0%]',
                ]" />
            <div
                :class="[
                    'absolute z-30 flex h-full w-full items-center justify-center transition-all duration-[2s]',
                    isSignUp ? 'left-[20%] top-[15%]' : 'left-0 top-0',
                ]">
                <img
                    src="/img/login/image2.png"
                    width="939"
                    height="857"
                    alt="mobile"
                    loading="lazy"
                    class="relative z-20 -translate-x-[15px] -translate-y-[10px]" />
                <div class="mobile-back absolute w-[31%] rounded-2xl bg-light-glass pt-[67%]"></div>
            </div>
            <Presence>
                <Motion
                    tag="p"
                    :animate="{ transform: 'translateY(0)', opacity: 1, transition: { duration: 1 } }"
                    :initial="{ transform: 'translateY(-25px)', opacity: 0, transition: { duration: 1 }  }"
                    :exit="{ transform: 'translateY(-25px)', opacity: 0, transition: { duration: 1 }  }"
                    v-if="isSignUp"
                    class="absolute left-8 top-[10%] z-50 w-[550px] font-ethnocentric text-5xl [text-shadow:0px_5px_15px_rgba(255,255,255,0.125)]  ">
                    Discover, collect & sell Extraordinary <span class="gradient-text">nft</span>s
                </Motion>
            </Presence>
        </div>
        <!--  -->
    </div>
</template>

<style scoped lang="scss">
label {
    @apply mb-2 text-2xl;
}

input,
textarea {
    @apply mb-4 resize-y border border-none bg-light-glass py-2 px-5 text-xl text-white;
}
</style>
