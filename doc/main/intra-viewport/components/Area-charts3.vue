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
        step: true,
        area: true,
        data: [
            { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 37 },
            { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
            { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
            { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
            { 'Month': 'May', 'Domestic': 33, 'Abroad': 14 },
            { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
            { 'Month': 'Jul', 'Domestic': 43, 'Abroad': 21 },
            { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
            { 'Month': 'Sep', 'Domestic': 13, 'Abroad': 30 },
            { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 33 },
            { 'Month': 'Nov', 'Domestic': 43, 'Abroad': 22 },
            { 'Month': 'Dec', 'Domestic': 33, 'Abroad': 12 }
        ],
        xAxis: {
            data: 'Month',
            fullGrid: true,
        },
        yAxis: {
            name: 'Unit'
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
