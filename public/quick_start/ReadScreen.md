# 读屏

{{VITE_BASECOPYRIGHTS}} 提供了图表的无障碍能力，方便残障人士使用屏幕阅读器自带的语音读屏功能。<br>

前端Web工程的无障碍能力应用<a href="https://developer.mozilla.org/zh-CN/docs/Learn/Accessibility/WAI-ARIA_basics" target="_blank">可点击这里跳转查看</a>。

## 使用方式

您可以给配置项`option.readScreen`传一段字符串（多国语言均可），终端会根据自身所在语言环境和系统能力，读取`readScreen`中的语音。

```javascript
// 示例
const chartIns = new HuiCharts();
const chartType = 'lineChart';
const chartOption = {
    data:  [...],
    readScreen: '线型图表，呈现用户下载量数据'
};
chartIns.init(chartContainerDom); 
chartIns.setSimpleOption(chartType, chartOption);
chartIns.render();
```

