# 自定义主题

## 内置主题

{{VITE_BASECOPYRIGHTS}} 目前内置了7种皮肤主题色，包括：
- ICT3.0图表浅色主题`light`
- ICT3.0图表深色主题`dark`
- 华为云图表浅色主题`cloud-light`
- H Design1.1图表浅色主题`hdesign-light`
- H Design1.1图表深色主题`hdesign-dark`
- 质量&流程IT图表浅色主题`bpit-light`
- 质量&流程IT图表深色主题`bpit-dark`

## 设置全局主题

您可以通过 `HuiCharts.theme(name)` 方法设置全局主题，此时图表会自动应用全局主题。

```javascript
// 引用图表库。
import HuiCharts from '{{VITE_BASECOPYRIGHTSPAT}}';
// 全局设置图表主题，该方法需要传入主题名称。
HuiCharts.theme('cloud-light');
```
注意：在设置全局主题后，图表的 option 可以不传 theme 属性，这些图表将自动应用全局设置好的主题。

</br>

## 自定义全局主题

当 {{VITE_BASECOPYRIGHTS}} 的内置主题无法满足您的场景时，您可以通过`HuiCharts.registerTheme(name, config)` 全局注册自定义主题来使用。

```javascript
// 引用图表库
import HuiCharts from '{{VITE_BASECOPYRIGHTSPAT}}';

// registerTheme 的第一个参数为自定义主题名称。
// registerTheme 的第二个参数为自定义主题的配置，他会和默认主题 'light' 的配置去混合
HuiCharts.registerTheme('AI-light',{ // 注册名称为 'AI-light' 的主题。
  color:{
    base:{ // 主题基础色组
      font:'#4f6b9d'
    },
    group:['#6d8ff0', '#00a874', '#bd72f0', '#c6e5ec'],  // 主题推荐色组
    state:{ // 主题状态色组
      error: '#F43146',
      warning: '#EC6F1A',
      success: '#2DA769',
      fail: '#939393'
    }
  }
});

// 设置全局主题使用 'AI-light'。
HuiCharts.theme('AI-light');

// 创建和渲染图表，此时 chartOption 中的 theme 属性可以不传，图表将默认使用 'AI-light' 主题。
let chartIns = new HuiCharts();
let chartContainerDom = ...;
let chartOption = {...};
chartIns.init(chartContainerDom);
chartIns.setSimpleOption('LineChart', chartOption);
chartIns.render();
```

</br>

## 内置主题详细配置项

`HuiCharts.registerTheme(name, config)` 的第二个参数 config 为自定义主题的配置，他会和默认主题 `light` 的配置混合，这样您可以选择您想更改的地方去覆盖。

为方便使用者覆盖默认的 `light` 主题，现将 `light` 主题的默认配置给出，您可以根据需要自行选择覆盖词条。

### ICT3.0 图表浅色主题 `light` 的主题默认配置

```javascript
// 推荐色组
const group = [
  '#6d8ff0',
  '#00a874',
  '#bd72f0',
  '#c6e5ec',
  '#fdc000',
  '#9185f0'
];
// 图表基础色
const base = {
  main: '#FFFFFF', // 主色
  font: '#191919', // 主文本色
  subfont: '#bbbbbb', // 次级文本色
  axis: '#eeeeee', // 刻度线
  subaxis: 'rgba(0,0,0,0.08)', // 次级刻度线
  axislabel: '#4e4e4e', // 刻度文本
  bg: '#ffffff', // 初级底色，颜色最亮
  subg: '#e8e8e8', // 次级底色，颜色稍亮
};
// 图表状态色
const state = {
  error: '#F43146', 
  warning: '#EC6F1A', 
  subwarning: '#EEBA18', 
  success: '#2DA769', 
  prompt: '#5990FD', 
  fail: '#939393', 
};
const lightConfig = {
  color: {
    base,
    group,
    state,
  }
};
```

</br>

## 同一页面实现不同主题
如果想要在同一页面使用不同主题，需要使用iframe对展示不同主题的图表进行隔离。