您可以给配置项`option.keyboardFocus`传一段字符串（`single`/`series`/`auto`）；
终端会根据键盘的`Tab键`选中图表；
终端会根据键盘的`左方向键`、`右方向键`选取当前聚焦图表内的数据。

```javascript
// 示例
const chartIns = new HuiCharts();
const chartType = 'lineChart';
const chartOption = {
    data:  [...],
    keyboardFocus: 'single'
};
chartIns.init(chartContainerDom); 
chartIns.setSimpleOption(chartType, chartOption);
chartIns.render();
```
