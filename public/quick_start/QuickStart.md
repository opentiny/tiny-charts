# {{VITE_BASECOPYRIGHTS}} 

## Web 前端框架技术栈
- 基础图表：依赖于 ECharts： 5.4.3
- 高阶图表：甘特图、流程图、河流图、蜂窝图、波纹图、梯田图、时间轴、组织关系图、雪花图、里程碑图。使用时要按需引用，不依赖其他库。

## 组件库安装

1. 环境准备，首先确认安装了 NodeJs，并确保 NodeJs 版本是 10.13 或以上。使用`node -v`命令查看 node 版本
2. 查看组件库当前的版本 `npm show {{VITE_BASECOPYRIGHTSPAT}}`
3. 安装，使用 npm 安装组件库最新版本:`npm install {{VITE_BASECOPYRIGHTSPAT}}@latest --save`


## 使用案例

```javascript
// 引用图表库
import HuiCharts from '{{VITE_BASECOPYRIGHTSPAT}}';

// 创建图表容器
<div id="main" style="width: 600px;height:400px;"></div>

// 创建图表实例
let chartIns = new HuiCharts();

// 初始化图表容器
let chartContainerDom = document.getElementById('main');
chartIns.init(chartContainerDom);

// 填入图表配置项
let chartOption = {
    theme: 'hdesign-light',
    padding: [50, 30, 50, 20],
    legend: {
        show: true,
        icon: 'line'
    },
    data: [
        { 'Month': 'Jan', 'Domestics': 33, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestics': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestics': 31, 'Abroad': 20 },
        { 'Month': 'Apr', 'Domestics': 30, 'Abroad': 15 },
        { 'Month': 'May', 'Domestics': 37, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestics': 36, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestics': 42, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestics': 22, 'Abroad': 12 },
        { 'Month': 'Sep', 'Domestics': 17, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestics': 40, 'Abroad': 33 },
        { 'Month': 'Nov', 'Domestics': 42, 'Abroad': 22 },
        { 'Month': 'Dec', 'Domestics': 32, 'Abroad': 11 }
    ],
    xAxis: {
        data: 'Month',
    },
    yAxis: {
        name: 'Percentage(%)'
    }
};
// 指定使用图表类型：LineChart、AreaChart、BarChart、PieChart、GaugeChart、RadarChart、ProcessChart、BubbleChart等
// 图表类型的英文名称可以在文档左侧菜单栏看到
let chartType = 'LineChart';
chartIns.setSimpleOption(chartType, chartOption);

// 开始渲染
chartIns.render();
```