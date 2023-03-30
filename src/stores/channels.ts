import type { ChannelI } from '@/types';
import { defineStore } from 'pinia';

interface Store {
    channelList: ChannelI[];
}

export const useChannelStore = defineStore('channel', {
    state: (): Store => ({
        channelList: [
            {
                id: 1,
                name: 'BlueWard2',
                subscribers: '100k',
                price: 134,
                total: 238,
                avatar: import.meta.env.BASE_URL + 'img/users/1.png',
            },
            {
                id: 2,
                name: 'Basmore',
                subscribers: '90k',
                price: 110,
                total: 200,
                avatar: import.meta.env.BASE_URL + 'img/users/2.png',
            },
            {
                id: 3,
                name: 'Thebretway',
                subscribers: '78k',
                price: 92,
                total: 189,
                avatar: import.meta.env.BASE_URL + 'img/users/3.png',
            },
            {
                id: 4,
                name: 'Harris',
                subscribers: '53k',
                price: 86,
                total: 167,
                avatar: import.meta.env.BASE_URL + 'img/users/4.png',
            },
            {
                id: 5,
                name: 'Auronplay',
                subscribers: '48k',
                price: 74,
                total: 126,
                avatar: import.meta.env.BASE_URL + 'img/users/5.png',
            },
            {
                id: 6,
                name: 'BentoBoi',
                subscribers: '51k',
                price: 76,
                total: 142,
                avatar: import.meta.env.BASE_URL + 'img/users/6.png',
            },
            {
                id: 7,
                name: 'Hussain',
                subscribers: '30k',
                price: 59,
                total: 102,
                avatar: import.meta.env.BASE_URL + 'img/users/7.png',
            },
        ],
    }),
    getters: {
        getChannelById(state) {
            return (id: number): ChannelI | undefined => state.channelList.find(channel => channel.id === id) 
        }
    }
});
