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
import {
  CHARTTYPENAME,
  BASICUNIT,
  BASICBARWIDTH,
  getDataNameSeries,
  getBackgroundSeries,
  getDataSeries,
  getDoubleBackgroundSeries,
  getDoubleDataNameSeries
} from './BaseOption';
import { getColor } from '../../util/color';
import merge from '../../util/merge';
import { getTextWidth } from '../../util/dom';
import chartToken from './chartToken';
import Theme from '../../feature/token';
import { getMarkLineSeries, SERIES_NAME } from './BaseOption'
import { isString } from '../../util/type';
import { percentToDecimal } from '../../util/math';


function setStateBarColor(data, stateList) {
  const min = stateList[0];
  const max = stateList[stateList.length - 1];
  const stateColorGroup = getThemeStateColorGroup()
  const successColor = stateColorGroup.success
  // 最大值和最小值相等代表就一个值
  if (min.value === max.value) {
    const resState = min.state;
    return data < min.value ? successColor : stateColorGroup[resState];
  } else {
    if (data < min.value) {
      return successColor;
    }
    if (data > max.value) {
      const resState = max.state;
      return stateColorGroup[resState];
    }
    const len = stateList.length;
    let color;
    for (let i = 0; i < len; i++) {
      if (stateList[i].value >= data) {
        const index = i > 0 ? i - 1 : 0;
        const resState = stateList[index].state;
        color = stateColorGroup[resState];
        break;
      }
    }
    return color;
  }
}

function getStateList(state) {
  // 值与状态对应数组
  const stateList = [];
  for (const k in state) {
    if (Object.hasOwnProperty.call(state, k)) {
      const stateItem = {
        state: k,
        value: state[k],
      };
      stateList.push(stateItem);
    }
  }
  stateList.sort((a, b) => a.value - b.value);
  return stateList
}

function getBarColor(data, iChartOpt, index) {
  // dataGroup暂不对外放，使用之后常规进度图的柱子颜色应用一个颜色
  const { state, color, dataGroup = false } = iChartOpt;
  if (state) {
    const stateList = getStateList(state)
    return setStateBarColor(data, stateList);
  } else {
    return getColor(color, dataGroup ? 0 : index)
  }
}

function getMarkValue(value, dataSet) {
  if (!value) return dataSet.maxValue / 2
  if (isString(value)) {
    return value.endsWith('%') ? dataSet.maxValue * percentToDecimal(value) : parseInt(value)
  }
  return value
}

function getThemeStateColorGroup() {
  const { colorState: { colorError, colorAlert, colorWarning, colorSuccess } } = Theme.config
  const stateColorGroup = {
    error: colorError,
    warning: colorAlert,
    subwarning: colorWarning,
    success: colorSuccess,
  }
  return stateColorGroup
}

function getThemeStatusColor(status = 'success') {
  const stateColorGroup = getThemeStateColorGroup()
  return stateColorGroup[status]
}

function getMarkColor(dataItem, markVal, markLine) {
  const { status = 'success', color } = markLine
  const data = dataItem._initValue ?? dataItem.value
  if (data && data > markVal) {
    return '#FFFFFF'
  }
  if (color) return color
  const statusColor = getThemeStatusColor(status)
  return statusColor
}

function setMarkLine(series, iChartOpt, dataSet, stack) {
  if (stack) return
  const { markLine, barWidth } = iChartOpt
  if (!markLine) return
  const markSeries = getMarkLineSeries()
  const markValue = getMarkValue(markLine.value, dataSet)
  const data = dataSet.barData.map(item => {
    const markColor = getMarkColor(item, markValue, markLine)
    return {
      name: item.name,
      value: markValue,
      itemStyle: {
        color: markColor
      }
    }
  })
  if (barWidth) {
    markSeries.symbolSize = [2, barWidth / 2,]
  }
  markSeries.data = data
  series.push(markSeries)
}

function createPlaceholderArray(length, fillVal) {
  return new Array(length).fill(fillVal);
}

function setStackBgLabelFormatter(params, dataSet, iChartOpt) {
  // 系列名称为null不显示文本(数据缺省功能)
  const name = dataSet.seriesName[params.dataIndex]
  if (name === null || name === undefined) return ''
  // 兼容之前暴露的自定义右侧文本显示的功能，计划后期去除
  if (iChartOpt.text && iChartOpt.text.labelText) return iChartOpt.text.labelText[params.dataIndex];
  if (iChartOpt.unit) return `${dataSet.sumValue[params.dataIndex]}${iChartOpt.unit}`;
  return `${dataSet.sumValue[params.dataIndex]}`;
}

