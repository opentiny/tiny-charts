import { codeToRGB } from '../../../../util/color';

function getPublicToken(globalToken) {
  const {
    fontSizeBase,
    fontSizeMd,
    space2x,
    spaceBase,
    lineTypeSolid,
    colorTransparent,
    borderNone,
    borderBase,
    borderRadiusBase,
    border2x,
    fontSizeLg,
    borderRadiusNone,
    fontSize4xl,
    space6x,
    size05x,
    size3x,
    size2x,
    spaceNone,
    space8x,
    space4x,
    size6x,
    size5x,
  } = globalToken;

  return {
    // 透明边框色
    colorBorderTransparent: colorTransparent,
    // 文本透明
    colorTextTransparent: colorTransparent,
    // 背景透明
    colorBgTransparent: colorTransparent,
    // 线透明
    colorLineTransparent: colorTransparent,
    // tip阴影垂直偏移
    shadowOffsetY: space2x,
    // tip阴影模糊
    shadowBlur: space6x,
    // 主文本字号
    textFontSize: fontSizeMd, // 确定
    // 次级文本字号
    subtextFontSize: fontSizeBase, // 确定
    // 标题文本字号
    titleFontSize: fontSize4xl,
    // 副标题文本字号
    subtitleFontSize: fontSizeLg,
    // 坐标轴线宽 2
    axisLineWidth: border2x, // 确定
    // 刻度线线宽 2
    axisTickLineWidth: border2x, // 确定
    // 分隔线线宽 1
    axisSplitLineWidth: borderBase, // 确定
    // 极坐标系分隔线类型
    polarAxisSplitLineType: lineTypeSolid,
    // 坐标轴指示器的标线线宽 1
    axisPointerLineWidth: borderBase,
    // 坐标轴类型
    axisLineType: lineTypeSolid,
    // 刻度线类型
    axisTickLineType: lineTypeSolid,
    // 坐标轴名称间距
    axisNameSpace: space2x,
    // 直角坐标系分隔线类型
    axisSplitLineType: lineTypeSolid,
    // 坐标轴指示器标线类型
    axisPointerLineType: lineTypeSolid,
    // 坐标轴文本间距
    axisLabelSpace: spaceBase,
    // 标识线高亮宽度
    markLineEmphasisWidth: borderBase,
    //  border 0
    borderWidthNone: borderNone,
    // 标题文本间距
    titleSpace: space2x,
    // 标识线宽度
    markLineWidth: borderBase,
    // 容器的间距
    containerGap: spaceBase,
    // 容器的圆角
    containerBoderRadius: borderRadiusBase,
    // 图元
    symbolSizeLG: size3x,
    // 图元 雷达图用
    symbolSize: size3x,
    // 图元 超大
    symbolSizeSM: size2x,
    // 图元的边框
    symbolBorderWidth: border2x,
    // 图元的边框 雷达图专用
    symbolBorderWidthSM: border2x,
    // 柱条的宽度
    barWidth: size2x,
    // 堆叠进度图宽度 20
    barWidthLG: size5x,
    // label字号
    labelFontSize: fontSizeBase,
    // labelLine的长度
    labelLineLength: size6x,
    // 边框 细
    borderWidth: borderBase,
    // 边框
    borderWidthLG: border2x,
    // 圆角 0
    borderRadiusNone,
    // 圆角 小
    borderRadius: borderRadiusBase,
    lineWidth: border2x,
    lineWidthNone: borderNone,
    // 图例单元尺寸
    legendItemSize: size05x,
    // 图例圆形单元尺寸
    legendCircleItemSize: size3x,
    // 图例的间距
    legendSpace: space8x,
    // 无padding
    paddingNone: spaceNone,
    paddingSM: spaceBase,
    padding: space2x,
    paddingLG: space4x,
  }
}

