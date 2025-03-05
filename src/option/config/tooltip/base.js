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

const chartType = [
  'CircleProcessChart',
  'GaugeChart',
  'RadarChart',
  'FunnelChart',
  'JadeJueChart',
  'LiquidfillChart',
  'PieChart',
  'PolarBarChart',
  'SunburstChart',
  'BulletChart',
  'HeatMapChart',
  'WordCloudChart',
  'AssembleBubbleChart'
];

function base(chartName) {
  const trigger = chartName && chartType.includes(chartName) ? 'item' : 'axis';
  return {
    trigger,
    confine: true,
    borderRadius: Token.config.tooltipBorderRaduis,
    axisPointer: {
      z: 0,
      type: 'line',
      lineStyle: {
        type: Token.config.tooltipAxisPointerLineType,
        width: Token.config.tooltipAxisPointerLineWidth,
        color: Token.config.tooltipAxisPointerLineColor,
      },
      shadowStyle: {
        color: Token.config.tooltipAxisPointerShadowColor,
      },
    },
    textStyle: {
      color: Token.config.tooltipTextColor,
      fontSize: Token.config.tooltipTextFontSize,
    },
    borderWidth: Token.config.tooltipBorderWidth,
    padding: Token.config.tooltipPadding,
    backgroundColor: Token.config.tooltipBg,
    formatter: undefined,
    extraCssText: `box-shadow:0 ${Token.config.tooltipShadowOffsetY}px ${Token.config.tooltipShadowBlur}px 0 ${Token.config.tooltipShadowColor};`,
  };
}



export default base;
