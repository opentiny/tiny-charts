<template>
  <div class="chart-container" ref="container">
    <div class="card-con" ref="airportCardConRef">
      <div class="card-title">检查：</div>
      <tab @updatatype="updatatype" :value="checkvalue" type="check" :option="checkOption"></tab>
      <div class='charts' ref="chartContainer"> </div>
    </div>
    <div class="card-con" ref="productCardConRef">
      <div class="card-title">修复后：</div>
      <div class='charts' ref="linterContainer">
      </div>
    </div>
  </div>
</template>

<script>
import IntegrateChart from '../../../../src/index';
import tab from './tab.vue'

let lineChartOpt = {
  theme: 'hdesign-light',
  color: ["#e87ae1", "#55CCD9"],
  padding: [40, 50, 50, 50],
  smooth: true,
  legend: {
    show: true,
    itemGap: 32,
    icon: "circle",
    itemWidth: 24,
    itemHeight: 12,
  },
  data: [
    { 'Month': 'Jan', '去年': 20, '今年': 37 },
    { 'Month': 'Feb', '去年': 27, '今年': 39 },
    { 'Month': 'Mar', '去年': 31, '今年': 20 },
    { 'Month': 'Apr', '去年': 30, '今年': 15 },
    { 'Month': 'May', '去年': 37, '今年': 13 },
    { 'Month': 'Jun', '去年': 36, '今年': 17 },
    { 'Month': 'Jul', '去年': 42, '今年': 22 },
    { 'Month': 'Aug', '去年': 22, '今年': 12 },
    { 'Month': 'Sep', '去年': 17, '今年': 30 },
    { 'Month': 'Oct', '去年': 40, '今年': 33 },
    { 'Month': 'Nov', '去年': 42, '今年': 22 },
    { 'Month': 'Dec', '去年': 32, '今年': 11 }
  ],
  xAxis: {
    data: 'Month',
    axisLine: { lineStyle: { width: 2, color: "#DFDFDF", type: "dashed" } },
    axisLabel: { color: "#2070f3", fontSize: 19 },
  },
  yAxis: {
    name: 'Percentage(%)',
    type: "value",
    splitLine: {
      show: true,
      lineStyle: { width: 2, type: "dashed", color: "#dfdfdf" },
    },
  },
  tooltip: {
    textStyle: { color: "red", fontSize: 14 },
  },
};

export default {
  name: 'LineChart',
  components: {
    tab
  },
  data() {
    return {
      checkvalue: 0,
      fixValue: 0,
      chartWidth: '100%',
      currentTheme: localStorage.getItem('chartTheme') || 'hdesign-light',
      checkType: 'dialog',
      fixType: '',
      checkOption: ['dialog', 'console']
    }
  },
  created() {
    this.integrateChart = new IntegrateChart();
  },
  mounted() {
    this.renderChart();
    this.renderLinterChart();
    this.$bus.on('themeChange', (val) => {
      this.currentTheme = val;
      this.renderChart();
      this.renderLinterChart();
    })
  },
  methods: {
    updatatype(val, type) {
      if (type === 'check') {
        this.$refs.chartContainer.style.opacity = 0;
        this.checkType = val;
        this.renderChart();
        setTimeout(() => {
          this.$refs.chartContainer.style.opacity = 1;
        }, 20)
      }
    },
    renderChart() {
      this.integrateChart.init(this.$refs.chartContainer);
      lineChartOpt.theme = this.currentTheme;
      let options = JSON.parse(JSON.stringify(lineChartOpt));
      this.integrateChart.setSimpleOption('LineChart', options, {});
      this.integrateChart.linter('check', this.checkType);
      this.integrateChart.render();
    },
    renderLinterChart() {
      this.integrateChart.init(this.$refs.linterContainer);
      lineChartOpt.theme = this.currentTheme;
      let optionss = JSON.parse(JSON.stringify(lineChartOpt));
      this.integrateChart.setSimpleOption('LineChart', optionss, {});
      this.integrateChart.linter('fix', this.fixType);
      this.integrateChart.render();
    }
  }
}
</script>