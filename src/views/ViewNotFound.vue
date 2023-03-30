<script setup lang="ts">
import { IconAirPlay } from '@/components/icons';
</script>

<template>
    <div class="flex h-full w-full flex-col items-center justify-center text-xl font-medium">
        <h1 class="text-3xl">404</h1>
        <p>Страница по пути {{ $route.path }} не найдена</p>
        <IconAirPlay /> <code>IconAirPlay</code>
    </div>
</template>
