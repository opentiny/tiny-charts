<template>
    <div class="chart-container" ref="chartRef"></div>
</template>

<script>
import 'echarts-wordcloud';
import '../../../src/index.less';
import IntegrateChart from '../../../src/index';
import WaveChart from '../../../src/components/WaveChart';
import FlowChart from '../../../src/components/FlowChart';
import * as d3 from 'd3';

export default {
    props: {
        chartName: {
            type: String,
            default: '',
        }
    },
    data() {
        return {
            interval: null,
            chartData: [],
            chartNameArr: [],
            currentTheme: localStorage.getItem('chartTheme') || 'hdesign-light',
            intersectionObserver: {},
            option: {}
        };
    },
    created() {
        this.integrateChart = new IntegrateChart();
    },
    mounted() {
        this.$bus.on('themeChange', (val) => {
            this.currentTheme = val
            clearInterval(this.interval)
            this.initChart();
        })
        this.initChart();
    },


    beforeUnmount() {
        clearInterval(this.interval);
        this.intersectionObserver.disconnect();
        this.integrateChart.uninstall();
        this.$bus.off('themeChange')
    },
    methods: {
        initChart(){
            this.intersectionObserver = new IntersectionObserver(entries => {
                entries.forEach(item =>{
                    if(item.isIntersecting){
                        if(this.chartNameArr.indexOf(this.chartName) === -1 ) {
                            this.chartUpdate(this.chartName);
                        }
                        this.refreshChart();
                    }  else {
                        clearInterval(this.interval);
                    }
                })
            })
            this.intersectionObserver.observe(this.$refs.chartRef);
        },
        chartUpdate(name){
            this.axios.get(`overview/${name}.js`).then(res => {
                this.chartData = this.evil(res.data);
                if(this.chartData === undefined || typeof this.chartData === 'function') {
                    this.option = this.transformCode(res.data);
                    this.option.theme = this.currentTheme
                    this.renderChart(this.option);
                } else {
                    this.renderChart();
                }
            })
        },
        renderChart(option){
            this.integrateChart.init(this.$refs.chartRef);
            if(this.chartName === 'WaveChart') {
                this.$refs.chartRef.innerHTML = '';
                this.integrateChart.init(this.$refs.chartRef);
                this.chartData[0].theme = this.currentTheme
                this.integrateChart.setSimpleOption(WaveChart, this.chartData[0], {});
                this.integrateChart.render();
            } else if(this.chartName === 'FlowChart') {
                this.$refs.chartRef.innerHTML = '';
                this.integrateChart.init(this.$refs.chartRef);
                this.chartData[0].theme = this.currentTheme
                this.integrateChart.setSimpleOption(FlowChart, this.chartData[0], {});
                this.integrateChart.render();
            } else {
                if(option === undefined) {
                    this.chartData[0].theme = this.currentTheme
                    this.integrateChart.setSimpleOption(this.chartName, this.chartData[0], { d3 });
                } else {
                    this.integrateChart.setSimpleOption(this.chartName, option, { d3 });
                }
                // 延迟图表渲染，使页面打开时图表有动画
                setTimeout(() => {
                    this.integrateChart.render();
                }, 20);
            }
        },

        refreshChart(){
            let chartCount = 0;
            this.interval = setInterval(() => {
               if(!this.chartData || this.chartData.length <=1) {
                   clearInterval(this.interval);
                   return;
               }
               if(chartCount < this.chartData.length - 1) {
                    chartCount++;
                } else {
                    chartCount = 0;
                }
                this.chartData[chartCount].theme = this.currentTheme
                this.integrateChart.refresh(this.chartData[chartCount]); 
            }, 3000)
        },

        // 等价于JS里的eval函数，计算某个字符串，执行js代码，转成对象
        evil(fn){
            let Fn = Function
            return new Fn('return '+ fn)()
        },
        transformCode(codeString) {
            const codeObj = {
                code: 0
            };
            window.resolve = option => {
                this.renderChart(option);
            };
            window.codeObj = codeObj
            const script = document.createElement('script');
            script.textContent = ` (function () {
                'use strict';
                ${codeString}
                 window.codeObj.code = option || {}
            })();`
            document.body.appendChild(script);
            document.body.removeChild(script);
            return window.codeObj.code;
        }
    }
};
</script>
