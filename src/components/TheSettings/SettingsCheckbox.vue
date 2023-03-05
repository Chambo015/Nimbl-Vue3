<template>
    <label>
        <input type="checkbox" :checked="checked" @change="(e: any) => $emit('update:checked', e.target.checked)" />
        <slot />
    </label>
</template>

<script setup lang="ts">
defineProps(['checked']);
defineEmits(['update:checked']);
</script>

<style scoped lang="scss">
label {
    display: block;
    cursor: pointer;
    &:not(:last-child) {
        margin-bottom: 13px;
    }
}
input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border: 1px solid #9b9ca7;
    vertical-align: middle;
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
    transition: 0.25s;
    background-size: 0;
    background-position: center;

    &:checked {
        background: no-repeat center/80% 100%
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' stroke='%23fff' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round' class='css-i6dzq1'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E"),
            no-repeat center/100%
                linear-gradient(
                    270deg,
                    rgba(234, 0, 213, 0.8) -75%,
                    rgba(61, 94, 255, 0.8) 48.86%,
                    rgba(0, 234, 242, 0.8) 158.33%
                );
        border: none;
    }
}
</style>
