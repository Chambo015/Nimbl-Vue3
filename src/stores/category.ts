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
                title: 'Crypto News',
                img: import.meta.env.BASE_URL +'/img/category/category-2.png',
            },
            {
                id: 2,
                title: 'Trending Videos',
                img: import.meta.env.BASE_URL +'/img/category/category-1.png',
            },
            {
                id: 3,
                title: 'ETH NFTs',
                img: import.meta.env.BASE_URL +'/img/category/category-3.png',
            },
            {
                id: 4,
                title: 'Play2Earn',
                img: import.meta.env.BASE_URL +'/img/category/category-4.png',
            }
        ],
    })
})