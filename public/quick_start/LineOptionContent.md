<br/>

## 2.使用方式
通过line属性控制连线相关参数，下面是连线的简单使用：
```javascript
// html片段
<div id='dom'></div>
```
```javascript
// javascript片段
// 引用自定义布局图表
import { CustomizeChart } from '{{VITE_BASECOPYRIGHTSPAT}}';
const option = {
  layout: {
    type: 'grid',
    // 自定义调整节点位置
    algorithm: function (nodes, containerSize) {
      const arr = [{ x: 188, y: 100 }, { x: 288, y: 200 }, { x: 388, y: 100 }]
      nodes.forEach((node, i) => {
        node.x = arr[i].x
        node.y = arr[i].y
      })
    }
  },
  node: {
    width: 50,
    height: 50,
  },
  render: (container, data) => {
      let id = data.id;
      let node = `<div>${id}<div>`;
      container.insertAdjacentHTML('beforeend', node);
  },
  line: {
    type: 'Direct',
  },
  connector: {
    startSharing: 'merge', // 均分方式 merge sharing  strict
    endSharing: 'merge',
  },
  data: {
    nodes: [{
      id: '1',
      text: '1',
    },
    {
      id: '2',
      text: '2',
    }, {
      id: '3',
      text: '3',
    }],
    edges: [
      {
        start: '1',
        end: '2',
      },
      {
        start: '2',
        end: '3',
      }]
  }
}

// 创建图表实例
this.chartIns = new CustomizeChart();
// 初始化图表容器
this.chartIns.init(document.getElementById('dom'));
this.chartIns.setOption(option);
// 开始渲染
this.chartIns.render();
```

## 3.配置项
| 名称   | 说明 |  类型 |     默认值 | 
| :----- |  :----- |  :----- |  :-----  |  
| type |  连线类型<br> 可选值：`Round` 折线、`Direct` 直线、`Bezier` 贝塞尔曲线、`Circle` 圆形、`Ellipse` 一阶贝塞尔（椭圆）  | `string` | `Bezier` |
| style | 连线样式  | `object` | `无` |
| &ensp;&ensp;└─width |  宽度 | `number` | `1` |
| &ensp;&ensp;└─radius |  折线弧度(仅在type=Round时生效) | `number` | `0` |
| &ensp;&ensp;└─mode |  种类<br> 可选值：`solid` 实线、`dash` 虚线 | `string` | `solid` |
| &ensp;&ensp;└─color |  颜色  | `string` |`#2c2c2c` |
| &ensp;&ensp;└─hover |  悬浮配置  | `object` |`{color: '#aaaaaa', width: 1}` |
| &ensp;&ensp;└─active |  激活态配置  | `object` |`{color: '#aaaaaa', width: 1}` |
| &ensp;&ensp;└─disable |  禁用配置  | `object` |`{color: '#aaaaaa', width: 1}` |
| endMarker | 连线结束箭头  | `object` |`{size: 8, type: 'block',color: '#c2c2c2'}` |
| &ensp;&ensp;└─size |  箭头尺寸 | `number` | `8` |
| &ensp;&ensp;└─type |  箭头类型<br> 可选值：`block` 实心、`classic` 经典、`diamond` 菱形、`cross` 交叉、`async` 单边、`circle` 圆形、`path` 自定义，需要传入自定义的d属性，如d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z", 箭头为爱心图案 | `string` | `block` |
| &ensp;&ensp;└─color |  颜色  | `string` |`#2c2c2c` |
| startMarker | 连线开始箭头  | `object` |`{size: 8, type: 'block',color: '#c2c2c2'}` |
| &ensp;&ensp;└─size |  箭头尺寸 | `number` | `8` |
| &ensp;&ensp;└─type |  箭头类型<br> 可选值：`block` 实心、`classic` 经典、`diamond` 菱形、`cross` 交叉、`async` 单边、`circle` 圆形、`path` 自定义，需要传入自定义的d属性，如d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z", 箭头为爱心图案 | `string` | `block` |
| &ensp;&ensp;└─color |  颜色  | `string` |`#2c2c2c` |
| onClick |  连线点击回调函数   | `function` | `无` |
| onHover |  连线悬浮回调函数   | `function` | `无` |

