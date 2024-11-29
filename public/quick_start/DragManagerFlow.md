```javascript
<script>
// 引用图表库
import HuiCharts from '{{VITE_BASECOPYRIGHTSPAT}}';
// 引入拖动插件
import DragManager from '{{VITE_BASECOPYRIGHTSPAT}}/feature/drag';
// 引入插件样式
import '{{VITE_BASECOPYRIGHTSPAT}}/feature/drag/index.css'

<div id="drag-ontainer" style="width: 600px;height:400px;"></div>

export default {
  name: 'DragManagerFlow',
  ...,
  mounted(){
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
  }
}
</script>
```