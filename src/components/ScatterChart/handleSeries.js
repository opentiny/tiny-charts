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
import { getColor } from '../../util/color';
import chartToken from './chartToken';
import handleMarkPoint from './handleMarkPoint';
import { isObject } from '../../util/type';

export function handleSeries(baseOpt, iChartOpt) {
  const series = [];
  const errorSeries = handleMarkPoint(iChartOpt);
  const data = iChartOpt.data;
  // 设置iChartOpt中未超过markPoint点的数据
  data && isObject(data) && Object.keys(data).forEach(item => {
    const seriesItem = {
      name: item,
      symbolSize: iChartOpt.symbolSize || 10,
      data: data[item],
      type: 'scatter',
      emphasis: {
        itemStyle: {
          color: chartToken.color,
          borderWidth: 4,
        },
        focus: 'series',
        scale: 1.3,
      },
      itemStyle: {
        color(param) {
          return getColor(iChartOpt.color, param.seriesIndex);
        },
        borderColor: () => {},
        borderWidth: 0,
      }
    };
    series.push(seriesItem);
  });
  series.push(...errorSeries);
  baseOpt.series = series;
}
