import { useElementSize,} from '@vueuse/core'
import { watch, type Ref,  nextTick } from 'vue'

export function useScrollToBottom(refElem: Ref<HTMLElement | null>, scrollEl: Ref<HTMLElement | null>) {

    const { height }  = useElementSize(refElem)

    watch(height, async () => {
        await nextTick()
        scrollEl.value?.scrollTo({
            top: scrollEl.value?.scrollHeight,
            behavior: "smooth"
        }) 
    })
        
    return
}