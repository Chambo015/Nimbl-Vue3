import { useFullscreen } from '@vueuse/core';
import { computed, type Ref } from 'vue';

export const useCustomFullscreen = (el: Ref<HTMLElement | null>) => {
    /* Full Screen */
    const { isFullscreen: fullScreenHandler, enter: enterFullscreen, exit: exitFullscreen } = useFullscreen(el);
    // Делаю дополнительную проверку fullScreen видео, чтобы не путать с fullScreen всего сайта, document.fullscreenElement вернет последний элемент который был в fullScreen
    const isFullscreen = computed(() => fullScreenHandler.value && document.fullscreenElement == el.value);
    const toggleFullscreen = () => {
        if (!isFullscreen.value) {
            enterFullscreen();
        } else {
            exitFullscreen();
        }
    };

    return {
        isFullscreen,
        toggleFullscreen,
        enterFullscreen,
        exitFullscreen
    }
};
