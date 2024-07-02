<template>
  <div className="chart-container">
    <div class='chart' ref="chartContainer" style="height: 400px">
    </div>
  </div>
</template>

<script>
import IntegrateChart from '../../../../src/index';

// 柱状图的配置
const barChartOpt = {
  keyboardFocus: 'series',
  theme: 'cloud-light',
  padding: [50, 70, 30, 30],
  data: [
    { "Month": '一月份', "Domestic": 33, "Abroad": 37 },
    { "Month": '二月份', "Domestic": 27, "Abroad": 39 },
    { "Month": '三月份', "Domestic": 31, "Abroad": 20 },
    { "Month": '四月份', "Domestic": 30, "Abroad": 15 },
    { "Month": '五月份', "Domestic": 37, "Abroad": 13 },
    { "Month": '六月份', "Domestic": 36, "Abroad": 17 },
    { "Month": '七月份', "Domestic": 42, "Abroad": 22 },
    { "Month": '八月份', "Domestic": 22, "Abroad": 12 },
    { "Month": '九月份', "Domestic": 17, "Abroad": 30 },
    { "Month": '十月份', "Domestic": 40, "Abroad": 33 },
    { "Month": '十一月份', "Domestic": 42, "Abroad": 22 },
    { "Month": '十二月份', "Domestic": 32, "Abroad": 11 }
  ],
  xAxis: {
    key: 'Month',
    name: '月份'
  },
  yAxis: {
    name: '百分比(%)',
  },
  legend: {
    show: true,
    position: {
      top: 15,
      right: 25
    }
  }
};

export default {
  name: 'BarChart',
  components: {
  },
  data() {
    return {
      currentTheme: localStorage.getItem('chartTheme') || 'hdesign-light',
    }
  },
  created() {
    this.integrateChart = new IntegrateChart();
  },
  mounted() {
    this.renderChart();
    this.$bus.on('themeChange', (val) => {
      this.currentTheme = val;
      this.renderChart();
    })
  },
  methods: {
    renderChart() {
      this.integrateChart.init(this.$refs.chartContainer);
      barChartOpt.theme = this.currentTheme;
      this.integrateChart.setSimpleOption('BarChart', barChartOpt);
      this.integrateChart.render();
    }
  }
}
</script>