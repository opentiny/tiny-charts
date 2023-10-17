# 迷你图表

在很多场景中，一些图表不需要坐标系，不需要交互能力，不需要任何文字，`只需要显示核心图元`来反映数据走势或数据占比，HUI-Charts 称这种图表为`迷你图表`。如下图：

</br>

<div class="img-mini">
   <img src="./image/md/mini.png"/>
</div>

## mini属性

HUI-Charts 提供了 `mini` 属性来一键配置迷你图表。
 
```javascript
// 引入图表库
import HuiCharts from '@hui/charts';
// 创建和渲染图表
const chartIns = new HuiCharts();
const chartContainerDom = ...;
const chartOption = {
    mini: true,  // 设置了 mini 属性后，图表只会显示核心图元
    data: [...],
    xAxis: {...}
};
chartIns.init(chartContainerDom);
chartIns.setSimpleOption('LineChart', chartOption);
chartIns.render();
```

注意：当前仅支持直角坐标系图表mini化，如您有需求，可联系维护人员添加功能。

<!-- 样式 -->
<style>
    .img-mini{
        width: 850px;
        margin: auto;
        display: flex;
        margin-top: 16px;
        margin-bottom: 16px;
        align-items: center;
        flex-direction: row;
        background-color:#ffffff;
        justify-content: space-between;
    }
</style>
