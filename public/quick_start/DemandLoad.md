# 按需引入

</br>

{{VITE_BASECOPYRIGHTS}} HUICharts 提供了两种图表组件的引用方式
- 全量引入： 自动加载所有非高阶图表的其他图表，使用起来简单快速，但工程打包后体积较大。
- 按需引入： 使用者自行引入需要的图表，工程打包候体积较小。


## 全量引入

全量引入为 {{VITE_BASECOPYRIGHTS}} HUICharts 的默认引入方式。

```javascript
// 直接引入图表库 --- 全量引入
import HuiCharts from '{{VITE_BASECOPYRIGHTSPAT}}';
const chartIns = new HuiCharts();
const chartType = 'lineChart';
const chartOption = {
    data:  [...],
    xAxis: {...},
    yAxis: {...},
};
chartIns.init(chartContainerDom); 
// 全量引入时，setSimpleOption 的第一个参数为所需图表类型的字符串名称
chartIns.setSimpleOption(chartType, chartOption);
chartIns.render();
```

</br>

## 按需引入

按需引入要求使用者自行引入需要的图表，并配合 core 组件一起使用。

```javascript
// 引入图表核心对象 core
import { core } from '{{VITE_BASECOPYRIGHTSPAT}}';
// 引入需要的图表
import { LineChart } from '{{VITE_BASECOPYRIGHTSPAT}}';
const chartIns = new core();
const chartOption = {
    data:  [...],
    xAxis: {...},
    yAxis: {...},
};
chartIns.init(chartContainerDom); 
// 按需引入时，setSimpleOption 的第一个参数为所需图表类型对象
chartIns.setSimpleOption(LineChart, chartOption);
chartIns.render();
```