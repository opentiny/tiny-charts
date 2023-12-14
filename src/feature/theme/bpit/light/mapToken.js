import basicToken from './basicToken';
import getMapToken from '../getMapToken';
// import { codeToRGB } from '../../../../util/color';

// function getMapToken(basicToken) {
//   const {
//     colorGray0,
//     colorGray30,
//     colorGray50,
//     colorGray60,
//     colorGray90,
//     colorTP,
//     fontSizeSM,
//     fontSize,
//     lineWidth,
//     lineWidthXL,
//     lineWidthXXL,
//     lineWidthSM,
//     lineLength,
//     spaceLG,
//     space,
//     lineTypeSolid,
//     borderZero,
//     lineWidthXXXL,
//     borderSM,
//     borderRadiusSM,
//     lineHeightSM,
//     border,
//     lineWidthLG,
//     lineWidthZero,
//     borderLG,
//     borderRadiusZero,
//     fontSizeLG,
//   } = basicToken;

//   return {
//     // 主色
//     colorPrimary: colorGray0, // 确定
//     //  初级底色
//     colorBg: colorGray0, // 确定
//     // 次级背景色
//     colorSubg: colorGray0,
//     // 主要文本色
//     colorText: colorGray90, // 确定
//     // 次级文本色
//     colorSubtext: colorGray30, // 确定
//     // 禁用文本色
//     colorDisabledText: colorGray50, // ----
//     // 控件激活色（legend相关的颜色）
//     colorActive: colorGray30, // 确定
//     // 控件失效色
//     colorInactive: colorGray50, // ---
//     // 坐标轴线颜色
//     colorAxisLine: codeToRGB(colorGray90, 0.1), // 确定
//     // 刻度线颜色
//     colorAxisTickLine: codeToRGB(colorGray90, 0.1), // 确定
//     // 分隔线颜色
//     colorAxisSplitLine: codeToRGB(colorGray90, 0.1), // 确定
//     // 坐标轴指示器悬浮线
//     colorAxisPointerLine: colorGray60, // 确定
//     // 透明边框色
//     colorBorderTP: colorTP,
//     // 基础边框色
//     colorBorder: colorGray0,
//     // 文本透明
//     colorTextTP: colorTP,
//     // 图元透明
//     colorItemTP: colorTP,
//     // 指示器阴影
//     colorAxisPointerShadow: codeToRGB(colorGray90, 0.08),
//     // 主文本字号
//     textFontSize: fontSize, // 确定
//     // 次级文本字号
//     subtextFontSize: fontSizeSM, // 确定
//     titleFontSize: fontSize * 2,
//     subtitleFontSize: fontSizeLG,
//     // 坐标轴 2
//     axisLineWidth: lineWidth, // 确定
//     //   刻度线  2
//     axisTickLineWidth: lineWidth, // 确定
//     //   分隔线1
//     axisSplitLineWidth: lineWidth, // 确定

//     axisPointerLineWidth: lineWidthSM, // 确定

//     markLineWidth: lineWidthSM,

//     markLineEmphasisWidth: lineWidthSM,

//     axisLineType: lineTypeSolid,

//     axisTickLineType: lineTypeSolid,

//     axisSplitLineType: lineTypeSolid,

//     axisPointerLineType: lineTypeSolid,

//     borderWidthZero: borderZero,

//     // 名称的间距
//     nameGap: spaceLG,
//     axisLabelGap: space,
//     titleGap: spaceLG,
//     // 容器的间距
//     containerGap: spaceLG,
//     containerBoderRadius: space,
//     // 图例的间距
//     legendGap: space * 7,
//     // 图元大小
//     symbolSize: 10,
//     symbolSizeSM: 8,
//     symbolSizeLG: 12,
//     symbolSizeXS: 6,
//     // 文本距离
//     labelDistance: 10,
//     labelDistanceLG: 24,
//     // 柱条的宽度
//     barWidth: lineWidthXL,
//     // 柱条的宽度大
//     barWidthLG: lineWidthXXL,
//     // 堆叠进度图宽度 20
//     barWidthStack: lineWidthXXXL,
//     barBorderRadiusZero: borderRadiusZero,
//     // series里面的labelLine的长度
//     labelLineLength: lineLength,

//     // series.itemStyle
//     itemBorderWidthSM: borderSM,
//     itemBorderWidth: border,
//     itemBorderWidthLG: borderLG,
//     itemBorderWidthZero: borderZero,
//     itemBorderRadiusSM: borderRadiusSM,
//     itemBorderColor: colorGray0,
//     // series.label
//     labelColor: colorGray90,
//     labelFontSizeSM: fontSizeSM,
//     // series.rich
//     richFontSizeSM: fontSizeSM,
//     richLineHeight: lineHeightSM * fontSizeSM,
//     richLineHeightSM: fontSizeSM,
//     // series.lineStyle
//     lineStyleWidth: lineWidth,
//     lineStyleWidthLG: lineWidthLG,
//     lineStyleWidthZero: lineWidthZero,
//   };
// }

// 获取新的mapToken
const mapToken = {
  ...getMapToken(basicToken),
};

export default mapToken;
// export { getMapToken };
