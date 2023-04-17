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
}

export const useCategoryStore = defineStore('category', {
    state: (): Store =>( {
        categoryList: [
           
            {
                id: 1,
                title: 'Trending Videos',
                img: import.meta.env.BASE_URL +'img/category/trending-videos.png',
            },
            {
                id: 2,
                title: 'Crypto News',
                img: import.meta.env.BASE_URL +'img/category/crypto-news.png',
            },
            {
                id: 3,
                title: 'ETH NFTs',
                img: import.meta.env.BASE_URL +'img/category/eth-nfts.png',
            },
            {
                id: 4,
                title: 'Play2Earn',
                img: import.meta.env.BASE_URL +'img/category/play2earn.png',
            }
        ],
        homeCategoryList: [ 
            {
                id: 1,
                title: 'Clips',
                img: import.meta.env.BASE_URL +'img/category/clips.png',
                isActive: true
            },
            {
                id: 2,
                title: 'Longs',
                img: import.meta.env.BASE_URL +'img/category/longs.png',
                isActive: false
            },
            {
                id: 3,
                title: 'Wallet',
                img: import.meta.env.BASE_URL +'img/category/wallet.png',
                isActive: false
            },
            {
                id: 4,
                title: 'Categories',
                img: import.meta.env.BASE_URL +'img/category/play2earn.png',
                isActive: false
            }
        ],

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