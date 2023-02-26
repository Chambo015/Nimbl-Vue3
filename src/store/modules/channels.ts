import type { ChannelI } from '@/types';

export interface ChannelsModuleI {
    channels: ChannelI[];
}

 const channelsModule = {
    state: (): ChannelsModuleI =>( {
        channels: [
            {
                id: 1,
                name: 'BlueWard2',
                subscribers: '100k',
                price: 134,
                total: 238,
                avatar: '/img/users/1.png',
            },
            {
                id: 2,
                name: 'Basmore',
                subscribers: '90k',
                price: 110,
                total: 200,
                avatar: '/img/users/2.png',
            },
            {
                id: 3,
                name: 'Thebretway',
                subscribers: '78k',
                price: 92,
                total: 189,
                avatar: '/img/users/3.png',
            },
            {
                id: 4,
                name: 'Harris',
                subscribers: '53k',
                price: 86,
                total: 167,
                avatar: '/img/users/4.png',
            },
            {
                id: 5,
                name: 'Auronplay',
                subscribers: '48k',
                price: 74,
                total: 126,
                avatar: '/img/users/5.png',
            },
            {
                id: 6,
                name: 'BentoBoi',
                subscribers: '51k',
                price: 76,
                total: 142,
                avatar: '/img/users/6.png',
            },
            {
                id: 7,
                name: 'Hussain',
                subscribers: '30k',
                price: 59,
                total: 102,
                avatar: '/img/users/7.png',
            },
        ],
    })
}

 export default channelsModule