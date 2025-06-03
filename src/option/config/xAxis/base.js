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
    nameGap: Token.config.xAxisNameGap,
    data: [],
    // 坐标轴类型
    type: 'category',
    // 坐标轴两边留白策略
    boundaryGap: true,
    // 坐标轴在grid区域中分隔线
    splitLine: {
      show: false,
      lineStyle: {
        width: Token.config.xAxisSplitLineWidth,
        color: Token.config.xAxisSplitLineColor,
        type: Token.config.xAxisSplitLineType,
      },
    },
    // 坐标轴名称样式配置
    nameTextStyle: {
      color: Token.config.xAxisNameColor,
      fontSize: Token.config.xAxisNameFontSize,
    },
    // 坐标轴线配置
    axisLine: {
      lineStyle: {
        width: Token.config.xAxisLineWidth,
        color: Token.config.xAxisLineColor,
        type: Token.config.xAxisLineType,
      },
    },
    // 坐标轴刻度配置
    axisTick: {
      alignWithLabel: true,
      length: Token.config.xAxisTickLineLength,
      lineStyle: {
        width: Token.config.xAxisTickLineWidth,
        color: Token.config.xAxisTickLineColor,
        type: Token.config.xAxisTickLineType,
      },
    },
    // 坐标轴刻度标签配置
    axisLabel: {
      color: Token.config.xAxisLabelColor,
      fontSize: Token.config.xAxisLabelFontSize,
    },
    // 动画配置
    ...getBasicAnimationConfig()
  };
}



export default base;
