# 自定义主题

## 内置主题

HUI-Charts 的图表内部支持四套主题，分别为`'light','dark','cloud-light','cloud-dark'`,对应为

- ICT3.0 图表浅色主题-----`'light'`
- ICT3.0 图表深色主题-----`'dark'`
- 华为云图表浅色主题-----`'cloud-light'`
- 华为云图表深色主题(待定)-----`'cloud-dark'`

同时 HUI-Charts 也支持全局配置默认主题和根据开发需求注册使用自定义主题,目前仅支持主题颜色相关的配置，未来会增加更多主题设置

## 注册使用自定义主题

```javascript
// 引用图表库
import HuiCharts from '@hui/charts';

// 调用全局主题注册方法,name为自定义主题的名称,config为相应的主题的配置,会和默认主题ICT3.0图表浅色主题('light')的配置去混合，具体config在下方可见,
例如:HuiCharts.registerTheme('Ai-light',{color:{base:{font:'#4f6b9d'}}})
HuiCharts.registerTheme(name:string,config:object)

// 调用全局主题使用方法,name为之前注册的主题名称
例如:HuiCharts.theme('Ai-light')
HuiCharts.theme(name:string)

// 创建图表实例
let chartIns = new HuiCharts();

// 初始化图表容器
let chartContainerDom = ...;
chartIns.init(chartContainerDom);

// 填入图表配置项
let chartOption = {...};
// 指定使用图表类型：LineChart、AreaChart、BarChart、PieChart、GaugeChart、RadarChart、ProcessChart、BubbleChart等
// 图表类型的英文名称可以在文档左侧菜单栏看到
let chartType = 'LineChart';
chartIns.setSimpleOption(chartType, chartOption);

// 开始渲染
chartIns.render();

此时chartOption中的theme属性可以不传,图表将会使用自定义的主题配置
```

## 全局配置主题

```javascript
// 引用图表库
import HuiCharts from '@hui/charts';

// 调用全局主题使用方法,name为HUI-Charts 的图表内部的四套主题，分别为`'light','dark','cloud-light','cloud-dark'`
HuiCharts.theme(name:string)

// 创建图表实例
let chartIns = new HuiCharts();

// 初始化图表容器
let chartContainerDom = ...;
chartIns.init(chartContainerDom);

// 填入图表配置项
let chartOption = {...};
// 指定使用图表类型：LineChart、AreaChart、BarChart、PieChart、GaugeChart、RadarChart、ProcessChart、BubbleChart等
// 图表类型的英文名称可以在文档左侧菜单栏看到
let chartType = 'LineChart';
chartIns.setSimpleOption(chartType, chartOption);

// 开始渲染
chartIns.render();

此时chartOption中的theme属性可以不传,图表将会使用HuiCharts.theme配置的主题
```

## 主题详细配置项

### 1、ICT3.0 图表浅色主题

```javascript
// 推荐色组
const group = [
  '#6d8ff0', // rgba(109,143,240,1)
  '#00a874', // rgba(0  ,168,116,1)
  '#bd72f0', // rgba(189,114,240,1)
  '#c6e5ec', // rgba(198,229,236,1)
  '#fdc000', // rgba(253,192,0  ,1)
  '#9185f0', // rgba(145,133,240,1)
];

// 图表基础色
const base = {
  // 主色
  main: '#FFFFFF',
  // 主文本色
  font: '#191919',
  // 次级文本色
  subfont: '#bbbbbb',
  // 刻度线
  axis: '#eeeeee',
  // 次级刻度线
  subaxis: 'rgba(0,0,0,0.08)',
  // 刻度文本
  axislabel: '#4e4e4e',
  // 初级底色，颜色最亮
  bg: '#ffffff',
  // 次级底色，颜色稍亮
  subg: '#e8e8e8',
};

// 图表状态色
const state = {
  // 错误色
  error: '#F43146',
  // 告警色
  warning: '#EC6F1A',
  // 次要告警色
  subwarning: '#EEBA18',
  // 成功色
  success: '#2DA769',
  // 提示色
  prompt: '#5990FD',
  // 失效
  fail: '#939393',
};

const theme = {
  color: {
    group,
    base,
    state,
  },
};
```

### 2、ICT3.0 图表深色主题

