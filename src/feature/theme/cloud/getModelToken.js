function getModelToken(mapToken) {
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
    titleGap,
    axisLabelGap,
    containerGap,
    labelLineLength,
    borderWidthZero,
    colorSubg,
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
    itemBorderWidthSM,
    itemBorderRadiusSM,
    labelColor,
    labelFontSizeSM,
    colorItemTP,
    barWidth,
    colorBorderTP,
    symbolSize,
    symbolSizeSM,
    symbolSizeLG,
    colorAreaTP,
    richFontSizeSM,
    richLineHeight,
    richLineHeightSM,
    itemBorderWidth,
    lineStyleWidth,
    lineStyleWidthLG,
    lineStyleWidthZero,
    itemBorderWidthLG,
    itemBorderWidthZero,
    itemBorderColor,
    labelDistanceLG,
    symbolSizeXS,
    containerBoderRadius,
    barBorderRadiusZero,
    titleFontSize,
    subtitleFontSize,
  } = mapToken;
  return {
    // 标题 token
    titleTextColor: colorText,
    titleSubTextColor: colorSubtext,
    titleTextFontSize: titleFontSize,
    titleSubtextFontSize: subtitleFontSize,
    // 图例 token
    legendTextColor: colorSubtext,
    legendTextRichColor: colorSubtext,
    legendRichTextColor: colorSubtext,
    legendTextFontSize: subtextFontSize,
    legendTextRichFontSize: subtextFontSize,
    // x轴 token
    xAxisNameColor: colorSubtext,
    xAxisLabelColor: colorSubtext,
    xAxisNameFontSize: textFontSize,
    xAxisLineType: axisLineType,
    xAxisLineColor: colorAxisLine,
    xAxisTickLineColor: colorAxisTickLine,
    xAxisSplitLineColor: colorAxisSplitLine,
    xAxisTickLineType: axisTickLineType,
    xAxisSplitLineType: axisSplitLineType,
    xAxisLabelFontSize: subtextFontSize,
    // y轴 token
    yAxisNameColor: colorSubtext,
    yAxisLabelColor: colorSubtext,
    yAxisNameFontSize: textFontSize,
    yAxisLineType: axisLineType,
    yAxisLineColor: colorAxisLine,
    yAxisTickLineColor: colorAxisTickLine,
    yAxisSplitLineColor: colorAxisSplitLine,
    yAxisTickLineType: axisTickLineType,
    yAxisSplitLineType: axisSplitLineType,
    yAxisLabelFontSize: subtextFontSize,
    // 雷达轴 token
    radarAxisNameColor: colorSubtext,
    radarAxisLabelColor: colorSubtext,
    // 极坐标轴 token
    angleAxisLabelColor: colorSubtext,
    angleAxisLineType: axisLineType,
    angleAxisTickLineType: axisTickLineType,
    // 提示窗 token
    tooltipTextFontSize: textFontSize,
    tooltipAxisPointerTextColor: colorText,




    
    
     //   圆盘图Serieslabel
     seriesLabelTextColor: colorText,

    // 轴线的name字号

    radiusAxisLabelColor: colorSubtext,
    
   

   

   

    
    //* *********备注极坐标系的角度轴的分割线需要特别写成实线，和直角坐标系的使用有区别******
    angleAxisSplitLineType: axisLineType,
    radiusAxisLineType: axisLineType,
    radiusAxisTickLineType: axisTickLineType,
    radiusAxisSplitLineType: axisSplitLineType,
    tooltipAxisPointerLineType: axisPointerLineType,

    // 次要文本的字号

   
    
    angleAxisLabelFontSize: subtextFontSize,
    radiusAxisLabelFontSize: subtextFontSize,

    // 轴线的颜色

    

   

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

    // 轴线的粗细

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

    // 轴线名称的间距

    xAxisNameGap: nameGap,
    yAxisNameGap: nameGap,
    titleItemGap: titleGap,
    radiusAxisLabelGap: axisLabelGap,
    // 圆盘图的labelline的长度
    seriesLabelLineLength: labelLineLength, // 待讨论

    // tooltip的间距

    // 垂直
    tooltipSpaceVertical: containerGap,
    // 水平
    tooltipSpaceHorizontal: containerGap * 2,

    // 背景色

    tooltipBg: colorSubg,
    tooltipFontColor: colorText,
    tooltipBorderRaduis: containerBoderRadius,
    // 边框相关

    // 圆盘图
    seriesItemStyleBorderWidthZero: borderWidthZero,
    // seriesItemStyleBorderWidth:

    legendInactiveBorderWidth: borderWidthZero,
    legendBorderWidth: borderWidthZero,
    legendItemStyleBorderWidth: borderWidthZero,

    // 图例相关

    legendItemGap: legendGap,
    legendCircleItemWidth: 24,
    legendCircleItemHeight: 6,
    legendReactItemWidth: 12,
    legendReactItemHeight: 2,
    legendInactiveColor: colorInactive,
    legendTextPadding: [containerGap / 2, 0, 0, 0],
    legendTextRichPadding: [containerGap / 2, 0, 0, 0],
    legendPageTextColor: colorText,
    legendInactiveBorderColor: colorPrimary,
    legendPageIconInactiveColor: colorInactive,
    legendPageIconColor: colorActive,

    tooltipAxisPointerShadow: colorAxisPointerShadow,

    // 圆盘图
    seriesEmptyCircleColor: colorSubg,

    seriesMarkLineWidth: markLineWidth,

    seriesMarkLineEmphasisWidth: markLineEmphasisWidth,

    markPointLabelColor: colorTextTP,

    lineColorTp: colorTextTP,

    //  visualMap
    visualMapPiecesColor: colorTextTP,
    visualMapDashColor: colorPrimary,

    colorPrimary,

    // series系列
    itemBorderWidthSM,
    itemBorderWidthZero,
    itemBorderWidth,
    itemBorderWidthLG,
    itemBorderColor,
    itemBorderColorTP: colorBorderTP,
    itemBorderRadiusSM,
    itemBorderRadiusZero: barBorderRadiusZero,
    itemColorTP: colorItemTP,
    symbolSize,
    symbolSizeSM,
    symbolSizeLG,
    symbolSizeXS,
    labelColor,
    labelFontSizeSM,
    labelDistanceLG,
    richFontSizeSM,
    richLineHeight,
    richLineHeightSM,
    lineStyleWidth,
    lineStyleWidthLG,
    lineStyleWidthZero,
    lineColor: colorText,
    barWidth,
    areaColorTP: colorAreaTP,
    circleColor: colorAxisLine,
    markLineColorTP: colorBorderTP,
  };
}

export default getModelToken;
export { getModelToken as getCloudModelToken };
