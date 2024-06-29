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
        // 自定义颜色组，圆盘图会循环使用该颜色组
        color: [
            '#fa2a2d',
            '#ff7500',
            '#ffbf00',
            '#41ba41',
            '#00aaee'
        ], 
        data:[                             
            {value: 100,name: 'VPC'},
            {value: 90, name: 'IM' },
            {value: 49, name: 'EIP'},
            {value: 14, name: 'SG' },
        ]
    };
    this.renderChart(option);
  },
  methods: {
    renderChart(option) {
      this.integrateChart.init(this.$refs.chartContainer);
      this.integrateChart.setSimpleOption('PieChart', option, {});
      this.integrateChart.render();
    }
  }
}
</script>
