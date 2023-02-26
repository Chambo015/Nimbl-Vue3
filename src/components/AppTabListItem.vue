<script setup lang="ts">
import { computed, type PropType } from 'vue';

const props = defineProps({
    value: String as PropType<any>,
    activeValue: String as PropType<any>,
});

const isActive = computed(() => {
    return props.value === props.activeValue;
});
</script>
<template>
    <div
        role="tab"
        :class="[
            'relative inline-flex flex-grow cursor-pointer items-center justify-center p-3',
            isActive ? 'bg-gradient-active-tab  after:bottom-line' : 'hover:bg-black/10',
        ]">
        <slot />
    </div>
</template>

<style scoped></style>
