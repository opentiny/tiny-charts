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
        padding: [50, 70, 50, 20],
        smooth: true, // smooth属性配置曲线
        legend: {
            show: true,
            type: 'scroll',
            icon: 'line',
            width: 500
        },
        data: [
            { 'Month': 'Jan', 'Train': 84, 'Bus': 56, 'Aircraft': 21, 
            'Train1': 83, 'Bus1': 56, 'Aircraft1': 20,
            'Train2': 83, 'Bus2': 56, 'Aircraft2': 20,
            'Train3': 83, 'Bus3': 56, 'Aircraft3': 20,
            'Train4': 83, 'Bus4': 56, 'Aircraft4': 21,
            'Train5': 83, 'Bus5': 56, 'Aircraft5': 20,
            'Train6': 83, 'Bus6': 56, 'Aircraft6': 20,
        },
            { 'Month': 'Feb', 'Train': 55, 'Bus': 39, 'Aircraft': 15 },
            { 'Month': 'Mar', 'Train': 63, 'Bus': 20, 'Aircraft': 22 },
            { 'Month': 'Apr', 'Train': 30, 'Bus': 46, 'Aircraft': 75 },
            { 'Month': 'May', 'Train': 37, 'Bus': 33, 'Aircraft': 42 },
            { 'Month': 'Jun', 'Train': 71, 'Bus': 37, 'Aircraft': 32 },
            { 'Month': 'Jul', 'Train': 43, 'Bus': 52, 'Aircraft': 76 },
            { 'Month': 'Aug', 'Train': 52, 'Bus': 12, 'Aircraft': 61 },
            { 'Month': 'Sep', 'Train': 34, 'Bus': 38, 'Aircraft': 65 },
            { 'Month': 'Oct', 'Train': 41, 'Bus': 33, 'Aircraft': 88 },
            { 'Month': 'Nov', 'Train': 62, 'Bus': 22, 'Aircraft': 65 },
            { 'Month': 'Dec', 'Train': 61, 'Bus': 42, 'Aircraft': 58 }
        ],
        xAxis: {
            data: 'Month',
            name: 'Time'
        },
        yAxis: {
            name: 'Percentage(%)',
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
