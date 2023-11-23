import { codeToRGB } from '../../../util/color';
export default function getMapToken(basicToken, isLight = true) {
  const {
    colorGray0,
    colorGray5,
    colorGray10,
    colorGray20,
    colorGray50,
    colorGray60,
    colorGray70,
    colorGray90,
    fontSizeSM,
    fontSize,
    lineWidth,
    lineWidthXL,
    lineWidthXXL,
    lineWidthXXXL,
    lineWidthSM,
    lineLength,
    space,
    spaceSM,
    lineTypeSolid,
    colorTP,
    borderZero,
  } = basicToken;

  const mapToken = {
    // 主色
    colorPrimary: isLight ? colorGray0 : colorGray90, // 确定
    //  初级底色
    colorBg: isLight ? colorGray0 : colorGray90, // 确定
    // 次级背景色
    colorSubg: isLight ? colorGray0 : colorGray70,
    // 主要文本色
    colorText: isLight ? colorGray90 : colorGray5, // 确定
    // 次级文本色
    colorSubtext: isLight ? colorGray60 : colorGray20, // 确定
    // 禁用文本色
    colorDisabledText: isLight ? codeToRGB(colorGray90, 0.3) : codeToRGB(colorGray10, 0.3), // 确定
    // 控件激活色（legend相关的文本图标的颜色）
    colorActive: isLight ? colorGray60 : colorGray20, // 确定
    // 控件失效色（legend相关的文本图标失效的颜色）
    colorInactive: isLight ? codeToRGB(colorGray90, 0.3) : codeToRGB(colorGray10, 0.3), // 确定
    // 坐标轴线颜色
    colorAxisLine: isLight ? colorGray10 : codeToRGB(colorGray10, 0.1), // 确定
    // 刻度线颜色
    colorAxisTickLine: isLight ? colorGray10 : codeToRGB(colorGray10, 0.1), // 确定
    // 分隔线颜色
    colorAxisSplitLine: isLight ? codeToRGB(colorGray90, 0.1) : codeToRGB(colorGray10, 0.1), // 确定
    // 坐标轴指示器悬浮线
    colorAxisPointerLine: isLight ? colorGray20 : colorGray50, // 确定
    // 透明边框色
    colorBorderTP: colorTP,
    // 基础边框色
    colorBorder: colorGray0,
    // 文本透明
    colorTextTP: colorTP,
    // 面积区域透明
    colorAreaTP: colorTP,
    // 指示器阴影
    colorAxisPointerShadow: isLight ? codeToRGB(colorGray90, 0.08) : codeToRGB(colorGray10, 0.08),
    // 主文本字号
    textFontSize: fontSize, // 确定
    // 次级文本字号
    subtextFontSize: fontSizeSM, // 确定
    // 坐标轴线宽 2
    axisLineWidth: lineWidth, // 确定
    // 刻度线线宽 2
    axisTickLineWidth: lineWidth, // 确定
    // 分隔线线宽 1
    axisSplitLineWidth: lineWidthSM, // 确定
    // 坐标轴指示器的标线线宽 1
    axisPointerLineWidth: lineWidthSM,

    markLineWidth: lineWidthSM,

    markLineEmphasisWidth: lineWidthSM,

    axisLineType: lineTypeSolid,

    axisTickLineType: lineTypeSolid,

    axisSplitLineType: lineTypeSolid,

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

  return mapToken;
}
