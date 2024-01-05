# 高阶图表

HUI-Charts 提供了若干高阶图表，包括：

- 流程图
- 甘特图
- 蜂窝图
- 波浪图
- 组织关系图

高阶图表为自研编写，使用时需按需引入。
为了保持与基础图表的接口一致性，所有高阶图表的使用方法与基础图表一致，下面以波浪图为例：

## 使用高阶图表

```javascript
// 引用图表库
import HuiCharts from '@hui/charts';
// 按需引用波浪图
import WaveChart from '@hui/charts/esm/WaveChart'；

// 创建图表实例
let chartIns = new HuiCharts();

// 初始化图表容器
let chartContainerDom = ...;
chartIns.init(chartContainerDom);

// 填入图表配置项
let chartOption = {...};
// 第一个参数必须为按需引入进来的 WaveChart
chartIns.setSimpleOption(WaveChart, chartOption);

// 开始渲染
chartIns.render();
```

## 高阶图表数据刷新

当您要刷新已经渲染完毕的图表新时，如果您想刷配置项和数据，可以使用：
```javascript
// 新的配置项
let newChartOption = {...};
chartIns.refresh(newChartOption);
```

如果您想仅仅刷新数据，可以使用：

```javascript
// 新的数据，具体格式根据各个图表而异
let newData = [...];
chartIns.refreshData(newData);
```

## 高阶图表数据状态
HUI-Charts 目前内置了 5 种数据状态，包括:
- loading：数据加载中
- error：数据加载失败
- empty：数据为空
- stageEmpty：阶段数据为空
- state：自定义状态

</br>

## 高阶图表渲染完毕的回调
```javascript
chartIns.onRenderReady(callback);
```

## 高阶图表适配屏幕宽度
HUI-Charts 默认开启支持自动适应屏幕宽度，当您希望手动调用时，可以使用：
```javascript
chartIns.setResize();
```

## 高阶图表卸载
```javascript
chartIns.uninstall();
```

