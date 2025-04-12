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
import chartToken from './chartToken';
import { emptySeriesUnit } from '../GaugeChart/handleSeries';
import cloneDeep from '../../util/cloneDeep';
import Token from '../../feature/token';
import { isArray, isNumber, isString } from '../../util/type';
import { percentToDecimal } from '../../util/math';

function getSeriesInit() {
  return {
    type: 'bar',
    coordinateSystem: 'polar',
    emphasis: {
      focus: 'series',
    },
    animation: false,
    stack: 'total',
    showBackground: true,
    backgroundStyle: {
      color: '',
    },
    data: [],
  };
}

function setSeriesUnit(data, index, itemStyle, seriesData, iChartOption){
  const seriesUnit = getSeriesInit();
  seriesUnit.name = data.name;
  seriesUnit.data = seriesData[index];
  seriesUnit.itemStyle = data.itemStyle || itemStyle || {};
  seriesUnit.backgroundStyle.color = chartToken.background;
  // seriesUnit.barWidth = barWidth;
  seriesUnit.emphasis = iChartOption.emphasis;
  return seriesUnit;
}

export function setSeries(seriesData, iChartOption, chartInstance) {
  const { data, itemStyle, markLine } = iChartOption;
  const series = [];
  const barWidth = Number(iChartOption.barWidth) || chartToken.barWidth;
  data.forEach((item, i) => {
    const seriesUnit = setSeriesUnit(item, i, itemStyle, seriesData, iChartOption)
    series.push(seriesUnit);
  });
  // 没有数据时显示空白圆
  if(!data || data.length === 0){
    const bgData = { value: 0 };
    const bgsSeriesData = [[0]];
    const seriesUnit = setSeriesUnit(bgData, 0, itemStyle, bgsSeriesData, iChartOption)
    series.push(seriesUnit);
  }
  if (!itemStyle?.borderRadius) {
    setBordRadius(series, iChartOption, barWidth)
  }
  // 阈值线
  if (markLine) {
    const markLineUnit = setMarkLine(data, markLine, iChartOption, chartInstance, barWidth);
    series.push(markLineUnit);
  }
  return series;
}

function setBordRadius(series, iChartOption, barWidth) {
  const { data } = iChartOption;
  const borderRadius = barWidth / 2;
  const len = series.length;
  if( !len || !series ) return;
  if (len === 1) {
    series[0].itemStyle.borderRadius = borderRadius
  } else {
    series[0].itemStyle.borderRadius = [borderRadius, 0, borderRadius, 0];
    let lastPosition = len - 1;
    //最后一个值不存在时纠正圆角显示位置
    if (!data[len - 1].value) {
      lastPosition = len - 2;
    }
    series[lastPosition].itemStyle.borderRadius = [0, borderRadius, 0, borderRadius];
  }
}

export function setRadius(baseOption, chartInstance, iChartOption) {
  let radius = iChartOption.position?.radius || '50%';
  const barWidth = Number(iChartOption.barWidth) || chartToken.barWidth;
  const width = chartInstance.getWidth();
  const height = chartInstance.getHeight();
  const canvasRadius = Math.min(width / 2, height / 2);
  //内圆-4为纠正为实际显示尺寸
  if (isNumber(radius)) {
    baseOption.polar.radius = [radius - barWidth - 4, radius];
  } else if (isString(radius)) {
    let newRadius = radius.includes('%') ? percentToDecimal(radius) * Math.min(chartInstance.getWidth() / 2, chartInstance.getHeight() / 2) : parseFloat(radius);
    baseOption.polar.radius = [newRadius - barWidth - 4, newRadius];
  } else {
    if (radius.length === 1) {
      // 数组1项时，根据barWidth补齐内圆
      let outerRing = radius[0].includes('%') ? percentToDecimal(radius[0]) * canvasRadius : parseFloat(radius[0]);
      baseOption.polar.radius = [outerRing - barWidth - 4, radius[0]];
    } else {
      baseOption.polar.radius = radius;
    }
  }
}

