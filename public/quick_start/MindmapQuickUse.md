# 思维导图布局
思维导图布局可以简洁、直观，能够清晰地展示主题之间的关系和层次结构。

## 1.使用方式

`通过layout的type属性控制布局类型`，下面是思维导图布局的简单使用：
```javascript
// html片段
<div id="chartContainer"></div>
```

```javascript
// javascript片段
// 引用图表库
import { MindmapChart } from '{{VITE_BASECOPYRIGHTSPAT}}';
// 引用节点组件
import Node  from './Node.vue';
const option = {
  // 向图表中传入Vue组件，作为节点使用
  component: Node,
  layout: {
		type: 'mindmap',
    direction: 'LR',
    vGap: 10,
    hGap: 100,
	},
  // 图表数据
  data: {
    id: 'root',
    text: '产品研发中心',
    peopleNum: 100,
    children: [
      {
        id: 'researchDept',
        text: '研发部',
        peopleNum: 20,
      },
      {
        id: 'designDept',
        text: '设计部',
        peopleNum: 60
      }
    ]
  }
};
let chartIns = new MindmapChart();
chartIns.init(chartContainerDom); 
chartIns.setOption(option);
chartIns.render();
```

节点Node代码如下：


```javascript
<template>
  <div class="mindmap-card">
    <div class="mindmap-top" :style="{ backgroundColor: dynamicBackgroundColor }">
      <p>{{ data.text }}</p>
    </div>
    <div class="mindmap-bottom">
      <h4>部门人数: {{ data.peopleNum }}人</h4>
      <div class="mindmap-progress-container">
        <progress class="progress" :stroke-width="8" :percentage="data.peopleNum" :format="formatText"></progress>
      </div>
    </div>
  </div>
</template>

<script>
import {  Progress } from '@opentiny/vue'
export default {
  components: {
    TinyProgress: Progress,
  },
  props: {
    data: Object,
  },
  computed: {
    dynamicBackgroundColor() {
      if (this.data.id.includes('root')) {
        return '#2070F3';
      } else if (this.data.id.includes('researchDept')) {
        return '#F4840C';
      } else if (this.data.id.includes('designDept')) {
        return '#09AA71';
      }
      return '#E02128'; // 默认背景颜色
    }
  },
  methods: {
    formatText() {
      return `${this.data.peopleNum}/100`
    }
  }
}
</script>
```






