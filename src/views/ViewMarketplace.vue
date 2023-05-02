<script setup lang="ts">
import MarketplaceCategory from '@/components/AppCategories/MarketplaceCategory.vue';
import CardGrid from '@/components/Marketplace/CardGrid.vue';
import DropSlider from '@/components/Marketplace/DropSlider.vue';
import FilterMarketplace from '@/components/Marketplace/FilterMarketplace.vue';


</script>

<template>
     <div class="grid w-full h-full grid-cols-12 gap-5 py-5 overflow-hidden">
        <div v-auto-animate class="col-span-4 h-full flex flex-col overflow-hidden pl-5 relative">
            <DropSlider />
            <FilterMarketplace class="mt-5" />
        </div>
        <div class="col-span-8 h-full flex flex-col overflow-hidden">
            <MarketplaceCategory class="pr-5 mb-10" />
            <CardGrid class="mr-[5px] overflow-y-scroll pr-[10px] pb-height-navigation" />
        </div> 
    </div>
</template>



<style scoped>

</style>