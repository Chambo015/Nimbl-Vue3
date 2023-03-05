<script setup lang="ts">

const emit = defineEmits<{
    (e: 'changeTab', tab: any): void
}>()


</script>
<template>
    <div role="tablist" aria-orientation="horizontal" aria class=" inline-flex bg-gradient-tab-list dark:bg-none dark:bg-dark-glass" v-bind="$attrs">
        <slot :on-change="(tab: any) => emit('changeTab', tab)" />
    </div>
</template>

<style scoped></style>
