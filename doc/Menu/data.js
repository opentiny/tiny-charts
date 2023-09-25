const versionNumber = '1.1.60';
const updateTime = '2023-09-16';

const NAV_DATA = [
  {
    title: '快速上手',
    titleId: 'ic_get_started',
    className: 'evu_AccordionEx_idea',
    children: [
      {
        title: '快速开始',
        titleId: 'ic_readme',
        value: 'ReadMe',
      },
      {
        title: '皮肤主题',
        titleId: 'ic_theme',
        value: 'Theme',
      },
      {
        title: '数据状态',
        titleId: 'ic_DataStatus',
        value: 'DataStatus',
      },
      {
        title: '事件监听',
        titleId: 'ic_Events',
        value: 'Events',
      },
      {
        title: '版本发布日志',
        titleId: 'ic_changelogs',
        value: 'ChangeLog',
      },
    ],
  },
  {
    title: '解决方案',
    titleId: 'ic_resolve',
    className: 'evu_AccordionEx_resolve',
    children: [
      {
        title: "响应式",
        titleId: 'ic_mediaScreen',
        value: 'mediaScreen',
      },
      {
        title: '网格对齐',
        titleId: 'ic_axisMargin',
        value: 'AxisMargin',
      },
      {
        title: '高阶图表',
        titleId: 'ic_highOrder',
        value: 'HighOrder',
      },
      {
        title: '迷你场景',
        titleId: 'ic_mini',
        value: 'Mini',
      },
      {
        title: '配置扩展',
        titleId: 'ic_eChartsNative',
        value: 'EChartsNative',
      },
      {
        title: '自定义主题',
        titleId: 'ic_customTheme',
        value: 'CustomTheme',
      },
      {
        title: "懒加载及渲染优化",
        titleId: 'ic_lazyLoad',
        value: 'LazyLoad',
      },
      // {
      //   title: 'resize卡顿',
      //   titleId: 'ic_readme',
      //   value: 'ReadMe',
      // },
      // {
      //   title: '加载性能提升',
      //   titleId: 'ic_readme',
      //   value: 'ReadMe',
      // },
      // {
      //   title: '圆形图表中心自定义配置',
      //   titleId: 'ic_readme',
      //   value: 'ReadMe',
      // },
    ],
  },
  {
    title: '图表总览 OverView',
    titleId: 'ic_Overview',
    value: 'Overview',
  },
  {
    title: '线形图 LineChart',
    titleId: 'ic_LineChart',
    value: 'LineChart',
  },
  {
    title: '面积图 AreaChart',
    titleId: 'ic_AreaChart',
    value: 'AreaChart',
  },
  {
    title: '柱状图 BarChart',
    titleId: 'ic_BarChart',
    value: 'BarChart',
  },
  {
    title: '圆盘图 PieChart',
    titleId: 'ic_PieChart',
    value: 'PieChart',
  },
  {
    title: '雷达图 RadarChart',
    titleId: 'ic_RadarChart',
    value: 'RadarChart',
  },
  {
    title: '仪表盘 GaugeChart',
    titleId: 'ic_GaugeChart',
    value: 'GaugeChart',
  },
  {
    title: '进度图 ProcessChart',
    titleId: 'ic_ProcessChart',
    value: 'ProcessChart',
  },
  {
    title: '圆环进度图 CircleProcessChart',
    titleId: 'ic_CircleProcessChart',
    value: 'CircleProcessChart',
  },
  {
    title: '气泡图 BubbleChart',
    titleId: 'ic_MessageDialog',
    value: 'BubbleChart',
  },
  {
    title: '热力图 HeatMapChart',
    titleId: 'ic_HeatMapChart',
    value: 'HeatMapChart',
  },
  {
    title: '极坐标柱状图 PolarBarChart',
    titleId: 'ic_PolarBarChart',
    value: 'PolarBarChart',
  },
  {
    title: '旭日图 SunburstChart',
    titleId: 'ic_SunburstChart',
    value: 'SunburstChart',
  },
  {
    title: '箱形图 BoxplotChart',
    titleId: 'ic_BoxplotChart',
    value: 'BoxplotChart',
  },
  {
    title: '山峰图 HillChart',
    titleId: 'ic_HillChart',
    value: 'HillChart',
  },
  {
    title: '桑基图 SankeyChart',
    titleId: 'ic_SankeyChart',
    value: 'SankeyChart',
  },
  {
    title: '区域图 RegionChart',
    titleId: 'ic_RegionChart',
    value: 'RegionChart',
  },
  {
    title: '漏斗图 FunnelChart',
    titleId: 'ic_FunnelChart',
    value: 'FunnelChart',
  },
  {
    title: '水球图 LiquidfillChart',
    titleId: 'ic_LiquidfillChart',
    value: 'LiquidfillChart',
  },
  {
    title: '树图 TreeChart',
    titleId: 'ic_TreeChart',
    value: 'TreeChart',
  },
  {
    title: '关系图 GraphChart',
    titleId: 'ic_GraphChart',
    value: 'GraphChart',
  },
  {
    title: '聚合树图 GraphTreeChart',
    titleId: 'ic_GraphChart',
    value: 'GraphTreeChart',
  },
  {
    title: '聚合气泡图 AssembleBubbleChart',
    titleId: 'ic_AssembleBubbleChart',
    value: 'AssembleBubbleChart',
  },
  {
    title: '词云图 WordCloudChart',
    titleId: 'ic_WordCloudChart',
    value: 'WordCloudChart',
  },
  {
    title: '玉玦图 JadeJueChart',
    titleId: 'ic_JadeJueChart',
    value: 'JadeJueChart',
  },
  {
    title: 'K线图 CandlestickChart',
    titleId: 'ic_CandlestickChart',
    value: 'CandlestickChart',
  },
  {
    title: '甘特图 GanttChart',
    titleId: 'ic_comp_GanttChart',
    value: 'GanttChart',
  },
  {
    title: '流程图 FlowChart',
    titleId: 'ic_FlowChart',
    value: 'FlowChart',
  },
  // {
  //   title: '河流图 RiverChart',
  //   titleId: 'ic_RiverChart',
  //   value: 'RiverChart',
  // },
  {
    title: '蜂窝图 HoneycombChart',
    titleId: 'ic_HoneycombChart',
    value: 'HoneycombChart',
  },
  {
    title: '波纹图 WaveChart',
    titleId: 'ic_WaveChart',
    value: 'WaveChart',
  },
  // {
  //   title: '百度地图 BaiduMapChart',
  //   titleId: 'ic_BaiduMapChart',
  //   value: 'BaiduMapChart',
  // },
  // {
  //   title: '高德地图 AutonaviMapChart',
  //   titleId: 'ic_AutonaviMapChart',
  //   value: 'AutonaviMapChart',
  // },
  {
    title: '组织关系图 OrganizationChart',
    titleId: 'ic_OrganizationChart',
    value: 'OrganizationChart',
  },
  // {
  //   title: '业务定制图表 SpecialChart',
  //   titleId: 'ic_SpecialChart',
  //   value: 'SpecialChart',
  // },
];

export { versionNumber, updateTime, NAV_DATA };
