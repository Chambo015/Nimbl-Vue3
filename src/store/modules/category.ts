interface CategoryI {
    id: number,
    title: string,
    img: string
}

export interface CategoryModuleI {
    category: CategoryI[];
}

 const categoryModule = {
    state: (): CategoryModuleI =>( {
        category: [
            {
                id: 1,
                title: 'Crypto News',
                img: '/img/category/category-2.png',
            },
            {
                id: 2,
                title: 'Trending Videos',
                img: '/img/category/category-1.png',
            },
            {
                id: 3,
                title: 'ETH NFTs',
                img: '/img/category/category-3.png',
            },
            {
                id: 4,
                title: 'Play2Earn',
                img: '/img/category/category-4.png',
            }
        ],
    })
}

 export default categoryModule