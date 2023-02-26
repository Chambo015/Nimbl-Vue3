import type { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import channelsModule from './modules/channels';
import type { ChannelsModuleI } from './modules/channels';
import type { CategoryModuleI } from './modules/category';
import categoryModule from './modules/category';
import videosModule from './modules/videos';
import type { VideosModuleI } from './modules/videos';

export interface State {
    channels: ChannelsModuleI;
    category: CategoryModuleI;
    videos: VideosModuleI
    mode: string;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    modules: {
        channels: channelsModule,
        category: categoryModule,
        videos: videosModule
    },
    state: {
        mode: 'light',
    } as State,
});
