# 配置扩展

当您需要的图表样式、图表场景超出了 {{VITE_BASECOPYRIGHTS}} 提供的范围时，您可以在 {{VITE_BASECOPYRIGHTS}} 的配置项上面添加 ECharts 配置进行扩展。

</br>

{{VITE_BASECOPYRIGHTS}} 提供了三种配置扩展的方式：
- 直接在 {{VITE_BASECOPYRIGHTS}} 提供好的属性上进行 ECharts 配置覆盖。
- 使用 extend 字段，顶替掉 {{VITE_BASECOPYRIGHTS}} 默认配置。
- 完全使用 ECharts 的原生配置。

</br>

## 扩展方式1：直接在 {{VITE_BASECOPYRIGHTS}} 提供的属性上添加 ECharts 配置

本方式会将 ECharts 配置项和 {{VITE_BASECOPYRIGHTS}} 配置项`合并`，最终一起应用到图表中。

注意：ECharts 配置项优先级大于 {{VITE_BASECOPYRIGHTS}} 配置项，因此可通过本方式实现`样式覆盖`。

```javascript
// 示例
const chartIns = new HuiCharts();
const chartType = 'lineChart';
const chartOption = {
    data:  [...],
    xAxis: {
        // xAxis.axisLabel 为 ECharts 的配置项，他们会和 xAxis 中的其他属性一起应用到图表中
        axisLabel:{
            interval: 1,
            hideOverlap: true,
            formatter: function (value, index) {
                return value + 'kg';
            }
        }
    },
    yAxis: {...},
};
chartIns.init(chartContainerDom); 
chartIns.setSimpleOption(chartType, chartOption);
chartIns.render();
```

</br>

## 扩展方式2：使用 extend 字段，顶替 {{VITE_BASECOPYRIGHTS}} 默认配置

当您想通过自己编写的 ECharts 配置代替 {{VITE_BASECOPYRIGHTS}} 的默认配置时，您可以使用 extend 字段实现。

extend 字段内的所有属性必须为 ECharts 的原生配置属性，他们会`直接顶替`相应 {{VITE_BASECOPYRIGHTS}} 的内部默认配置，`不针对传入的配置做任何的合并`。

```javascript
// 示例
const chartIns = new HuiCharts();
const chartType = 'lineChart';
const chartOption = {
    data: [...],
    xAxis: {...},
    datazoom: {...},
    // extend.datazoom 会直接应用到最终图表生成上，此时 chartOption.datazoom 是无效的
    extend: {
        datazoom: [
            {
                type: 'slider',
                width: 5,
                left: '95%',
                moveHandleSize:20,
                filterMode: 'empty'
            }
        ]
    }
};
chartIns.init(chartContainerDom);
chartIns.setSimpleOption(chartType, chartOption);
chartIns.render();
```

</br>

## 扩展方式3：完全使用 ECharts 的原生配置

{{VITE_BASECOPYRIGHTS}} 提供了 setEchartsOption 方法，该方法用来接收纯 ECharts 配置项。

虽然您使用了 ECharts 的原生配置，但图表仍可以使用 {{VITE_BASECOPYRIGHTS}} 的公共能力，如自适应、媒体查询配置、数据状态管理等等

```javascript
// 示例
const chartIns = new HuiCharts();
const eChartOption  {...};
chartIns.init(chartContainerDom);
// 传入echarts原生配置项
chartIns.setEchartsOption(eChartOption);
chartIns.render();

// 使用此方式绘制图表时，当您需要刷新图表时，可以再次调用
chartIns.setEchartsOption(eChartOption);
chartIns.render();
```

如果您需要获取 ECharts 实例，做进一步的处理，可以调用 `chartIns.getEchartsInstance()` 做进一步操作。