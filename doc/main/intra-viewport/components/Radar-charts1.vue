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
        legend: {
            show: true,
            position:{
                left: 'center',
                bottom: 20.1
            },
            orient:'horizontal'
        },
        // radarMax 用来设置雷达图最外圈代表的数值
        // 当不设置 radarMax 时，雷达图坐标系的最外圈为数据中的最大值
        radarMax: 100,
        data:{
            'Domestic':{
                'Equipment': 41,
                'VM': 91,
                'CSP': 81,
                'RD': 51,
                'Markets': 71
            }
        }
    };
    this.renderChart(option);
  },
  methods: {
    renderChart(option) {
      this.integrateChart.init(this.$refs.chartContainer);
      this.integrateChart.setSimpleOption('RadarChart', option, {});
      this.integrateChart.render();
    }
  }
}
</script>
