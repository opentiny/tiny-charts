<template>
  <MarkdownPage mdName="Massive"></MarkdownPage>
  <CodeExample  title="未优化" class="CodeExampleItem">
    <EchartsLineDefault :data='data'></EchartsLineDefault>
  </CodeExample>
  <CodeExample title="ECharts 优化" class="CodeExampleItem" style="margin-top:30px">
    <EchartsLineOptimize :data='data'></EchartsLineOptimize>
  </CodeExample>
  <CodeExample  title="HuiCharts 优化" class="CodeExampleItem" style="margin-top:30px">
    <HuiChartLineOptimize :data='data'></HuiChartLineOptimize>
  </CodeExample>
</template>

<script>
import CodeExample from './components/code-example.vue';
import MarkdownPage from '../example/components/markdown.vue';
import EchartsLineDefault from './components/echarts-line-default.vue';
import EchartsLineOptimize from './components/echarts-line-optimize.vue';
import HuiChartLineOptimize from './components/hui-charts-line-optimize.vue';

export default {
  name: 'Massive',
  components: {
    MarkdownPage,
    CodeExample,
    EchartsLineOptimize,
    EchartsLineDefault,
    HuiChartLineOptimize
  },
  data(){
    return {
      chartCode:[],
      chartData: [],
      data: {}
    }
  },
  mounted(){
    this.chartData.forEach((item,index)=>{
      this.axios.get(`quick_start/${item}.md`).then(res => {
        this.chartCode[index] = res.data
      })
    })
    this.axios.get(`data/massiveLineData.json`).then(res => {
        this.data = res.data
    })
  }
}
</script>

<style lang="less">
.CodeExampleItem{
  width: 100%;
  margin-right: 1%;
  display: inline-block;
  vertical-align: top;
  &.code-container{
    margin-top: 0;
    .chart{
      margin-top: 0;
    }
    .code-header{
      font-size: 16px;
    }
    .code-content{
      padding: 0rem;
      border: 0px !important;
    }
  }
}
</style>