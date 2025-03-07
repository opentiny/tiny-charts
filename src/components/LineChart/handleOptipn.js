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
import cloneDeep from '../../util/cloneDeep';
import chartToken from './chartToken';
import { judgeFilterAreaSeries, getDataWidthNoObject } from './AreaChart/bottomArea';
import getTooltipContentHtmlStr, { validateName } from '../../option/config/tooltip/formatter'
import { isObject } from '../../util/type';
import { getColor } from '../../util/color';


// 给图例和x轴赋值
export function handleData(baseOpt, legendData, xAxisData) {
  if (!baseOpt.legend.data) {
    baseOpt.legend.data = legendData;
  }
  baseOpt.xAxis.forEach(item => {
    item.data = xAxisData;
  });
}

export function onlyOnePoint(baseOption) {
  baseOption.series.forEach(itemObj => {
    if (itemObj.data.length === 1) {
      itemObj.showSymbol = true;
    }
  });
}

function isNullValue(value) {
  return value === '' || value === undefined || value === null;
}

// 实现离散数据的markLine变色功能
function addDiscreteVisualMap(baseOption, iChartOption, actualSeriesIndex, seriesIndex, discreteVisualMap) {
  const { area } = iChartOption
  const { visualMap } = baseOption
  // 如果是面积图不做处理
  if (area) return
  if (visualMap && visualMap.lenth !== 0) {
    const newVisualMapItem = visualMap[seriesIndex] ? cloneDeep(visualMap[seriesIndex]) : null
    if (newVisualMapItem) {
      newVisualMapItem.seriesIndex = actualSeriesIndex
      discreteVisualMap.push(newVisualMapItem)
    }
  }
}

// 针对离散数据, 创建同名Series, 显示离散数据的单个点
export function discrete(iChartOption, baseOption) {
  // 创建同名Series
  if (iChartOption.discrete) {
    // 记录实际的真实数据产生的sereis的
    let actualSeriesIndex = baseOption.series.length - 1
    const discreteSeries = []
    const discreteVisualMap = []
    baseOption.series.forEach((series, seriesIndex) => {
      const newSeries = cloneDeep(series);
      newSeries.symbolSize = chartToken.symbolSizeSM;
      newSeries.itemStyle.borderWidth = chartToken.borderZero;
      newSeries.itemStyle.opacity = 1;
      newSeries.showSymbol = true;
      newSeries.showAllSymbol = true;
      newSeries.emphasis = {
        itemStyle: {
          opacity: 0,
        },
      };
      const discreteData = [];
      const seriesData = getDataWidthNoObject(newSeries.data)
      for (let index = 0; index < seriesData.length; index++) {
        const pre = seriesData[index - 1];
        const next = seriesData[index];
        const cur = seriesData[index + 1];
        if (!isNullValue(pre) || !isNullValue(cur)) {
          discreteData.push(null);
        } else {
          discreteData.push(next);
        }
      }
      newSeries.data = discreteData;
      actualSeriesIndex++
      addDiscreteVisualMap(baseOption, iChartOption, actualSeriesIndex, seriesIndex, discreteVisualMap)
      discreteSeries.push(newSeries)
    });
    baseOption.series = [...baseOption.series, ...discreteSeries]
    baseOption.visualMap = [...baseOption.visualMap, ...discreteVisualMap]
  }
}

function defaultFormatter(params, color) {
  const config = {
    title: '',
    children: []
  }
  params.forEach((item, index) => {
    if (index === 0) {
      config.title = item.name
    }
    const iconColor = validateName(item.value) ? item.color : getColor(color, item.seriesIndex)
    const dataItem = {
      name: item.seriesName,
      value: item.value,
      iconColor,
    }
    config.children.push(dataItem)
  });
  return getTooltipContentHtmlStr(config)
}

// 阈值场景将data中的数据转为obj，需要转换回来
function coverObjDataToInit(params) {
  if (params && params.length !== 0) {
    return params.map(item => {
      const data = isObject(item.data) ? item.data.value : item.data
      return { ...item, data }
    })
  }
  return params
}

export function setTooltip(baseOpt, iChartOpt, legendData) {
  const { discrete, predict, tipHtml, tooltip, color } = iChartOpt
  // 判断面积图是否要过滤series
  const filterArea = judgeFilterAreaSeries(iChartOpt)
  const isFilter = discrete || predict || filterArea
  const formatter = tipHtml || tooltip?.formatter
  baseOpt.tooltip.formatter = (echartsParams, ticket, callback) => {
    let params = echartsParams
    if (isFilter) {
      const lineNumber = legendData.length
      params = echartsParams.slice(0, lineNumber)
    }
    const initParams = coverObjDataToInit(params)
    return formatter ? formatter(initParams, ticket, callback) : defaultFormatter(initParams, color)
  }
}
