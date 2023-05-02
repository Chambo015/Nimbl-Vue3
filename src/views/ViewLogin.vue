<script setup lang="ts">
import AppTabList from '@/components/AppTabList.vue';
import AppTabListItem from '@/components/AppTabListItem.vue';
import { IconSpinner, IconFacebook, IconGoogle } from '@/components/icons';

import { computed, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Motion, Presence } from 'motion/vue';
import { useDark, useFullscreen } from '@vueuse/core';
import { animate } from 'motion';

import type { ILoginForm } from '@/types';

import { useMetamask } from '@/composables/useMetamask';
import { useAuth } from '@/composables/useAuth';


const router = useRouter();

const activeTab = ref<'Sign in' | 'Sign up'>('Sign in');
const setActiveTab = (tab: 'Sign in' | 'Sign up'): void => {
    activeTab.value = tab;
};
const isSignUp = computed(() => activeTab.value === 'Sign up');

const { createUser, loginUser, isLoadingAuth, errorAuth } = useAuth();
const { connectMetaMask, isLoadingMetaMask, errorMetaMask, hasMetaMaskExt } = useMetamask();

const { enter: enterFullscreen } = useFullscreen(document.documentElement);
useDark({
    initialValue: 'dark',
});



const form = reactive<ILoginForm>({
    email: {
        value: '',
        typeInput: 'email',
        placeholder: 'Enter email',
        label: 'Email',
        validateError: null,
    },
    password: {
        value: '',
        typeInput: 'password',
        placeholder: 'Enter password',
        label: 'Password',
        validateError: null,
    },
    confirmPassword: {
        value: '',
        typeInput: 'password',
        placeholder: 'Enter password again',
        label: 'Confirm password',
        validateError: null,
    },
});

const submitHandler = () => {
    form.email.validateError = null;
    form.confirmPassword.validateError = null;
    form.password.validateError = null;

    if (isSignUp.value) {
        if (form.password.value.trim() !== form.confirmPassword.value.trim()) {
            form.confirmPassword.validateError = "passwords don't match";
            return;
        }
        createUser(form.email.value, form.password.value)
            .then((user) => {
                console.log(user, 'user');
                enterFullscreen()
                router.replace({name: 'content'})
            })
            .catch((error) => {
                console.error(error);
            });
    } else {
        loginUser(form.email.value, form.password.value)
            .then((user) => {
                console.log(user, 'user');
                enterFullscreen()
                router.replace({name: 'content'})
            })
            .catch((error) => {
                console.error(error);
            });
    }
};

const client = ref(null)


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
        { duration: 5, easing: 'ease-in-out', repeat: Infinity, direction: 'alternate', delay: 0.5 }
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
    //@ts-ignore
    // eslint-disable-next-line no-undef
    gapi.load('auth2', function() {
        // eslint-disable-next-line no-undef
        gapi.auth2.init({
            client_id: '163160079944-kir559oc9er5jh7gqklpa6dr16dfpdhq.apps.googleusercontent.com'
        });
    });

});


// Функция запуска аутентификации
function signIn() {
    window.gapi.auth2.getAuthInstance().signIn().then(onSignIn);
}

// Функция обратного вызова после успешной аутентификации
function onSignIn(googleUser: any) {
    console.log( googleUser.getAuthResponse().id_token);
//   var id_token = googleUser.getAuthResponse().id_token;
  // Отправьте токен на сервер и выполните дополнительные действия с пользовательским профилем
}

