export type TabCategoryType = 'Top' | 'Trending' | 'Rising' | 'WatchList';

export type RangeType = '1d' | '1w' | '1m' | '3m'
export interface ChannelI {
    id: number;
    name: string;
    subscribers: string;
    price: number;
    total: number;
    avatar: string;
}

export interface VideoI {
    id: number,
    title: string,
    channel: string,
    price: number,
    avatar: string,
    poster: string,
}

export interface PostI {
    id: number,
    author: {
        name: string,
        avatar: string,
    },
    text: string,
    attachImg?: string,
    likeCount: number,
    createdDate: number // 2h ago
}