# 全键盘走焦

{{VITE_BASECOPYRIGHTS}} 提供了图表的无障碍能力，方便有运动功能障碍的人使用键盘导航获取焦点。<br>

前端Web工程的无障碍能力应用<a href="https://developer.mozilla.org/zh-CN/docs/Learn/Accessibility/WAI-ARIA_basics" target="_blank">可点击这里跳转查看</a>。

## 使用方式

您可以给配置项`option.keyboardFocus`传一段字符串（`single`/`series`/`auto`）；
终端会根据键盘的`Tab键`选中图表；
终端会根据键盘的`左方向键`、`右方向键`选取当前聚焦图表内的数据。

```javascript
// 示例
const huiChartIns = new HuiCharts();
const huiChartType = 'lineChart';
const huiChartOption = {
    data:  [...],
    keyboardFocus: 'single'
};
huiChartIns.init(chartContainerDom); 
huiChartIns.setSimpleOption(huiChartType, chartOption);
huiChartIns.render();
```
