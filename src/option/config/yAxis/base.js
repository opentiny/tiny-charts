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
    type: 'value',
    nameGap: Token.config.yAxisNameGap,
    axisLine: {
      show: false,
      lineStyle: {
        width: Token.config.yAxisLineWidth,
        type: Token.config.yAxisLineType,
        color: Token.config.yAxisLineColor,
      },
    },
    axisTick: {
      show: false,
      length: Token.config.yAxisTickLineLength,
      lineStyle: {
        width: Token.config.yAxisTickLineWidth,
        type: Token.config.yAxisTickLineType,
        color: Token.config.yAxisTickLineColor,
      },
    },
    axisLabel: {
      show: true,
      color: Token.config.yAxisLabelColor,
      fontSize: Token.config.yAxisLabelFontSize,
    },
    nameTextStyle: {
      color: Token.config.yAxisNameColor,
      fontSize: Token.config.yAxisNameFontSize,
    },
    splitLine: {
      show: true,
      lineStyle: {
        width: Token.config.yAxisSplitLineWidth,
        type: Token.config.yAxisSplitLineType,
        color: Token.config.yAxisSplitLineColor,
      },
      minInterval: undefined,
      maxInterval: undefined,
    },
    ...getBasicAnimationConfig()
  };
}


export default base;
