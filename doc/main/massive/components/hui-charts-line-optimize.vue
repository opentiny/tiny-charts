<template>
  <div className="chart-container" :style="{height: '350px', width: '100%'}">
    <div
        class='chart'
        ref="chartContainer"
        style="height: 350px"
        :style="{height: '350px', width: '100%'}"
      >
    </div>
  </div>
</template>

<script>
import IntegrateChart from '../../../../src/index';

export default {
  name: 'LineChart',
  props: {
    data: {
      type: Object
    }
  },
  data(){
    return {
      value: 0,
      chartWidth: '1400px',
      option: {
        theme: 'light',
        padding: [35, 30, 20, 20],
        legend: {
              show: true,
              icon: 'line',
              position: {
                  top: 15,
                  right: 28,
              },
        },
        massive: true,
        data: [],
        xAxis: {
            date: 'date'
        }
      }
    }
  },
  watch: {
    data(newValue) {
      if (newValue && newValue.data) {
        this.option.data = newValue.data;
        this.integrateChart.setSimpleOption('LineChart', this.option, {});
        this.integrateChart.render();
        // 关闭loading
        this.integrateChart.closeLoading();
      }
    }
  },
  created() { 
    // 柱状图的响应式配置
    this.integrateChart = new IntegrateChart();
  },
  mounted(){ 
    this.renderChart();
    this.integrateChart.showLoading();
  },
  methods: {
    renderChart(){
      this.integrateChart.init(this.$refs.chartContainer);
      if (this.data && this.data.data) {
        this.option.data = this.data.data;
        this.integrateChart.setSimpleOption('LineChart', this.option, {});
        this.integrateChart.render()
        // 关闭loading
        this.integrateChart.closeLoading();
      }
      
    }
  },
  
}
</script>
