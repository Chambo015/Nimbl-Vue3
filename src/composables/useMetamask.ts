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
    const hasMetaMaskExt = ref(true);

    const { enter: enterFullscreen } = useFullscreen(document.documentElement);
    const router = useRouter();

    const walletStore = useWalletStore();
    const { isLoading, accountMetamask, errorMessage } = storeToRefs(walletStore);

    if (typeof window.ethereum !== 'undefined') {
        hasMetaMaskExt.value = true;
        console.log('MetaMask is installed!');
    } else {
        hasMetaMaskExt.value = false;
    }

    watch(accountMetamask, (newAccount) => {
        if (newAccount) {
            localStorage.setItem('metaMaskAccount', newAccount);
            enterFullscreen();
            router.replace({ name: 'content' });
        } else {
            localStorage.removeItem('metaMaskAccount');
            router.replace({ name: 'login' });
        }
    });

    function handleAccountsChanged(accounts: string[]) {
        if (!accounts[0]) {
            walletStore.logoutMetaMask();
        }
    }

    if (hasMetaMaskExt.value) {
        onMounted(() => {
            window.ethereum.on('accountsChanged', handleAccountsChanged);
        });

        onUnmounted(() => {
            window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        });
    }

    return {
        errorMetaMask: errorMessage,
        hasMetaMaskExt,
        connectMetaMask: walletStore.connectMetaMask,
        logoutMetaMask: walletStore.logoutMetaMask,
        account: accountMetamask,
        isLoadingMetaMask: isLoading,
    };
}
