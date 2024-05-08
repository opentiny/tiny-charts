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
// 当前支持主题
const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
  BPIT_LIGHT: 'bpit-light',
  BPIT_DARK: 'bpit-dark',
  CLOUD_DARK: 'cloud-dark',
  CLOUD_LIGHT: 'cloud-light',
  HDESIGN_LIGHT: 'hdesign-light',
  HDESIGN_DARK: 'hdesign-dark',
};

// 该值表示当前主题键名，内部使用，防止外部更改
const CURRENT_THEME = Symbol('current_theme');

// 使用token的图表名称,用于对token的merge
const TOKENCHARTNAMES = [
  'AssembleBubbleChart',
  'BarChart',
  'BoxplotChart',
  'BubbleChart',
  'CandlestickChart',
  'CircleProcessChart',
  'FunnelChart',
  'GaugeChart',
  'HeatMapChart',
  'HillChart',
  'JadeJueChart',
  'LineChart',
  'AreaChart',
  'LiquidfillChart',
  'PieChart',
  'PolarBarChart',
  'ProcessChart',
  'RadarChart',
  'RegionChart',
  'SankeyChart',
  'SunburstChart',
  'TreeChart',
  'WaveChart',
  'WordCloudChart',
  'TimelineChart',
];

// 默认主题
const DEFAULT_THEME_NAME = THEMES.LIGHT;

const THEME_ERROR_TIP_MESSAGE = `Theme must be one of ${Object.values(THEMES).join(
  ',',
)} or the theme name registered for calling HuiCharts.registerTheme()`;

export { THEMES, CURRENT_THEME, DEFAULT_THEME_NAME, THEME_ERROR_TIP_MESSAGE, TOKENCHARTNAMES };
                                                              





                                                                                                                                                                                                                                                                                                          