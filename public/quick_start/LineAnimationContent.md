<br/>

## 2.使用方式
```javascript
// html片段
<div id='dom'></div>
```
```javascript
// javascript片段
// 引用自定义布局图表
import { MindmapChart } from '{{VITE_BASECOPYRIGHTSPAT}}';
const option = {
  data,
  layout,
  ...
}

// 创建图表实例
this.chartIns = new MindmapChart();
// 初始化图表容器
this.chartIns.init(document.getElementById('dom'));
this.chartIns.setOption(option);
// 开始渲染
this.chartIns.render();
// 线管理器实例对象
this.lineManager = this.chartIns.lineManager.getData();
// for in 循环遍历this.lineManager后，得到的线实例lineManager，可以调用每根线的实例的一些方法
for (let i in this.lineManager) {
  let lineManager = this.lineManager[i];
  lineManager.start({
    type: 'streamer'// streamer-流光，grow-生长，dash-虚线流动
    duration: 500,
    path: lineManager.path,
    color: '#1c1c1c' // 非必配置项，配置后，修改连线的颜色
  })
}
```


