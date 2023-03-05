import { defineStore } from 'pinia';

interface Store {
    isLoading: boolean,
    user: null | string
}

export const useUserStore = defineStore('user', {
    state: (): Store =>( {
      isLoading: false,
      user: null ||  localStorage.getItem('user')
    }),
    actions: {
       login(username: string) {
            this.user = username
            localStorage.setItem('user', username)
      },
      logout() {
        this.user = null
        localStorage.removeItem('user')
      }
    }
})