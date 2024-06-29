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
            show: true,   // 图例是否显示
            icon: 'line', // 图例的小图标为横短线
        },
        discrete: true,
        data: [
            { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 37 },
            { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
            { 'Month': 'Mar', 'Domestic': 32, 'Abroad': 22 },
            { 'Month': 'Apr', 'Domestic': '', 'Abroad': undefined },
            { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
            { 'Month': 'Jun', 'Domestic': '', 'Abroad': '' },
            { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
            { 'Month': 'Aug', 'Domestic': 23, 'Abroad': 12 },
            { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 32 },
            { 'Month': 'Oct', 'Domestic': 41, 'Abroad': 33 },
            { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
            { 'Month': 'Dec', 'Domestic': 33, 'Abroad': 12 }
        ],
        xAxis: {
            data: 'Month',
        },
        yAxis: {
            name: 'Units'
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
