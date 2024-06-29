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
  'ChartCard',
  'BulletChart'
];

// 默认主题
const DEFAULT_THEME_NAME = THEMES.LIGHT;

const THEME_ERROR_TIP_MESSAGE = `Theme must be one of ${Object.values(THEMES).join(
  ',',
)} or the theme name registered for calling HuiCharts.registerTheme()`;

// 所有的图表的名称 
const CHART_TYPE = {
  ASSEMBLE_BUBBLE: 'AssembleBubbleChart',
  AUTONAVI_MAP: 'AutonaviMapChart',
  BAIDU_MAP: 'BaiduMapChart',
  BAR: 'BarChart',
  BOXPLOT: 'BoxplotChart',
  BUBBLE: 'BubbleChart',
  BULLET: 'BulletChart',
  CANDLESTICK: 'CandlestickChart',
  CIRCLE_PROCESS: 'CircleProcessChart',
  FLOW: 'FlowChart',
  FUNNEL: 'FunnelChart',
  GANTT: 'GanttChart',
  GAUGE: 'GaugeChart',
  GRAPH_TREE: 'GraphTreeChart',
  HEAT_MAP: 'HeatMapChart',
  HILL: 'HillChart',
  HONEYCOMB: 'HoneycombChart',
  JADGEJUE: 'JadeJueChart',
  LINE: 'LineChart',
  AREA: 'AreaChart',
  LIQUID_FILL: 'LiquidfillChart',
  MILESTONE: 'MilestoneChart',
  ORGANIZATION: 'OrganizationChart',
  PIE: 'PieChart',
  POLAR_BAR: 'PolarBarChart',
  PROCESS: 'ProcessChart',
  RADAR: 'RadarChart',
  REGION: 'RegionChart',
  RIVER: 'RiverChart',
  SANKEY: 'SankeyChart',
  SCATTER: 'ScatterChart',
  SNOWFLAKE: 'SnowFlakeChart',
  SUNBURST: 'SunburstChart',
  TERRACE: 'TerraceChart',
  TIME_LINE: 'TimelineChart',
  TREE: 'TreeChart',
  TREE_MAP: 'TreeMapChart',
  WAVE: 'WaveChart',
  WORD_CLOUD: 'WordCloudChart',
  CHART_CARD: 'ChartCard'
}

const ADAPTIVE_THEME = ['hdesign-light', 'hdesign-dark', 'bpit-light', 'bpit-dark'];

export { THEMES, CURRENT_THEME, DEFAULT_THEME_NAME, THEME_ERROR_TIP_MESSAGE, TOKENCHARTNAMES, CHART_TYPE, ADAPTIVE_THEME };