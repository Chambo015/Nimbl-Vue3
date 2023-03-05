import { defineStore } from 'pinia';

declare global {
  interface Window {
      ethereum?: any
  }
}

interface Store {
    isLoading: boolean,
    accountMetamask: string | null,
    errorMessage: string | null
}

export const useWalletStore = defineStore('wallet', {
    state: (): Store =>( {
      isLoading: false,
      errorMessage: null,
      accountMetamask: null ||  localStorage.getItem('metaMaskAccount')
    }),
    actions: {
      async connectMetaMask() {
          try {
            this.isLoading = true
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'}) ;
            this.accountMetamask = accounts[0] 
            
            this.isLoading = false
            this.errorMessage = null
          } catch (error) {
            this.errorMessage = 'Error connect on MetaMask'
            this.accountMetamask = null
            this.isLoading = false
          }
      },
      logoutMetaMask() {
          this.accountMetamask = null
          this.isLoading = false
          this.errorMessage = null
      }
    }
})