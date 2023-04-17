import type { IAnnouncement } from '@/types';
import { defineStore } from 'pinia';

interface Store {
    announcementList: IAnnouncement[];
}

export const useAnnouncementStore = defineStore('announcement', {
    state: () : Store => ({
        announcementList: [
            {
                id: 1,
                author: {
                    name: 'VinGaming',
                    avatar: import.meta.env.BASE_URL +'img/users/1.png',
                },
                text: 'It is buyin time! Reading about people grabbing multi-figures monthly as incomes in investments even in this crazy days',
                attachImg: import.meta.env.BASE_URL +'img/video-card/1.jpg',
                likeCount: 158,
                createdDate: new Date(Date.now() - (2* 60 * 60 * 1000)).getTime(), // 2h ago
            },
            {
                id: 2,
                author: {
                    name: '@BlueWard2',
                    avatar: import.meta.env.BASE_URL +'img/users/2.png',
                },
                text: 'Users who connect their crypto wallet are able to purchase NFTs and set them as their profile picture which will be displayed in a special hexagonal shape.',
                likeCount: 505,
                createdDate: new Date(Date.now() - (4* 60 * 60 * 1000)).getTime(), // 4h ago,
            },
            {
                id: 3,
                author: {
                    name: 'VinGaming',
                    avatar: import.meta.env.BASE_URL +'img/users/3.png',
                },
                text: 'Reading about people grabbing multi-figures monthly as incomes in investments even in this crazy days in the market, any pointers on how to make substantial progress in earning? would be appreciated.',
                likeCount: 1205,
                createdDate: new Date(Date.now() - (5 * 60 * 60 * 1000)).getTime(), // 5h ago,
            },
            {
                id: 4,
                author: {
                    name: 'Alkimax',
                    avatar: import.meta.env.BASE_URL +'img/users/4.png',
                },
                text: 'Reading about people grabbing multi-figures monthly as incomes in investments even in this crazy days in the market, any pointers on how to make substantial progress in earning? would be appreciated. Reading about people grabbing multi-figures monthly as incomes in investments even in this crazy days in the market',
                likeCount: 2500,
                createdDate: new Date('2023-01-26').getTime(),
            },
        ]
    })
})

