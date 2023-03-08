import type { IUser } from '@/types';
import { defineStore } from 'pinia';

interface Store  {
  email: string | null,
  token: string | null,
  id: string | null,
}

const storedUser =  localStorage.getItem('user')
const initialUser: IUser = storedUser ? JSON.parse(storedUser) : {
      email: null,
      token: null, 
      id: null
}

export const useUserStore = defineStore('user', {
    state: (): Store => initialUser,
    actions: {
      setUser(payload: IUser) {
        this.email = payload.email
        this.token = payload.token
        this.id = payload.id
      },
      removeUser() {
        this.email = null
        this.token = null
        this.id = null
      }
    }
})