<script setup lang="ts">

const emit = defineEmits<{
    (e: 'changeTab', tab: any): void
}>()


</script>
<template>
    <div role="tablist" aria-orientation="horizontal" aria class="bg-gradient-tab-list inline-flex">
        <slot :on-change="(tab: any) => emit('changeTab', tab)"  />
    </div>
</template>

<style scoped></style>
