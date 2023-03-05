<script setup lang="ts">
import AppTabList from '@/components/AppTabList.vue';
import AppTabListItem from '@/components/AppTabListItem.vue';
import {IconSpinner} from '@/components/icons'
import { useMetamask } from '@/composables/useMetamask';
import type { IUser } from '@/types';
import { reactive, ref } from 'vue';
import {useUserStore} from '@/stores/user'
import { useRouter } from 'vue-router';

const activeTab = ref<'Sign in' | 'Sign up'>('Sign in');
const setActiveTab = (tab: 'Sign in' | 'Sign up'): void => {
    activeTab.value = tab;
};

const userStore = useUserStore();
const router = useRouter()

const form = reactive<IUser>({
    username: '',
    password: ''
})

const dataUsers: IUser[] = [{
    username: 'Era',
    password: 'Era'
}, {
    username: 'Adilkhan',
    password: '7u8i9o8i'
}]
        
 

const submitHandler = () => {
    if(!form.username.trim() && !form.password.trim()) {
        return 
    }
    const result = dataUsers.findIndex(({username, password}) => username === form.username && password === form.password)
    if(result !== -1) {
        userStore.login(form.username)
        router.push({name: 'content'})
    }
}

const {connectMetaMask, isLoading, errorMsg, errorConnect, account} = useMetamask()

</script>
<template>
    <div class="min-h-screen grid grid-cols-2 overflow-hidden">
        <!-- Left Side -->
            <div class="col-span-1 flex flex-col">
                <div class="bg-light-glass backdrop-blur-sm w-full flex-grow mb-3 flex flex-col justify-center items-center">
                    <!-- Logo -->
                    <div class="flex items-center gap-2 mb-10">
                        <div class="relative">
                            <div class="bg-gradient-tab-list-mute rounded-full animate-ping absolute inline-flex h-full w-full"></div>
                            <img src="/logo.png" alt="logo" loading="lazy" class="h-[100px] object-contain " />
                        </div>
                        <span class="font-ethnocentric text-4xl gradient-text">NIMBL</span>
                    </div>
                    <!--  -->
                    <form class="flex w-[min(80%,460px)] flex-col p-2">
                            <label for="Username">Username</label>
                            <input v-model="form.username" id="Username" type="text" placeholder="Enter username" />
                            <label for="Password">Password</label>
                            <input v-model="form.password" id="Password" type="password" placeholder="Enter password" />
                            <div class="mt-2 flex flex-col gap-5">
                                <button type="submit" @click.prevent="submitHandler" class="bg-gradient-tab-list cursor-pointer border-none py-3 px-4 text-white text-xl">Sign in</button>
                                <button type="button" @click="connectMetaMask" class=" flex items-center justify-center bg-gradient-metamask-btn cursor-pointer border-none py-3 px-4 text-white text-xl">
                                    <IconSpinner v-if="isLoading" />
                                    Sign in with MetaMask</button>
                            </div>
                            <p class="text-red-600">{{ errorConnect || errorMsg}}</p>
                        </form>

                </div>
                <AppTabList class="h-16 w-full bg-gradient-tab-list-mute" @change-tab="setActiveTab" v-slot="{ onChange }">
                    <AppTabListItem
                        value="Sign in"
                        :active-value="activeTab"
                        @click="onChange('Sign in')"
                        ><span class="text-xl">Sign in</span>
                    </AppTabListItem>
                    <AppTabListItem
                        value="Sign up"
                        :active-value="activeTab"
                        @click="onChange('Sign up')"
                        ><span class="text-xl">Sign up</span>
                    </AppTabListItem>
                </AppTabList> 
            </div>
        <!--  -->
        <!-- Right Side -->
        <div class="col-span-1 relative">
            <img src="/preview.png" alt="logo" loading="lazy" class="h-full object-contain w-full absolute  translate-x-[20%]" />
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