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
import { getColor, codeToRGB } from '../../util/color';
import merge from '../../util/merge';

function getDatasetInit() {
  return [
    {
      source: [],
    },
    {
      transform: {
        type: 'boxplot',
      },
    },
    {
      fromDatasetIndex: 1,
      fromTransformResult: 1,
    },
  ];
}


function getBoxplotUnitSeries() {
  return {
    name: 'boxplot',
    type: 'boxplot',
    datasetIndex: 1,
    itemStyle: {
      color: undefined,
      borderColor: undefined,
      borderWidth: chartToken.boxplotItemStyleBorderWidth,
      shadowColor: 'transparent',
    },
    emphasis: {
      itemStyle: {
        color: undefined,
        borderWidth: chartToken.boxplotEmphasisItemStyleBorderWidth,
        shadowColor: 'transparent'
      }
    }
  }
}

function getScatterUnitSeries() {
  return {
    name: 'outlier',
    type: 'scatter',
    datasetIndex: 2,
    symbolSize: chartToken.scatterSymbolSize,
    itemStyle: {
      color: undefined,
      // 常规场景不显示边框
      borderWidth: chartToken.scatterItemBorderWidth,
      // borderWidth常规为0，此处设置borderColor为透明色+是为了避免hover移出symbol瞬间白色闪烁的问题
      borderColor: chartToken.scatterItemBorderColor,
    },
    emphasis: {
      itemStyle: {
        color: chartToken.scatterEmphasisItemColor,
        borderWidth: chartToken.scatterEmphasisItemBorderWidth,
        // borderColor颜色在各系列数据中单独设置
      }
    }
  }
}

/**
 * 组装echarts所需要的dataset
 * @param {传入数据} data
 * @returns
 */
export function setDataset(data) {
  const dataset = getDatasetInit()
  dataset[0].source = data;
  return dataset;
}

function getSeriesColor(color, index = 0) {
  const seriesColor = getColor(color, index)
  const itemColor = codeToRGB(seriesColor, 0.15)
  const emphasisColor = codeToRGB(seriesColor, 0.3)
  return { seriesColor, itemColor, emphasisColor }
}

function getBoxplotSeries(iChartOpt, index = 0) {
  const { color } = iChartOpt
  const unitSeries = getBoxplotUnitSeries()
  const { seriesColor, itemColor, emphasisColor } = getSeriesColor(color, index)
  unitSeries.itemStyle.color = itemColor;
  unitSeries.itemStyle.borderColor = seriesColor;
  unitSeries.emphasis.itemStyle.color = emphasisColor;
  return unitSeries
}


function getScatterSeries(iChartOpt) {
  const { color } = iChartOpt
  const unitSeries = getScatterUnitSeries()
  const { seriesColor } = getSeriesColor(color)
  unitSeries.itemStyle.color = seriesColor;
  unitSeries.emphasis.itemStyle.borderColor = seriesColor;
  return unitSeries
}


export function setDefaultSeries(baseOpt, iChartOpt) {
  const boxplotSeries = getBoxplotSeries(iChartOpt)
  const scatterSeries = getScatterSeries(iChartOpt)
  const series = [boxplotSeries, scatterSeries]
  baseOpt.series = series
}


function setSeries(baseOpt, iChartOpt) {
  // 配置默认dataset
  if (iChartOpt.data && !iChartOpt.dataset) {
    baseOpt.dataset = setDataset(iChartOpt.data);
    setDefaultSeries(baseOpt, iChartOpt);
  }
  // 自定义dataset和series
  if (iChartOpt.dataset && iChartOpt.series) {
    baseOpt.dataset = iChartOpt.dataset;
    const series = iChartOpt.series.map((item, index) => {
      const boxplotUnitSeries = getBoxplotSeries(iChartOpt, index)
      merge(boxplotUnitSeries, item)
      return boxplotUnitSeries
    });
    baseOpt.series = series
  }
}


export default setSeries