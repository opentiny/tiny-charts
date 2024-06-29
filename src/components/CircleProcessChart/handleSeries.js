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

export function setSeries(seriesData, iChartOption) {
  const { data } = iChartOption;
  const series = [];
  data.forEach((item, i) => {
    const seriesUnit = getSeriesInit();
    seriesUnit.name = item.name;
    seriesUnit.data = seriesData[i];
    seriesUnit.backgroundStyle.color = chartToken.background;
    series.push(seriesUnit);
  });
  return series;
}
