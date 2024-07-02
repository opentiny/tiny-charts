<template>
  <MarkdownPage mdName="IntraViewport"></MarkdownPage>
  <CodeExample class="CodeExampleItem">
    <LineCharts1></LineCharts1>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <LineCharts2></LineCharts2>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <LineCharts3></LineCharts3>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <LineCharts4></LineCharts4>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <LineCharts5></LineCharts5>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <AreaCharts1></AreaCharts1>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <AreaCharts2></AreaCharts2>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <AreaCharts3></AreaCharts3>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <AreaCharts4></AreaCharts4>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <AreaCharts5></AreaCharts5>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <BarCharts1></BarCharts1>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <BarCharts2></BarCharts2>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <BarCharts3></BarCharts3>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <BarCharts4></BarCharts4>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <BarCharts5></BarCharts5>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <PieCharts1></PieCharts1>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <PieCharts2></PieCharts2>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <PieCharts3></PieCharts3>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <PieCharts4></PieCharts4>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <PieCharts5></PieCharts5>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <RadarCharts1></RadarCharts1>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <RadarCharts2></RadarCharts2>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <RadarCharts3></RadarCharts3>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <RadarCharts4></RadarCharts4>
  </CodeExample>
  <CodeExample class="CodeExampleItem">
    <RadarCharts5></RadarCharts5>
  </CodeExample>
  
</template>
<script>
import MarkdownPage from '../example/components/markdown.vue';
import CodeExample from './components/code-example.vue';
import LineCharts1 from './components/Line-charts1.vue';
import LineCharts2 from './components/Line-charts2.vue';
import LineCharts3 from './components/Line-charts3.vue';
import LineCharts4 from './components/Line-charts4.vue';
import LineCharts5 from './components/Line-charts5.vue';
import AreaCharts1 from './components/Area-charts1.vue';
import AreaCharts2 from './components/Area-charts2.vue';
import AreaCharts3 from './components/Area-charts3.vue';
import AreaCharts4 from './components/Area-charts4.vue';
import AreaCharts5 from './components/Area-charts5.vue';
import BarCharts1 from './components/Bar-charts1.vue';
import BarCharts2 from './components/Bar-charts2.vue';
import BarCharts3 from './components/Bar-charts3.vue';
import BarCharts4 from './components/Bar-charts4.vue';
import BarCharts5 from './components/Bar-charts5.vue';
import PieCharts1 from './components/Pie-charts1.vue';
import PieCharts2 from './components/Pie-charts2.vue';
import PieCharts3 from './components/Pie-charts3.vue';
import PieCharts4 from './components/Pie-charts4.vue';
import PieCharts5 from './components/Pie-charts5.vue';
import RadarCharts1 from './components/Radar-charts1.vue';
import RadarCharts2 from './components/Radar-charts2.vue';
import RadarCharts3 from './components/Radar-charts3.vue';
import RadarCharts4 from './components/Radar-charts4.vue';
import RadarCharts5 from './components/Radar-charts5.vue';
export default {
  name: 'Inside-Viewport',
  components: {
    MarkdownPage,
    CodeExample,
    LineCharts1,
    LineCharts2,
    LineCharts3,
    LineCharts4,
    LineCharts5,
    AreaCharts1,
    AreaCharts2,
    AreaCharts3,
    AreaCharts4,
    AreaCharts5,
    BarCharts1,
    BarCharts2,
    BarCharts3,
    BarCharts4,
    BarCharts5,
    PieCharts1,
    PieCharts2,
    PieCharts3,
    PieCharts4,
    PieCharts5,
    RadarCharts1,
    RadarCharts2,
    RadarCharts3,
    RadarCharts4,
    RadarCharts5
  },
  data(){
    return {
      chartCode:[],
      chartData:[]
    }
  },
  mounted(){
    this.chartData.forEach((item,index)=>{
      this.axios.get(`quick_start/${item}.md`).then(res => {
        this.chartCode[index] = res.data
      })
    })
  }
}
</script>
<style lang="less" scoped>
.CodeExampleItem{
  width: 20%;
  display: inline-block;
  vertical-align: top;
  margin-right: 0;
  padding: 0 12px;
  &.code-container{
    margin-top: 0;
    .code-header{
      font-size: 16px;
    }
    .code-content{
      border: 1px solid var(--ti-base-color-common-1);
    }
  }
}
</style>