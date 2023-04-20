<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ModalUploadAnimation from './ModalUploadAnimation.vue';
import ModalUploadGPTTyped from './ModalUploadGPTTyped.vue';
import AppTabList from '../AppTabList.vue';
import AppTabListItem from '../AppTabListItem.vue';

defineEmits(['closeModal']);

const imgBase64 = {
    cameraIcon:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAzMyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNSAzLjkwOTMxQzAuNSAxLjg2NjE5IDIuMTA0OTQgMC4yMDUwNzggNC4wNzg5NyAwLjIwNTA3OEgxOC4zOTQ4QzIwLjM2ODkgMC4yMDUwNzggMjEuOTczOCAxLjg2NjE5IDIxLjk3MzggMy45MDkzMVYxOC43MjYyQzIxLjk3MzggMjAuNzY5MyAyMC4zNjg5IDIyLjQzMDUgMTguMzk0OCAyMi40MzA1SDQuMDc4OTdDMi4xMDQ5NCAyMi40MzA1IDAuNSAyMC43NjkzIDAuNSAxOC43MjYyVjMuOTA5MzFaTTMxLjc2NTYgMi4yNzcxM0MzMi4zNDcyIDIuNjAxMjUgMzIuNzEwNyAzLjIyNjM0IDMyLjcxMDcgMy45MDkzMVYxOC43MjYyQzMyLjcxMDcgMTkuNDA5MiAzMi4zNDcyIDIwLjAzNDMgMzEuNzY1NiAyMC4zNTg0QzMxLjE4NCAyMC42ODI1IDMwLjQ3OTQgMjAuNjQ3OCAyOS45MjU4IDIwLjI2NThMMjQuNTU3NCAxNi41NjE2TDIzLjc2MzMgMTYuMDExN1YxNS4wMjJWNy42MTM1NFY2LjYyMzgxTDI0LjU1NzQgNi4wNzM5N0wyOS45MjU4IDIuMzY5NzRDMzAuNDczOCAxLjk5MzUzIDMxLjE3ODQgMS45NTMwMSAzMS43NjU2IDIuMjc3MTNWMi4yNzcxM1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=',
    playIcon:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA0IiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMTA0IDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNzM1ODYgNC4zODYyNUg4NC45MDI4VjUwLjI4NTJIODguNjE1MlY0LjM4NjI1VjAuNjczODI4SDg0LjkwMjhIMy43MzU4NkgwLjAyMzQzNzVWNC4zODYyNVY1OC4zODUxVjYyLjA5NzVIMy43MzU4Nkg3NC40Mzc1VjU4LjM4NTFIMy43MzU4NlY0LjM4NjI1WiIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iNzYuNTUzMSIgeT0iNTIuMzk0OSIgd2lkdGg9IjI2LjQ5MzIiIGhlaWdodD0iMjYuNDkzMiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjg1NjIxIi8+CjxwYXRoIGQ9Ik01Ny45MDYyIDMxLjk3NjJMMzUuNzU4MyA0NC43NjM0TDM1Ljc1ODMgMTkuMTg5MUw1Ny45MDYyIDMxLjk3NjJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNODkuMjAyMiA1OC41NTQ3TDgzLjg4NjcgNjIuMDk4NE04OS4yMDIyIDU4LjU1NDdMOTMuOTI3MSA2Mi4wOTg0TTg5LjIwMjIgNTguNTU0N0w4OS4yMDIyIDc4LjYzNTUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS44NTYyMSIvPgo8L3N2Zz4K',
    publicIcon:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI1IDI1Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0yLjgxNyA5LjQyNC40Ni44YTMuMTI3IDMuMTI3IDAgMCAwIDEuODU1IDEuNDU2bDIuODI3LjgwNWExLjk1MSAxLjk1MSAwIDAgMSAxLjQxNiAxLjg4djEuOTQ5YzAgLjUzNy4zMDMgMS4wMjUuNzgxIDEuMjY0LjQ3OS4yNC43ODEuNzI4Ljc4MSAxLjI2NXYxLjkwNGMwIC43NjIuNzI4IDEuMzE0IDEuNDYgMS4xMDRhMi4zMDEgMi4zMDEgMCAwIDAgMS41OTctMS42NWwuMTM3LS41NDhhMy4xMTYgMy4xMTYgMCAwIDEgMS40OC0xLjk1M2wuMzk1LS4yMjRhMi4zNCAyLjM0IDAgMCAwIDEuMTgxLTIuMDM2di0uNDA2YTIuMzQgMi4zNCAwIDAgMC0uNjg4LTEuNjU1bC0uMTktLjE5YTIuMzQ0IDIuMzQ0IDAgMCAwLTEuNjU2LS42ODlIMTIuNTVhMy4xNiAzLjE2IDAgMCAxLTEuNTUzLS40MWwtMS42ODQtLjk2MmExLjAxNCAxLjAxNCAwIDAgMS0uNDUtLjU0Ny45ODMuOTgzIDAgMCAxIC40OTgtMS4xOTZsLjI4OC0uMTQ3Yy4zMjMtLjE2LjY5OS0uMTkgMS4wNC0uMDczbDEuMTMzLjM3NmEuOTMyLjkzMiAwIDAgMCAxLjAxLTEuNDhsLS42NjMtLjc5NWExLjU2IDEuNTYgMCAwIDEgLjAxNS0yLjAxN2wuNzY2LS44OTRjLjQzLS41MDIuNDk4LTEuMjIuMTcxLTEuNzkybC0uMTE3LS4yMDVhOC44MSA4LjgxIDAgMCAwLS41MDgtLjAxNGMtNC41MzEgMC04LjM3NCAyLjk3My05LjY3OCA3LjA4Wm0xOS44NCAzLjA3NmMwLTEuNzk3LS40Ny0zLjQ4Ni0xLjI5LTQuOTU2bC0xLjI1LjUwM2ExLjU2NyAxLjU2NyAwIDAgMC0uOTAzIDEuOTQzbC44MjUgMi40NzZjLjE3MS41MDguNTg2Ljg5MyAxLjEwNCAxLjAybDEuNDIuMzU3Yy4wNi0uNDQuMDg4LS44ODkuMDg4LTEuMzQzaC4wMDVabTIuMzQzIDBDMjUgMTkuNDA0IDE5LjQwNCAyNSAxMi41IDI1UzAgMTkuNDA0IDAgMTIuNSA1LjU5NiAwIDEyLjUgMCAyNSA1LjU5NiAyNSAxMi41WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjV2MjVIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=',
    privateIcon:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDIyIDI2Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNy4wNzEgNy4zMTNWOS43NWg3Ljg1OFY3LjMxMmMwLTIuMjQ0LTEuNzU4LTQuMDYyLTMuOTI5LTQuMDYyLTIuMTcgMC0zLjkyOSAxLjgxOC0zLjkyOSA0LjA2M1pNMy45MyA5Ljc1VjcuMzEyQzMuOTI5IDMuMjc2IDcuMDk2IDAgMTEgMHM3LjA3MSAzLjI3NSA3LjA3MSA3LjMxM1Y5Ljc1aC43ODZDMjAuNTkxIDkuNzUgMjIgMTEuMjA3IDIyIDEzdjkuNzVjMCAxLjc5My0xLjQxIDMuMjUtMy4xNDMgMy4yNUgzLjE0M0MxLjQwOSAyNiAwIDI0LjU0MyAwIDIyLjc1VjEzYzAtMS43OTMgMS40MS0zLjI1IDMuMTQzLTMuMjVoLjc4NloiLz48L3N2Zz4=',
};

