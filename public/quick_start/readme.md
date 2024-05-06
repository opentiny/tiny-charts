# Opentiny-Charts

## Web 前端框架技术栈

- 高阶图表：河流图、蜂窝图、梯田图、时间轴、组织关系图、雪花图、里程碑图。使用时要按需引用，不依赖其他库。

## 基础学习

## 组件库安装

1. 环境准备，首先确认安装了 NodeJs，并确保 NodeJs 版本是 10.13 或以上。使用`node -v`命令查看 node 版本
2. 查看组件库当前的版本 `npm show @opentiny/charts`
3. 安装，使用 npm 安装组件库最新版本:`npm install @opentiny/charts@latest --save`


## 使用用例

```javascript
// 引用图表库
import HuiCharts from '@opentiny/charts';

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
```

## 图表数据刷新
当您要刷新已经渲染完毕的图表时，如果您想刷新配置项和数据，可以使用：
```javascript
// 新的配置项，为对象格式
let newChartOption = {...};
chartIns.refresh(newChartOption);
```
如果您想仅仅刷新数据，可以使用：
```javascript
// 新的数据，为数组格式
let newData = [...];
chartIns.refreshData(newData);
```

## 图表数据状态
Opentiny-Charts 目前内置了 5 种数据状态，包括:
- loading：数据加载中
- error：数据加载失败
- empty：数据为空
- stageEmpty：阶段数据为空
- state：自定义状态


## 图表主题
Opentiny-Charts 目前内置了 7 种皮肤主题色，包括：
- ICT3.0图表浅色主题
- ICT3.0图表深色主题
- 华为云图表浅色主题
- HDesign1.1图表浅色主题
- HDesign1.1图表深色主题
- 质量&流程IT图表浅色主题
- 质量&流程IT图表深色主题


## 图表事件监听
Opentiny-Charts 的基础图表提供了 2 种事件监听处理方式，包括：
- 鼠标事件触发
- 代码事件触发


## 图表渲染完毕的回调
```javascript
chartIns.onRenderReady(callback);
```

## 图表适配屏幕宽度
Opentiny-Charts默认开启支持自动适应屏幕宽度，当您希望手动调用时，可以使用：
```javascript
chartIns.setResize();
```

## 获取ECharts原生实例
当您需要操作ECharts的原生实例时，可以使用如下方法获取：
```javascript
chartIns.getEchartsInstance();
```

## 图表卸载
```javascript
chartIns.uninstall();
```