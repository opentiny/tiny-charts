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
        legend: {
            show: true,
            icon: 'line'
        },
        data: [
            { 'Month': 'Jan', 'Domestics': 33, 'Abroad': 37 },
            { 'Month': 'Feb', 'Domestics': 27, 'Abroad': 39 },
            { 'Month': 'Mar', 'Domestics': 31, 'Abroad': 20 },
            { 'Month': 'Apr', 'Domestics': 30, 'Abroad': 15 },
            { 'Month': 'May', 'Domestics': 37, 'Abroad': 13 },
            { 'Month': 'Jun', 'Domestics': 36, 'Abroad': 17 },
            { 'Month': 'Jul', 'Domestics': 42, 'Abroad': 22 },
            { 'Month': 'Aug', 'Domestics': 22, 'Abroad': 12 },
            { 'Month': 'Sep', 'Domestics': 17, 'Abroad': 30 },
            { 'Month': 'Oct', 'Domestics': 40, 'Abroad': 33 },
            { 'Month': 'Nov', 'Domestics': 42, 'Abroad': 22 },
            { 'Month': 'Dec', 'Domestics': 32, 'Abroad': 11 }
        ],
        xAxis: {
            data: 'Month',
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
      this.integrateChart.setSimpleOption('LineChart', option, {});
      this.integrateChart.render();
    }
  }
}
</script>
