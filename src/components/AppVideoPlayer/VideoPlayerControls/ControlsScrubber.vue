<script setup lang="ts">
import { ref, watch } from 'vue'
import { useEventListener, useMouseInElement, useVModel } from '@vueuse/core'

const props = defineProps({
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  secondary: { type: Number, default: 0 },
  modelValue: { type: Number, required: true },
})

const emit = defineEmits(['update:modelValue'])

const scrubber = ref()
const scrubbing = ref(false)
const pendingValue = ref(0)

useEventListener('mouseup', () => scrubbing.value = false)

const value = useVModel(props, 'modelValue', emit)
const { elementX, elementWidth } = useMouseInElement(scrubber)

watch([scrubbing, elementX], () => {
  const progress = Math.max(0, Math.min(1, (elementX.value) / elementWidth.value))
  pendingValue.value = progress * props.max
  if (scrubbing.value)
    value.value = pendingValue.value
})
</script>

<template>
  <div ref="scrubber" class="relative h-[6px] duration-200 cursor-pointer select-none bg-black dark:bg-white dark:bg-opacity-10 bg-opacity-20" @mousedown="scrubbing = true">
    <div class="relative overflow-hidden h-full w-full ">
      <div class="h-full absolute opacity-30 left-0 top-0 bg-gradient-header w-full " :style="{ transform: `translateX(${secondary / max * 100 - 100}%)` }" />
      <div class="relative h-full w-full bg-gradient-text " :style="{ transform: `translateX(${value / max * 100 - 100}%)` }" />
    </div>
    <div class="absolute inset-0 " :class="[scrubbing ? 'visible' : 'invisible']">
      <slot :pending-value="pendingValue" :position="`${Math.max(0, Math.min(elementX, elementWidth))}px`" />
    </div>
  </div>
</template>