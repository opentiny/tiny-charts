/**
 * Copyright (c) 2022 - present TinyCharts Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import Theme from '../../../feature/token';

function getBaseRadiusAxis() {
  return {
    axisLine: {
      show: false,
      lineStyle: {
        color: Theme.config.radiusAxisLineColor,
        width: Theme.config.radiusAxisLineWidth,
        type: Theme.config.radiusAxisLineType,
      },
    },
    axisTick: {
      length: 5,
      show: false,
      lineStyle: {
        color: Theme.config.radiusAxisTickLineColor,
        width: Theme.config.radiusAxisTickLineWidth,
        type: Theme.config.radiusAxisTickLineType,
      },
    },
    axisLabel: {
      show: true,
      color: Theme.config.radiusAxisLabelColor,
      fontSize: Theme.config.radiusAxisLabelFontSize,
      align: 'right',
      margin: Theme.config.radiusAxisLabelGap * 5,
      interval: 0,
    },
    splitLine: {
      lineStyle: {
        type: Theme.config.radiusAxisSplitLineType,
        color: Theme.config.radiusAxisSplitLineColor,
        width: Theme.config.radiusAxisSplitLineWidth,
      },
    },
  };
}

function base(chartName) {
  const radiusAxisOption = getBaseRadiusAxis();
  return radiusAxisOption;
}

export default base;
