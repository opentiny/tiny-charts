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
  'WordCloudChart'
];

function base(chartName) {
  const trigger = chartName && chartType.includes(chartName) ? 'item' : 'axis';
  return {
    trigger,
    confine: true,
    borderRadius: Theme.config.tooltipBorderRaduis,
    axisPointer: {
      z: 0,
      type: 'line',
      lineStyle: {
        type: Theme.config.tooltipAxisPointerLineType,
        width: Theme.config.tooltipAxisPointerLineWidth,
        color: Theme.config.tooltipAxisPointerLineColor,
      },
      shadowStyle: {
        color: Theme.config.tooltipAxisPointerShadowColor,
      },
    },
    textStyle: {
      color: Theme.config.tooltipTextColor,
      fontSize: Theme.config.tooltipTextFontSize,
    },
    borderWidth: Theme.config.tooltipBorderWidth,
    padding: Theme.config.tooltipPadding,
    backgroundColor: Theme.config.tooltipBg,
    formatter: undefined,
    extraCssText: `box-shadow:0 ${Theme.config.tooltipShadowOffsetY}px ${Theme.config.tooltipShadowBlur}px 0 ${Theme.config.tooltipShadowColor};`,
  };
}



export default base;
