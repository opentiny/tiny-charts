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
        position:{
            center:['35%','50%'],
            radius:'60%',
        },
        legend: {
            show: true,
            position:{
                left:'60%',
                top: 'center'
            },
            orient:'horizontal'
        },
        markLine: 81,
        data:{
            'Domestic':{
                'Equipment': 45,
                'VM': 90,
                'CSP': 80,
                'RD': 53,
                'Markets': 75
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
