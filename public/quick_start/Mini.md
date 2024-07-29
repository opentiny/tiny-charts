# 迷你图表

在很多场景中，一些图表不显示坐标系，无交互能力，不显示任何文字，`只需要显示核心图元`来反映数据走势或数据占比，{{VITE_BASECOPYRIGHTS}} 中定义这种图表为`迷你图表`。如下图：

</br>

<div class="img-mini">
   <img src="{{VITE_BASEROUTER}}./image/md/mini.png"/>
</div>

## mini属性

{{VITE_BASECOPYRIGHTS}} 提供了 `mini` 属性来一键配置迷你图表。
 
```javascript
// 引入图表库
import HuiCharts from '{{VITE_BASECOPYRIGHTSPAT}}';
// 创建和渲染图表
const chartIns = new HuiCharts();
const chartContainerDom = ...;
const chartOption = {
    mini: true,  // 设置了 mini 属性后，图表只会显示核心图元
    data: [...],
    xAxis: {...}
};
chartIns.init(chartContainerDom);
chartIns.setSimpleOption('LineChart', chartOption); // 图表名称：LineChart、BarChart、CircleProcessChart、ProcessChart
chartIns.render();
```

注意：当前仅支持折线图、柱状图、圆环进度图、进度图的图表mini化，如您有需求，可联系维护人员添加功能。


<style>
    .img-mini{
        width: 100%;
        margin: auto;
        display: flex;
        margin-top: 16px;
        margin-bottom: 16px;
        align-items: center;
        flex-direction: row;
        justify-content: center;
    }
</style>
