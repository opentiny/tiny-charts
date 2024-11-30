# 自定义节点--Vue节点
引擎支持使用 Vue 组件编写节点，将节点渲染在图表中，同时提供了节点更新和卸载的接口。

## 1.渲染节点
用户需要使用 Vue 组件节点时，需要引入`{{VITE_BASECOPYRIGHTSPAT}}/feature/vue-node.js`，这个文件可以解析传入的 Vue 组件并渲染至图表中。

### 创建 Vue 组件节点
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
### 将 Vue 组件渲染至图表中
将 Vue 组件传递给`option.component`属性，图表会使用data中对应的数据渲染节点。
```javascript
// 引用图表库
import {MindmapChart} from '{{VITE_BASECOPYRIGHTSPAT}}';
// 引用渲染依赖
import '{{VITE_BASECOPYRIGHTSPAT}}/feature/vue-node.js'
// 引用节点组件
import Node from './Node.vue';

const option = {
  // 向图表中传入Vue组件，作为节点使用
  component: Node,
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



