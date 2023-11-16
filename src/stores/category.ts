import { defineStore } from 'pinia';

interface CategoryI {
    id: number,
    title: string,
    img: string
}

interface CategoryWithStatus extends CategoryI{
    isActive?: boolean 
}

interface Store {
    categoryList: CategoryI[],
    homeCategoryList: CategoryWithStatus[],
    marketplaceCategoryList: CategoryI[],
    activeMarketplace: string
}

export const useCategoryStore = defineStore('category', {
    state: (): Store =>( {
        categoryList: [
           
            {
                id: 1,
                title: 'Trending Videos',
                img: import.meta.env.BASE_URL +'img/category/trending-videos-large.webp',
            },
            {
                id: 2,
                title: 'Crypto News',
                img: import.meta.env.BASE_URL +'img/category/crypto-news-large.webp',
            },
            {
                id: 3,
                title: 'ETH NFTs',
                img: import.meta.env.BASE_URL +'img/category/eth-nfts-large.webp',
            },
            {
                id: 4,
                title: 'Play2Earn',
                img: import.meta.env.BASE_URL +'img/category/play2earn-large.webp',
            }
        ],
        homeCategoryList: [ 
            {
                id: 1,
                title: 'Clips',
                img: import.meta.env.BASE_URL +'img/category/clips.webp',
                isActive: false
            },
            {
                id: 2,
                title: 'Longs',
                img: import.meta.env.BASE_URL +'img/category/longs.webp',
                isActive: true
            },
            {
                id: 3,
                title: 'Wallet',
                img: import.meta.env.BASE_URL +'img/category/wallet.webp',
                isActive: false
            },
            {
                id: 4,
                title: 'Categories',
                img: import.meta.env.BASE_URL +'img/category/play2earn.png',
                isActive: false
            }
        ],
        marketplaceCategoryList: [
            {
                id: 1,
                title: 'TOP VOLUME',
                img: import.meta.env.BASE_URL +'img/category/top_volume.webp',
            },
            {
                id: 2,
                title: 'TOP TRENDING',
                img: import.meta.env.BASE_URL +'img/category/top_volume.webp',
            },
            {
                id: 3,
                title: 'MINTS',
                img: import.meta.env.BASE_URL +'img/category/mints.png',
            },
            {
                id: 4,
                title: 'PRE-SALE TOKENS',
                img: import.meta.env.BASE_URL +'img/category/top_volume.webp',
            }
        ],
        activeMarketplace: 'TOP VOLUME',
    }),
    getters: {
        getActiveHomeCategory(state): 'Clips' | 'Longs' {
            let res : 'Clips' | 'Longs' = 'Longs'
            state.homeCategoryList.forEach(c => c.isActive && c.title === 'Clips' ? (res = 'Clips') : null)
            return res
        }
    },
    actions: {
        setActiveHomeCategory(id: number)  {
                this.homeCategoryList.forEach(c => c.id === id  ? (c.isActive = true) : (c.isActive = false))
        }
    }
})