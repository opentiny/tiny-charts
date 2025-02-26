const versionNumber = '1.3.0';
const updateTime = '2024-11-26';

const NAV_DATA = [
  {
    title: '快速上手',
    titleId: 'ic_get_started',
    className: 'evu_AccordionEx_idea',
    children: [
      {
        title: '快速开始',
        titleId: 'ic_quickstart',
        value: 'QuickStart',
      },
      {
        title: '生命周期',
        titleId: 'ic_lifecycle',
        value: 'LifeCycle',
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
        title: '更新日志',
        titleId: 'ic_ChangeLog',
        value: 'ChangeLog',
        version:'1.3.0'
      },
    ],
  },
  {
    title: '关系图引擎',
    titleId: 'ic_chart_engine',
    className: 'evu_AccordionEx_engine',
    isNew: true,
    children: [
      {
        title: '开始使用',
        titleId: 'ic_LifeCycle',
        value: 'FrameworkLifeCycle',
      },
      {
        title: '动画',
        titleId: 'ic_animationoverview',
        className: 'evu_AccordionEx_animationoverview',
        children: [
          {
            title: '总览',
            titleId: 'ic_animation',
            value: 'Animation',
          },
          {
            title: '缓动函数',
            titleId: 'ic_animationease',
            value: 'AnimationEasing',
          },
         ]
      },
      {
        title: '画布',
        titleId: 'ic_canvas',
        value: 'Canvas',
      },
      {
        title: '连线',
        titleId: 'ic_line',
        children: [
          {
            title: '总览',
            titleId: 'ic_line_option',
            value: 'LineOption',
          },
          {
            title: '连线管理器',
            titleId: 'ic_line_api',
            value: 'LineManager',
          },
          {
            title: '动效',
            titleId: 'ic_line_animation',
            value: 'LineAnimation',
          },
         ]
      },
      {
        title: '节点',
        titleId: 'ic_chart_node',
        className: 'evu_AccordionEx_chartnode',
        children: [
          {
            title: '节点管理器',
            titleId: 'ic_nodemanager',
            value: 'NodeManager',
          },
          {
            title: 'HTML节点',
            titleId: 'ic_htmlnode',
            value: 'HTMLNode',
          },
          {
            title: 'Vue节点',
            titleId: 'ic_vuenode',
            value: 'VueNode',
          },
          {
            title: 'React节点',
            titleId: 'ic_reactnode',
            value: 'ReactNode',
          },
          {
            title: 'Angular节点',
            titleId: 'ic_angularnode',
            value: 'AngularNode',
          }]
      },
			{
        title: '连接点',
        titleId: 'ic_connector',
        value: 'Connector',
      },
			{
        title: '布局',
        titleId: 'ic_chart_layout',
				className: 'evu_AccordionEx_chartnode',
        children: [{
            title: '思维导图布局',
            titleId: 'ic_mindmap',
            value: 'MindmapLayout',
        },{
					title: '网格布局',
					titleId: 'ic_grid',
					value: 'GridLayout',
				},
				{
					title: '环形布局',
					titleId: 'ic_cirlce',
					value: 'CircleLayout',
				},
				{
					title: '线形弧线布局',
					titleId: 'ic_linear_arc',
					value: 'LinearArcLayout',
				},
				{
					title: '圆形弧线布局',
					titleId: 'ic_circle_arc',
					value: 'CircleArcLayout',
				},
				{
					title: '自定义布局',
					titleId: 'ic_Customize',
					value: 'CustomizeLayout',
				}]
			},
      {
        title: '右键菜单',
        titleId: 'ic_contextmenu',
        value: 'Contextmenu',
      },
    ],
  },
  {
    title: '解决方案',
    titleId: 'ic_resolve',
    className: 'evu_AccordionEx_resolve',
    children: [
      {
        title: '动效',
        titleId: 'ic_animationbefore',
        value: 'AnimationBefore',
      },
      {
        title: '响应式',
        titleId: 'ic_mediaScreen',
        value: 'MediaScreen',
      },
      // {
      //   title: '画布',
      //   titleId: 'ic_dragManager',
      //   value: 'DragManager',
      // },
      {
        title: '懒加载',
        titleId: 'ic_lazyLoad',
        value: 'LazyLoad',
      },
      {
        title: '按需引入',
        titleId: 'ic_demandLoad',
        value: 'DemandLoad',
      },
      {
        title: '图表卡片',
        titleId: 'ic_Card',
        value: 'Card',
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
        title: '迷你图表',
        titleId: 'ic_mini',
        value: 'Mini',
      },
      {
        title: '配置扩展',
        titleId: 'ic_eChartsNative',
        value: 'EChartsNative',
      },
      {
        title: '图例扩展',
        titleId: 'ic_expandLegend',
        value: 'ExpandLegend',
      },
      {
        title: '刻度优化',
        titleId: 'ic_axisOptimization',
        value: 'AxisOptimization',
      },
      {
        title: '刻度均分',
        titleId: 'ic_equalLabel',
        value: 'EqualLabel',
      },
      // {
      //   title: '自定义主题',
      //   titleId: 'ic_customTheme',
      //   value: 'CustomTheme',
      // },

      {
        title: '坐标轴文本提示',
        titleId: 'ic_axistip',
        value: 'Axistip',
      },
      {
        title: '规范一致性检测与修正',
        titleId: 'ic_linter',
        value: 'Linter',
      },
      {
        title: '大批量数据优化',
        titleId: 'ic_Massive',
        value: 'Massive',
      },
      {
        title: '无障碍能力',
        titleId: 'ic_BarrierFree',
        children: [
          {
            title: '全键盘走焦',
            titleId: 'ic_Keyboard',
            value: 'KeyboardFocus',
          },
          {
            title: '语音读屏',
            titleId: 'ic_readScreen',
            value: 'ReadScreen',
          },
        ]
      }
    ],
  },
  
//   {
//     title: '性能提升',
//     titleId: 'ic_performance_boost',
//     className: 'evu_AccordionEx_performance_boost',
//     children: [
//       // {
//       //   title: '滚动性能优化',
//       //   titleId: 'ic_scrollingPerformance',
//       //   value: 'ScrollingPerformance',
//       // },
//       // {
//       //   title: '视口内分时实例化',
//       //   titleId: 'ic_intraViewport',
//       //   value: 'IntraViewport',
//       // },
//       // {
//       //   title: '视口外异步实例化',
//       //   titleId: 'ic_outOfViewport',
//       //   value: 'OutOfViewport',
//       // },
//       {
//         title: '大批量数据优化',
//         titleId: 'ic_Massive',
//         value: 'Massive',
//       },
//       // {
//       //   title: 'Dom节点类性能提升',
//       //   titleId: 'ic_nodePerformance',
//       //   value: 'NodePerformance',
//       // }
//     ],
//   },
  {
    title: '图表总览 Overview',
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
    title: '散点图 ScatterChart',
    titleId: 'ic_ScatterChart',
    value: 'ScatterChart',
  },
  {
    title: '子弹图 BulletChart',
    titleId: 'ic_BulletChart',
    value: 'BulletChart',
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
    update: true,
  },
  {
    title: '矩形树图 TreeMapChart',
    titleId: 'ic_TreeMapChart',
    value: 'TreeMapChart',
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
    update: true,
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
    title: '百度地图 BaiduMapChart',
    titleId: 'ic_BaiduMapChart',
    value: 'BaiduMapChart',
  },
  // {
  //   title: '高德地图 AutonaviMapChart',
  //   titleId: 'ic_AutonaviMapChart',
  //   value: 'AutonaviMapChart',
  // },
  {
    title: '甘特图 GanttChart',
    titleId: 'ic_comp_GanttChart',
    value: 'GanttChart',
    isHigher: true

  },
  {
    title: '流程图 FlowChart',
    titleId: 'ic_FlowChart',
    value: 'FlowChart',
    isHigher: true
  },
  {
    title: '河流图 RiverChart',
    titleId: 'ic_RiverChart',
    value: 'RiverChart',
    isHigher: true
  },
  {
    title: '蜂窝图 HoneycombChart',
    titleId: 'ic_HoneycombChart',
    value: 'HoneycombChart',
    isHigher: true
  },
  {
    title: '波纹图 WaveChart',
    titleId: 'ic_WaveChart',
    value: 'WaveChart',
    isHigher: true
  },
  {
    title: '梯田图 TerraceChart',
    titleId: 'ic_TerraceChart',
    value: 'TerraceChart',
    isHigher: true
  },
  {
    title: '时间轴 TimelineChart',
    titleId: 'ic_TimelineChart',
    value: 'TimelineChart',
    isHigher: true
  },
  {
    title: '组织关系图 OrganizationChart',
    titleId: 'ic_OrganizationChart',
    value: 'OrganizationChart',
    isHigher: true
  },
  {
    title: '雪花图 SnowFlakeChart',
    titleId: 'ic_SnowFlakeChart',
    value: 'SnowFlakeChart',
    isHigher: true
  },
  {
    title: '里程碑图 MilestoneChart',
    titleId: 'ic_MilestoneChart',
    value: 'MilestoneChart',
    isHigher: true
  },
  {
    title: '思维导图 MindmapChart',
    titleId: 'ic_MindmapChart',
    value: 'MindmapChart',
    isRelation: true
  },
//   {
//     title: '力导向图 ForceDirectedChart',
//     titleId: 'ic_ForceDirectedChart',
//     value: 'ForceDirectedChart',
//     isHigher: true
//   },
  {
    title: '网格图 GridChart',
    titleId: 'ic_GridChart',
    value: 'GridChart',
    isRelation: true
  },
  {
    title: '环形图 CircleChart',
    titleId: 'ic_CircleChart',
    value: 'CircleChart',
    isRelation: true
  },
  {
    title: '线形弧线图 LinearArcChart',
    titleId: 'LinearArcChart',
    value: 'LinearArcChart',
    isRelation: true
  },
  {
    title: '圆形弧线图 CircleArcChart',
    titleId: 'CircleArcChart',
    value: 'CircleArcChart',
    isRelation: true
  },
  {
    title: '自定义布局图 CustomizeChart',
    titleId: 'CustomizeChart',
    value: 'CustomizeChart',
    isRelation: true
  }
];

export { versionNumber, updateTime, NAV_DATA };