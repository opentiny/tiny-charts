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
import chartToken from './chartToken';

// 默认的seies配置
function getSeriesInit() {
  return {
    type: 'funnel',
    width: '80%',
    minSize: '0%',
    maxSize: '100%',
    left: 'center',
    top: 60,
    bottom: 60,
    funnelAlign: 'center',
    orient: 'vertical',
    sort: 'descending',
    gap: 1,
    itemStyle: {
      borderWidth: chartToken.borderWidth,
      borderColor: chartToken.borderColor,
    },
    label: {
      color: chartToken.labelColor,
      position: 'inside',
      show: true
    },
    data: undefined,
  };
}

function getSeriesUnit(iChartOption) {
  const { data, sort, size, position, gap, label } = iChartOption;
  const seriesUnit = getSeriesInit()
  data && (seriesUnit.data = data);
  sort && (seriesUnit.sort = sort);
  gap && (seriesUnit.gap = gap);
  // 配置漏斗图的label
  label && (merge(seriesUnit.label, label));
  // 处理漏斗图的size和position
  size && (merge(seriesUnit, size));
  position && (merge(seriesUnit, position));
  return seriesUnit
}

/**
 * 组装echarts所需要的series
 * @param {传入数据} iChartOption
 * @returns
 */
export function setSeries(iChartOption) {
  const { series: selfSeries } = iChartOption;
  if (selfSeries && selfSeries.length !== 0) {
    const newSelfSeries = selfSeries.map(seriesItem => {
      const seriesUnit = getSeriesUnit(iChartOption);
      merge(seriesUnit, seriesItem);
      return seriesUnit
    })
    return newSelfSeries
  }
  const series = [];
  const seriesUnit = getSeriesUnit(iChartOption);
  series.push(seriesUnit);
  return series;
}

