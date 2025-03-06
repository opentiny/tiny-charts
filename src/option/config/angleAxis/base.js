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
import Token from '../../../feature/token';
import { getBasicAnimationConfig } from '../animation';

function base() {
  return {
    splitNumber: 6,
    startAngle: 90,
    axisLine: {
      show: false,
      lineStyle: {
        color: Token.config.angleAxisLineColor,
        width: Token.config.angleAxisLineWidth,
        type: Token.config.angleAxisLineType,
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: Token.config.angleAxisSplitLineColor,
        width: Token.config.angleAxisSplitLineWidth,
        type: Token.config.angleAxisSplitLineType,
      },
    },
    axisTick: {
      show: false,
      length: 5,
      lineStyle: {
        color: Token.config.angleAxisTickLineColor,
        width: Token.config.angleAxisTickLineWidth,
        type: Token.config.angleAxisTickLineType,
      },
    },
    axisLabel: {
      show: true,
      fontSize: Token.config.angleAxisLabelFontSize,
      color: Token.config.angleAxisLabelColor,
      formatter: undefined,
    },
    ...getBasicAnimationConfig()
  };
}



export default base;
