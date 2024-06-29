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
        },
        markLine: {  // markLine.top 表示顶阈值线， markLine.bottom 表示底部阈值线
            top: 38,
            symbol: ['image://public/image/charts/markLine/markLineIcon.png'],
            symbolSize: [16, 16],
            symbolRotate: 180,
            symbolOffset: [-10, 0]
        },
        data: [
            { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 2 },
            { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
            { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
            { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
            { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
            { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
            { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 2 },
            { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
            { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
            { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 33 },
            { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
            { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 2 }
        ],
        xAxis: {
            data: 'Month',
        },
        yAxis: {
            name: 'Percent(%)'
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
