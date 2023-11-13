AssembleBubbleChart
  - handleOption(17 - 27);  //legend: top/left/right/bottom/itemGap/itemWidth/itemHeight
// - handleRootData(21 - 52) //chartPosition: center&&radius ['50%,'50%']、80%
// (66 - 123)  //series.renderItem
// - handleVirtualLengend(3 - 12); // legend.type/radius/colorBy

/**
 * handleColor 56
 * legendSelectChanged 4
 */

BarChart
  - hanleOption(11 - 23) //borderWidth borderColor borderRadius
  - handleSeries(9 - 29) // seriesInit
    (32 - 50, 108) // borderRadius
    // (138 - 139) // labelOption.offset/position
    // (174 - 175) // seriesUnit.emphasis
    (207 - 227) // borderRadius
    // (245) // seriesUnit.barGap
    (254 - 258, 306 - 307, 314 - 315, 322 - 323, 332 - 337) // markLineColor
    // (294 - 299, 347 - 354) // itemStyle
    (461 - 479) // placeFun
  - handleVisualMap(31); // #f43146

/**
 * handleSeries 127/153
 */

BoxplotChart;
// - handleSeries(3 - 32) // series配置
// - index(23); // tooltip.trigger

/**
 * handleSeries  52
 * index 35
 */

BubbleChart
  // - handleOption(44) // tooltip.trigger
  - handleSeries(5 - 24) // seriesInit
    (63) // borderWidth
  - handleTrendLine(6 - 45) // 趋势线配置
  - handleVisualMap(5 - 25); // visualMap
// - index(39, 44); // xAxis.type

/**
 * handleSeries 41
 * handleTrendLine 30   、27 symbolsize是否抽离？
 * handleVisualMap 5-25 symbolSize是否抽离？
 */

CandlestickChart
  // - BaseOption(2 - 33) // grid series
  // - handleOption(72 - 73) //dataZoom
  (89, 106 - 116); // tooltip.axisPointer
// - handleSeries(93 - 94); // series.xAXisIndex/yAxisIndex

/**
 * handleOption 105 
 * handleSeries 9
 */

CircleProcessChart;
// - handleSeries(4 - 20); // seriesInit

/**
 * handleSeries 33 
 */

FunnelChart
  - handleSeries(4 - 24) // seriesInit
    (92); // borderWidth
// (137 - 142); // series.label

/**
 * handleSeries 35 138
 * 17 gap是否抽离？
 */

GaugeChart(先跳过)
  // - BaseOption(4 - 9) // tooltip.trigger
  - handleSeries(4 - 77) // seriesInit
    (80 - 111) // splitNumber、splitLine.length、splitLine.distance、splitLine.lineStyle.width
    (131 - 143) // text.formatterStyle
    (148) // progress.width
    (157) // axisLine.lineStyle.width
    (165) // pointer.itemStyle.color
    (170 - 183) // itemStyle
    (204 - 229) // axisLine、splitLine
    (236 - 280, 299 - 350) // linearColor、axisLine.opacity 
    (366 - 374) // pointer
    (446 - 448, 462 - 482); //axisLabel、pointer

/**
 * handleSeries 107/116/124/380/444
 */

GraphTreeChart
  // - BaseOption(1 - 29) // baseOption
  - handleOption(10 - 36) // baseCategories
    // (55 - 61) // baseForce
    // (104)  // chartPosition
    (117 - 122); // baseLineStyle
// - mixTree(3 - 13); // TreeOption

/**
 * handleOption(10 - 36) 节点样式itemStyle.color目前是写死的，是否更换
 * handleOption symbolSize是否抽离？
 */

HeatMapChart(先跳过)
  - BaseOption(1 - 98) // BaseOption
  - handleData(98) // iChartOption.quantity
  - handleOptipn(16) // iChartOpt.padding
    (120 - 121, 132 - 137) // xAxis.type
    (154 - 163, 168 - 172) // yAxis
    (209) //tooltip.trigger
  - handleSeries(14 - 29) // renderItem
    (33) // symbolSize
    (43) // itemStyle.borderWidth
  - handleVisualMap(10 - 32); // visualMapItem

/**
 * handleOptipn 162
 * handleSeries 23 41
 * handleVisualMap 17
 */

HillChart
  - baseOption(1 - 35) // baseOption
  // - handleOption(37) // opacity 0.8
    (57 - 68) // position、fontSize
    // (84) // coincide -100%
    (89 - 118, 121 - 193); //itemStyle

/**
 * handleOption 46
 * handleSeries 14 17
 */

JadeJueChart
  - handleOption(6) // barWidth
    // (16, 22) // startAngle labelAlign
    // (93) // tooltip.trigger
  // - handleSeries(29 - 39) // series
    // (46) // radiusAxis.z = 10;
    // (71 - 80, 116 - 123) // series
    (131); // itemStyle.borderWidth
    
    /**
     * handleSeries 66 130
     */

AreaChart
  - bottomArea(73 - 100, 114 - 141) // areaStyle
  - topArea(28 - 39, 59 - 82, 95 - 107); // areaStyle

LineChart
  - handleOptipn(28 - 37) // symbol
  - handlePredict(6 - 22)  // visualMap
    (74 - 83) // series.temp
  - handleSeries(6 - 30) // seriesInit
    (55 - 87) // symbol、itemStyle
    (159, 178, 161, 180) // label.position
    (168, 187) // lineStyle.color
    (165, 184) // markLine.topColor 、bottomColor
    (196 - 202) // type symbolOffset  maxColor minColor symbolRotate
    (209, 228 - 231) // seriesUnit
  - index(77); // animationDuration:1000

LiquidfillChart
  - handleSeries(4 - 24) // seriesInit
    (73, 80, 87); // label.position

PieChart
  - handleSeries(5 - 20) // seriesInit
    (24, 37, 32, 39)
    (107 - 119); // radius

PolarBarChart
  - handleSeries(4 - 36); // seriesInit

ProcessChart
  - BaseOption(1 - 291)
  - handleData(37) // dataMax:100
  - handleOption(72, 84) // yAxis.type，xAxis.type
    (133, 169, 199 - 200, 206) // tooltip.trigger
  - handleSeries(115, 123, 130) // borderRadius
    (149); // series.stack

RadarChart
  - BaseOption(2 - 6) // tooltip
  - handleOption(97, 115, 106)
    (121 - 145) // rich
    (164 - 173) // chartPosition
    (285 - 311) // marklineRadar
    (321 - 337) // thresholdSeries
    (351, 360 - 361) // chartPosition
  - handleSeries(4 - 29) // seriesInit
    (48 - 58) // symbolSize itemStyle areaStyle
    (76 - 109) // redPointerRadar
    (116 - 145); // redPointerSeries

SankeyChart
  - BaseOption(10 - 80)
  - handleOption(46) // tooltip.trigger
    (97) // widthSpace
    (106, 109 - 110, 118);

SunburstChart
  - handleSeries(4 - 23); // seriesInit

TreeChart
  - handleOptipn(8) // tooltip.trigger
    (31 - 43) // defaultPadding
  - handleSeries(7 - 69) // seriesUnit
    (83) // symbolSize
    (91) // itemStyle.color
    (93 - 130); // label.position、orient

WordCloudChart
  - handleOptipn(7) // tooltip.trigger
  - handleSeries(5 - 49) // seriesInit
    (80 - 91); // seriesUnit