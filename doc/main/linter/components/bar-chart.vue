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
const barChartOpt = {
  theme: 'cloud-light',
  color: [
    "#2070F3",
    "#55CCD9",
  ],
  padding: [40, 50, 50, 50],
  data: [
    { "Month": '8月', "去年": 2000, "今年": 2500 },
    { "Month": '9月', "去年": 3000, "今年": 3500 },
    { "Month": '10月', "去年": 4000, "今年": 4500 },
    { "Month": '11月', "去年": 5000, "今年": 5500 },
    { "Month": '12月', "去年": 2500, "今年": 3000 },
    { "Month": '1月', "去年": 1000, "今年": 1500 },
  ],
  xAxis: {
    key: 'Month',
    name: '月份',
    axisLabel: {
      color: '#777777',
      fontSize: 18
    },
  },
  yAxis: {
    name: '百分比(%)',
    axisLabel: {
      color: "#777777",
      fontSize: 18,
    },
  },
  legend: {
    show: true,
    position: {
      left: "center",
      bottom: 15
    },
    textStyle: {
      fontSize: 16,
      padding: [4, 0, 0, 0],
      color: '#777777',
      overflow: 'none',
    },
    itemGap: 150,
    itemWidth: 24,
    itemHeight: 12,
  },
  tooltip: {
    textStyle: { color: "#666", fontSize: 12 },
    borderWidth: 0,
    padding: 16,
    backgroundColor: "#fff",
  },
  itemStyle: {
    barWidth: '25',
    barGap: "60%",
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
      let options = JSON.parse(JSON.stringify(barChartOpt));
      this.integrateChart.setSimpleOption('BarChart', options, {});
      this.integrateChart.linter('check', this.checkType);
      this.integrateChart.render();
    },
    renderLinterChart() {
      this.integrateChart.init(this.$refs.linterContainer);
      barChartOpt.theme = this.currentTheme;
      let optionss = JSON.parse(JSON.stringify(barChartOpt));
      this.integrateChart.setSimpleOption('BarChart', optionss, {});
      this.integrateChart.linter('fix', this.fixType);
      this.integrateChart.render();
    }
  }
}
</script>
  
<style>
.card-con {
  width: 50%;
  display: inline-block;
  vertical-align: bottom;
  position: relative;

  .card-title {
    margin-left: 10px;
    font-size: 16px;
    color: var(--ti-base-color-common-7);
  }
}

.card-con:first-child {
  border-right: 1px solid #ccc;
}

.charts {
  height: 400px
}

.tiny-form {
  margin-left: 20px;
}
</style>
  