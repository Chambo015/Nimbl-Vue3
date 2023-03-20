<script setup lang="ts">
import TheSettings from '@/components/TheSettings';
import { reactive, ref } from 'vue';

const baseUrl = import.meta.env.BASE_URL;

enum SettingsTabsEnum {
    ACCOUNT = 'Account',
    NOTIFICATIONS = 'Notifications',
    LIKES_AND_PREFERENCES = 'Likes and preferences',
    SECURITY_AND_PRIVACY = 'Security and privacy',
    WALLET = 'Wallet',
}

type SettingsTabsType = keyof typeof SettingsTabsEnum;

const settingsTabsArray: SettingsTabsType[] = [
    'ACCOUNT',
    'NOTIFICATIONS',
    'LIKES_AND_PREFERENCES',
    'SECURITY_AND_PRIVACY',
    'WALLET',
];

const activeSettingsTab = ref<SettingsTabsType>('ACCOUNT');

const currency = ref<'USD' | 'EUR' | 'CNY'>('USD')

interface IDataSettings {
    [key: string]: {
        [key: string] : {
            [key: string]: {
                [key: string]: boolean
            }
        }
    }
}

const data = reactive<IDataSettings>({
    NOTIFICATIONS: {
        'General notifications': {
            'Browser notifications': {
                'Get in-browser push notifications': false,
            },
            'Channel notifications': {
                'Get new follower updates': true,
                'Get new comment updates': false,
            },
           'Other notifications': {
                'Get occasional update notifications from Nimbl': true,
            },
        },
        'Wallet notifications' : {
            'Purchase notifications': {
                'Get item sold updates': true,
                'Get bid activity updates': true,
                'Get price change updates': true,
                'Get auction expiration updates': true,
                'Get outbid updates': true,
                'Get owned item updates': true,
                'Get successful purchase updates': true,
            }
        },
        'Marketplace notifications': {
            'Updates': {
                'Get trending channels digest': true,
                'Get favorite channel updates': false
            }
        }
    },
    LIKES_AND_PREFERENCES: {
        'Video player preferences': {
            'Video quality': {
                'Watch videos in High Quality': true,
                'Use Data Saving mode while using mobile data': true,
            },
            Subtitles: {
                'Always show subtitles': true,
            },
            Comments: {
                'Show comments in the lower left corner': true,
            },
        },
        'Marketplace preferences' : {
            Setting: {
                'Setting 1 description': true,
            }
        }

    },
    SECURITY_AND_PRIVACY: {
        'Profile condifentiality': {
            Playlists: {
                'Display saved playlists': true,
                'Display created playlists': true,
            },
            'Favorite channels': {
                'Display favorite channels': false,
            },
            History: {
                'Save watched history': true,
            },
        }
    }
})
</script>