```javascript
// 推荐色
const group = [
  '#1f55b5', // rgba(31 ,85 ,181,1)
  '#278661', // rgba(39 ,134,97 ,1)
  '#8a21bc', // rgba(138,33 ,188,1)
  '#26616b', // rgba(38 ,97 ,107,1)
  '#b98c1d', // rgba(185,140,29 ,1)
  '#745ef7', // rgba(116,94 ,247,1)
];

// 图表基础色
const base = {
  // 主色
  main: '#191919',
  // 主文本色
  font: '#f5f5f5',
  // 次级文本色
  subfont: '#4e4e4e',
  // 刻度线
  axis: 'rgba(238,238,238,0.1)',
  // 次级刻度线
  subaxis: 'rgba(255,255,255,0.2)',
  // 刻度文本
  axislabel: '#bbbbbb',
  // 初级底色，颜色最亮
  bg: '#272727',
  // 次级底色，颜色稍亮
  subg: '#2e2e2e',
};

// 图表状态色
const state = {
  // 错误色
  error: '#F43146',
  // 告警色
  warning: '#EC6F1A',
  // 次要告警色
  subwarning: '#EEBA18',
  // 成功色
  success: '#0D9458',
  // 提示色
  prompt: '#5990FD',
  // 失效
  fail: '#818181',
};

const theme = {
  color: {
    group,
    base,
    state,
  },
};
```

### 3、华为云图表浅色主题

```javascript
// 推荐色
const group = [
  '#1476FF',
  '#0BB8B2',
  '#6E51E0',
  '#5CB300',
  '#FCBE1E',
  '#33BCF2',
  '#BA53E6',
  '#EB4696',
];

// 图表基础色
const base = {
  // 主色
  main: '#FFFFFF',
  // 主文本色
  font: '#191919',
  // 次级文本色
  subfont: '#bbbbbb',
  // 刻度线
  axis: '#eeeeee',
  // 次级刻度线
  subaxis: 'rgba(0,0,0,0.06)',
  // 刻度文本
  axislabel: '#4e4e4e',
  // 初级底色，颜色最亮
  bg: '#ffffff',
  // 次级底色，颜色稍亮
  subg: '#f2f2f2',

};

// 图表状态色
const state = {
  // 错误色
  error: '#F23030',
  // 告警色
  warning: '#FF8800',
  // 次要告警色
  subwarning: '#F7D916',
  // 成功色
  success: '#5CB300',
  // 提示色
  prompt: '#1476FF',
  // 失效
  fail: '#EBEBEB',
};

const theme = {
  color:{
    group,
    base,
    state,
  },
};
```

### 4、华为云图表深色主题(待定)

```javascript

// 推荐色----- 当前华为云图表深色主题为暂行，后续待刷新
const group = [
    '#1f55b5', // rgba(31 ,85 ,181,1)
    '#278661', // rgba(39 ,134,97 ,1)
    '#8a21bc', // rgba(138,33 ,188,1)
    '#26616b', // rgba(38 ,97 ,107,1)
    '#b98c1d', // rgba(185,140,29 ,1)
    '#745ef7', // rgba(116,94 ,247,1)
];

// 图表基础色
const base = {
    // 主色
    main: '#191919',
    // 主文本色
    font: '#f5f5f5',
    // 次级文本色
    subfont: '#4e4e4e',
    // 刻度线
    axis: 'rgba(238,238,238,0.1)',
    // 次级刻度线
    subaxis: 'rgba(255,255,255,0.2)',
    // 刻度文本
    axislabel: '#bbbbbb',
    // 初级底色，颜色最亮
    bg: '#272727',
    // 次级底色，颜色稍亮
    subg: '#2e2e2e',
};

// 图表状态色
const state = {
    // 错误色
    error: '#F43146',
    // 告警色
    warning: '#EC6F1A',
    // 次要告警色
    subwarning: '#EEBA18',
    // 成功色
    success: '#0D9458',
    // 提示色
    prompt: '#5990FD',
    // 失效
    fail: '#818181',
};

const theme = {
    color:{
        base,
        group,
        state,
    },
}
```

## 同一页面实现不同主题
如果想要在同一页面使用不同主题，需要使用iframe对展示不同主题的图表进行隔离