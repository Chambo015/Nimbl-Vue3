import { defineStore } from 'pinia';

interface CategoryI {
    id: number,
    title: string,
    img: string
}

interface Store {
    categoryList: CategoryI[];
}

export const useCategoryStore = defineStore('category', {
    state: (): Store =>( {
        categoryList: [
           
            {
                id: 1,
                title: 'Trending Videos',
                img: import.meta.env.BASE_URL +'/img/category/trending-videos.png',
            },
            {
                id: 2,
                title: 'Crypto News',
                img: import.meta.env.BASE_URL +'/img/category/crypto-news.png',
            },
            {
                id: 3,
                title: 'ETH NFTs',
                img: import.meta.env.BASE_URL +'/img/category/eth-nfts.png',
            },
            {
                id: 4,
                title: 'Play2Earn',
                img: import.meta.env.BASE_URL +'/img/category/play2earn.png',
            }
        ],
    })
})