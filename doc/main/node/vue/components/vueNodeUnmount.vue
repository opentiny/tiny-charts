<template>
  <div class="chart-container">
    <TinyButton @click="unmount">卸载设计部</TinyButton>
    <div class='chart drag-manager-wrap' ref="chartRef">
    </div>
  </div>
</template>

<script>
import { Button } from '@opentiny/vue'
import MindmapChart from '../../../../../src/framework/charts/MindmapChart';
import Demo from './node.vue';

export default {
  name: 'vueNodeUnmount',
  components: {
    TinyButton: Button
  },
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
  computed: {
    dynamicBackgroundColor() {
      if (this.data.id.includes('1')) {
        return '#2070F3';
      } else if (this.data.id.includes('2')) {
        return '#F4840C';
      } else if (this.data.id.includes('3')) {
        return '#09AA71';
      }
      return '#E02128'; // 默认背景颜色
    }
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
    },
    unmount() {
      this.integrateChart.nodeManager.unmount('designDept');
    }
  }
}
</script>
<style scoped>
button{
  border-radius: 14px;
  margin: 10px 0 0 12px;
  border-color: rgb(89, 89, 89);
  color: rgb(25, 25, 25);
}
.drag-manager-wrap{
  width: 100% !important;
  height: 300px;
}
</style>