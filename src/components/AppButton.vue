<script setup lang="ts"></script>
<template>
    <button type="button" :class="['bg-gradient-tab-list dark:bg-none dark:bg-dark-glass relative px-[min(28px,1.5vw)] py-[14px] inline-flex justify-center items-center hover:after:bottom-line hover:before:top-line whitespace-nowrap']">
        <slot />
    </button>
</template>

<style scoped></style>
