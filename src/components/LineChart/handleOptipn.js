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

export function defaultFormatter(params, dataLength) {
  let htmlString = '';
  params.forEach((item, index) => {
    // 只显示实线数据的tooltip
    if (index < dataLength) {
      if (index === 0) {
        htmlString += `<div style="margin-bottom:4px;">${defendXSS(item.name)}</div>`;
      }
      htmlString += `<div>
                              <span style="display:inline-block;width:10px;height:10px;border-radius:5px;background-color:${defendXSS(
        item.color,
      )};"></span>
                              <span style="margin-left:5px;>
                                  <span style="display:inline-block; margin-right:8px;min-width:60px;">${defendXSS(
        item.seriesName,
      )}</span>
                                  <span style="font-weight:bold">${defendXSS(item.value)}</span>
                              </span>
                          </div>`;
    }
  });
  return htmlString;
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
      newSeries.symbolSize = chartToken.symbolSizeSM;
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
    // 覆盖tipHtml，过滤同名Series
    const tipFormatter = baseOption.tooltip.formatter;
    const dataLength = baseOption.legend.data.length;
    baseOption.tooltip.formatter = (params, ticket, callback) => {
      if (tipFormatter) {
        return tipFormatter(params.slice(0, dataLength), ticket, callback);
      } else {
        return defaultFormatter(params, dataLength);
      }
    };
  }
}
