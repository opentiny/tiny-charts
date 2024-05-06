# Opentiny-Charts
English | [简体中文](README.zh-CN.md)

## Web Front-End Framework Technology Stack

- Higher-Order Charts: RiverChart, HoneycombChart, TerraceChart, TimelineChart, OrganizationChart, SnowFlakeChart, MilestoneChart 
They are to be referenced as required when used without relying on other libraries.

## Basic Learning

## Component Library Installation

1. Prepare the environment. Ensure that NodeJs is installed and the NodeJs version is 10.13 or later. Run the `node -v` command to check the node version.
2. Check the current version of the library `npm show @opentiny/charts`.
3. Use the NPM to install the component library of the latest version: `npm install @opentiny/charts@latest --save`.


## Use Cases

```javascript
// Refer to the chart library.
import HuiCharts from '@opentiny/charts';

// Create a chart instance.
let chartIns = new HuiCharts();

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

## Refresh Chart Data
When you want to refresh a rendered chart, you can use the following command to refresh configuration items and data:
```javascript
// New configuration item in object format.
let newChartOption = {...};
chartIns.refresh(newChartOption);
```
If you want to just refresh the data, you can use:
```javascript
// New data in array format.
let newData = [...];
chartIns.refreshData(newData);
```

## Chart Data Status
Opentiny-Charts currently has five built-in data states, including:
- loading: data is being loaded.
- error: data loading failed.
- empty: data is empty.
- stageEmpty: stage data is empty.
- state: custom status.

## Chart Theme
Opentiny-Charts currently has 7 skin-themed shades built in, including:
- ICT3.0 Light Theme
- ICT3.0 Dark theme
- HUAWEI CLOUD Light Theme
- HDesign 1.1 Light Theme
- HDesign 1.1 Dark Theme
- Quality & BP IT Light Theme
- Quality & BP IT Dark Theme


## Chart Event Listening
The basic diagram of Opentiny-Charts provides two types of event listening processing methods, including:
- Mouse event triggering
- Code event triggering


## Callback after Chart Rendering
```javascript
chartIns.onRenderReady(callback);
```

## Chart Adaptation Screen Width
By default, Opentiny-Charts is enabled to automatically adapt to the screen width. If you want to manually invoke Opentiny-Charts, run the following command:
```javascript
chartIns.setResize();
```

## Obtain the native instance of ECharts.
To obtain a native ECharts instance, perform the following operation:
```javascript
chartIns.getEchartsInstance();
```

## Uninstallation
```javascript
chartIns.uninstall();
```