function setBgLabelFormatter(params, dataSet, iChartOpt, stack) {
  if (stack) return setStackBgLabelFormatter(params, dataSet, iChartOpt)
  const innerVal = dataSet.barData[params.dataIndex]._initValue ?? dataSet.barData[params.dataIndex].value;
  if (innerVal === null || innerVal === undefined) return '';
  const innerUnit = iChartOpt.unit || iChartOpt.unit === '' ? iChartOpt.unit : BASICUNIT;
  return `${innerVal}${innerUnit}`;
}

function setText(bgSeries, dataSet, iChartOpt, stack) {
  if (iChartOpt.text) {
    merge(bgSeries.label, iChartOpt.text);
    const { formatter } = iChartOpt.text;
    if (stack) return
    // 右侧为背景的lable为了让用户自定义的formatter获取的params获得中间数据的value去做了内部覆盖处理
    if (formatter) {
      bgSeries.label.formatter = params => {
        const { dataIndex } = params;
        const value = dataSet.barData[dataIndex]._initValue ?? dataSet.barData[dataIndex].value;
        const inerParams = {
          ...params,
          value,
          data: value,
        };
        return formatter(inerParams);
      };
    }
  }
}

// 设置占位用的数据名称和背景series
function setPlaceholderSeries(series, dataSet, iChartOpt, stack) {
  const dataNumber = stack ? dataSet.seriesName.length : dataSet.barData.length
  const nameSeries = getDataNameSeries()
  nameSeries.data = createPlaceholderArray(dataNumber, 0)
  // 标题文本显示省略
  if (iChartOpt.title) merge(nameSeries.label, iChartOpt.title);
  const bgSeries = getBackgroundSeries()
  bgSeries.data = createPlaceholderArray(dataNumber, dataSet.maxValue)
  bgSeries.label.formatter = params => setBgLabelFormatter(params, dataSet, iChartOpt, stack)
  setText(bgSeries, dataSet, iChartOpt, stack)
  series.push(nameSeries)
  series.push(bgSeries)
}

function setDataSeries(series, dataSet, iChartOpt, stack) {
  if (stack) {
    // 处理堆叠情况下图表的两端圆角情况,在数据项中加入圆角的配置
    setStackBordRadius(dataSet);
    dataSet.barData.forEach((item, index) => {
      const unitSeries = getDataSeries()
      unitSeries.data = item;
      unitSeries.itemStyle.borderRadius = undefined;
      unitSeries.itemStyle.borderWidth = chartToken.borderWidth;
      unitSeries.itemStyle.borderColor = chartToken.borderColor;
      unitSeries.itemStyle.color = getColor(iChartOpt.color, index)
      //堆叠柱状图需要重新赋值name
      unitSeries.name = dataSet.barName[index];
      unitSeries.stack = 'total';
      unitSeries.label.formatter = params => {
        const value = params.data._initValue ?? params.data.value;
        return value || '';
      };
      unitSeries.label.show = true;
      // 中间的图元的文本样式
      if (iChartOpt.label) merge(unitSeries.label, iChartOpt.label);
      series.push(unitSeries);
    });
    return
  }
  const dataSeries = getDataSeries()
  dataSeries.data = dataSet.barData;
  dataSeries.itemStyle.color = params => {
    const dataItem = dataSet.barData[params.dataIndex]
    const data = dataItem._initValue ?? dataItem.value
    return getBarColor(data, iChartOpt, params.dataIndex)
  };
  series.push(dataSeries)
}