<template>
    <div class="settings">
        <aside
            class="fixed z-50 w-[calc((100vw_-_var(--width-container))_/_2)] pt-5 pl-[calc((100vw_-_var(--width-container))_/_2_-_var(--width-sidebar)_-_100px)]">
            <h1 class="mb-4 text-xl font-bold uppercase">Settings</h1>
            <ul class="w-[var(--width-sidebar)] space-y-[5px]">
                <li
                    v-for="item in settingsTabsArray"
                    :key="item"
                    :class="[
                        'cursor-pointer py-2 px-4 text-lg',
                        activeSettingsTab === item ? 'bg-gradient-active-tab font-semibold' : '',
                    ]"
                    @click="activeSettingsTab = item">
                    {{ SettingsTabsEnum[item] }}
                </li>
            </ul>
        </aside>
        <section class="relative h-full overflow-y-auto pt-6 pl-[calc((100vw_-_var(--width-container))_/_2)]">
            <div class="w-[var(--width-container)]">
                <!-- Account -->
                <template v-if="activeSettingsTab === 'ACCOUNT'">
                    <TheSettings.Title>Account</TheSettings.Title>
                    <section class="account_form mb-8 flex justify-between border-b border-[#7077e5] pb-8">
                        <form class="flex w-[460px] flex-col p-2">
                            <label for="Username">Username</label>
                            <input id="Username" type="text" placeholder="Enter username" />
                            <label for="Bio">Bio</label>
                            <textarea
                                placeholder="Tell other Nimblers about yourself!"
                                name="bio"
                                id="Bio"
                                rows="{3}"></textarea>
                            <label for="Email address">Email address</label>
                            <input id="Email address" type="email" placeholder="Enter email" />
                            <div class="mt-8 flex gap-4">
                                <button type="submit" class="bg-gradient-tab-list">Update profile</button>
                                <button type="reset" class="bg-light-glass">Cancel</button>
                            </div>
                        </form>
                        <div class="flex flex-col items-end pt-2">
                            <div class="mb-4 flex flex-col items-center justify-center">
                                <img
                                    alt="avatar"
                                    width="110"
                                    height="110"
                                    class="mb-1 h-28 w-28 rounded-full object-cover"
                                    :src="baseUrl + 'img/users/12.png'" />
                                <span class="text-sm font-semibold"> nimbl.tv/username </span>
                            </div>
                            <ul class="flex flex-col items-end gap-2 text-sm text-[#6bb8ff] [&_li]:cursor-pointer">
                                <li>Change profile picture</li>
                                <li>Change channel link</li>
                            </ul>
                        </div>
                    </section>
                    <TheSettings.SubTitle>My account</TheSettings.SubTitle>
                    <TheSettings.List>
                        <TheSettings.Key>Account integration</TheSettings.Key>
                        <div class="text-sm">
                            <p>You are not connected to your Google account.</p>
                            <p>
                                By integrating your Google account you will be able to upload videos directly from YouTube.
                            </p>
                            <p class="cursor-pointer text-[#6bb8ff]">Connect to your Google account</p>
                        </div>
                        <TheSettings.Key>Subscription status</TheSettings.Key>
                        <div class="text-sm">
                            <p>Your current status is a Standard user.</p>
                            <p>
                                With Nimbl Premium you will be able to access Premium only features and unlock the true
                                power of our platform.
                            </p>
                            <p class="cursor-pointer text-[#6bb8ff]">Subscribe to Nimbl Premium</p>
                        </div>
                    </TheSettings.List>
                </template>
                <!--  -->
                <!-- Notifications -->
                <template v-else-if="activeSettingsTab === 'NOTIFICATIONS'">
                    <TheSettings.Title>Notifications</TheSettings.Title>
                    <p class="mb-8 text-sm">Select notifications you would like to receive</p>
                    <template v-for="(subData, subTitle) in data['NOTIFICATIONS']" :key="subTitle">
                        <TheSettings.SubTitle>{{subTitle}}</TheSettings.SubTitle>
                        <TheSettings.List>
                            <template v-for="(listData, key) in subData" :key="key">
                                <TheSettings.Key>{{key}}</TheSettings.Key>
                                <div  class="text-sm">
                                    <TheSettings.Checkbox v-for="(checked, label) in listData" :key="label" v-model:checked="data.NOTIFICATIONS[subTitle][key][label]">{{label}}</TheSettings.Checkbox>
                                </div>
                            </template>
                        </TheSettings.List>
                        <TheSettings.Divider />
                    </template>
                </template>
                <!--  -->
                <!-- LIKES_AND_PREFERENCES -->
                <template v-else-if="activeSettingsTab === 'LIKES_AND_PREFERENCES'">
                    <TheSettings.Title>Likes and preferences</TheSettings.Title>
                    <template v-for="(subData, subTitle) in data['LIKES_AND_PREFERENCES']" :key="subTitle">
                        <TheSettings.SubTitle>{{subTitle}}</TheSettings.SubTitle>
                        <TheSettings.List>
                            <template v-for="(listData, key) in subData" :key="key">
                                <TheSettings.Key>{{key}}</TheSettings.Key>
                                <div  class="text-sm">
                                    <TheSettings.Checkbox v-for="(checked, label) in listData" :key="label" 
                                    v-model:checked="data['LIKES_AND_PREFERENCES'][subTitle][key][label]">{{label}}</TheSettings.Checkbox>
                                </div>
                            </template>
                        </TheSettings.List>
                        <TheSettings.Divider />
                    </template>
                </template>
                <!--  -->
                <!-- SECURITY_AND_PRIVACY -->
                <template v-else-if="activeSettingsTab === 'SECURITY_AND_PRIVACY'">
                    <TheSettings.Title>Security and privacy</TheSettings.Title>
                    <template v-for="(subData, subTitle) in data['SECURITY_AND_PRIVACY']" :key="subTitle">
                        <TheSettings.SubTitle>{{subTitle}}</TheSettings.SubTitle>
                        <TheSettings.List>
                            <template v-for="(listData, key) in subData" :key="key">
                                <TheSettings.Key>{{key}}</TheSettings.Key>
                                <div  class="text-sm">
                                    <TheSettings.Checkbox v-for="(checked, label) in listData" :key="label" 
                                    v-model:checked="data['SECURITY_AND_PRIVACY'][subTitle][key][label]">{{label}}</TheSettings.Checkbox>
                                </div>
                            </template>
                        </TheSettings.List>
                        <TheSettings.Divider />
                    </template>
                </template>
                <!--  -->
                   <!-- Account -->
                   <template v-else-if="activeSettingsTab === 'WALLET'">
                    <TheSettings.Title>Wallet</TheSettings.Title>
                    <TheSettings.SubTitle>Financial settings</TheSettings.SubTitle>
                    <TheSettings.List>
                        <TheSettings.Key>Currency conversion</TheSettings.Key>
                        <div className={style.settings_list__value}>
                            <select v-model="currency" class="py-2 px-4 text-white bg-[#293c61] text-sm">
                                <option value="USD">USD - United States Dollar</option>
                                <option value="EUR">EUR - Euro Countries</option>
                                <option value="CNY">CNY - Chinese yuan</option>
                            </select>
                        </div>
                        <TheSettings.Key>Wallet integration</TheSettings.Key>
                        <div class="text-sm">
                            <p>You are not connected to your MetaMask account.</p>
                            <p>By integrating MetaMask you will be able to have a wallet</p>
                            <p class="cursor-pointer text-[#6bb8ff]">Connect to your account</p>
                        </div>
                    </TheSettings.List>
                </template>
                <!--  -->
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
.settings {
    --width-container: 690px;
    --width-sidebar: 250px;
    color: white;
    width: 100%;
    height: 100%;

    .account_form {
        label {
        @apply mb-2 text-sm font-bold;
        }

        input,
        textarea {
            @apply mb-4 resize-y border border-none bg-light-glass py-2 px-3 text-sm text-white;
        }

        button {
            @apply cursor-pointer border-none py-2 px-4 text-sm text-white;
        }
    }
 
}
</style>
