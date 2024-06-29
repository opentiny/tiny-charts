<template>
  <MarkdownPage mdName="KeyboardFocusTitle"></MarkdownPage>
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
          <h4 class="code-header">图表示例</h4>
          <p class="code-desc">键盘的<span>Tab键</span>选中图表；</p>
          <p class="code-desc">键盘的<span>空格键</span>、<span>左方向键</span>、<span>右方向键</span>选取当前聚焦图表内的数据；</p>
          <div class="demo-keyboardfocus" ref="divRef">
            <CodeExample :code="chartCode[0]" title="">
              <h3 class="code-subtitle">单数据选中</h3>
              <PieChart></PieChart>
            </CodeExample>
            <CodeExample :code="chartCode[1]" title="">
              <h3 class="code-subtitle">系列选中</h3>
              <BarChart></BarChart>
            </CodeExample>
          </div>
				</tiny-tab-item>
				<tiny-tab-item title="API" name="API">
          <h4 class="api-title">使用方式</h4>
          <MarkdownPage mdName="KeyboardFocusContent"></MarkdownPage>
				</tiny-tab-item>
		</tiny-tabs>
  </div>
  
</template>

<script>
import MarkdownPage from '../example/components/markdown.vue';
import CodeExample from '../media-screen/components/code-example.vue';
import { Tabs,TabItem } from '@opentiny/vue'
import PieChart from './components/pie-chart.vue';
import BarChart from './components/bar-chart.vue';

export default {
  name: 'KeyboardFocus',
  components: {
    MarkdownPage,
    CodeExample,
    PieChart,
    BarChart,
    TinyTabs: Tabs,
		TinyTabItem: TabItem
  },
  data() {
    return {
      chartCode: [],
      chartData: ['KeyboardFocusPie', 'KeyboardFocusBar'],
      activeName: 'DEMO',
      theme: localStorage.getItem('chartTheme') ,
      tabsBtnACtiveBg: '#fff',
      tabsBtnACtiveColor: '#000',
      tabsBtnColor: '#595959',
      tabsBtnBg: '#f0f0f0'
    };
  },
  mounted() {
    this.chartData.forEach((item, index) => {
      this.axios.get(`quick_start/${item}.md`).then(res => {
        this.chartCode[index] = res.data;
      });
    });
    this.setTheme(this.theme.indexOf('light') > -1);
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
};
</script>

<style scoped>
.code-header {
  font-size: 20px;
  margin-bottom: 1rem;
  color: var(--ti-base-color-common-7);
}
.code-desc {
  margin-bottom: 6px;
  color: var(--ti-base-color-common-7);
}
.code-desc span {
  padding: 2px 6px;
  color: #c0341d;
  background: #fbe5e1;
  border-radius: 4px;
}

.code-subtitle {
  font-size: 16px;
  color: var(--ti-base-color-common-7);
}
.demo-keyboardfocus {
  display: flex;
  justify-content: space-between;
  align-items: start;
}
.demo-keyboardfocus .code-container {
  width: 50%;
  margin-top: 0;
}
.demo-keyboardfocus :deep(.chart-focus) {
  border-radius: 4px;
  outline: 2px solid var(--ti-base-color-common-7);
}
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
