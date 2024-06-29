<template>
  <div className="chart-container" :style="{height: '400px', width: '100%'}">
    <div
        class='chart'
        ref="chartContainer"
        style="height: 400px"
        :style="{height: '400px', width: '100%'}"
      >
    </div>
  </div>
</template>
<script>
import IntegrateChart from '../../../../src/index';

export default {
  name: 'BarChart',
  data(){
    return {
      value: 0,
      chartWidth: '1400px',
    }
  },
  created(){
    this.integrateChart = new IntegrateChart();
  },
  mounted() {
    const option = {
        theme: 'light',
        color: [
            '#fa2a2d',
            '#ff7500',
            '#ffbf00',
            '#41ba41',
            '#00aaee'
        ], // 自定义颜色组，线条会循环使用该颜色组
        padding: [50, 30, 50, 20],
        smooth: true,
        area: true,
        legend: {
            show: true,
        },
        data: [
            { 'Month': 'Jan', 'Train': 84, 'Bus': 54, 'Aircraft': 20 },
            { 'Month': 'Feb', 'Train': 54, 'Bus': 39, 'Aircraft': 15 },
            { 'Month': 'Mar', 'Train': 63, 'Bus': 20, 'Aircraft': 24 },
            { 'Month': 'Apr', 'Train': 30, 'Bus': 44, 'Aircraft': 75 },
            { 'Month': 'May', 'Train': 34, 'Bus': 33, 'Aircraft': 42 },
            { 'Month': 'Jun', 'Train': 70, 'Bus': 37, 'Aircraft': 32 },
            { 'Month': 'Jul', 'Train': 42, 'Bus': 54, 'Aircraft': 76 },
            { 'Month': 'Aug', 'Train': 54, 'Bus': 12, 'Aircraft': 60 },
            { 'Month': 'Sep', 'Train': 34, 'Bus': 38, 'Aircraft': 65 },
            { 'Month': 'Oct', 'Train': 40, 'Bus': 34, 'Aircraft': 88 },
            { 'Month': 'Nov', 'Train': 60, 'Bus': 22, 'Aircraft': 64 },
            { 'Month': 'Dec', 'Train': 64, 'Bus': 42, 'Aircraft': 56 }
        ],
        xAxis: {
            data: 'Month',
            fullGrid: true,
        },
        yAxis: {
            name: 'Percentage(%)'
        }
    };
    this.renderChart(option);
    
  },
  methods: {
    renderChart(option) {
      this.integrateChart.init(this.$refs.chartContainer);
      this.integrateChart.setSimpleOption('AreaChart', option, {});
      this.integrateChart.render();
    }
  }
}
</script>
