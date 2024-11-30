<template>
  <MarkdownPage mdName="ExpandLegend"></MarkdownPage>
  <div class="tabs">
    <tiny-tabs v-model="activeName" tab-style="button-card" :style="{
      '--ti-tabs-button-card-item-active-bg-color': tabsBtnACtiveBg,
      '--ti-tabs-button-card-item-active-text-color': tabsBtnACtiveColor,
      '--ti-tabs-button-card-nav-bg-color': tabsBtnBg,
      '--ti-tabs-button-card-item-text-color': tabsBtnColor,
      '--ti-tabs-button-card-item-active-border-color': tabsBtnACtiveColor,
      '--ti-tabs-button-card-item-hover-text-color': tabsBtnACtiveColor
    }">
      <tiny-tab-item title="多选" name="DEMO">
        <CodeExample :code="chartCode[0]" title="图例扩展案例" class="firstCodeExample">
          <MutiselectLegend v-if="activeName==='DEMO'"></MutiselectLegend>
        </CodeExample>

      </tiny-tab-item>
      <tiny-tab-item title="列表" name="DEMO2">
        <CodeExample :code="chartCode[1]" title="图例扩展案例" class="SecondCodeExample">
          <ListLegend v-if="activeName==='DEMO2'"></ListLegend>

        </CodeExample>

      </tiny-tab-item>
      <tiny-tab-item title="表格" name="DEMO3">
        <CodeExample :code="chartCode[2]" title="图例扩展案例" class="ThirdCodeExample">
          <TableLegend v-if="activeName==='DEMO3'"></TableLegend>
        </CodeExample>

      </tiny-tab-item>

      <tiny-tab-item title="单选" name="DEMO4">
        <CodeExample :code="chartCode[3]" title="图例扩展案例" class="TourthCodeExample">
          <SingleselectLegend v-if="activeName==='DEMO4'"></SingleselectLegend>
        </CodeExample>

      </tiny-tab-item>
      <tiny-tab-item title="API" name="API">
        <MarkdownPage mdName="ExpandLegendAPI" v-if="activeName==='API'"></MarkdownPage>
      </tiny-tab-item>
    </tiny-tabs>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
const MarkdownPage =defineAsyncComponent(()=>import('../example/components/markdown.vue'));
const CodeExample = defineAsyncComponent(()=>import('./components/code-example.vue'));
const MutiselectLegend = defineAsyncComponent(()=>import('./components/mutiselect-legend.vue'));
const ListLegend = defineAsyncComponent(()=>import('./components/list-legend.vue'));
const TableLegend = defineAsyncComponent(()=>import('./components/table-legend.vue'));
const SingleselectLegend = defineAsyncComponent(()=>import('./components/singleselect-legend.vue'));

import { Tabs, TabItem } from '@opentiny/vue'

export default {
  name: 'ExpandLegend',
  components: {
    MarkdownPage,
    CodeExample,
    MutiselectLegend,
    TableLegend,
    ListLegend,
    SingleselectLegend,
    TinyTabs: Tabs,
    TinyTabItem: TabItem
  },
  data() {
    return {
      chartCode: [],
      chartData: ['ExtendMutiSelectLegend','ExtendListLegend','ExtendTableLegend','ExtendSingleSelectLegend'],
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