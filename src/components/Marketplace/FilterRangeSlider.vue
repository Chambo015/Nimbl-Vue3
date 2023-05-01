<template>
    <div class="relative">
        <input id="small-range" type="range" v-model="value" :max="max" :min="min" class="w-full h-[1px] mb-6 bg-white/50 rounded-lg appearance-none cursor-pointer range-sm dark:bg-white/50">
        <span class="absolute top-6 text-sm" :style="{left: `${valuePosition}%`, transform: `translateX(${valuePosition > 9 ? '-50%': '0' })`}">{{ modelValue }}</span>
    </div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import { computed } from 'vue';

const props = defineProps({
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  modelValue: { type: Number, required: true }
})

const emit = defineEmits(['update:modelValue']);

const value = useVModel(props, 'modelValue', emit)

const valuePosition = computed(() => (100 / props.max) * props.modelValue)
</script>

<style scoped lang="scss">
input::-webkit-slider-thumb {
    appearance: none;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(270deg, #60E2FF 0%, #8C98FF 50%, #CC61FF 100%);
    cursor: pointer;
    transition: background .15s ease-in-out;
  }

</style>