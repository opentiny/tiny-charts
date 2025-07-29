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
        { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 33 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 11 }
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