<template>
	<MarkdownPage mdName="CardTitle"></MarkdownPage>
	<div class="tabs">
		<tiny-tabs v-model="activeName" tab-style="button-card"
    :style="{
      '--ti-tabs-button-card-item-active-bg-color': tabsBtnACtiveBg,
      '--ti-tabs-button-card-item-active-text-color':tabsBtnACtiveColor,
      '--ti-tabs-button-card-nav-bg-color':tabsBtnBg,
      '--ti-tabs-button-card-item-text-color':tabsBtnColor,
      '--ti-tabs-button-card-item-active-border-color':tabsBtnACtiveColor,
      '--ti-tabs-button-card-item-hover-text-color':tabsBtnACtiveColor
      }">
				<tiny-tab-item title="DEMO" name="DEMO">
						<CodeExample :code="chartCode[0]" title="图表卡片案例" class="firstCodeExample">
								<BarChart></BarChart>
						</CodeExample>
						
				</tiny-tab-item>
				<tiny-tab-item title="API" name="API">
						<MarkdownPage mdName="CardContent"></MarkdownPage>
				</tiny-tab-item>
		</tiny-tabs>
  </div>
</template>

<script>
import MarkdownPage from '../example/components/markdown.vue';
import CodeExample from './components/code-example.vue';
import BarChart from './components/bar-chart.vue';
import { Tabs,TabItem } from '@opentiny/vue'
import '../../../src/feature/card/index.less';

export default {
  name: 'Card',
  components: {
    MarkdownPage,
    CodeExample,
    BarChart,
    TinyTabs: Tabs,
		TinyTabItem: TabItem
  },
  data(){
    return {
      chartCode:[],
      chartData:['CardChart'],
      activeName: 'DEMO',
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
        this.chartCode[index] = res.data.replaceAll("{{VITE_BASECOPYRIGHTSPAT}}",import.meta.env.VITE_BASECOPYRIGHTSPAT);
      })
    })
    this.setTheme(this.theme?.indexOf('light') > -1);
    this.$bus.on('themeChange', (val) => {
      this.setTheme(val.indexOf('light') > -1)
    })
  },
  watch: {
    theme: function(newVal) {
      this.setTheme(newVal.indexOf('light') > -1)
    }
  },
  methods:  {
    setTheme(val) {
      this.tabsBtnACtiveBg = val ? '#ffffff':'#1c1c1c';
      this.tabsBtnACtiveColor = val ? '#000':'#f1f0f0';
      this.tabsBtnBg = val ? '#f2f2f2' : '#414141';
      this.tabsBtnColor = val ? '#777777' : '#c9c3c5';
    }
  }
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
:deep(.tiny-tabs__item-separator-space) {
	padding: 0 !important;
}
.code-container:first-child {
	margin-top: 0;
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