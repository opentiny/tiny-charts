## 2.使用方式
通过canvas属性控制画布相关参数，下面是画布的简单使用：
```javascript
// html片段
<div id='dom'></div>
```
```javascript
// javascript片段
// 引入图表库
import { CircleChart } from '{{VITE_BASECOPYRIGHTSPAT}}';
const chartDom = document.getElementById('dom');
const chartOption = {
    data:  {...},
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
    }
};
const chartIns = new CircleChart();
chartIns.init(chartDom); 
chartIns.setOption(chartOption);
chartIns.render();
```

## 3.配置项
| 名称   | 说明 |  类型 |     默认值 | 
| :----- |  :----- |  :----- |  :-----  |  
| show |  使用画布   | `boolean` | `false` |
| scale |  当前缩放值   | `number` | `1` |
| scaleUnit |  缩放刻度   | `number` | `0.1` |
| scaleAllow |  允许滚轮缩放   | `boolean` | `true` |
| scaleLimit |  缩放区间   | `object` | `{min: 0.5,max: 1.5}` |
| scaleThrottle |  缩放节流时间   | `number` | `200` |
| grid | 网格  | `object` | `无` |
| &ensp;&ensp;└─show |  使用网格 | `boolean` | `false` |
| &ensp;&ensp;└─size |  网格大小 | `number` | `20` |
| &ensp;&ensp;└─type |  网格类型<br> 可选值：`dot `点、`mesh`网格、`doubleMesh`双层网格 | `string` | `dot` |
| &ensp;&ensp;└─config |  网格样式  | `object` |`{color: '#aaaaaa', unitSize: 1}` |

`说明：`grid.type为dot或者mesh时，grid.config的配置示例：
```javascript
{
  color: '#aaaaaa',  // 网格线颜色
  unitSize: 1        // 网格线宽度
}
```
grid.type为doubleMesh时，grid.config的配置示例：
```javascript
[
  {
    color: '#eee',    // 主网格线颜色
    unitSize: 1,      // 主网格线宽度
  },
  {
    color: '#ddd',    // 次网格线颜色
    unitSize: 1,      // 次网格线宽度
    factor: 4,        // 主次网格线间隔
  }
]
```

## 4.API方法
| 名称   | 说明 |  类型 |     默认值 |       参数 | 
| :----- |  :----- |  :----- |  :-----  |   :-----  |  
| setGrid | 设置网格(传入canvas.grid新的配置项)  | `function` |`无` |{color: '#aaaaaa',unitSize: 1} |
| onScale | 画布缩放时触发回调  | `function` |`无` | {args:{lastScale: 0.9, currentScale: 1 }} |
| onMove | 画布移动时触发回调  | `function` |`无` |{type: 'move'或'scale', offset: 上次到当前偏移量, scale: 本次缩放值, lastScale: 上次缩放值, center: 画布中心} |

