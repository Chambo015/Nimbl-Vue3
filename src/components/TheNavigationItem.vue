<template>
    <RouterLink to="" v-bind="$props" custom  v-slot="{ href, navigate }">
        <a v-bind="$attrs" :href="href" @click="navigate" :class="['flex items-center py-4 h-height-navigation justify-center gap-3 relative', $props.isActive ? 'bg-gradient-active-tab  after:bottom-line' : 'hover:bg-white/10']">
            <i> <slot name="icon" class="h-6" /></i>
            <span class="text-xl antialiased"><slot /></span>
        </a>
    </RouterLink>
</template>

<script setup lang="ts">
/**
 * Requirements
 * - to: path
 */
import { RouterLink } from 'vue-router';

defineProps({
    // @ts-ignore
    ...RouterLink.props,
    isActive: Boolean
});
</script>

<script lang="ts"> // use normal <script> to declare options
import { defineComponent } from 'vue';
export default defineComponent({
    inheritAttrs: false, 
});
</script>

<style scoped></style>
