/**
 * Copyright (c) 2024 - present TinyCharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import Theme from '../../../feature/token';

function getBaseAngleAxis() {
  return {
    splitNumber: 6,
    startAngle: 90,
    axisLine: {
      show: false,
      lineStyle: {
        color: Theme.config.angleAxisLineColor,
        width: Theme.config.angleAxisLineWidth,
        type: Theme.config.angleAxisLineType,
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: Theme.config.angleAxisSplitLineColor,
        width: Theme.config.angleAxisSplitLineWidth,
        type: Theme.config.angleAxisSplitLineType,
      },
    },
    axisTick: {
      show: false,
      length: 5,
      lineStyle: {
        color: Theme.config.angleAxisTickLineColor,
        width: Theme.config.angleAxisTickLineWidth,
        type: Theme.config.angleAxisTickLineType,
      },
    },
    axisLabel: {
      show: true,
      fontSize: Theme.config.angleAxisLabelFontSize,
      color: Theme.config.angleAxisLabelColor,
      formatter: undefined,
    },
  };
}

function base(chartName) {
  const angleAxisOption = getBaseAngleAxis();
  return angleAxisOption;
}

export default base;
