<template>
  <div className="chart-container">
    <div
        class='chart'
        ref="chartContainer"
        style="height: 400px;"
      >
    </div>
  </div>
</template>

<script>
import IntegrateChart from '../../../../src/index';

// 圆盘图的配置
let pieChartOpt = {
  keyboardFocus: 'single',
  theme: 'cloud-light',
  type: 'circle', 
  data: [
    { value: 100, name: 'VPC' },
    { value: 90, name: 'IM' },
    { value: 49, name: 'EIP' },
    { value: 14, name: 'SG' },
  ]
};


export default {
  name: 'PieChart',
  components: {
  },
  data(){
    return {
      currentTheme: localStorage.getItem('chartTheme') || 'hdesign-light',
    }
  },
  created(){
    this.integrateChart = new IntegrateChart();
  },
  mounted(){
    this.renderChart();
    this.$bus.on('themeChange', (val) => {
      this.currentTheme = val;
      this.renderChart();
    })
  },
  methods: {
    renderChart(){
      this.integrateChart.init(this.$refs.chartContainer);
      pieChartOpt.theme = this.currentTheme;
      this.integrateChart.setSimpleOption('PieChart', pieChartOpt);
      this.integrateChart.render();
    }
  }
}
</script>