function getAliasToken(globalToken) {
  const {
    colorGray0,
    colorGray10,
    colorGray20,
    colorGray60,
    colorGray90,
    colorGray100,
  } = globalToken;

  return {
    //  初级底色 图表背景
    colorBgPrimary: colorGray0, // 确定
    // 次级背景色 tip背景
    colorBgSecondary: colorGray0,
    // datazoom手柄填充背景和主要文本色一致
    colorBgHandle: colorGray90,
    // 主要文本色
    colorTextPrimary: colorGray90, // 确定
    // 次级文本色
    colorTextSecondary: colorGray60, // 确定
    // 禁用文本色
    colorTextDisabled: codeToRGB(colorGray90, 0.3), // 确定
    // 图标激活色（legend翻页的颜色）
    colorIconPrimary: colorGray90, // 确定
    // 控件失效色（legend失效的颜色）
    colorInactive: colorGray20, // 确定
    // 图标禁用色（legend翻页图标禁用的颜色）
    colorIconDisabled: codeToRGB(colorGray90, 0.3), // 确定
    // 坐标轴线颜色
    colorAxisLine: colorGray10, // 确定
    // 刻度线颜色
    colorAxisTickLine: colorGray10, // 确定
    // 分隔线颜色
    colorAxisSplitLine: codeToRGB(colorGray90, 0.1), // 确定
    // 坐标轴指示器悬浮线
    colorAxisPointerLine: colorGray20, // 确定
    // 指示器阴影
    colorAxisPointerShadow: codeToRGB(colorGray90, 0.05),
    // tip阴影
    colorShadow: codeToRGB(colorGray100, 0.16),
    // datazoom手柄阴影
    colorShadowHandle: codeToRGB(colorGray100, 0.16),
    // 边框颜色
    colorBorder: colorGray0,
    // datazoom手柄边框色 把手容器色
    colorBorderHandle: colorGray0,
    // 禁用边框颜色和图表colorBgPrimary保持一致（聚合气泡图用todo）
    colorBorderDisabled: colorGray0, // 确定
    // label颜色
    colorLabel: colorGray90,
    // label禁用颜色（和文本禁用色保持一致）
    colorLabelDisabled: codeToRGB(colorGray90, 0.3), // 确定
    // 虚线的颜色
    colorDash: colorGray0,
    // 无数据占位背景
    colorBgEmpty: colorGray10, // 确定
    // labelLine颜色
    colorLabelLine: colorGray90, // 确定
  };
}

function getDarkAliasToken(globalToken) {
  const {
    colorGray5,
    colorGray10,
    colorGray20,
    colorGray50,
    colorGray70,
    colorGray90,
    colorGray100,
  } = globalToken;

  return {
    //  初级底色 图表背景
    colorBgPrimary: colorGray90, // 确定
    // 次级背景色 tip背景
    colorBgSecondary: colorGray70,
    // datazoom手柄填充背景和主要文本色一致
    colorBgHandle: colorGray5,
    // 主要文本色
    colorTextPrimary: colorGray5, // 确定
    // 次级文本色
    colorTextSecondary: colorGray20, // 确定
    // 禁用文本色
    colorTextDisabled: codeToRGB(colorGray10, 0.3), // 确定
    // 图标激活色（legend翻页的颜色）
    colorIconPrimary: colorGray10, // 确定
    // 控件失效色（legend失效的颜色）
    colorInactive: colorGray50, // 确定
    // 图标禁用色（legend翻页图标禁用的颜色）
    colorIconDisabled: codeToRGB(colorGray10, 0.3), // 确定
    // 坐标轴线颜色
    colorAxisLine: codeToRGB(colorGray10, 0.1), // 确定
    // 刻度线颜色
    colorAxisTickLine: codeToRGB(colorGray10, 0.1), // 确定
    // 分隔线颜色
    colorAxisSplitLine: codeToRGB(colorGray10, 0.1), // 确定
    // 坐标轴指示器悬浮线
    colorAxisPointerLine: colorGray50, // 确定
    // 指示器阴影
    colorAxisPointerShadow: codeToRGB(colorGray10, 0.08),
    // tip阴影
    colorShadow: codeToRGB(colorGray100, 0.5),
    // datazoom手柄阴影
    colorShadowHandle: codeToRGB(colorGray100, 0.5),
    // 边框颜色
    colorBorder: colorGray90,
    // datazoom手柄边框色 把手容器色
    colorBorderHandle: colorGray70,
    // 禁用边框颜色和图表colorBgPrimary保持一致（聚合气泡图用todo）
    colorBorderDisabled: colorGray90, // 确定
    // label颜色
    colorLabel: colorGray5,
    // label禁用颜色（和文本禁用色保持一致）
    colorLabelDisabled: codeToRGB(colorGray10, 0.3), // 确定
    // 虚线的颜色
    colorDash: colorGray90,
    // 无数据占位背景
    colorBgEmpty: codeToRGB(colorGray10, 0.1), // 确定
    // labelLine颜色
    colorLabelLine: colorGray5, // 确定
  };
}


export default getAliasToken;
export {
  getAliasToken as getIctAliasToken,
  getDarkAliasToken as getIctDarkAliasToken
};
