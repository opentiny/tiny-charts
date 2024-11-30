<template>
  <div class="chart-container">
    <div class='chart drag-manager-wrap' ref="chartRef">
    </div>
  </div>
</template>

<script>
import MindmapChart from '../../../../src/framework/charts/MindmapChart';
import Demo from './node.vue';

export default {
  name: 'vueNode',
  props: {
    option: Object,
    layoutoption: Object
  },
  data() {
    return {
      newoption:{},
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
      this.newoption = JSON.parse(JSON.stringify(this.option))
      this.newoption.component = Demo;
      this.integrateChart.setOption(this.newoption);
      this.integrateChart.canvas.onScale = (args)=>{}
      this.integrateChart.render();
    }
  },
  watch: {
    layoutoption: {
      deep:true,
      handler: function(newValue, oldValue){
        this.$refs.chartRef.innerHTML = '';
        this.newoption.layout.direction = newValue.direction;
        this.newoption.layout.vGap = newValue.vGap;
        this.newoption.layout.hGap = newValue.hGap;
        this.newoption.layout.oneSide = [];
        this.newoption.layout.oneSide.push(newValue.oneSideString);

        this.integrateChart.init(this.$refs.chartRef);
        this.integrateChart.setOption(this.newoption);
        this.integrateChart.canvas.onScale = (args)=>{}
        this.integrateChart.render();
      }
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