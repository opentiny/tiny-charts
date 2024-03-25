<template>
    <div class="chart-container" ref="chartRef"></div>
</template>

<script>
import axios from 'axios';
import IntegrateChart from '../../../src/index';

export default {
    props: {
        chartName: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            interval: null,
            chartData: [],
        };
    },
    created() {
        this.integrateChart = new IntegrateChart();
    },
    mounted() {
        axios.get(`overview/${this.chartName}.js`).then(res => {
            this.chartData = this.evil(res.data);
            this.renderChart();
        });

        // 监听元素是否在可视范围内
        const intersectionObserver = new IntersectionObserver(entries => {
            // 目标不可见
            if (entries[0].intersectionRatio <= 0) {
                clearInterval(this.interval);
            } else {
                this.refreshChart();
            }
        });

        // 开始监听
        intersectionObserver.observe(this.$refs.chartRef);
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
    methods: {
        renderChart() {
            this.integrateChart.init(this.$refs.chartRef);
            this.integrateChart.setSimpleOption(this.chartName, this.chartData[0]);

            // 延迟渲染，预留动画加载时间
            setTimeout(() => {
                this.integrateChart.render();
            }, 300);
        },
        refreshChart() {
            let chartCount = 0;
            this.interval = setInterval(() => {
                if (chartCount < this.chartData.length - 1) {
                    chartCount++;
                } else {
                    chartCount = 0;
                }
                this.integrateChart.refresh(this.chartData[chartCount]);
            }, 3000);
        },

        // 等价于JS里的eval函数，计算某个字符串，执行js代码，转成对象
        evil(fn){
            let Fn = Function
            return new Fn('return '+ fn)()
        }
    },
};
</script>
