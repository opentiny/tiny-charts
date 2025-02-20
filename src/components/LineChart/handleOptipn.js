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
import defendXSS from '../../util/defendXSS';
import chartToken from './chartToken';
import Theme from '../../feature/token';
import { judgeFilterAreaSeries } from './AreaChart/bottomArea';

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
      newSeries.symbol = 'circle';
      newSeries.symbolSize = chartToken.symbolSizeSM - 4;
      newSeries.itemStyle.borderWidth = chartToken.borderZero;
      newSeries.showSymbol = true;
      newSeries.showAllSymbol = true;
      newSeries.emphasis = {
        itemStyle: {
          opacity: 0,
        },
      };
      const discreteData = [];
      for (let index = 0; index < newSeries.data.length; index++) {
        const pre = newSeries.data[index - 1];
        const next = newSeries.data[index];
        const cur = newSeries.data[index + 1];
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

function defaultFormatter(params) {
  const { tipSeriesNameColor, tipNameColor, tipValueColor, symbolSizeSM } = chartToken
  let content = '';
  params.forEach((item, index) => {
    if (index === 0) {
      content += `<div style="color:${tipSeriesNameColor}">${defendXSS(item.name)}</div>`;
    }
    content += `<div style="display:flex;align-items:center;justify-content:space-between;gap:16px">
                      <div style="display:flex;gap:8px;align-items:center;">
                      <span style="display:inline-block;width:${symbolSizeSM}px;height:${symbolSizeSM}px;border-radius:50%;background-color:${defendXSS(item.color)};"></span>
                      <span style="display:inline-block;color:${tipNameColor};">${defendXSS(item.seriesName)}</span>
                      </div>
                      <span style="font-weight:bold;color:${tipValueColor};">${defendXSS(item.value)}</span>
                </div>`;
  });
  const htmlString = `<div style="display:flex;flex-direction:column;gap:8px;line-height:20px">${content}</div>`
  return htmlString;

}



export function isDarkTheme() {
  const theme = Theme.themeName
  return theme.includes('dark')
}


export function setTooltip(baseOpt, iChartOpt, legendData) {
  const { discrete, predict, tipHtml, tooltip } = iChartOpt
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
    return formatter ? formatter(params, ticket, callback) : defaultFormatter(params)
  }
}
