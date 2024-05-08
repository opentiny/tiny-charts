<p align="center">
  <a href="https://opentiny.design/tiny-vue" target="_blank" rel="noopener noreferrer">
    <img alt="OpenTiny Logo" src="logo.svg" height="100" style="max-width:100%;">
  </a>
</p>

<p align="center">TinyCharts 是一套功能强大的前端可视化图表库，为Web开发者提供了40多个图表组件，支持主题定制、响应式和无障碍等丰富的能力，且完全兼容 ECharts 的 API。</p>

[English](README.md) | 简体中文

## 如何使用

### 1. 安装

1. 环境准备，首先确认安装了 Node.js，并确保 Node.js 版本是 10.13 或以上。使用 `node -v` 命令查看 node 版本
2. 查看组件库当前的版本 `npm show @opentiny/charts`
3. 使用 npm 安装组件库最新版本: `npm install @opentiny/charts@latest --save`


### 2. 引入和使用

```javascript
// 引用图表库
import TinyCharts from '@opentiny/charts';

// 创建图表实例
let chartIns = new TinyCharts();

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

## 参与贡献

如果你对我们的开源项目感兴趣，欢迎加入我们！🎉

参与贡献之前请先阅读[贡献指南](CONTRIBUTING.zh-CN.md)。

- 添加官方小助手微信 opentiny-official，加入技术交流群
- 加入邮件列表 opentiny@googlegroups.com

## 开源协议

[MIT](LICENSE)
