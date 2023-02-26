import type { VideoI } from '@/types';

export interface VideosModuleI {
    videos: VideoI[];
}

 const videosModule = {
    state: (): VideosModuleI =>( {
        videos: [
            {
                id: 1,
                title: 'Gary Vee Explains How He Made $90 Million on NFTs & Why They’ll Change the World',
                channel: '@BlueWard2',
                price: 140,
                avatar: '/img/users/1.png',
                poster: '/img/video-card/1.jpg',
            },
            {
                id: 2,
                title: "No One Is Paying Attention To What's Really Going On With NFTs",
                channel: 'GarrisonF',
                price: 20,
                avatar: '/img/users/2.png',
                poster: '/img/video-card/2.jpg',
            },
            {
                id: 3,
                title: 'Bored Ape Yacht Club Creators Explain How Steph Curry & Bieber Got Their NFT & How BAYC is Worth $4B',
                channel: 'Johnny Vnice',
                price: 45,
                avatar: '/img/users/3.png',
                poster: '/img/video-card/3.jpg',
            },
            {
                id: 4,
                title: 'The Exploding Card Market',
                channel: 'Thunder Mary',
                price: 56,
                avatar: '/img/users/4.png',
                poster: '/img/video-card/4.jpg',
            },
            {
                id: 5,
                title: 'Web3/Metaverse Chat With Mark Zuckerberg',
                channel: 'Gary Vee',
                price: 122,
                avatar: '/img/users/5.png',
                poster: '/img/video-card/5.jpg',
            },
            {
                id: 6,
                title: 'If You Understand This Video About NFTs You Are in the Top 10% of People That Get It',
                channel: 'Impudent Jok',
                price: 12,
                avatar: '/img/users/6.png',
                poster: '/img/video-card/6.jpg',
            },
            {
                id: 7,
                title: 'What You Need To Know About The NFT World',
                channel: 'Yellow Stone',
                price: 43,
                avatar: '/img/users/7.png',
                poster: '/img/video-card/7.jpg',
            },
            {
                id: 8,
                title: 'Wolf of Wall Street Calls Out Crypto Scammers & Shares Leonardo DiCaprio Stories',
                channel: 'Mr Hawk',
                price: 78,
                avatar: '/img/users/8.png',
                poster: '/img/video-card/8.jpg',
            },
            {
                id: 9,
                title: 'How NFTs are shaking up the art world | DW Documentary',
                channel: 'Manga',
                price: 212,
                avatar: '/img/users/9.png',
                poster: '/img/video-card/9.jpg',
            },
            {
                id: 10,
                title: 'Why are people collecting NFTs? - 6 Minute English',
                channel: 'BBC English',
                price: 120,
                avatar: '/img/users/1.png',
                poster: '/img/video-card/10.jpg',
            },
            {
                id: 11,
                title: 'The Ultimate NFT Course: Beginner to Advanced Buy Sell',
                channel: 'Hustlers Point',
                price: 13,
                avatar: '/img/users/2.png',
                poster: '/img/video-card/11.jpg',
            },
            {
                id: 12,
                title: 'NFTs - SNL',
                channel: 'SNL',
                price: 278,
                avatar: '/img/users/3.png',
                poster: '/img/video-card/12.jpg',
            },
        ]
    }),
    getters: {
        getVideoById: (state: VideosModuleI) => (id: number) => {
            return state.videos.find(video => video.id === id)
          }
    }
}

 export default videosModule



