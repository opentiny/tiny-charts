import mapToken from '../mapToken';
import getModelToken from '../../util/getModelToken';
// const {
//   colorPrimary,
//   colorText,
//   colorSubtext,
//   colorAxisLine,
//   colorAxisTickLine,
//   colorAxisSplitLine,
//   axisLineWidth,
//   axisTickLineWidth,
//   axisSplitLineWidth,
//   axisLineType,
//   axisTickLineType,
//   axisSplitLineType,
//   textFontSize,
//   subtextFontSize,
//   nameGap,
//   containerGap,
//   labelLineLength,
//   borderZero,
//   colorSubg,
//   colorAxisPointerShadow,
// } = mapToken;


// // 主文本
// const textColor = {
//   titleTextColor: colorText,
//   titleSubTextColor: colorText,
//   //   圆盘图Serieslabel
//   seriesLabelTextColor: colorText,
// };

// // 次要文本
// const subTextColor = {
//   legendTextColor: colorSubtext,
//   legendRichTextColor: colorSubtext,

//   xAxisNameColor: colorSubtext,
//   xAxisLabelColor: colorSubtext,

//   yAxisNameColor: colorSubtext,
//   yAxisLabelColor: colorSubtext,

//   radarAxisNameColor: colorSubtext,
//   radarAxisLabelColor: colorSubtext,
// };

// // 轴线的name字号
// const axisNameFontSize = {
//   xAxisNameFontSize: textFontSize,
//   yAxisNameFontSize: textFontSize,
// };

// // 轴线的类型

// const axisType={
// xAxisLineType:axisLineType,
// xAxisTickLineType:axisTickLineType,
// xAxisSplitLineType:axisSplitLineType,

// yAxisLineType:axisLineType,
// yAxisTickLineType:axisTickLineType,
// yAxisSplitLineType:axisSplitLineType,



// }



// // 次要文本的字号
// const subTextFontSize = {
//   xAxisLabelFontSize: subtextFontSize,
//   yAxisLabelFontSize: subtextFontSize,
//   legendTextFontSize: subtextFontSize,
//   angleAxisLabelFontSize: subtextFontSize,
//   radiusAxisLabelFontSize: subtextFontSize,
// };

// // 轴线的颜色
// const axisLineColor = {
//   xAxisLineColor: colorAxisLine,
//   xAxisTickLineColor: colorAxisTickLine,
//   xAxisSplitLineColor: colorAxisSplitLine,

//   yAxisLineColor: colorAxisLine,
//   yAxisTickLineColor: colorAxisTickLine,
//   yAxisSplitLineColor: colorAxisSplitLine,

//   radarAxisLineColor: colorAxisLine,
//   radarAxisTickLineColor: colorAxisTickLine,
//   radarSplitLineColor: colorAxisSplitLine,

//   angleAxisLineColor: colorAxisLine,
//   angleAxisTickLineColor: colorAxisTickLine,
//   angleAxisSplitLineColor: colorAxisSplitLine,

//   radiusAxisLineColor: colorAxisLine,
//   radiusAxisTickLineColor: colorAxisTickLine,
//   radiusAxisSplitLineColor: colorAxisSplitLine,


 

//   //   圆盘图的serieslabel线
//   seriesLabelLineColor: colorAxisSplitLine,
// };

// // 轴线的粗细
// const axislineWidth = {
//   xAxisLineWidth: axisLineWidth,
//   xAxisTickLineWidth: axisTickLineWidth,
//   xAxisSplitLineWidth: axisSplitLineWidth,

//   yAxisLineWidth: axisLineWidth,
//   yAxisTickLineWidth: axisTickLineWidth,
//   yAxisSplitLineWidth: axisSplitLineWidth,

//   radarAxisLineWidth: axisLineWidth,
//   radarAxisTickLineWidth: axisTickLineWidth,
//   radarSplitLineWidth: axisSplitLineWidth,

//   radiusAxisLineWidth: axisLineWidth,
//   radiusAxisTickLineWidth: axisTickLineWidth,
//   radiusAxisSplitLineWidth: axisSplitLineWidth,

//   angleAxisLineWidth: axisLineWidth,
//   angleAxisTickLineWidth: axisTickLineWidth,
//   angleAxisSplitLineWidth: axisSplitLineWidth,

  
// };

// // 轴线名称的间距
// const axisNameGap = {
//   xAxisNameGap: nameGap,
//   yAxisNameGap: nameGap,
// };

// const lineLength = {
//   // 圆盘图的labelline的长度
//   seriesLabelLineLength: labelLineLength, // 待讨论
// };

// // tooltip的间距
// const tooltipSpace = {
//   // 垂直
//   tooltipSpaceVertical: containerGap,
//   // 水平
//   tooltipSpaceHorizontal: containerGap * 2,
// };

// // 此部分的配置是根据规范的tooltip的内容区域的文本样式
// const tooltipContent = {};

// const gridGap = {
//   // gridTop:
//   // gridRight:
//   // gridBottom:
//   // gridLeft:
// };

// // 边框相关
// const borderWidth = {
//   // 圆盘图
//   seriesItemStyleBorderWidthZero: borderZero,
//   // seriesItemStyleBorderWidth:
// };

// const axisPointerShadow = {
//   tooltipAxisPointerShadow: colorAxisPointerShadow,
// };

// // 圆盘图
// const seriesEmptyCircleColor = colorSubg;

const modeleToken = {
  ...getModelToken(mapToken),
};

export default modeleToken;
