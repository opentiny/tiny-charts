// import basicToken from '../basicToken';
import { codeToRGB } from '../../../util/color';

export default function getMapToken(basicToken, isLight = true) {
  const {
    colorGray0,
    colorGray10,
    colorGray50,
    colorGray90,
    fontSizeSM,
    fontSize,
    lineWidth,
    lineWidthXL,
    lineWidthXXL,
    lineWidthSM,
    lineLength,
    space,
    spaceSM,
    lineTypeSolid,
  } = basicToken;

  const mapToken = {
    // 主色
    colorPrimary: colorGray0, // 确定
    //  初级底色
    colorBg: colorGray0, // 确定
    // 次级背景色
    colorSubg: colorGray10,

    // 主要文本色
    colorText: colorGray90, // 确定
    // 次级文本色
    colorSubtext: colorGray50, // 确定
    // 禁用文本色
    colorDisabledText: codeToRGB(colorGray90, 0.3), // 确定

    // 坐标轴线颜色
    colorAxisLine: colorGray10, // 确定
    // 刻度线颜色
    colorAxisTickLine: colorGray10, // 确定
    // 分隔线颜色
    colorAxisSplitLine: codeToRGB(colorGray90, 0.1), // 确定
    // 坐标轴指示器悬浮线
    colorAxisPointerLine: codeToRGB(colorGray90, 0.1),

    // 透明边框色
    colorBorderTP: 'transparent',
    // 基础边框色
    colorBorder: colorGray0,

    // 指示器阴影
    colorAxisPointerShadow: codeToRGB(isLight ? colorGray90 : colorGray10, 0.08),


    // 主文本字号
    textFontSize: fontSize, // 确定
    // 次级文本字号
    subtextFontSize: fontSizeSM, // 确定

    // 坐标轴 2
    axisLineWidth: lineWidth,
    //   刻度线  2
    axisTickLineWidth: lineWidth,
    //   分隔线
    axisSplitLineWidth: lineWidthSM,

    axisPointerLineWidth: lineWidthSM,

    axisLineType: lineTypeSolid,

    axisTickLineType: lineTypeSolid,

    axisSplitLineType: lineTypeSolid,

    axisPointerLineType: lineTypeSolid,

    // 名称的间距
    nameGap: space,
    // 容器的间距
    containerGap: space,
    // 图例的间距
    legendGap: spaceSM * 7,

    // 柱条的宽度
    barWidth: lineWidthXL,
    // 柱条的宽度大
    barWidthLG: lineWidthXXL,

    // series里面的labelLine的长度
    labelLineLength: lineLength,
  };

  return mapToken;
}