// Функция завершения пользовательской сессии
function signOut() {
    window.gapi.auth2.getAuthInstance().signOut();
}
/* *** */
</script>
<template>
    <div class="relative z-50 grid min-h-screen grid-cols-2 overflow-hidden">
        <!-- Left Side -->
        <div class="col-span-1 flex flex-col">
            <div
                class="relative z-40 mb-3 flex w-full flex-grow flex-col items-center bg-light-glass pt-[15%] backdrop-blur-sm">
                <!-- Logo -->
                <div class="mb-10 flex select-none items-center gap-2">
                    <div class="relative flex items-center justify-center">
                        <div
                            class="absolute inline-flex h-[60%] w-[60%] animate-ping rounded-full bg-gradient-tab-list-mute"></div>
                        <img src="/logo.png" alt="logo" loading="lazy" class="h-[100px] object-contain opacity-90" />
                    </div>
                    <span class="gradient-text font-ethnocentric text-4xl">NIMBL</span>
                </div>
                <!-- --- -->
                <!-- Login form -->
                <form
                    v-auto-animate="{ duration: 500 }"
                    class="flex w-[min(80%,460px)] flex-col p-2"
                    @submit.prevent="submitHandler">
                    <template v-for="(value, field) in form" :key="field">
                        <template v-if="field !== 'confirmPassword' || isSignUp">
                            <label :for="field">{{ value.label + ':' }}</label>
                            <input
                                required
                                autofocus
                                :minlength="field !== 'email' ? 6 : undefined"
                                v-model="value.value"
                                :id="field"
                                :type="value.typeInput"
                                :placeholder="value.placeholder" />
                            <p class="relative -top-3 text-sm text-red-400">{{ value.validateError }}</p>
                        </template>
                    </template>
                    <div class="mt-2 flex flex-col gap-5 [&>button]:flex-shrink-0">
                        <button
                            key="buttonSubmit"
                            type="submit"
                            class="cursor-pointer flex border-none items-center justify-center bg-gradient-tab-list py-3 px-4 text-xl text-white">
                            <IconSpinner v-if="isLoadingAuth" />
                            {{ isSignUp ? 'Sign up' : 'Sign in' }}
                        </button>
                        <button
                            @click="signIn"
                            key="buttonGoogle"
                            type="button"
                            class="cursor-pointer flex border-none items-center justify-center gap-4 bg-[#3E7EE8] h-[52px]  px-4 text-xl text-white">
                            <IconSpinner v-if="isLoadingAuth" />
                            <IconGoogle class="w-10 h-10" />
                            <span>{{ isSignUp ? 'Sign up' : 'Sign in' }} with Google</span>
                        </button>
                        <button
                            key="buttonFacebook"
                            type="button"
                            class="cursor-pointer flex border-none items-center justify-center gap-4 bg-[#1877F2] h-[52px]  px-4 text-xl text-white">
                            <IconSpinner v-if="isLoadingAuth" />
                            <IconFacebook class="w-10 h-10" />
                            <span>{{ isSignUp ? 'Sign up' : 'Sign in' }} with Facebook</span>
                        </button>
                        <Transition
                            enter-active-class="duration-300"
                            leave-active-class="duration-300"
                            enter-from-class="opacity-0 translate-y-6"
                            leave-to-class="opacity-0 translate-y-6">
                            <button
                                v-if="!isSignUp"
                                key="metamaskAuth"
                                type="button"
                                @click="connectMetaMask"
                                :disabled="!hasMetaMaskExt"
                                class="flex cursor-pointer items-center justify-center border-none bg-gradient-metamask-btn py-3 px-4 text-xl text-white disabled:opacity-50 disabled:cursor-not-allowed">
                                <IconSpinner v-if="isLoadingMetaMask" />
                                {{ hasMetaMaskExt ? "Sign in with MetaMask": 'Install MetaMask extension'}}
                            </button>
                        </Transition>
                        <p class="relative -top-2 text-center text-red-400" v-if="(errorMetaMask && !isSignUp) || errorAuth.message">{{ errorMetaMask || errorAuth.message }}</p>
                    </div>
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
        <!-- --- -->
        <!-- Right Side -->
        <div class="relative col-span-1">
            <img
                src="/img/login/image1.png"
                alt="seashell"
                width="643"
                height="593"
                loading="lazy"
                :class="[
                    'pointer-events-none absolute -left-[17%] z-[2] select-none object-cover transition-all duration-[2s]',
                    isSignUp ? 'top-[40%]' : 'top-8',
                ]" />
            <img
                src="/img/login/image3.png"
                width="505"
                height="405"
                alt="infinity"
                loading="lazy"
                :class="[
                    'pointer-events-none absolute  -right-[10%] z-[2] select-none transition-all duration-[2s]',
                    isSignUp ? 'bottom-[70%]' : 'bottom-[0%]',
                ]" />
            <div
                :class="[
                    'pointer-events-none absolute z-30 flex h-full w-full select-none items-center justify-center transition-all duration-[2s]',
                    isSignUp ? 'left-[20%] top-[15%]' : 'left-0 top-0',
                ]">
                <img
                    src="/img/login/image2.png"
                    width="1600"
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
                    :initial="{ transform: 'translateY(-25px)', opacity: 0, transition: { duration: 1 } }"
                    :exit="{ transform: 'translateY(-25px)', opacity: 0, transition: { duration: 1 } }"
                    v-if="isSignUp"
                    class="absolute left-8 top-[10%] z-50 w-[550px] font-ethnocentric text-5xl [text-shadow:0px_5px_15px_rgba(255,255,255,0.125)]">
                    Discover, collect & sell Extraordinary <span class="gradient-text">nft</span>s
                </Motion>
            </Presence>
        </div>
        <!-- --- -->
    </div>
</template>

<style scoped lang="scss">
label {
    @apply mb-2 text-2xl;
}

input,
textarea {
    @apply mb-4 resize-y border border-none bg-light-glass py-2 px-5 text-xl text-white autofill:bg-light-glass;
}
</style>
