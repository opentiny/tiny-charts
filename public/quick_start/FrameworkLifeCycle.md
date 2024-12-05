## 1.快速上手
```javascript
// html 片段
<div id="dom" style="width: 600px; height:400px;"></div>
```
```javascript
// javascript 片段
// 引用图表库
import {MindmapChart} from '{{VITE_BASECOPYRIGHTSPAT}}';
// 图表配置项
let chartOption = {
    layout: {
      type: 'mindmap',
      direction: 'LR',
      nodeShape: 'rect',
      vGap: 30,
      hGap: 150,
      bufferRender: true,
    },
    node: {
        width: 250,
        height:146
    },
    line: {
      type: 'Bezier'
    },
    connector: {
      startSharing: 'merge', // 均分方式 merge sharing  strict
      endSharing: 'merge',
      type: 'expand',
    },
    canvas: {
      show: true,
      grid: {
        size: 20,
        show: true,
        type: 'dot', //dot mesh doubleMesh
        config: {
          color: '#aaaaaa', // 颜色
          unitSize: 1, // 宽度
        }
      }
    },
    data: {
      id: 'root',
      title: '收藏夹',
      text: '你收藏的内容',
      children: [
        {
          id: 'node1',
          text: '歌曲1'
        },
        {
          id: 'node2',
          text: '歌曲2'
        }
    }
};
// 创建图表实例
let chartIns = new MindmapChart();
// 获取容器
let domElement = document.getElementById('dom');
// 初始化图表容器
chartIns.init(domElement);
// 传入图表配置
chartIns.setOption(chartOption);
// 开始渲染图表
chartIns.render();
```

## 2.图表数据刷新
当您要刷新已经渲染完毕的图表时，如果您想刷新配置项和数据，可以使用：
```javascript
// 新的配置项，为对象格式
let newChartOption = {...};
chartIns.refresh(newChartOption);
```
如果您想仅仅刷新数据，可以使用：
```javascript
// 新的数据，为对象格式
let newData = {...};
chartIns.refreshData(newData);
```
