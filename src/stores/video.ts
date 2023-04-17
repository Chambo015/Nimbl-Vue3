import type { VideoI } from '@/types'
import { defineStore } from 'pinia'

interface State {
    videoList: VideoI[];
    clipList: VideoI[]
}
 
export const useVideoStore = defineStore('video', {
    state:(): State => ({
        videoList: [
            {
                id: 1,
                title: 'Gary Vee Explains How He Made $90 Million on NFTs & Why They’ll Change the World',
                channel: '@BlueWard2',
                price: 140,
                avatar: import.meta.env.BASE_URL + 'img/users/1.png',
                poster: import.meta.env.BASE_URL + 'img/video-card/1.jpg',
            },
            {
                id: 2,
                title: "No One Is Paying Attention To What's Really Going On With NFTs",
                channel: 'GarrisonF',
                price: 20,
                avatar: import.meta.env.BASE_URL + 'img/users/2.png',
                poster: import.meta.env.BASE_URL + 'img/video-card/2.jpg',
            },
            {
                id: 3,
                title: 'Bored Ape Yacht Club Creators Explain How Steph Curry & Bieber Got Their NFT & How BAYC is Worth $4B',
                channel: 'Johnny Vnice',
                price: 45,
                avatar: import.meta.env.BASE_URL + 'img/users/3.png',
                poster: import.meta.env.BASE_URL + 'img/video-card/3.jpg',
            },
            {
                id: 4,
                title: 'The Exploding Card Market',
                channel: 'Thunder Mary',
                price: 56,
                avatar: import.meta.env.BASE_URL + 'img/users/4.png',
                poster: import.meta.env.BASE_URL + 'img/video-card/4.jpg',
            },
            {
                id: 5,
                title: 'Web3/Metaverse Chat With Mark Zuckerberg',
                channel: 'Gary Vee',
                price: 122,
                avatar: import.meta.env.BASE_URL + 'img/users/5.png',
                poster: import.meta.env.BASE_URL + 'img/video-card/5.jpg',
            },
            {
                id: 6,
                title: 'If You Understand This Video About NFTs You Are in the Top 10% of People That Get It',
                channel: 'Impudent Jok',
                price: 12,
                avatar: import.meta.env.BASE_URL + 'img/users/6.png',
                poster: import.meta.env.BASE_URL + 'img/video-card/6.jpg',
            },
            {
                id: 7,
                title: 'What You Need To Know About The NFT World',
                channel: 'Yellow Stone',
                price: 43,
                avatar: import.meta.env.BASE_URL + 'img/users/7.png',
                poster: import.meta.env.BASE_URL + 'img/video-card/7.jpg',
            },
            {
                id: 8,
                title: 'Wolf of Wall Street Calls Out Crypto Scammers & Shares Leonardo DiCaprio Stories',
                channel: 'Mr Hawk',
                price: 78,
                avatar: import.meta.env.BASE_URL + 'img/users/8.png',
                poster: import.meta.env.BASE_URL + 'img/video-card/8.jpg',
            },
            {
                id: 9,
                title: 'How NFTs are shaking up the art world | DW Documentary',
                channel: 'Manga',
                price: 212,
                avatar: import.meta.env.BASE_URL + 'img/users/9.png',
                poster: import.meta.env.BASE_URL + 'img/video-card/9.jpg',
            },
            {
                id: 10,
                title: 'Why are people collecting NFTs? - 6 Minute English',
                channel: 'BBC English',
                price: 120,
                avatar: import.meta.env.BASE_URL + 'img/users/1.png',
                poster: import.meta.env.BASE_URL + 'img/video-card/10.jpg',
            },
            {
                id: 11,
                title: 'The Ultimate NFT Course: Beginner to Advanced Buy Sell',
                channel: 'Hustlers Point',
                price: 13,
                avatar: import.meta.env.BASE_URL + 'img/users/2.png',
                poster: import.meta.env.BASE_URL + 'img/video-card/11.jpg',
            },
            {
                id: 12,
                title: 'NFTs - SNL',
                channel: 'SNL',
                price: 278,
                avatar: import.meta.env.BASE_URL + 'img/users/3.png',
                poster: import.meta.env.BASE_URL + 'img/video-card/12.jpg',
            },
        ],
        clipList: [
            {
                id: 1,
                title: 'Gary Vee Explains How He Made $90 Million on NFTs & Why They’ll Change the World',
                channel: '@BlueWard2',
                price: 8,
                avatar: import.meta.env.BASE_URL + 'img/users/1.png',
                poster: import.meta.env.BASE_URL + 'img/clip-card/1.png',
            },
            {
                id: 2,
                title: "No One Is Paying Attention To What's Really Going On With NFTs",
                channel: 'GarrisonF',
                price: 20,
                avatar: import.meta.env.BASE_URL + 'img/users/2.png',
                poster: import.meta.env.BASE_URL + 'img/clip-card/2.png',
            },
            {
                id: 3,
                title: 'Bored Ape Yacht Club Creators Explain How Steph Curry & Bieber Got Their NFT & How BAYC is Worth $4B',
                channel: 'Johnny Vnice',
                price: 45,
                avatar: import.meta.env.BASE_URL + 'img/users/3.png',
                poster: import.meta.env.BASE_URL + 'img/clip-card/3.png',
            },
            {
                id: 4,
                title: 'The Exploding Card Market',
                channel: 'Thunder Mary',
                price: 56,
                avatar: import.meta.env.BASE_URL + 'img/users/4.png',
                poster: import.meta.env.BASE_URL + 'img/clip-card/4.png',
            },
            {
                id: 5,
                title: 'Web3/Metaverse Chat With Mark Zuckerberg',
                channel: 'Gary Vee',
                price: 122,
                avatar: import.meta.env.BASE_URL + 'img/users/5.png',
                poster: import.meta.env.BASE_URL + 'img/clip-card/6.png',
            },
            {
                id: 6,
                title: 'If You Understand This Video About NFTs You Are in the Top 10% of People That Get It',
                channel: 'Impudent Jok',
                price: 12,
                avatar: import.meta.env.BASE_URL + 'img/users/6.png',
                poster: import.meta.env.BASE_URL + 'img/clip-card/5.png',
            },
            {
                id: 7,
                title: 'What You Need To Know About The NFT World',
                channel: 'Yellow Stone',
                price: 43,
                avatar: import.meta.env.BASE_URL + 'img/users/7.png',
                poster: import.meta.env.BASE_URL + 'img/clip-card/7.png',
            },
            {
                id: 8,
                title: 'Wolf of Wall Street Calls Out Crypto Scammers & Shares Leonardo DiCaprio Stories',
                channel: 'Mr Hawk',
                price: 78,
                avatar: import.meta.env.BASE_URL + 'img/users/8.png',
                poster: import.meta.env.BASE_URL + 'img/video-card/8.jpg',
            },
            {
                id: 9,
                title: 'How NFTs are shaking up the art world | DW Documentary',
                channel: 'Manga',
                price: 212,
                avatar: import.meta.env.BASE_URL + 'img/users/9.png',
                poster: import.meta.env.BASE_URL + 'img/clip-card/9.png',
            },
            {
                id: 10,
                title: 'Why are people collecting NFTs? - 6 Minute English',
                channel: 'BBC English',
                price: 120,
                avatar: import.meta.env.BASE_URL + 'img/users/1.png',
                poster: import.meta.env.BASE_URL + 'img/video-card/10.jpg',
            },
            {
                id: 11,
                title: 'The Ultimate NFT Course: Beginner to Advanced Buy Sell',
                channel: 'Hustlers Point',
                price: 13,
                avatar: import.meta.env.BASE_URL + 'img/users/2.png',
                poster: import.meta.env.BASE_URL + 'img/video-card/11.jpg',
            },
            {
                id: 12,
                title: 'NFTs - SNL',
                channel: 'SNL',
                price: 278,
                avatar: import.meta.env.BASE_URL + 'img/users/3.png',
                poster: import.meta.env.BASE_URL + 'img/clip-card/8.png',
            },
        ]
    }),
    getters: {
        getVideoById(state) {
            return (id: number): VideoI | undefined => state.videoList.find(video => video.id === id) 
        }
    }
})