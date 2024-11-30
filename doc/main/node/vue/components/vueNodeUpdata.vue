<template>
  <div class="chart-container">
    <TinyButton @click="updata">更新研发部人数</TinyButton>
    <div class='chart drag-manager-wrap' ref="chartRef">
    </div>
  </div>
</template>

<script>
import { Button } from '@opentiny/vue'
import MindmapChart from '../../../../../src/framework/charts/MindmapChart';
import Demo from './node.vue';

export default {
  name: 'vueNodeUpdata',
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
    updata() {
        const peopleNum = Math.floor(Math.random() * 101);
        this.integrateChart.nodeManager.updata('researchDept', {'peopleNum':peopleNum});
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