const enabledGPT = ref(false);
const stepUploading = ref(false);

onMounted(() => {});

const completedAnimation = ref(false)

const activeVideoVisibility = ref('Public');
const setActiveVideoVisibility = (tab: string): void => {
    activeVideoVisibility.value = tab;
};
</script>

<template>
    <Teleport to="body">
        <div class="fixed inset-0 z-[999999]" @click.self="$emit('closeModal')">
            <div class="absolute left-1/2 top-1/2 h-[550px] w-[950px] -translate-x-1/2 -translate-y-1/2 bg-[#22202F]">
                <template v-if="!stepUploading">
                    <div class="flex flex-col items-center px-20 py-14">
                        <img class="h-[80px] w-[100px] object-contain" :src="imgBase64.playIcon" alt="video" />
                        <p class="mt-6 text-4xl font-medium">Select Video file</p>
                        <p class="mt-8 whitespace-nowrap text-3xl text-white/50">
                            16:9 Ratio preferred. 4K, 1440p, 1080p or 720p.
                        </p>
                        <p class="mt-8 whitespace-nowrap text-3xl text-white/50">Drag and drop or</p>
                        <div class="mt-16 flex">
                            <button
                                @click="stepUploading = true"
                                :class="[
                                    'upload_btn relative isolate flex items-center gap-4 bg-gradient-active-tab px-8 py-4 text-3xl transition-all before:absolute before:inset-0  before:z-[-1] before:bg-[linear-gradient(88.76deg,#3939399c_0.58%,#a307f361_98.96%)]  before:transition-opacity active:scale-95',
                                    enabledGPT ? 'before:opacity-100 after:w-8' : 'before:opacity-0 after:w-0',
                                ]">
                                <img class="h-[30px] w-[32px] object-contain" :src="imgBase64.cameraIcon" alt="" /><span
                                    class="!leading-none"
                                    >Upload Video</span
                                >
                            </button>
                            <button
                                @click="enabledGPT = !enabledGPT"
                                :class="[
                                    'gpt_btn relative ml-8 flex items-center border border-white/50 px-4 text-white/50 transition-all hover:border-white hover:text-white active:scale-95',
                                    enabledGPT ? '!before:opacity-100 bg-dark-glass' : 'before:opacity-0',
                                ]">
                                <img src="/gpt-icon.png" alt="gpt" class="mr-2 h-5 w-5" /><span
                                    >Enable translation and transcription</span
                                >
                            </button>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="flex h-full w-full p-5">
                        <div class="mr-9 flex flex-[1_1] flex-col">
                            <input
                                type="text"
                                placeholder="Enter video title"
                                class="bg-transparent px-3 py-1 text-2xl placeholder:text-white" />
                            <div class="mt-5 flex-grow border border-white/5 px-4 py-2 text-white/50">
                                <ModalUploadGPTTyped />
                            </div>
                        </div>
                        <div class="flex w-[40%] flex-[0_0_40%] flex-col">
                            <ModalUploadAnimation @complete-animation="() => completedAnimation = true" />
                            <div class="mt-8 flex flex-grow flex-col">
                                <p class="text-2xl font-medium">Video visibility</p>

                                <AppTabList
                                    class="mt-6 h-14 w-full !bg-gradient-tab-list-mute dark:!bg-none"
                                    @change-tab="setActiveVideoVisibility"
                                    v-slot="{ onChange }">
                                    <AppTabListItem
                                        value="Public"
                                        :active-value="activeVideoVisibility"
                                        @click="() => onChange('Public')"
                                        :class="[activeVideoVisibility == 'Public' ? '' : 'opacity-50']">
                                        <img :src="imgBase64.publicIcon" alt="publicIcon" class="mr-2 h-6 w-6" />
                                        <span class="text-xl leading-none">Public</span>
                                    </AppTabListItem>
                                    <AppTabListItem
                                        value="Private"
                                        :active-value="activeVideoVisibility"
                                        @click="() => onChange('Private')"
                                        :class="[activeVideoVisibility == 'Private' ? '' : 'opacity-50']">
                                        <img :src="imgBase64.privateIcon" alt="privateIcon" class="mr-2 h-6 w-6" />
                                        <span class="text-xl leading-none">Private</span>
                                    </AppTabListItem>
                                </AppTabList>
                                <button :disabled="!completedAnimation" @click="$router.push({name: 'video', params: {id : 13}})"
                                    :class="[
                                        'relative isolate ml-auto mt-auto flex items-center bg-gradient-active-tab px-3 py-4 text-2xl transition-all before:absolute before:inset-0 before:z-[-1] before:bg-[linear-gradient(88.76deg,#3939399c_0.58%,#a307f361_98.96%)]  before:opacity-0 before:transition-all  hover:before:opacity-100 active:scale-95',
                                    ]">
                                    <img
                                        class="mr-3 h-[22px] w-[32px] object-contain"
                                        :src="imgBase64.cameraIcon"
                                        alt="" />
                                    <span class="!leading-none">Upload Video</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </Teleport>
</template>

<style scoped lang="scss">
.upload_btn {
    &::after {
        content: '';
        height: 3px;
        background-color: #8c98ff;
        position: absolute;
        right: 0;
        top: 50%;
        transition: width 0.3s ease;
        transform: translateX(100%) translateY(-50%);
    }
}
.gpt_btn {
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        background-color: #8c98ff;
        width: 10px;
        height: 10px;
        transition: opacity 0.3s ease;
        transform: translateX(-115%) translateY(-50%) rotate(45deg);
    }
}
</style>
