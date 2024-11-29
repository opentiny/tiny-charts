<template>
  <div class="chart-container">
    <div class='chart drag-manager-wrap' ref="chartRef">
    </div>
  </div>
</template>

<script>
import MindmapChart from '../../../../../src/framework/charts/MindmapChart';
import Demo from './node.vue';

export default {
  name: 'vueNode',
  props: {
    option: Object,
  },
  data() {
    return {
      currentTheme: localStorage.getItem('chartTheme') || 'hdesign-light',
    }
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      this.integrateChart = new MindmapChart();
      this.integrateChart.init(this.$refs.chartRef);
      let option = JSON.parse(JSON.stringify(this.option))
      option.component = Demo;
      this.integrateChart.setOption(option);
      this.integrateChart.canvas.onScale = (args)=>{}
      this.integrateChart.render();
    }
  }
}
</script>

<style scoped>
.drag-manager-wrap{
  width: 100% !important;
  height: 300px;
}

</style>