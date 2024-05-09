# 按需引入

</br>

Opentiny 提供了两种图表组件的引用方式
- 全量引入： 自动加载所有非高阶图表的其他图表，使用起来简单快速，但工程打包后体积较大。
- 按需引入： 使用者自行引入需要的图表，工程打包候体积较小。


## 全量引入

全量引入为 Opentiny 的默认引入方式。

```javascript
// 直接引入图表库 --- 全量引入
import HuiCharts from '@opentiny/hui-charts';
const huiChartIns = new HuiCharts();
const huiChartType = 'lineChart';
const huiChartOption = {
    data:  [...],
    xAxis: {...},
    yAxis: {...},
};
huiChartIns.init(chartContainerDom); 
// 全量引入时，setSimpleOption 的第一个参数为所需图表类型的字符串名称
huiChartIns.setSimpleOption(huiChartType, chartOption);
huiChartIns.render();
```

</br>

## 按需引入

按需引入要求使用者自行引入需要的图表，并配合 core 组件一起使用。

```javascript
// 引入图表核心对象 core
import { core } from '@hui/charts';
// 引入需要的图表
import { LineChart } from '@hui/charts';
const huiChartIns = new core();
const huiChartOption = {
    data:  [...],
    xAxis: {...},
    yAxis: {...},
};
huiChartIns.init(chartContainerDom); 
// 按需引入时，setSimpleOption 的第一个参数为所需图表类型对象
huiChartIns.setSimpleOption(LineChart, chartOption);
huiChartIns.render();
```