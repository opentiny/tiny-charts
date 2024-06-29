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
        padding: [30, 80, 50, 20],
        legend: {
            show: true,
        },
        markLine: { // markLine.top 表示顶阈值线， markLine.bottom 表示底部阈值线
            top: 32,
        },
        data: [
            { 'Name': 'Elastic', 'Domestic': 31, 'Abroad': 20 },
            { 'Name': 'Bare Metal Server', 'Domestic': 30, 'Abroad': 4 },
            { 'Name': 'Object Store', 'Domestic': 27, 'Abroad': 39 },
            { 'Name': 'Cloud Hard Drive', 'Domestic': 4, 'Abroad': 37 },
        ],
        direction: 'horizontal', // 横向柱状图
        xAxis: {
            data: 'Name',
        },
        // 在横向柱状图中，Y轴的名称在右下角
        yAxis: {
            name: 'Units'
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
