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

// 柱状图的配置
const pieChartOpt = {
  theme: 'hdesign-light',
  color: [
    "#2070F3",
    "#55CCD9",
    "#715AFB",
    "#8ABEF3",
    "#EB74DF",
  ],
  type: 'pie',
  position: {
    center: ["40%", "50%"]
  },
  data: [
    { name: "资产创建", value: 150 },
    { name: "资产调整", value: 120 },
    { name: "资产转移", value: 200 },
    { name: "资产处置", value: 200 },
    { name: "计划外折旧", value: 200 },
  ],
  legend: {
    show: true,
    left: "80%",
    bottom: 15,
    align: "left",
    itemGap: 32,
    orient: "vertical",
    top: "30%",
  },
  itemStyle: {
    borderWidth: 4,
    borderColor: "#FFFFFF",
    borderRadius: 10
  },
  labelLine: {
    show: true,
    lineStyle: { color: "red" },
    smooth: 0.3,
    length: 10,
    length2: 10,
  },
};


export default {
  name: 'BarChart',
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
      pieChartOpt.theme = this.currentTheme;
      let options = JSON.parse(JSON.stringify(pieChartOpt));
      this.integrateChart.setSimpleOption('PieChart', options, {});
      this.integrateChart.linter('check', this.checkType);
      this.integrateChart.render();
    },
    renderLinterChart() {
      this.integrateChart.init(this.$refs.linterContainer);
      pieChartOpt.theme = this.currentTheme;
      let optionss = JSON.parse(JSON.stringify(pieChartOpt));
      this.integrateChart.setSimpleOption('PieChart', optionss, {});
      this.integrateChart.linter('fix', this.fixType);
      this.integrateChart.render();
    }
  }
}
</script>