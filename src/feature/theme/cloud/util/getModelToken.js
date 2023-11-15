
export default function getModelToken(mapToken) {
  const {
    colorPrimary,
    colorText,
    colorSubtext,
    colorAxisLine,
    colorAxisTickLine,
    colorAxisSplitLine,
    axisLineWidth,
    axisTickLineWidth,
    axisSplitLineWidth,
    axisLineType,
    axisTickLineType,
    axisSplitLineType,
    textFontSize,
    subtextFontSize,
    nameGap,
    containerGap,
    labelLineLength,
    borderWidthZero,
    colorSubg,
    colorBg,
    colorAxisPointerShadow,
    colorAxisPointerLine,
    axisPointerLineWidth,
    axisPointerLineType,
    legendGap,
    markLineWidth,
    markLineEmphasisWidth,
    colorTextTP,
    colorActive,
    colorInactive,
  } = mapToken;

  // 主文本
  const textColor = {
   tooltipAxisPointerTextColor:colorText,
    //   圆盘图Serieslabel
    seriesLabelTextColor: colorText,
  };


  // 次要文本
  const subTextColor = {
    titleTextColor: colorSubtext,
    legendTextColor: colorSubtext,
    legendTextRichColor: colorSubtext,
    legendRichTextColor: colorSubtext,
    xAxisNameColor: colorSubtext,
    xAxisLabelColor: colorSubtext,
    yAxisNameColor: colorSubtext,
    yAxisLabelColor: colorSubtext,
    radarAxisNameColor: colorSubtext,
    radarAxisLabelColor: colorSubtext,
  };

  // 轴线的name字号
  const axisNameFontSize = {
    xAxisNameFontSize: textFontSize,
    yAxisNameFontSize: textFontSize,

    tooltipTextFontSize:textFontSize,
  };

  // 轴线的类型

  const axisType = {
    xAxisLineType: axisLineType,
    xAxisTickLineType: axisTickLineType,
    xAxisSplitLineType: axisSplitLineType,

    yAxisLineType: axisLineType,
    yAxisTickLineType: axisTickLineType,
    yAxisSplitLineType: axisSplitLineType,

    tooltipAxisPointerLineType: axisPointerLineType,
  };

  // 次要文本的字号
  const subTextFontSize = {
    xAxisLabelFontSize: subtextFontSize,
    yAxisLabelFontSize: subtextFontSize,
    legendTextFontSize: subtextFontSize,
    legendTextRichFontSize: subtextFontSize,
    angleAxisLabelFontSize: subtextFontSize,
    radiusAxisLabelFontSize: subtextFontSize,

    titleTextFontSize:subtextFontSize,
  };

  // 轴线的颜色
  const axisLineColor = {
    xAxisLineColor: colorAxisLine,
    xAxisTickLineColor: colorAxisTickLine,
    xAxisSplitLineColor: colorAxisSplitLine,

    yAxisLineColor: colorAxisLine,
    yAxisTickLineColor: colorAxisTickLine,
    yAxisSplitLineColor: colorAxisSplitLine,

    radarAxisLineColor: colorAxisLine,
    radarAxisTickLineColor: colorAxisTickLine,
    radarSplitLineColor: colorAxisSplitLine,

    angleAxisLineColor: colorAxisLine,
    angleAxisTickLineColor: colorAxisTickLine,
    angleAxisSplitLineColor: colorAxisSplitLine,

    radiusAxisLineColor: colorAxisLine,
    radiusAxisTickLineColor: colorAxisTickLine,
    radiusAxisSplitLineColor: colorAxisSplitLine,

    tooltipAxisPointerLineColor: colorAxisPointerLine,
    //   圆盘图的serieslabel线
    seriesLabelLineColor: colorAxisSplitLine,
  };

  // 轴线的粗细
  const axislineWidth = {
    xAxisLineWidth: axisLineWidth,
    xAxisTickLineWidth: axisTickLineWidth,
    xAxisSplitLineWidth: axisSplitLineWidth,

    yAxisLineWidth: axisLineWidth,
    yAxisTickLineWidth: axisTickLineWidth,
    yAxisSplitLineWidth: axisSplitLineWidth,

    radarAxisLineWidth: axisLineWidth,
    radarAxisTickLineWidth: axisTickLineWidth,
    radarSplitLineWidth: axisSplitLineWidth,

    radiusAxisLineWidth: axisLineWidth,
    radiusAxisTickLineWidth: axisTickLineWidth,
    radiusAxisSplitLineWidth: axisSplitLineWidth,

    angleAxisLineWidth: axisLineWidth,
    angleAxisTickLineWidth: axisTickLineWidth,
    angleAxisSplitLineWidth: axisSplitLineWidth,

    tooltipAxisPointerLineWidth: axisPointerLineWidth,
  };

  // 轴线名称的间距
  const axisNameGap = {
    xAxisNameGap: nameGap,
    yAxisNameGap: nameGap,
  };

  const lineLength = {
    // 圆盘图的labelline的长度
    seriesLabelLineLength: labelLineLength, // 待讨论
  };

  // tooltip的间距
  const tooltipSpace = {
    // 垂直
    tooltipSpaceVertical: containerGap,
    // 水平
    tooltipSpaceHorizontal: containerGap * 2,
  };

  // 此部分的配置是根据规范的tooltip的内容区域的文本样式
  const tooltipContent = {};

  const gridGap = {
    // gridTop:
    // gridRight:
    // gridBottom:
    // gridLeft:
  };

// 背景色
const   containerBg={
    tooltipBg:colorBg,
}


  // 边框相关
  const borderWidth = {
    // 圆盘图
    seriesItemStyleBorderWidthZero: borderWidthZero,
    // seriesItemStyleBorderWidth:

    legendInactiveBorderWidth:borderWidthZero,
    legendBorderWidth:borderWidthZero,
    legendItemStyleBorderWidth:borderWidthZero,
  };

  // 图例相关
  const legend = {
    legendItemGap: legendGap,
    legendCircleItemWidth: 24,
    legendCircleItemHeight: 6,
    legendReactItemWidth:12,
    legendReactItemHeight:2,
    legendTextFontSize:subtextFontSize,
    legendInactiveColor:colorInactive,
    legendTextPadding:[containerGap/2, 0, 0, 0],
    legendTextRichPadding:[containerGap/2, 0, 0, 0],
    legendPageTextColor:colorText,
    legendInactiveBorderColor: colorPrimary,
    legendPageIconInactiveColor:colorInactive,
    legendPageIconColor:colorActive,
  };

  const axisPointerShadow = {
    tooltipAxisPointerShadow: colorAxisPointerShadow,
  };

  // 圆盘图
  const seriesEmptyCircleColor = colorSubg;

  const seriesMarkLineWidth=markLineWidth

 const  seriesMarkLineEmphasisWidth=markLineEmphasisWidth
 

 const  markPointLabelColor=colorTextTP

  const modeleToken = {
    colorPrimary,
    ...textColor,
    ...subTextColor,
    ...axisLineColor,
    ...axislineWidth,
    ...axisType,
    ...axisNameFontSize,
    ...subTextFontSize,
    ...tooltipSpace,
    ...axisNameGap,
    ...lineLength,
    ...borderWidth,
    ...axisPointerShadow,
    ...legend,
    ...containerBg,
    seriesEmptyCircleColor,
    seriesMarkLineWidth,
    seriesMarkLineEmphasisWidth,
    markPointLabelColor,
  };

  return modeleToken;
}