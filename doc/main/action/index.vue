<template>

  <MarkdownPage mdName="Actions"></MarkdownPage>
  <MarkdownPage mdName="Actionsb"></MarkdownPage>
  <BarChart></BarChart>
  <MarkdownPage mdName="Actiona"></MarkdownPage>
  <BarChart></BarChart>




</template>

<script>
import MarkdownPage from '../example/components/markdown.vue';
import CodeExample from './components/code-example.vue';
import BarChart from './components/bar-chart.vue';
import { Tabs, TabItem } from '@opentiny/vue'
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
  data() {
    return {
      chartCode: [],
      chartData: ['CardChart'],
      activeName: 'DEMO',
      theme: localStorage.getItem('chartTheme') || 'hdesign-light',
      tabsBtnACtiveBg: '#fff',
      tabsBtnACtiveColor: '#000',
      tabsBtnColor: '#595959',
      tabsBtnBg: '#f0f0f0'
    }
  },
  mounted() {
    this.chartData.forEach((item, index) => {
      this.axios.get(`quick_start/${item}.md`).then(res => {
        this.chartCode[index] = res.data.replaceAll("{{VITE_BASECOPYRIGHTSPAT}}", import.meta.env.VITE_BASECOPYRIGHTSPAT);
      })
    })
    this.setTheme(this.theme?.indexOf('light') > -1);
    this.$bus.on('themeChange', (val) => {
      this.setTheme(val.indexOf('light') > -1)
    })
  },
  watch: {
    theme: function (newVal) {
      this.setTheme(newVal.indexOf('light') > -1)
    }
  },
  methods: {
    setTheme(val) {
      this.tabsBtnACtiveBg = val ? '#ffffff' : '#1c1c1c';
      this.tabsBtnACtiveColor = val ? '#000' : '#f1f0f0';
      this.tabsBtnBg = val ? '#f2f2f2' : '#414141';
      this.tabsBtnColor = val ? '#777777' : '#c9c3c5';
    }
  }
}
</script>
<style lang="less" scoped>
.title {
    margin: 20px 0;
    font-size: 20px;
    font-weight: 600;
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

:deep(.tiny-tabs__item-separator-space) {
  padding: 0 !important;
}

.code-container:first-child {
  margin-top: 0;
}

:deep(.tiny-tabs__nav) {
  padding: 2px;
}

:deep(.tiny-tabs) {
  .tiny-tabs--button-card {
    .tiny-tabs__item {
      border: none;
    }
  }
}
</style>