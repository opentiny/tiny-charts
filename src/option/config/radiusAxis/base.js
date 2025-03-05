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
    axisLine: {
      show: false,
      lineStyle: {
        color: Token.config.radiusAxisLineColor,
        width: Token.config.radiusAxisLineWidth,
        type: Token.config.radiusAxisLineType,
      },
    },
    axisTick: {
      length: 5,
      show: false,
      lineStyle: {
        color: Token.config.radiusAxisTickLineColor,
        width: Token.config.radiusAxisTickLineWidth,
        type: Token.config.radiusAxisTickLineType,
      },
    },
    axisLabel: {
      show: true,
      color: Token.config.radiusAxisLabelColor,
      fontSize: Token.config.radiusAxisLabelFontSize,
      align: 'right',
      margin: Token.config.radiusAxisLabelGap * 5,
      interval: 0,
    },
    splitLine: {
      lineStyle: {
        type: Token.config.radiusAxisSplitLineType,
        color: Token.config.radiusAxisSplitLineColor,
        width: Token.config.radiusAxisSplitLineWidth,
      },
    },
    ...getBasicAnimationConfig()
  };
}



export default base;
