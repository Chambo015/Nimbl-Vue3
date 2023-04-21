<script setup lang="ts">
import { ref, type PropType, reactive, watch, defineAsyncComponent } from 'vue'

import type { ApexOptions } from 'apexcharts'
import type { ChartRangeType } from '@/types'
import { dayMilliseconds, maxDateFormChartData, monthMilliseconds, weekMilliseconds, yearMilliseconds } from '@/utils';
import type { VueApexChartsComponent } from 'vue3-apexcharts';

const apexcharts = defineAsyncComponent(() =>
  import('vue3-apexcharts')
)

const props = defineProps({
    height: {
        type: String,
        default: '150',
    },
    width: {
        type: String,
        default: '100%'
    },
    range: {
        type: String as PropType<ChartRangeType>,
        default: 'ALL'
    },
    yMax: {
        type: Number,
        default: 47
    },
    data: {
        type: Array as PropType<number[][]>,
        required: true
    }
})



const series = ref<ApexOptions['series']>([
    {
        name: '', // чтобы не отображать дефолтное имя
        data: props.data
    }
])

const options = reactive<ApexOptions>({
        chart: {
            id: 'area-datetime',
            type: 'area',
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true,
            },
            toolbar: {
                show: true,
                tools: {
                    download: false,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: false,
                    reset: false,
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            type: 'datetime',
            tickAmount: 4,
            tickPlacement: 'on',
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: 'rgba(143, 143, 143, 1)',
                    fontSize: '14px',
                    fontFamily: 'TT Octosquares',
                },
            },
        },
        yaxis: {
            max: props.yMax,
            tickAmount: 3,
            decimalsInFloat: 0, // округляет (не будет эффекта если есть функция formatter)
            forceNiceScale: false, // будут генерировать красиво выглядящие минимальные и максимальные значения.
            labels: {
                style: {
                    colors: 'rgba(143, 143, 143, 1)',
                    fontSize: '14px',
                    fontFamily: 'TT Octosquares',
                },
                formatter: (val) => val.toFixed() + 'M'
            },
        },
        tooltip: {
            theme: 'dark',
            x: {
                format: 'dd MMM yyyy',
            },
            marker: {
                show: false,
            },
        },
        grid: {
            borderColor: 'rgba(217, 217, 217, 0.2)', // цвета линии сетки
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        stroke: {
            fill: {
                type: 'gradient',
                gradient: {
                    type: 'horizontal',
                    colorStops: [
                        [
                            {
                                offset: 0,
                                color: 'rgba(0, 234, 242, 1)',
                                opacity: 1,
                            },

                            {
                                offset: 99,
                                color: 'rgba(218, 9, 217, 1)',
                                opacity: 1,
                            },
                        ],
                    ],
                },
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                type: 'vertical',
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: 'rgb(234, 0, 213)',
                            opacity: 0.7,
                        },
                        {
                            offset: 99,
                            color: 'rgb(234, 0, 213)',
                            opacity: 0,
                        },
                    ],
                ],
            },
        },
})

const chartEl = ref<VueApexChartsComponent | null>(null);
const maxDate = ref<number | null>(null)

watch( 
    () => props.range, 
    (newRange) => {
    if(!maxDate.value) {
        maxDate.value = maxDateFormChartData(props.data)
    }
    if(newRange === 'ALL') {
        chartEl.value?.resetSeries()
    } else if(newRange === 'ONE_YEAR') {
        chartEl.value?.zoomX(maxDate.value - yearMilliseconds , maxDate.value)
    }
    else if(newRange === 'ONE_MONTH') {
        chartEl.value?.zoomX(maxDate.value - monthMilliseconds , maxDate.value)
    } else if(newRange === 'ONE_WEEK') {
        chartEl.value?.zoomX(maxDate.value - weekMilliseconds , maxDate.value)
    } else { // newRange  === one Day
        chartEl.value?.zoomX(maxDate.value - dayMilliseconds , maxDate.value)
    }
})

</script>
<template>
    <div>
        <apexcharts ref="chartEl" :series="series"  type="area" :options="options" :width="props.width" :height="props.height"/>
    </div>
</template>

<style scoped>

</style>