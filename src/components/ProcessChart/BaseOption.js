/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import chartToken from "./chartToken";

// 进度图的图表类型名称
const CHARTTYPENAME = {
  ProcessBarChart: 'ProcessBarChart',
  StackProcessBarChart: 'StackProcessBarChart',
};
// 标识是否为双向进度图
const PROCESSBARTYPE = 'double-sides';
// 基础进度图的默认单位
const BASICUNIT = '%'

const BASICBARWIDTH = {
  ProcessBarChart: 8,
  StackProcessBarChart: 16,
}

const SERIES_NAME = {
  markLine: 'markLine',
  background: 'background',
  seriesName: 'seriesName'
}

// 进度图数据名称的series
function getDataNameSeries() {
  return {
    // 用来做前面的文本显示
    name: SERIES_NAME.seriesName,
    type: 'bar',
    barWidth: 8,
    barGap: '-100%',
    // 这条series不响应鼠标事件
    silent: true,
    label: {
      show: true,
      color: chartToken.nameColor,
      position: [0, -20],
      fontSize: chartToken.fontSize,
      formatter(params) {
        return params.name === 'null' || params.name === 'undefined' ? '' : params.name;
      },
    },
    data: undefined,
  }
}
// 进度图背景柱子的series
function getBackgroundSeries() {
  return {
    // 底色 +右侧label文本显示
    name: SERIES_NAME.background,
    type: 'bar',
    barWidth: 8,
    barGap: '-100%',
    itemStyle: {
      color: chartToken.itemBgEmpty,
      borderRadius: chartToken.borderRadius,
    },
    cursor: 'auto',
    emphasis: {
      disabled: true,
    },
    label: {
      show: true,
      color: chartToken.labelColor,
      offset: [0, -24],
      position: 'insideTopRight',
      fontSize: chartToken.fontSize,
      formatter: undefined,
    },
    data: undefined,
  }
}

// 用于显示基础进度图的实际数据的series
function getDataSeries() {
  return {
    name: 'data',
    type: 'bar',
    zlevel: 2,
    barWidth: 8,
    cursor: 'pointer',
    itemStyle: {
      borderRadius: chartToken.borderRadius,
      color: undefined,
    },
    data: undefined,
    label: {
      show: false,
      fontSize: chartToken.labelFontSize,
      color: chartToken.labelColor,
      formatter: undefined,
    },
  }
}

function getDoubleBackgroundSeries(left = true) {
  return {
    // 左侧底色
    name: SERIES_NAME.background,
    type: 'bar',
    xAxisIndex: left ? 0 : 1,
    yAxisIndex: left ? 0 : 1,
    barWidth: 8,
    barGap: '-100%',
    itemStyle: {
      color: chartToken.itemBgEmpty,
      borderRadius: left ? [chartToken.borderRadius, 0, 0, chartToken.borderRadius] : [0, chartToken.borderRadius, chartToken.borderRadius, 0],
    },
    emphasis: {
      disabled: true,
    },
    label: {
      show: true,
      offset: [0, 0],
      position: left ? 'insideBottomLeft' : 'insideBottomRight',
      formatter: undefined,
      rich: {
        name: {
          fontSize: chartToken.fontSize,
          color: chartToken.nameColor,
          lineHeight: 14,
          padding: [0, 0, 20, 0],
        },
        value: {
          fontSize: chartToken.fontSize,
          color: chartToken.labelColor,
          fontWeight: 'bold',
          align: left ? 'left' : 'right',
        },
      },
    },
    data: undefined,
  }
}

function getDoubleDataNameSeries(left = true) {
  return {
    name: undefined,
    xAxisIndex: left ? 0 : 1,
    yAxisIndex: left ? 0 : 1,
    type: 'bar',
    zlevel: 2,
    barWidth: 8,
    itemStyle: {
      borderRadius: left ? [chartToken.borderRadius, 0, 0, chartToken.borderRadius] : [0, chartToken.borderRadius, chartToken.borderRadius, 0],
      color: undefined,
    },
    data: undefined,
    emphasis: {
      disabled: true,
    },
    label: {
      show: false,
    },
  }
}

// 双向进度图的基础series
const DOUBLEBASICOPTION = {
  grid: [
    // 左边的坐标系
    {
      left: '4%',
      width: '46%',
      top: 0,
      bottom: 0,
      containLabel: false,
    },
    // 右边的坐标系
    {
      right: '4%',
      width: '46%',
      top: 0,
      bottom: 0,
      containLabel: false,
    },
  ],
  xAxis: [
    // 左侧的x轴
    {
      show: true,
      type: 'value',
      gridIndex: 0,
      inverse: true,
      axisLabel: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          type: [8, 4],
        },
      },
      max: 'dataMax',
    },
    // 右侧的x轴
    {
      show: true,
      type: 'value',
      gridIndex: 1,
      splitLine: {
        lineStyle: {
          type: [8, 4],
        },
      },
      axisLabel: {
        show: false,
      },
      max: 'dataMax',
    },
  ],
  yAxis: [
    {
      // 左侧的y轴
      type: 'category',
      gridIndex: 0,
      show: true,
      inverse: true,
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: undefined,
        },
      },
      position: 'right',
      data: undefined,
    },
    {
      // 右侧的y轴
      type: 'category',
      gridIndex: 1,
      inverse: true,
      show: false,
      data: undefined,
    },
  ],
};


// 标线的series
function getMarkLineSeries() {
  return {
    type: 'scatter',
    symbol: 'roundRect',
    name: SERIES_NAME.markLine,
    silent: true,
    symbolSize: [2, 4],
    zlevel: 999,
    data: undefined,
    color: undefined,
  }
}


export {
  PROCESSBARTYPE,
  CHARTTYPENAME,
  BASICUNIT,
  DOUBLEBASICOPTION,
  BASICBARWIDTH,
  SERIES_NAME,
  getMarkLineSeries,
  getDataNameSeries,
  getBackgroundSeries,
  getDataSeries,
  getDoubleBackgroundSeries,
  getDoubleDataNameSeries
}