function getThemeStatusColor(status = 'success') {
  const { colorError, colorAlert, colorWarning, colorSuccess } = Token.config.colorState
  const statusColorGroup = {
    error: colorError,
    alert: colorAlert,
    warning: colorWarning,
    success: colorSuccess
  }
  return statusColorGroup[status]
}

// 添加一个空series，使用该空series的pointer来作为阈值线的红线
function setMarkLine(data, markLine, iChartOption, chartInstance, barWidth) {
  let { color, status = 'success', value } = markLine;
  const marklineColor = getThemeStatusColor(status);
  const temp = cloneDeep(emptySeriesUnit);
  const markLineUnit = cloneDeep(temp);
  const sumValue = data.reduce((a, b) => a + b.value, 0)
  if (sumValue > value) {
    color = '#FFFFFF'
  }
  markLineUnit.name = 'markLine';
  markLineUnit.min = iChartOption.min || 0;
  markLineUnit.max = iChartOption.max || 100;
  markLineUnit.startAngle = 90;
  markLineUnit.endAngle = -270;
  markLineUnit.center = iChartOption.position.center || ['50%', '50%'];
  markLineUnit.radius = iChartOption.position.radius || '50%';
  markLineUnit.animation = false;
  let markLineParameter = computeMarkLine(markLineUnit.radius, barWidth, chartInstance) || {};
  markLineUnit.pointer = {
    icon: 'path://M0 0 L30 0 L30 100 L0 100 Z',
    width: 2,
    length: (markLineParameter.actualBarWidth || barWidth) / 2,
    offsetCenter: iChartOption.markLine.offsetCenter || [0, -markLineParameter.position],
    itemStyle: {
      color: color || marklineColor,
    }
  };
  markLineUnit.data = [{ value: markLine.value }];
  markLineUnit.silent = true;
  markLineUnit.zlevel = 2;
  return markLineUnit;
}

// 计算阈值线位置 
function computeMarkLine(radius, barWidth, chartInstance) {
  let position;
  let actualBarWidth;
  const width = chartInstance.getWidth();
  const height = chartInstance.getHeight();
  const canvasRadius = Math.min(width / 2, height / 2);
  // 位置-2为纠正阈值线的位置
  if (isNumber(radius)) {
    position = radius - 2 - (barWidth / 4) * 3
  } else if (isString(radius)) {
    radius = radius.includes('%') ? percentToDecimal(radius) * canvasRadius : parseFloat(radius);
    position = radius - 2 - (barWidth / 4) * 3
  } else {
    if (radius.length === 1) {
      let outerRing = radius[0].includes('%') ? percentToDecimal(radius[0]) * canvasRadius : parseFloat(radius[0]);
      position = outerRing - 2 - (barWidth / 4) * 3
    } else {
      // 数组2项时，根据内外圆大小计算出位置以及阈值线的长度
      let outerRing = radius[1].includes('%') ? percentToDecimal(radius[1]) * canvasRadius : parseFloat(radius[1]);
      let innerRing = radius[0].includes('%') ? percentToDecimal(radius[0]) * canvasRadius : parseFloat(radius[0]);
      actualBarWidth = outerRing - innerRing - 4;
      position = outerRing - 2 - (actualBarWidth / 4) * 3
    }
  }
  return { position, actualBarWidth }
}

// 更新阈值线位置
export function updateMarkLine(iChartOption, eChartOption, chartInstance) {
  let radius = iChartOption.position.radius || '50%';
  const barWidth = Number(iChartOption.barWidth) || chartToken.barWidth;
  const markLineParameter = computeMarkLine(radius, barWidth, chartInstance) || {};
  eChartOption.series.forEach(item => {
    if (item.name === 'markLine') {
      item.pointer.offsetCenter = iChartOption.markLine.offsetCenter || [0, -markLineParameter.position];
      item.pointer.length = (markLineParameter.actualBarWidth || barWidth) / 2
    }
  })
}