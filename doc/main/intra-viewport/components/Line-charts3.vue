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
        padding: [50, 30, 50, 20],
        step: true, // true属性配置阶梯线
        legend: {
            show: true,
            icon: 'line',
        },
        data: [
            { 'Month': 'Jan', 'Train': 83, 'Bus': 56, 'Aircraft': 21 },
            { 'Month': 'Feb', 'Train': 55, 'Bus': 39, 'Aircraft': 15 },
            { 'Month': 'Mar', 'Train': 63, 'Bus': 21, 'Aircraft': 21 },
            { 'Month': 'Apr', 'Train': 32, 'Bus': 46, 'Aircraft': 75 },
            { 'Month': 'May', 'Train': 37, 'Bus': 33, 'Aircraft': 42 },
            { 'Month': 'Jun', 'Train': 71, 'Bus': 37, 'Aircraft': 32 },
            { 'Month': 'Jul', 'Train': 42, 'Bus': 52, 'Aircraft': 76 },
            { 'Month': 'Aug', 'Train': 51, 'Bus': 12, 'Aircraft': 61 },
            { 'Month': 'Sep', 'Train': 34, 'Bus': 38, 'Aircraft': 65 },
            { 'Month': 'Oct', 'Train': 41, 'Bus': 33, 'Aircraft': 88 },
            { 'Month': 'Nov', 'Train': 60, 'Bus': 22, 'Aircraft': 65 },
            { 'Month': 'Dec', 'Train': 62, 'Bus': 41, 'Aircraft': 56 }
        ],
        xAxis: {
            data: 'Month'
        },
        yAxis: {
            name: 'Units(Number)'
        }
    };
    this.renderChart(option);
  },
  methods: {
    renderChart(option) {
      this.integrateChart.init(this.$refs.chartContainer);
      this.integrateChart.setSimpleOption('LineChart', option, {});
      this.integrateChart.render();
    }
  }
}
</script>
