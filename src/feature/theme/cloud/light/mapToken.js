import cloudBasicToken from './basicToken';
import { codeToRGB } from '../../../../util/color';

function getMapToken(basicToken, isLight = true) {
  const {
    colorGray0,
    colorGray10,
    colorGray30,
    colorGray50,
    colorGray60,
    colorGray90,
    colorTP,
    fontSizeSM,
    fontSize,
    lineWidthXL,
    lineWidthXXL,
    lineWidthSM,
    lineLength,
    space,
    spaceSM,
    lineTypeSolid,
    lineTypeDashedLG,
    borderZero,
    lineWidthXXXL,
  } = basicToken;

  return {
    // 主色
    colorPrimary: colorGray0, // 确定
    //  初级底色
    colorBg: colorGray0, // 确定
    // 次级背景色
    colorSubg: colorGray0,
    // 主要文本色
    colorText: colorGray90, // 确定
    // 次级文本色
    colorSubtext: colorGray60, // 确定
    // 禁用文本色
    colorDisabledText: colorGray50, // 确定
    // 控件激活色（legend相关的颜色）
    colorActive: colorGray60,
    // 控件失效色
    colorInactive: colorGray50,
    // 坐标轴线颜色
    colorAxisLine: colorGray30, // 确定
    // 刻度线颜色
    colorAxisTickLine: colorGray30, // 确定
    // 分隔线颜色
    colorAxisSplitLine: colorGray30, // 确定
    // 坐标轴指示器悬浮线
    colorAxisPointerLine: colorGray60,
    // 透明边框色
    colorBorderTP: colorTP,
    // 基础边框色
    colorBorder: colorGray0,
    // 文本透明
    colorTextTP: colorTP,
    // 指示器阴影
    colorAxisPointerShadow: codeToRGB(isLight ? colorGray90 : colorGray10, 0.08),
    // 主文本字号
    textFontSize: fontSize, // 确定
    // 次级文本字号
    subtextFontSize: fontSizeSM, // 确定
    // 坐标轴 2
    axisLineWidth: lineWidthSM,
    //   刻度线  2
    axisTickLineWidth: lineWidthSM,
    //   分隔线
    axisSplitLineWidth: lineWidthSM,

    axisPointerLineWidth: lineWidthSM,

    markLineWidth: lineWidthSM,

    markLineEmphasisWidth: lineWidthSM,

    axisLineType: lineTypeSolid,

    axisTickLineType: lineTypeSolid,

    axisSplitLineType: lineTypeDashedLG,

    axisPointerLineType: lineTypeSolid,

    borderWidthZero: borderZero,

    // 名称的间距
    nameGap: space,
    // 容器的间距
    containerGap: space,

    // 图例的间距
    legendGap: spaceSM * 7,
    // 图元大小
    symbolSize: 10,
    symbolSizeSM: 8,
    symbolSizeLG: 12,
    symbolSizeXS: 6,
    // 文本距离
    labelDistance: 10,
    labelDistanceLG: 25,
    // 柱条的宽度
    barWidth: lineWidthXL,
    // 柱条的宽度大
    barWidthLG: lineWidthXXL,
    // 堆叠进度图宽度 20
    barWidthStack: lineWidthXXXL,
    // series里面的labelLine的长度
    labelLineLength: lineLength,
  };
}

// 获取新的mapToken
const cloudMapToken = {
  ...getMapToken(cloudBasicToken),
};

export default cloudMapToken;
