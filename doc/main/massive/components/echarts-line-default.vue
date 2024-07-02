<template>
  <div className="chart-container" :style="{height: '350px', width: '100%'}">
    <div
        class='chart'
        ref="lineChart"
        style="height: 350px"
        :style="{height: '350px', width: '100%'}"
      >
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: 'BarChart',
  props: {
    data: {
      type: Object
    }
  },
  data(){
    return {
      value: 0,
      chartWidth: '1400px',
      options:{
        grid: {
            left:60,
            top: 35,
            right: 20,
            bottom: 40
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            data: {}
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: {},
            type: 'line'
          }]
        }
    }
  },
  
  watch: {
    data(newValue) {
      if (newValue.date) {
        this.options.xAxis.data = newValue.date;
        this.options.series[0].data = newValue.datas;
        this.myChart.setOption(this.options);
        this.myChart.hideLoading();
      }
    }
  },
  mounted() {
    this.chartDom = this.$refs.lineChart;
    this.myChart = echarts.init(this.chartDom);
    this.myChart.showLoading();
    if (this.data.date) {
      this.options.xAxis.data = this.data.date;
      this.options.series[0].data = this.data.datas;
      this.myChart.setOption(this.options);
      this.myChart.hideLoading();
    }
  }
}
</script>