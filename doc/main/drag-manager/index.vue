<template>
  <MarkdownPage mdName="DragManagerTitle"></MarkdownPage>
  <div class="tabs">
    <tiny-tabs v-model="activeName" tab-style="button-card">
      <tiny-tab-item title="DEMO" name="DEMO">
        <CodeExample :code="chartCode[0]" title="多数据流程图" class="firstCodeExample">
          <DragManagerExample></DragManagerExample>
        </CodeExample>
      </tiny-tab-item>
      <tiny-tab-item title="API" name="API">
        <MarkdownPage mdName="DragManagerContent"></MarkdownPage>
      </tiny-tab-item>
    </tiny-tabs>
  </div>
</template>

<script>
import MarkdownPage from '../example/components/markdown.vue';
import CodeExample from '../card/components/code-example.vue';
import DragManagerExample from './components/drag-manager.vue';
import { Tabs, TabItem } from '@opentiny/vue'

export default {
  name: 'DragManager',
  components: {
    MarkdownPage,
    CodeExample,
    DragManagerExample,
    TinyTabs: Tabs,
    TinyTabItem: TabItem
  },
  data() {
    return {
      chartCode: [],
      activeName: 'DEMO',
      chartData: ['DragManagerFlow']
    }
  },
  mounted() {
    this.chartData.forEach((item, index) => {
      this.axios.get(`quick_start/${item}.md`).then(res => {
        this.chartCode[index] = res.data.replaceAll("{{VITE_BASECOPYRIGHTSPAT}}", import.meta.env.VITE_BASECOPYRIGHTSPAT);
      })
    })
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

.code-container:first-child {
  margin-top: 0;
}

:deep(.tiny-tabs__item-separator-space) {
  padding: 0 !important;
}

.api-title {
  font-size: 20px;
  margin-bottom: 1rem;
  color: var(--ti-base-color-common-7);
}</style>