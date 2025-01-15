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
import { emptySeriesUnit } from '../GaugeChart/handleSeries';
import cloneDeep from '../../util/cloneDeep';
import Theme from '../../feature/token';

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
  const { data, itemStyle } = iChartOption;
  const  marklineColor = Theme.config.colorState.colorError
  const series = [];
  data.forEach((item, i) => {
    const seriesUnit = getSeriesInit();
    seriesUnit.name = item.name;
    seriesUnit.data = seriesData[i];
    seriesUnit.itemStyle = item.itemStyle || itemStyle;
    seriesUnit.backgroundStyle.color = chartToken.background;
    if (iChartOption.markLine) seriesUnit.barWidth = iChartOption.barWidth || 16;
    series.push(seriesUnit);
  });
  // 阈值线
  if (iChartOption.markLine) {
    const markLineUnit = setMarkLine(series, iChartOption.markLine, marklineColor, iChartOption);
    series.push(markLineUnit);
  }
  return series;
}

// 添加一个空series，使用该空series的pointer来作为阈值线的红线
function setMarkLine(series, markLine, marklineColor, iChartOption) {
  const temp = cloneDeep(emptySeriesUnit);
  const markLineUnit = cloneDeep(temp);
  markLineUnit.name = 'markLine';
  markLineUnit.min = iChartOption.min || 0;
  markLineUnit.max = iChartOption.max || 100;
  markLineUnit.startAngle = 90;
  markLineUnit.endAngle = -270;
  markLineUnit.center = iChartOption.position.center || ['50%', '50%'];
  markLineUnit.radius = iChartOption.position.radius || '50%';
  markLineUnit.animation = false;
  markLineUnit.pointer = {
    icon: 'path://M0 0 L30 0 L30 100 L0 100 Z',
    width: 2,
    length: iChartOption?.barWidth ? Number(iChartOption?.barWidth) - 2 : 14,
    offsetCenter: iChartOption.markLine.offsetCenter || [0, '-46.6%'],
    itemStyle: {
      color: markLine.color || '#09AA71' || marklineColor,
    },
  };
  markLineUnit.data = [{ value: markLine.value }];
  markLineUnit.silent = true;
  return markLineUnit;
}


