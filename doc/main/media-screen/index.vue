<template>
  <MarkdownPage mdName="MediaScreenTitle"></MarkdownPage>
	<div class="tabs">
		<tiny-tabs v-model="activeName"  tab-style="button-card" 
    :style="{
      '--ti-tabs-button-card-item-active-bg-color': tabsBtnACtiveBg,
      '--ti-tabs-button-card-item-active-text-color':tabsBtnACtiveColor,
      '--ti-tabs-button-card-nav-bg-color':tabsBtnBg,
      '--ti-tabs-button-card-item-text-color':tabsBtnColor,
      '--ti-tabs-button-card-item-active-border-color':tabsBtnACtiveColor,
      '--ti-tabs-button-card-item-hover-text-color':tabsBtnACtiveColor
      }">
			<tiny-tab-item title="DEMO" name="DEMO">
				<CodeExample :code="chartCode[0]" title="响应式案例一：柱状图"       class="firstCodeExample">
          <BarChart></BarChart>
        </CodeExample>
        <CodeExample :code="chartCode[1]" title="响应式案例二：圆盘图">
          <PieChart></PieChart>
        </CodeExample>
			</tiny-tab-item>
			<tiny-tab-item title="API" name="API">
        <h4 class="api-title">使用方式</h4>
				<MarkdownPage mdName="MediaScreenContent"></MarkdownPage>
			</tiny-tab-item>
		</tiny-tabs>
	</div>
     
</template>

<script>
import MarkdownPage from '../example/components/markdown.vue';
import CodeExample from './components/code-example.vue';
import BarChart from './components/bar-chart.vue';
import PieChart from './components/pie-chart.vue';
import { Tabs, TabItem } from '@opentiny/vue'

export default {
  name: 'MediaScreen',
  components: {
    MarkdownPage,
    CodeExample,
    BarChart,
    PieChart,
    TinyTabs: Tabs,
    TinyTabItem: TabItem
  },
  data(){
    return {
      chartCode: [],
      activeName: 'DEMO',
      chartData: ['MediaScreenBar', 'MediaScreenPie'],
      theme: localStorage.getItem('chartTheme') || 'hdesign-light',
      tabsBtnACtiveBg: '#fff',
      tabsBtnACtiveColor: '#000',
      tabsBtnColor: '#595959',
      tabsBtnBg: '#f0f0f0'
    }
  },
  mounted(){
    this.chartData.forEach((item,index)=>{
      this.axios.get(`quick_start/${item}.md`).then(res => {
        this.chartCode[index] = res.data
      })
    })
    this.setTheme(this.theme?.indexOf('light') > -1);
    this.$bus.on('themeChange', (val) => {
      this.setTheme(val.indexOf('light') > -1)
    })
  },
  methods:  {
    setTheme(val) {
      this.tabsBtnACtiveBg = val ? '#ffffff':'#1c1c1c';
      this.tabsBtnACtiveColor = val ? '#000':'#f1f0f0';
      this.tabsBtnBg = val ? '#f2f2f2' : '#414141';
      this.tabsBtnColor = val ? '#777777' : '#c9c3c5';
    }
  },
  watch: {
    theme: function(newVal) {
      this.setTheme(newVal.indexOf('light') > -1)
    }
  },
}
</script>

<style lang="less" scoped>
:deep(.tiny-tabs__header) {
	margin: 20px 0;
}
:deep(.tiny-tabs__item__title) {
  font-size: 14px;
}
:deep(.tiny-tabs__content) {
	margin: 0;
}
.code-container:first-child {
	margin-top: 0;
}
:deep(.tiny-tabs__item-separator-space) {
	padding: 0 !important;
}
.api-title{
  font-size: 20px;
  margin-bottom: 1rem;
  color: var(--ti-base-color-common-7);
}
:deep(.tiny-tabs__nav){
  padding: 2px;
}
:deep(.tiny-tabs){
  .tiny-tabs--button-card {
    .tiny-tabs__item{
      border: none;
    }
  }
}
</style>