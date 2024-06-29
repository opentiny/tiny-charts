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
import Theme from '../../../feature/token';
import { getBasicAnimationConfig } from '../animation';

function base() {
  return {
    nameGap: Theme.config.xAxisNameGap,
    data: [],
    // 坐标轴类型
    type: 'category',
    // 坐标轴两边留白策略
    boundaryGap: true,
    // 坐标轴在grid区域中分隔线
    splitLine: {
      show: false,
      lineStyle: {
        width: Theme.config.xAxisSplitLineWidth,
        color: Theme.config.xAxisSplitLineColor,
        type: Theme.config.xAxisSplitLineType,
      },
    },
    // 坐标轴名称样式配置
    nameTextStyle: {
      color: Theme.config.xAxisNameColor,
      fontSize: Theme.config.xAxisNameFontSize,
    },
    // 坐标轴线配置
    axisLine: {
      lineStyle: {
        width: Theme.config.xAxisLineWidth,
        color: Theme.config.xAxisLineColor,
        type: Theme.config.xAxisLineType,
      },
    },
    // 坐标轴刻度配置
    axisTick: {
      alignWithLabel: true,
      lineStyle: {
        width: Theme.config.xAxisTickLineWidth,
        color: Theme.config.xAxisTickLineColor,
        type: Theme.config.xAxisTickLineType,
      },
    },
    // 坐标轴刻度标签配置
    axisLabel: {
      color: Theme.config.xAxisLabelColor,
      fontSize: Theme.config.xAxisLabelFontSize,
    },
    // 动画配置
    ...getBasicAnimationConfig()
  };
}



export default base;
