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

function getBaseOption() {
  return {
    type: 'value',
    axisLine: {
      show: false,
      lineStyle: {
        width: Theme.config.yAxisLineWidth,
        type: Theme.config.yAxisLineType,
        color: Theme.config.yAxisLineColor,
      },
    },
    axisTick: {
      show: false,
      lineStyle: {
        width: Theme.config.yAxisTickLineWidth,
        type: Theme.config.yAxisTickLineType,
        color: Theme.config.yAxisTickLineColor,
      },
    },
    axisLabel: {
      color: Theme.config.yAxisLabelColor,
      fontSize: Theme.config.yAxisLabelFontSize,
    },
    nameTextStyle: {
      color: Theme.config.yAxisNameColor,
      fontSize: Theme.config.yAxisNameFontSize,
    },
    splitLine: {
      show: true,
      lineStyle: {
        width: Theme.config.yAxisSplitLineWidth,
        type: Theme.config.yAxisSplitLineType,
        color: Theme.config.yAxisSplitLineColor,
      },
      minInterval: undefined,
      maxInterval: undefined,
    },
  };
}

function base() {
  return getBaseOption();
}

export default base;
