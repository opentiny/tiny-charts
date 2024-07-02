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
      option: {
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
          data: this.data.date
        },
        yAxis: {
          type: 'value'
        },
        large:true,
        series: [{
          data: this.data.datas,
          type: 'line',
          sampling: 'lttb'
        }]
      }
    }
  },
  watch: {
    data(newValue) {
      if (newValue.date) {
        this.option.xAxis.data = newValue.date;
        this.option.series[0].data = newValue.datas;
        this.myChart.setOption(this.option);
        this.myChart.hideLoading();
      }
    }
  },
  mounted() {
    this.chartDom = this.$refs.lineChart;
    this.myChart = echarts.init(this.chartDom);
    this.myChart.showLoading();
    if (this.data.date) {
      this.option.xAxis.data = this.data.date;
      this.option.series[0].data = this.data.datas;
      this.myChart.setOption(this.option);
      this.myChart.hideLoading();
    }
  }
  
}
</script>