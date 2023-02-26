export type TabCategoryType = 'Top' | 'Trending' | 'Rising' | 'WatchList';

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

export type RangeType = '1d' | '1w' | '1m' | '3m'