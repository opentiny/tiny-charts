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
                bottom: 20.3
            },
            orient:'horizontal'
        },
        markLine: 81,
        data:{
            'Domestic':{
                'Equipment': 44,
                'VM': 90,
                'CSP': 80,
                'RD': 53,
                'Markets': 74
            },
            'Abroad':{
                'Equipment': 74,
                'VM': 55,
                'CSP': 93,
                'RD': 90,
                'Markets': 84
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