function setStackBordRadius(dataSet) {
  const { barData, seriesName } = dataSet
  const borderRadius = chartToken.borderRadius
  // 每行的总数据
  const total = [];
  for (let row = 0; row < seriesName.length; row++) {
    const rowData = [];
    barData.forEach((item, col) => {
      if (item[row].value) {
        const dataInfo = {
          col,
          row,
          value: item[row].value,
        };
        rowData.push(dataInfo);
      }
    });
    total.push(rowData);
  }
  total.forEach(to => {
    const tolen = to.length;
    if (tolen !== 0) {
      // 每行只有一个有效数据
      if (tolen === 1) {
        barData[to[0].col][to[0].row] = {
          ...barData[to[0].col][to[0].row],
          value: barData[to[0].col][to[0].row].value,
          itemStyle: {
            borderRadius,
          },
        };
      } else {
        barData[to[0].col][to[0].row] = {
          ...barData[to[0].col][to[0].row],
          value: barData[to[0].col][to[0].row].value,
          itemStyle: {
            borderRadius: [borderRadius, 0, 0, borderRadius],
          },
        };
        barData[to[to.length - 1].col][to[to.length - 1].row] = {
          ...barData[to[to.length - 1].col][to[to.length - 1].row],
          value: barData[to[to.length - 1].col][to[to.length - 1].row].value,
          itemStyle: {
            borderRadius: [0, borderRadius, borderRadius, 0],
          },
        };
      }
    }
  });
}



function handleDoubleLabel(params, iChartOpt, dataSet, index) {
  const { name, dataIndex } = params;
  const innerVal = dataSet.barData[index][dataIndex]._initValue || dataSet.barData[index][dataIndex].value;
  if (innerVal === null || innerVal === undefined) return '';
  const innerUnit = iChartOpt.unit || iChartOpt.unit === '' ? iChartOpt.unit : BASICUNIT;
  const val = `${innerVal}${innerUnit}`;
  return `{name|${name}}\n{value|${val}}`;
}

function getMaxValLength(dataSet, iChartOpt, index) {
  let maxLength = 0;
  const innerUnit = iChartOpt.unit || iChartOpt.unit === '' ? iChartOpt.unit : BASICUNIT;
  dataSet.barData[index].forEach(item => {
    const val = `${item._initValue || item.value}${innerUnit}`;
    const len = getTextWidth(val, 14);
    if (len >= maxLength) maxLength = len;
  });
  return maxLength;
}


function setBarWidth(baseOpt, iChartOpt) {
  const { name } = iChartOpt;
  const barWidth = iChartOpt.barWidth || BASICBARWIDTH[name];
  baseOpt.series.forEach(serie => {
    if (serie.name !== SERIES_NAME.markLine) {
      serie.barWidth = barWidth;
    }
  });
}

function setDoublePlaceholderSeries(series, dataSet, iChartOpt, left, index) {
  const bgSeries = getDoubleBackgroundSeries(left)
  bgSeries.data = createPlaceholderArray(dataSet.barData[index].length, dataSet.maxValue)
  bgSeries.label.formatter = params => handleDoubleLabel(params, iChartOpt, dataSet, index);
  const coefficent = left ? -1 : 1
  const valWidth = getMaxValLength(dataSet, iChartOpt, index) * coefficent
  const offsetX = valWidth + 10 * coefficent
  bgSeries.label.offset = [offsetX, 9];
  series.push(bgSeries)
}

function setDoubleDataSeries(series, dataSet, iChartOpt, left, index) {
  const dataSeries = getDoubleDataNameSeries(left)
  dataSeries.data = dataSet.barData[index];
  dataSeries.name = dataSet.seriesName[index];
  dataSeries.itemStyle.color = getColor(iChartOpt.color, index);
  series.push(dataSeries)
}

function setDoubleSideSeries(series, iChartOpt, dataSet) {
  dataSet.seriesName.forEach((item, itemIndex) => {
    const left = itemIndex % 2 === 0
    setDoublePlaceholderSeries(series, dataSet, iChartOpt, left, itemIndex)
    setDoubleDataSeries(series, dataSet, iChartOpt, left, itemIndex)
  })
}

function setCommonSeries(series, iChartOpt, dataSet) {
  const stack = iChartOpt.name === CHARTTYPENAME.StackProcessBarChart
  setPlaceholderSeries(series, dataSet, iChartOpt, stack)
  setDataSeries(series, dataSet, iChartOpt, stack)
  setMarkLine(series, iChartOpt, dataSet, stack)
}

function handleSeries(baseOpt, iChartOpt, dataSet, doubleSide) {
  const series = []
  doubleSide ? setDoubleSideSeries(series, iChartOpt, dataSet) : setCommonSeries(series, iChartOpt, dataSet)
  baseOpt.series = series
  setBarWidth(baseOpt, iChartOpt);
}
export { setStateBarColor, getStateList, getBarColor };
export default handleSeries;
