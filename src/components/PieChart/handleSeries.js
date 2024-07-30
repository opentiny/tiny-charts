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
import merge from '../../util/merge';
import setLabel from './handleLabel';
import chartToken from './chartToken';
import cloneDeep from '../../util/cloneDeep';
import { percentToDecimal } from '../../util/math';
import { isArray, isNumber, isString } from '../../util/type';

export const seriesInit = () => {
  return {
    type: 'pie',
    roundCap: true,
    radius: ['0%', '50%'],
    center: ['50%', '45%'],
    avoidLabelOverlap: true,
    itemStyle: {
      borderWidth: chartToken.borderWidth,
      borderColor: chartToken.borderColor,
      borderRadius: chartToken.borderRadius,
    },
    selectedMode: false,
    roseType: false,
    label: {},
    labelLine: {},
    data: [],
  };
};

/**
 * 根据参数计算出圆盘图的半径
 */
function setPieRadius(pieType, radius) {
  if (radius) {
    return radius;
  } else {
    let radius = [];
    switch (pieType) {
      case 'pie':
        radius = ['0%', '50%'];
        break;
      case 'circle':
        radius = ['44%', '50%'];
        break;
      case 'multi-circle':
        radius = ['44%', '50%'];
        break;
      default:
        radius = ['0%', '50%'];
        break;
    }
    return radius;
  }
}

/**
 * 数据为零时添加背景
 */
function handleEmptyData(data, series, center, radius, stillShowZeroSum, legend, colorArr) {
  const total = data.reduce((pre, cur) => {
    pre = pre + cur.value;
    return pre;
  }, 0);

  if (total === 0) {
    if (stillShowZeroSum === false) {
      series.forEach(item => {
        item.label = false;
        item.itemStyle.borderWidth = chartToken.borderWidthShowZero;
      });
      series.push({
        type: 'pie',
        radius,
        center,
        emptyCircleStyle: {
          color: chartToken.colorShowZero,
        },
        silent: true,
        animation: false,
      });
    } else {
      (legend.data !== undefined) && legend.data.forEach((item, index) => {
        item.itemStyle = { color: colorArr[index] };
      });
      series.forEach(item => {
        item.animation = false;
        item.color = chartToken.colorShowZero;
      });
    }
  }
}

function getNewRadius(radius, chartInstance) {
  if (isNumber(radius)) {
    return radius;
  } else if (isString(radius)) {
    return radius.endsWith('%') ? percentToDecimal(radius) * (Math.min(chartInstance.getWidth(), chartInstance.getHeight()) / 2) : parseFloat(radius);
  } else if (isArray(radius)) {
    const decimalRadiusArr = radius.map(r => isNumber(r) ? r / Math.min(chartInstance.getWidth(), chartInstance.getHeight()) : r.endsWith('%') ? percentToDecimal(r) : parseFloat(r));
    const decimalRadius = decimalRadiusArr[0] === 0 ? decimalRadiusArr[1] : decimalRadiusArr[0];
    return decimalRadius * (Math.min(chartInstance.getWidth(), chartInstance.getHeight()) / 2);
  }
}

// 余弦定理计算最小1px时的角度
function minAngle(radius, chartInstance) {
  const newRadius = getNewRadius(radius, chartInstance);
  const cosA = (newRadius ** 2 + newRadius ** 2 - 3 ** 2) / (2 * newRadius * newRadius);
  const angleAInRadians = Math.acos(cosA);
  const minAngle = angleAInRadians * (180 / Math.PI);
  return minAngle;
}

// 合并默认值seriesInit到series
function mergeDefaultSeries(seriesUnit) {
  for (const key in seriesInit()) {
    if (Object.hasOwnProperty.call(seriesInit(), key)) {
      if (key === 'itemStyle') {
        const series = cloneDeep(seriesInit());
        seriesUnit[key] = merge(series.itemStyle, seriesUnit.itemStyle);
      }
      if (seriesUnit[key] === undefined) {
        seriesUnit[key] = seriesInit()[key];
      }
    }
  }
}

// 给某个data指定的颜色
function setColor(iChartOption) {
  const data = iChartOption.data;
  let initColorGroup = iChartOption.initColor.concat();
  const colorData = iChartOption.dataRules && iChartOption.dataRules.color;
  if (colorData && isArray(initColorGroup)) {
    for (let key in colorData) {
      data.forEach((item, index) => {
        if (item.name === key && initColorGroup[index] && colorData[key]) {
          initColorGroup[index] = colorData[key];
        }
      })
    }
  }
  iChartOption.color = initColorGroup;
}

/**
 * 组装echarts所需要的series
 * @param {数据} data
 * @returns
 */

const config = [
  'label',
  'labelLine',
  'itemStyle',
  'radius',
  'center',
  'silent',
  'emphasis',
  'stillShowZeroSum',
  'selectedMode',
  'roseType',
  'minAngle',
];

function handleSeries(pieType, iChartOption, chartInstance, position, legend) {
  const { data, stillShowZeroSum } = iChartOption;
  position = position || {};
  iChartOption.center = position?.center;
  iChartOption.radius = position?.radius;

  // 组装series数据
  let series = [];
  let selfSeries = iChartOption.series;
  if (selfSeries === undefined) {
    selfSeries = [{}];
  }
  // 保留初始的颜色数组
  iChartOption.initColor = iChartOption.color;
  // 给某个data指定的颜色
  setColor(iChartOption);
  selfSeries.forEach(seriesItem => {
    const seriesUnit = seriesItem;
    const temp = cloneDeep(iChartOption);
    // 处理属性的优先级
    config.forEach(name => {
      const existValue = merge(temp[name], seriesUnit[name]);
      if (existValue !== undefined) {
        seriesUnit[name] = existValue;
      }
    });
    seriesUnit.data = seriesUnit.data || iChartOption.data;
    seriesUnit.radius = setPieRadius(pieType, seriesUnit.radius);
    seriesUnit.minAngle =
      seriesUnit.minAngle !== undefined ? seriesUnit.minAngle : minAngle(seriesUnit.radius, chartInstance);
    setLabel(seriesUnit, seriesUnit.label, seriesUnit.data);
    // 默认样式合并
    mergeDefaultSeries(seriesUnit);
  });
  // 数据和为0
  handleEmptyData(data, selfSeries, selfSeries[0].center, selfSeries[0].radius, stillShowZeroSum, legend, iChartOption.color);
  series = selfSeries;
  return series;
}

export default handleSeries;
