# 自定义节点--HTML节点
引擎支持使用原生JavaScript + HTML的格式编写节点内容，将节点渲染在图表中，同时也提供了节点更新和卸载的接口。

## 1.渲染节点

### 创建 HTML 节点
tips: 在使用 HTML 节点时，需要自行防护XSS攻击。
```javascript
function HTMLNode(container, data) {
  let html = `<div class="mindmap-card">
    <div class="mindmap-top">
      <p>${ data.text }</p>
    </div>
    <div class="mindmap-bottom">
      <h4>部门人数: ${ data.peopleNum }人</h4>
      <div class="mindmap-progress-container">
        <div className="progress">
          <div className="progress-bar" style='width:${data.peopleNum}%'></div>
        </div>
        ${ data.peopleNum }/100
      </div>
    </div>
  </div>`;
  container.innerHTML = html
}
```
### 将 HTML 节点渲染至图表中
将 HTML 节点传递给`option.component`属性，图表会使用data中对应的数据渲染节点。
```javascript
// 引用图表库
import {MindmapChart} from '{{VITE_BASECOPYRIGHTSPAT}}';
const option = {
  // 向图表中传入HTML方法，作为节点使用
  component: HTMLNode,
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



