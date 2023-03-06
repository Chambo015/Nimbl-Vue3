import { useWalletStore } from '@/stores/wallet';
import { useFullscreen } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

declare global {
    interface Window {
        ethereum?: any;
    }
}

export function useMetamask() {
    const errorMsg = ref('');


    const { enter: enterFullscreen } = useFullscreen(document.documentElement)
    const router = useRouter()

    const walletStore = useWalletStore();
    const {isLoading, accountMetamask, errorMessage} = storeToRefs(walletStore)


    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
    } else {
        errorMsg.value = 'Install MetaMask extension';
    }

    watch(accountMetamask, (newAccount) => {
        if(newAccount) {
            localStorage.setItem('metaMaskAccount', newAccount);
            enterFullscreen()
            router.push({ name: 'content' })
        } else {
            localStorage.removeItem('metaMaskAccount');
            router.push({ name: 'login' })
        }
    })

    function handleAccountsChanged(accounts: string[]) {
        if(!accounts[0]) {
            walletStore.logoutMetaMask()
        }
      }

    onMounted(() => {
        window.ethereum.on('accountsChanged',handleAccountsChanged);
    })

    onUnmounted(() => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
    })


    return {
        errorMsg,
        connectMetaMask: walletStore.connectMetaMask,
        logoutMetaMask: walletStore.logoutMetaMask,
        account: accountMetamask,
        isLoading,
        errorConnect: errorMessage,
    };
}
