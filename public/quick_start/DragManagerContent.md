## 使用方式
需要引入DragManager插件，然后将渲染图表的dom节点配置到插件实例中。DragManager插件支持两个参数，第一个参数（必填）是dom节点，第二个参数（可选配置）是个对象，配置项如下
```javascript
{
  scale: 1, // 图表初始缩放比例，缺省值是1
  size: '10000px', // 画布大小，缺省值是10000px
  isScale: true, // 滚轮滚动时，是否放大缩小图表,缺省值是true
  enlarge: '../image/xxx.png', // 图表放大图标
  shrunk: '../image/xxx.png', // 图表缩小图标
  center: '../image/xxx.png', // 图表恢复默认状态图标
}
```

```javascript
// 引入拖动插件
import DragManager from '{{VITE_BASECOPYRIGHTSPAT}}/feature/drag';
import '{{VITE_BASECOPYRIGHTSPAT}}/feature/drag/index.css'

<div id="drag-ontainer" style="width: 600px;height:400px;"></div>
// 创建图表实例
this.chartIns = new HuiCharts();
// 初始化图表容器
let chartContainerDom = document.querySelector("#drag-ontainer");

// 添加缩放
const drag=new DragManager(chartContainerDom,{
  scale:1
});
// 图表会在页面中心渲染
this.chartIns.init(drag.getDragDom());
//  设置中心节点,图表以该节点居中显示
this.chartIns.onRenderReady(()=>{drag.moveTargetToCenter("#fc-node-3")})
```