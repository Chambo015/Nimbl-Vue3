import type { Component } from 'vue';

export type TabCategoryType = 'Top' | 'Trending' | 'Rising' | 'WatchList';
export type TabHomeCategoryType = 'Mints' | 'Secondary Market';

export type RangeType = '1d' | '1w' | '1m' | '3m';

export type ChartRangeType = 'ALL' | 'ONE_YEAR' | 'ONE_MONTH' | 'ONE_WEEK' | 'ONE_DAY';

export interface ChannelI {
    id: number;
    name: string;
    subscribers: string;
    price: number;
    total: number;
    avatar: string;
}

export interface VideoI {
    id: number;
    title: string;
    channel: string;
    price: number;
    avatar: string;
    poster: string;
    /* Свойства для видео аудио и субтитров */
    videoSrc?: string,
    audioSrc? : AudioTrackType[],
    subtitles?: {
        src: string,
        kind: 'subtitles',
        label: string,
        srcLang: LanguagesType,
    }[]
}

export interface IAnnouncement {
    id: number;
    author: {
        name: string;
        avatar: string;
    };
    text: string;
    attachImg?: string;
    likeCount: number;
    createdDate: number; // 2h ago
}

export interface ILoginForm {
    password: {
        value: string;
        typeInput: string;
        placeholder: string;
        label: string;
        validateError: string | null;
    };
    confirmPassword: {
        value: string;
        typeInput: string;
        placeholder: string;
        label: string;
        validateError: string | null;
    };
    email: {
        value: string;
        typeInput: string;
        placeholder: string;
        label: string;
        validateError: string | null;
    };
}

export interface IUser {
    email: string;
    token: string;
    id: string;
}

export type SoundVolumeType = 'medium' | 'low' | 'high' | 'off';

export type TypeMessageGPT = {
    id: number;
    text: string[];
    isChatGPT: boolean;
    showStatus: boolean;
    delayToResponse?: number;
    attachComponent?: Component
};

export type LanguagesType = 'en' | 'fr' | 'es' | 'zh' | 'it' | 'kk' | 'de' | 'tr'

export interface  AudioTrackType  {
    language: LanguagesType,
    src: string,
    label: string,
    flag: string
}