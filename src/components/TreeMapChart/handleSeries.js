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
  isArray
} from '../../util/type';

export function handleSeries(baseOpt, iChartOpt) {
  const series = [];
  const data = iChartOpt.data;
  const color = iChartOpt.color;
  const roam = iChartOpt.roam;
  const optionLabel = iChartOpt.label || {};
  const label = Object.assign({
    fontFamily: 'HarmonyHeiTi',
    fontSize: '14px',
    align: 'center',
    formatter: '{b}',
    fontStyle: 'normal',
  }, optionLabel);

  if (data && isArray(data)) {
    const seriesItem = {
      data,
      type: 'treemap',
      roam: roam || false,
      nodeClick: roam ? 'zoomToNode' : false,
      breadcrumb: {
        show: false,
      },
      label,
      itemStyle: {
        borderRadius: 4,
        gapWidth: 1,
        borderColor: 'transparent'
      },
      levels: [{
        color
      }],
    };
    series.push(seriesItem);
  }
  baseOpt.series = series;
}