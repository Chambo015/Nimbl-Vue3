import type { VideoI } from '@/types';
import { defineStore } from 'pinia';

interface ClipI extends VideoI {
    video?: string;
}
interface State {
    videoList: VideoI[];
    clipList: ClipI[];
}

export const useVideoStore = defineStore('video', {
    state: (): State => ({
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
            {
                id: 13,
                title: 'Let’s talk',
                channel: 'Chambo',
                price: 988,
                avatar: import.meta.env.BASE_URL + 'img/users/3.png',
                poster: import.meta.env.BASE_URL + 'img/video-card/22.png',
                videoSrc: '/video/English/index.mp4',
                audioSrc: [
                    {
                        language: 'it',
                        src: '/video/Italian/audio.mp3',
                        label: 'Italian',
                        flag: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI3IDIwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcGF0aD0idXJsKCNhKSIgY2xpcC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI3djIwSDBWMFoiLz48cGF0aCBmaWxsPSIjMDA5MjQ2IiBkPSJNMCAwaDguOTk5djIwSDBWMFoiLz48cGF0aCBmaWxsPSIjQ0UyQjM3IiBkPSJNMTguMDAxIDBIMjd2MjBoLTguOTk5VjBaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyN3YyMEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==',
                    },
                    {
                        language: 'kk',
                        label: 'Kazakh',
                        src: '/video/Kazakh/audio.mp3',
                        flag: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjgiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyOCAyMCI+PGRlZnM+PHN5bWJvbCBpZD0iYSIgd2lkdGg9IjI4IiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjggMjAiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNiAwSDJhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDI0YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yWiIvPjwvc3ltYm9sPjwvZGVmcz48bWFzayBpZD0iYiIgd2lkdGg9IjI4IiBoZWlnaHQ9IjIwIiB4PSIwIiB5PSIwIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBzdHlsZT0ibWFzay10eXBlOmx1bWluYW5jZSI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2IpIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PG1hc2sgaWQ9ImMiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyMCIgeD0iMCIgeT0iMCIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2MpIj48cGF0aCBmaWxsPSIjMzBDNkUwIiBkPSJNMjggMEgwdjIwaDI4VjBaIi8+PHBhdGggZmlsbD0iI0ZGQ0Q0QiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuOTk5IDE0YTQgNCAwIDEgMCAwLTggNCA0IDAgMCAwIDAgOFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGZpbGw9IiNGRkNENEIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTEyLjM3IDE3LjE1IDEuNjMyLTIuNDM2IDEuNjMxIDIuNDM2LjQxNC0yLjkwMyAyLjUyNyAxLjQ4Ny0uODg3LTIuNzk1IDIuOTIyLjI0My0yLjAxMi0yLjEzM0wyMS4zMzUgMTBsLTIuNzM4LTEuMDQ5IDIuMDEyLTIuMTMzLTIuOTIyLjI0My44ODctMi43OTQtMi41MjcgMS40ODYtLjQxNC0yLjkwMi0xLjYzMSAyLjQzNkwxMi4zNyAyLjg1bC0uNDEzIDIuOTAyLTIuNTI4LTEuNDg2Ljg4NyAyLjc5NC0yLjkyMS0uMjQzTDkuNDA2IDguOTUgNi42NjggMTBsMi43MzggMS4wNDgtMi4wMTEgMi4xMzMgMi45MjEtLjI0My0uODg3IDIuNzk1IDIuNTI3LTEuNDg3LjQxNCAyLjkwM1pNMTguNjY4IDEwYTQuNjY3IDQuNjY3IDAgMSAxLTkuMzMzIDAgNC42NjcgNC42NjcgMCAwIDEgOS4zMzMgMFpNMS4zMzQgMS42NjdjMC0uMTg0LjE0OS0uMzMzLjMzMy0uMzMzaC42NjdjLjE4NCAwIC4zMzMuMTQ5LjMzMy4zMzN2LjY2N2MwIC4xODQtLjE1LjMzMy0uMzMzLjMzM2gtLjY2N2EuMzMzLjMzMyAwIDAgMS0uMzMzLS4zMzN2LS42NjdabTAgMi42NjdjMC0uMTg0LjE0OS0uMzM0LjMzMy0uMzM0aC42NjdjLjE4NCAwIC4zMzMuMTUuMzMzLjMzNFY1YzAgLjE4NC0uMTUuMzM0LS4zMzMuMzM0aC0uNjY3QS4zMzMuMzMzIDAgMCAxIDEuMzM0IDV2LS42NjZabS4zMzMgMi4zMzNBLjMzMy4zMzMgMCAwIDAgMS4zMzQgN3YuNjY3YzAgLjE4NC4xNDkuMzMzLjMzMy4zMzNoLjY2N2EuMzMzLjMzMyAwIDAgMCAuMzMzLS4zMzNWN2EuMzMzLjMzMyAwIDAgMC0uMzMzLS4zMzNoLS42NjdabS0uMzMzIDNjMC0uMTg0LjE0OS0uMzMzLjMzMy0uMzMzaC42NjdjLjE4NCAwIC4zMzMuMTQ5LjMzMy4zMzN2LjY2N2MwIC4xODQtLjE1LjMzMy0uMzMzLjMzM2gtLjY2N2EuMzMzLjMzMyAwIDAgMS0uMzMzLS4zMzN2LS42NjdaTTEuNjY3IDEyYS4zMzMuMzMzIDAgMCAwLS4zMzMuMzM0VjEzYzAgLjE4NC4xNDkuMzM0LjMzMy4zMzRoLjY2N2MuMTg0IDAgLjMzMy0uMTUuMzMzLS4zMzR2LS42NjZBLjMzMy4zMzMgMCAwIDAgMi4zMzQgMTJoLS42NjdabS0uMzMzIDNjMC0uMTg0LjE0OS0uMzMzLjMzMy0uMzMzaC42NjdjLjE4NCAwIC4zMzMuMTUuMzMzLjMzM3YuNjY3YzAgLjE4NC0uMTUuMzMzLS4zMzMuMzMzaC0uNjY3YS4zMzMuMzMzIDAgMCAxLS4zMzMtLjMzM1YxNVptLjMzMyAyLjMzNGEuMzMzLjMzMyAwIDAgMC0uMzMzLjMzM3YuNjY3YzAgLjE4NC4xNDkuMzMzLjMzMy4zMzNoLjY2N2MuMTg0IDAgLjMzMy0uMTUuMzMzLS4zMzN2LS42NjdhLjMzMy4zMzMgMCAwIDAtLjMzMy0uMzMzaC0uNjY3Wm0xLTFjMC0uMTg0LjE1LS4zMzQuMzMzLS4zMzRoLjY2N2MuMTg0IDAgLjMzMy4xNS4zMzMuMzM0VjE3YS4zMzQuMzM0IDAgMCAxLS4zMzMuMzM0SDNBLjMzMy4zMzMgMCAwIDEgMi42NjcgMTd2LS42NjZabS4zMzMtM2EuMzMzLjMzMyAwIDAgMC0uMzMzLjMzM3YuNjY3YzAgLjE4NC4xNS4zMzMuMzMzLjMzM2guNjY3Yy4xODQgMCAuMzMzLS4xNS4zMzMtLjMzM3YtLjY2N2EuMzMzLjMzMyAwIDAgMC0uMzMzLS4zMzNIM1pNMi42NjcgMTFjMC0uMTg0LjE1LS4zMzMuMzMzLS4zMzNoLjY2N2MuMTg0IDAgLjMzMy4xNS4zMzMuMzMzdi42NjdhLjMzMy4zMzMgMCAwIDEtLjMzMy4zMzNIM2EuMzMzLjMzMyAwIDAgMS0uMzMzLS4zMzNWMTFaTTMgOGEuMzMzLjMzMyAwIDAgMC0uMzMzLjMzNFY5YzAgLjE4NC4xNS4zMzQuMzMzLjMzNGguNjY3QzMuODUxIDkuMzM0IDQgOS4xODQgNCA5di0uNjY2QS4zMzMuMzMzIDAgMCAwIDMuNjY3IDhIM1ptLS4zMzMtMi4zMzNjMC0uMTg0LjE1LS4zMzMuMzMzLS4zMzNoLjY2N2MuMTg0IDAgLjMzMy4xNDkuMzMzLjMzM3YuNjY3YS4zMzMuMzMzIDAgMCAxLS4zMzMuMzMzSDNhLjMzMy4zMzMgMCAwIDEtLjMzMy0uMzMzdi0uNjY3Wm0uMzMzLTNBLjMzMy4zMzMgMCAwIDAgMi42NjcgM3YuNjY3YzAgLjE4NC4xNS4zMzMuMzMzLjMzM2guNjY3QS4zMzMuMzMzIDAgMCAwIDQgMy42NjdWM2EuMzMzLjMzMyAwIDAgMC0uMzMzLS4zMzNIM1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvZz48L2c+PC9zdmc+',
                    },
                    {
                        language: 'fr',
                        label: 'French',
                        src: '/video/French/audio.mp3',
                        flag: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyMSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI4IDIxIj48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjh2MjFIMFYwWiIvPjxwYXRoIGZpbGw9IiMwMDI2NTQiIGQ9Ik0wIDBoOS4zMzJ2MjFIMFYwWiIvPjxwYXRoIGZpbGw9IiNDRTExMjYiIGQ9Ik0xOC42NjggMEgyOHYyMWgtOS4zMzJWMFoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI4djIxSDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+',
                    },
                    {
                        language: 'es',
                        label: 'Spanish',
                        src: '/video/Spanish/audio.mp3',
                        flag: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI3IDIwIj48cGF0aCBmaWxsPSIjQzYwQTFEIiBkPSJNMjcgMTYuOTIzYzAgLjgxNi0uMzE2IDEuNTk5LS44NzkgMi4xNzZBMi45NjMgMi45NjMgMCAwIDEgMjQgMjBIM2EyLjk2MyAyLjk2MyAwIDAgMS0yLjEyMS0uOTAxQTMuMTE3IDMuMTE3IDAgMCAxIDAgMTYuOTIzVjMuMDc3QzAgMi4yNi4zMTYgMS40NzguODc5LjlBMi45NjIgMi45NjIgMCAwIDEgMyAwaDIxYTIuOTYgMi45NiAwIDAgMSAyLjEyMS45MDFjLjU2My41NzcuODc5IDEuMzYuODc5IDIuMTc2djEzLjg0NloiLz48cGF0aCBmaWxsPSIjRkZDNDAwIiBkPSJNMCA2aDI3djhIMFY2WiIvPjxwYXRoIGZpbGw9IiNFQTU5NkUiIGQ9Ik03IDl2MmMwIC41My4xNTggMS4wNC40NCAxLjQxNC4yOC4zNzUuNjYyLjU4NiAxLjA2LjU4NnMuNzgtLjIxIDEuMDYtLjU4NmMuMjgyLS4zNzUuNDQtLjg4NC40NC0xLjQxNFY5SDdaIi8+PHBhdGggZmlsbD0iI0Y0QTJCMiIgZD0iTTkgOGgxdjJIOVY4WiIvPjxwYXRoIGZpbGw9IiNERDJFNDQiIGQ9Ik03IDhoMnYySDdWOFoiLz48cGF0aCBmaWxsPSIjRUE1OTZFIiBkPSJNOC41IDhjLjgyOCAwIDEuNS0uMjI0IDEuNS0uNVM5LjMyOCA3IDguNSA3IDcgNy4yMjQgNyA3LjVzLjY3Mi41IDEuNS41WiIvPjxwYXRoIGZpbGw9IiM5OUFBQjUiIGQ9Ik02IDhoLjZ2NUg2VjhabTUuNCAwaC42djVoLS42VjhaIi8+PHBhdGggZmlsbD0iIzY2NzU3RiIgZD0iTTUgMTIuMjVoMlYxM0g1di0uNzVabTYgMGgyVjEzaC0ydi0uNzVaTTUuNjY3IDdoLjY2NnYuNzVoLS42NjZWN1ptNiAwaC42NjZ2Ljc1aC0uNjY2VjdaIi8+PC9zdmc+',
                    },
                    {
                        language: 'zh',
                        label: 'Chinese',
                        src: '/video/Chinese/audio.mp3',
                        flag: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyMSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI4IDIxIj48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNFRTFDMjUiIGQ9Ik0wIDBoMjh2MjFIMFYwWiIvPjxwYXRoIGZpbGw9IiNGRjAiIGQ9Ik0zLjM2IDcuNzcgNS4yNSAyLjFsMS44OSA1LjY3TDIuMSA0LjMwNWg2LjNMMy4zNiA3Ljc3Wm04LjE5Ny01LjU2MS0xLjk0NS40MyAxLjI5OC0xLjUxMS0uMTI3IDIuMDM1LTEuMDgtMS44MDIgMS44NTQuODQ4Wm0xLjk2MyAyLjQ4Ny0xLjk2LS4zNTcgMS43ODMtLjg5LS45MDcgMS44MjYtLjI5Ni0yLjA3OSAxLjM4IDEuNVptLS4yODYgMy40OTFMMTEuNTkxIDcuMDZsMS45OS0uMDg2LTEuNTczIDEuMjk4LjU3OC0yLjAyLjY0OCAxLjkzNFptLTIuNDcyIDIuMjhMOS42OCA4Ljc5NGwxLjg3LjY5LTEuOTUyLjU4OSAxLjMxMi0xLjY0LS4xNDggMi4wMzRaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyOHYyMUgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==',
                    },
                ],
                subtitles: [
                    {
                        src: '/video/English/subtitles.vtt',
                        kind: 'subtitles',
                        label: 'English',
                        srcLang: 'en',
                    },
                    {
                        src: '/video/French/subtitles.vtt',
                        kind: 'subtitles',
                        label: 'French',
                        srcLang: 'fr',
                    },
                    {
                        src: '/video/Italian/subtitles.vtt',
                        kind: 'subtitles',
                        label: 'Italian',
                        srcLang: 'it',
                    },
                    {
                        src: '/video/Kazakh/subtitles.vtt',
                        kind: 'subtitles',
                        label: 'Kazakh',
                        srcLang: 'kk',
                    },
                    {
                        src: '/video/Spanish/subtitles.vtt',
                        kind: 'subtitles',
                        label: 'Spanish',
                        srcLang: 'es',
                    },
                    {
                        src: '/video/Chinese/subtitles.vtt',
                        kind: 'subtitles',
                        label: 'Chinese',
                        srcLang: 'zh',
                    },
                ]
            },
            {
                id: 14,
                title: '100 млрд тенге из средств Нацфонда неэффективно потратили на строительство',
                channel: 'Kuka',
                price: 988,
                avatar: import.meta.env.BASE_URL + 'img/users/3.png',
                poster: import.meta.env.BASE_URL + 'img/video-card/23.webp',
                videoSrc: '/video2/Russian/index.mp4',
                audioSrc: [
                    {
                        language: 'en',
                        src: '/video2/English/audio.wav',
                        label: 'English',
                        flag: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NDAiIGhlaWdodD0iNDgwIiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgNjQwIDQ4MCI+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDY0MHY0ODBIMFYwWiIvPjxwYXRoIGZpbGw9IiNDRTExMjQiIGQ9Ik0yODEuNiAwaDc2Ljh2NDgwaC03Ni44VjBaIi8+PHBhdGggZmlsbD0iI0NFMTEyNCIgZD0iTTAgMjAxLjZoNjQwdjc2LjhIMHYtNzYuOFoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDY0MHY0ODBIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=',
                    },
                    {
                        language: 'kk',
                        label: 'Kazakh',
                        src: '/video2/Kazakh/audio.wav',
                        flag: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjgiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyOCAyMCI+PGRlZnM+PHN5bWJvbCBpZD0iYSIgd2lkdGg9IjI4IiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjggMjAiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNiAwSDJhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDI0YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yWiIvPjwvc3ltYm9sPjwvZGVmcz48bWFzayBpZD0iYiIgd2lkdGg9IjI4IiBoZWlnaHQ9IjIwIiB4PSIwIiB5PSIwIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBzdHlsZT0ibWFzay10eXBlOmx1bWluYW5jZSI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2IpIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PG1hc2sgaWQ9ImMiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyMCIgeD0iMCIgeT0iMCIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2MpIj48cGF0aCBmaWxsPSIjMzBDNkUwIiBkPSJNMjggMEgwdjIwaDI4VjBaIi8+PHBhdGggZmlsbD0iI0ZGQ0Q0QiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuOTk5IDE0YTQgNCAwIDEgMCAwLTggNCA0IDAgMCAwIDAgOFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGZpbGw9IiNGRkNENEIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTEyLjM3IDE3LjE1IDEuNjMyLTIuNDM2IDEuNjMxIDIuNDM2LjQxNC0yLjkwMyAyLjUyNyAxLjQ4Ny0uODg3LTIuNzk1IDIuOTIyLjI0My0yLjAxMi0yLjEzM0wyMS4zMzUgMTBsLTIuNzM4LTEuMDQ5IDIuMDEyLTIuMTMzLTIuOTIyLjI0My44ODctMi43OTQtMi41MjcgMS40ODYtLjQxNC0yLjkwMi0xLjYzMSAyLjQzNkwxMi4zNyAyLjg1bC0uNDEzIDIuOTAyLTIuNTI4LTEuNDg2Ljg4NyAyLjc5NC0yLjkyMS0uMjQzTDkuNDA2IDguOTUgNi42NjggMTBsMi43MzggMS4wNDgtMi4wMTEgMi4xMzMgMi45MjEtLjI0My0uODg3IDIuNzk1IDIuNTI3LTEuNDg3LjQxNCAyLjkwM1pNMTguNjY4IDEwYTQuNjY3IDQuNjY3IDAgMSAxLTkuMzMzIDAgNC42NjcgNC42NjcgMCAwIDEgOS4zMzMgMFpNMS4zMzQgMS42NjdjMC0uMTg0LjE0OS0uMzMzLjMzMy0uMzMzaC42NjdjLjE4NCAwIC4zMzMuMTQ5LjMzMy4zMzN2LjY2N2MwIC4xODQtLjE1LjMzMy0uMzMzLjMzM2gtLjY2N2EuMzMzLjMzMyAwIDAgMS0uMzMzLS4zMzN2LS42NjdabTAgMi42NjdjMC0uMTg0LjE0OS0uMzM0LjMzMy0uMzM0aC42NjdjLjE4NCAwIC4zMzMuMTUuMzMzLjMzNFY1YzAgLjE4NC0uMTUuMzM0LS4zMzMuMzM0aC0uNjY3QS4zMzMuMzMzIDAgMCAxIDEuMzM0IDV2LS42NjZabS4zMzMgMi4zMzNBLjMzMy4zMzMgMCAwIDAgMS4zMzQgN3YuNjY3YzAgLjE4NC4xNDkuMzMzLjMzMy4zMzNoLjY2N2EuMzMzLjMzMyAwIDAgMCAuMzMzLS4zMzNWN2EuMzMzLjMzMyAwIDAgMC0uMzMzLS4zMzNoLS42NjdabS0uMzMzIDNjMC0uMTg0LjE0OS0uMzMzLjMzMy0uMzMzaC42NjdjLjE4NCAwIC4zMzMuMTQ5LjMzMy4zMzN2LjY2N2MwIC4xODQtLjE1LjMzMy0uMzMzLjMzM2gtLjY2N2EuMzMzLjMzMyAwIDAgMS0uMzMzLS4zMzN2LS42NjdaTTEuNjY3IDEyYS4zMzMuMzMzIDAgMCAwLS4zMzMuMzM0VjEzYzAgLjE4NC4xNDkuMzM0LjMzMy4zMzRoLjY2N2MuMTg0IDAgLjMzMy0uMTUuMzMzLS4zMzR2LS42NjZBLjMzMy4zMzMgMCAwIDAgMi4zMzQgMTJoLS42NjdabS0uMzMzIDNjMC0uMTg0LjE0OS0uMzMzLjMzMy0uMzMzaC42NjdjLjE4NCAwIC4zMzMuMTUuMzMzLjMzM3YuNjY3YzAgLjE4NC0uMTUuMzMzLS4zMzMuMzMzaC0uNjY3YS4zMzMuMzMzIDAgMCAxLS4zMzMtLjMzM1YxNVptLjMzMyAyLjMzNGEuMzMzLjMzMyAwIDAgMC0uMzMzLjMzM3YuNjY3YzAgLjE4NC4xNDkuMzMzLjMzMy4zMzNoLjY2N2MuMTg0IDAgLjMzMy0uMTUuMzMzLS4zMzN2LS42NjdhLjMzMy4zMzMgMCAwIDAtLjMzMy0uMzMzaC0uNjY3Wm0xLTFjMC0uMTg0LjE1LS4zMzQuMzMzLS4zMzRoLjY2N2MuMTg0IDAgLjMzMy4xNS4zMzMuMzM0VjE3YS4zMzQuMzM0IDAgMCAxLS4zMzMuMzM0SDNBLjMzMy4zMzMgMCAwIDEgMi42NjcgMTd2LS42NjZabS4zMzMtM2EuMzMzLjMzMyAwIDAgMC0uMzMzLjMzM3YuNjY3YzAgLjE4NC4xNS4zMzMuMzMzLjMzM2guNjY3Yy4xODQgMCAuMzMzLS4xNS4zMzMtLjMzM3YtLjY2N2EuMzMzLjMzMyAwIDAgMC0uMzMzLS4zMzNIM1pNMi42NjcgMTFjMC0uMTg0LjE1LS4zMzMuMzMzLS4zMzNoLjY2N2MuMTg0IDAgLjMzMy4xNS4zMzMuMzMzdi42NjdhLjMzMy4zMzMgMCAwIDEtLjMzMy4zMzNIM2EuMzMzLjMzMyAwIDAgMS0uMzMzLS4zMzNWMTFaTTMgOGEuMzMzLjMzMyAwIDAgMC0uMzMzLjMzNFY5YzAgLjE4NC4xNS4zMzQuMzMzLjMzNGguNjY3QzMuODUxIDkuMzM0IDQgOS4xODQgNCA5di0uNjY2QS4zMzMuMzMzIDAgMCAwIDMuNjY3IDhIM1ptLS4zMzMtMi4zMzNjMC0uMTg0LjE1LS4zMzMuMzMzLS4zMzNoLjY2N2MuMTg0IDAgLjMzMy4xNDkuMzMzLjMzM3YuNjY3YS4zMzMuMzMzIDAgMCAxLS4zMzMuMzMzSDNhLjMzMy4zMzMgMCAwIDEtLjMzMy0uMzMzdi0uNjY3Wm0uMzMzLTNBLjMzMy4zMzMgMCAwIDAgMi42NjcgM3YuNjY3YzAgLjE4NC4xNS4zMzMuMzMzLjMzM2guNjY3QS4zMzMuMzMzIDAgMCAwIDQgMy42NjdWM2EuMzMzLjMzMyAwIDAgMC0uMzMzLS4zMzNIM1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvZz48L2c+PC9zdmc+',
                    },
                    {
                        language: 'fr',
                        label: 'French',
                        src: '/video2/French/audio.wav',
                        flag: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyMSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI4IDIxIj48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjh2MjFIMFYwWiIvPjxwYXRoIGZpbGw9IiMwMDI2NTQiIGQ9Ik0wIDBoOS4zMzJ2MjFIMFYwWiIvPjxwYXRoIGZpbGw9IiNDRTExMjYiIGQ9Ik0xOC42NjggMEgyOHYyMWgtOS4zMzJWMFoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI4djIxSDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+',
                    },
                ],
                subtitles: [
                    
                ]
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
                video: import.meta.env.BASE_URL + 'shorts.mp4',
            },
            {
                id: 2,
                title: "No One Is Paying Attention To What's Really Going On With NFTs",
                channel: 'GarrisonF',
                price: 20,
                avatar: import.meta.env.BASE_URL + 'img/users/2.png',
                poster: import.meta.env.BASE_URL + 'img/clip-card/2.png',
                video: import.meta.env.BASE_URL + 'shorts2.mp4',
            },
            {
                id: 3,
                title: 'Bored Ape Yacht Club Creators Explain How Steph Curry & Bieber Got Their NFT & How BAYC is Worth $4B',
                channel: 'Johnny Vnice',
                price: 45,
                avatar: import.meta.env.BASE_URL + 'img/users/3.png',
                poster: import.meta.env.BASE_URL + 'img/clip-card/3.png',
                video: import.meta.env.BASE_URL + 'shorts1.mp4',
            },
            {
                id: 4,
                title: 'The Exploding Card Market',
                channel: 'Thunder Mary',
                price: 56,
                avatar: import.meta.env.BASE_URL + 'img/users/4.png',
                poster: import.meta.env.BASE_URL + 'img/clip-card/4.png',
                video: import.meta.env.BASE_URL + 'shorts1.mp4',
            },
            {
                id: 5,
                title: 'Web3/Metaverse Chat With Mark Zuckerberg',
                channel: 'Gary Vee',
                price: 122,
                avatar: import.meta.env.BASE_URL + 'img/users/5.png',
                poster: import.meta.env.BASE_URL + 'img/clip-card/6.png',
                video: import.meta.env.BASE_URL + 'shorts2.mp4',
            },
            {
                id: 6,
                title: 'If You Understand This Video About NFTs You Are in the Top 10% of People That Get It',
                channel: 'Impudent Jok',
                price: 12,
                avatar: import.meta.env.BASE_URL + 'img/users/6.png',
                poster: import.meta.env.BASE_URL + 'img/clip-card/5.png',
                video: import.meta.env.BASE_URL + 'shorts1.mp4',
            },
            {
                id: 7,
                title: 'What You Need To Know About The NFT World',
                channel: 'Yellow Stone',
                price: 43,
                avatar: import.meta.env.BASE_URL + 'img/users/7.png',
                poster: import.meta.env.BASE_URL + 'img/clip-card/7.png',
                video: import.meta.env.BASE_URL + 'shorts2.mp4',
            },
            {
                id: 8,
                title: 'Wolf of Wall Street Calls Out Crypto Scammers & Shares Leonardo DiCaprio Stories',
                channel: 'Mr Hawk',
                price: 78,
                avatar: import.meta.env.BASE_URL + 'img/users/8.png',
                poster: import.meta.env.BASE_URL + 'img/video-card/8.jpg',
                video: import.meta.env.BASE_URL + 'shorts.mp4',
            },
            {
                id: 9,
                title: 'How NFTs are shaking up the art world | DW Documentary',
                channel: 'Manga',
                price: 212,
                avatar: import.meta.env.BASE_URL + 'img/users/9.png',
                poster: import.meta.env.BASE_URL + 'img/clip-card/9.png',
                video: import.meta.env.BASE_URL + 'shorts2.mp4',
            },
            {
                id: 10,
                title: 'Why are people collecting NFTs? - 6 Minute English',
                channel: 'BBC English',
                price: 120,
                avatar: import.meta.env.BASE_URL + 'img/users/1.png',
                poster: import.meta.env.BASE_URL + 'img/video-card/10.jpg',
                video: import.meta.env.BASE_URL + 'shorts1.mp4',
            },
            {
                id: 11,
                title: 'The Ultimate NFT Course: Beginner to Advanced Buy Sell',
                channel: 'Hustlers Point',
                price: 13,
                avatar: import.meta.env.BASE_URL + 'img/users/2.png',
                poster: import.meta.env.BASE_URL + 'img/video-card/11.jpg',
                video: import.meta.env.BASE_URL + 'shorts2.mp4',
            },
            {
                id: 12,
                title: 'NFTs - SNL',
                channel: 'SNL',
                price: 278,
                avatar: import.meta.env.BASE_URL + 'img/users/3.png',
                poster: import.meta.env.BASE_URL + 'img/clip-card/8.png',
                video: import.meta.env.BASE_URL + 'shorts1.mp4',
            },
        ],
    }),
    getters: {
        getVideoById(state) {
            return (id: number): VideoI | undefined => state.videoList.find((video) => video.id === id);
        },
    },
});
