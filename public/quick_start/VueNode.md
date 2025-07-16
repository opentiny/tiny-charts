# 自定义节点--Vue节点
引擎支持使用 Vue 组件编写节点，将节点渲染在图表中，同时提供了节点更新和卸载的接口。

## 1.渲染节点
用户需要使用 Vue 组件节点时，若您当前环境为Vue3，需要引入`{{VITE_BASECOPYRIGHTSPAT}}/feature/nodeRender/vue-node.js`；若您当前环境为Vue2，需要引入`{{VITE_BASECOPYRIGHTSPAT}}/feature/nodeRender/vue2-node.js`。这个文件可以解析传入的 Vue 组件并渲染至图表中。


### 创建 Vue 组件节点
```javascript
<template>
  <div class="mindmap-card">
    <div class="mindmap-top">
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
  methods: {
    formatText() {
      return `${this.data.peopleNum}/100`
    }
  }
}
</script>
```
### 将 Vue 组件渲染至图表中
将 Vue 组件传递给`option.component`属性，图表会使用data中对应的数据渲染节点。
```javascript
// html片段
<div id='dom'></div>
```
```javascript
// javascript片段
// 引用图表库
import {MindmapChart} from '{{VITE_BASECOPYRIGHTSPAT}}';
// 引用渲染依赖
import '{{VITE_BASECOPYRIGHTSPAT}}/feature/nodeRender/vue-node.js'
// 引用节点组件
import Node from './Node.vue';
// 引用样式
import '{{VITE_BASECOPYRIGHTSPAT}}/index.css'

const option = {
  // 向图表中传入Vue组件，作为节点使用
  component: Node,
  // 布局配置
  layout: {
    type: 'mindmap',
    direction: 'LR',
    nodeShape: 'rect',
    vGap: 10,
    hGap: 100,
    bufferRender: true
  },
  // 节点配置
  node: {
    width: 200,
    height: 100,
  },
  // 连线样式
  line: {
    type: 'Bezier'
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
// 需在节点创建后，才可进行图表的创建
const chartContainerDom = document.getElementById('dom')
let chartIns = new MindmapChart();
chartIns.init(chartContainerDom); 
chartIns.setOption(option);
chartIns.render();
```



