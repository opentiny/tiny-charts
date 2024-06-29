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
        data: [
            { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 1 },
            { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
            { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
            { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
            { 'Month': 'May', 'Domestic': 37, 'Abroad': 1 },
            { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
            { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
            { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
            { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
            { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 33 },
            { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
            { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 1 }
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
      this.integrateChart.setSimpleOption('BarChart', option, {});
      this.integrateChart.render();
    }
  }
}
</script>
