<p align="center">
  <a href="https://opentiny.design/tiny-vue" target="_blank" rel="noopener noreferrer">
    <img alt="OpenTiny Logo" src="logo.svg" height="100" style="max-width:100%;">
  </a>
</p>

<p align="center">TinyCharts is a powerful set of front-end visualization chart libraries, which provides more than 40 chart components for web developers. It supports a variety of capabilities such as theme customization, responsiveness, and accessibility, and is fully compatible with ECharts's API.</p>

English | [简体中文](README.zh-CN.md)

🌈 Features:

- 📦  Contains over 40 concise and easy-to-use chart components
- 🖖  One set of code supports Vue, Angular, and React frameworks simultaneously
- 🎨  Integrate multiple theme specifications and support theme customization
- 💡  Integrated features such as adaptive, performance improvement, accessibility, and scale optimization

## 🛠️ Usage

### 1. Installation

1. Prepare the environment. Ensure that Node.js is installed and the Node.js version is 10.13 or later. Run the `node -v` command to check the node version.
2. Check the current version of the library `npm show @opentiny/charts`.
3. Use the NPM to install the component library of the latest version: `npm install @opentiny/charts@latest --save`.

### 2. Import component

```javascript
// Refer to the chart library.
import TinyCharts from '@opentiny/charts';

// Create a chart instance.
let chartIns = new TinyCharts();

// Initialize the chart container.
let chartContainerDom =...;
chartIns.init(chartContainerDom);

// Enter the chart configuration items.
let chartOption = {...};
// Specify the chart type, such as LineChart, AreaChart, BarChart, PieChart, GaugeChart, RadarChart, ProcessChart, and BubbleChart.
// The English name of the chart type can be viewed in the menu bar on the left of the document.
let chartType = 'LineChart';
chartIns.setSimpleOption(chartType, chartOption);

// Start rendering.
chartIns.render();
```

## 🖥️ Development

```shell
git clone git@github.com:opentiny/tiny-charts.git
cd tiny-charts
npm i

# start project
npm run dev
```

打开浏览器访问：[http://localhost:8080/](http://localhost:8080/)

## Contributing

Welcome to join our OpenTiny community!🎉

If you don't know how to start, please read our [contributing guide](CONTRIBUTING.md).

- Add the official assistant WeChat `opentiny-official` and join the technical exchange group.
- Add to the mailing list `opentiny@googlegroups.com`
## License

[MIT](LICENSE)

