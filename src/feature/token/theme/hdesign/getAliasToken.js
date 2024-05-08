/**
 * Copyright (c) 2024 - present TinyCharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { codeToRGB } from '../../../../util/color';

function getPublicToken(globalToken) {
  const {
    colorGray100,
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
    size4x,
    spaceNone,
    space8x,
    space4x,
    size6x,
    size5x,
    borderRadiusLg,
  } = globalToken;


  return {
    // 透明边框色
    colorBorderTransparent: colorTransparent,
    // 文本透明
    colorTextTransparent: colorTransparent,
    // datazoom手柄阴影
    colorShadowHandle: codeToRGB(colorGray100, 0.08),// 确定
    // 背景透明
    colorBgTransparent: colorTransparent,
    // 线透明
    colorLineTransparent: colorTransparent,
    // tip阴影垂直偏移
    shadowOffsetY: space2x,
    // tip阴影模糊
    shadowBlur: space6x,
    // 主文本字号
    textFontSize: fontSizeMd,
    // 次级文本字号
    subtextFontSize: fontSizeBase,
    // 标题文本字号
    titleFontSize: fontSize4xl,
    // 副标题文本字号
    subtitleFontSize: fontSizeLg,
    // 坐标轴线宽 2
    axisLineWidth: border2x,
    // 刻度线线宽 2
    axisTickLineWidth: border2x,
    // 分隔线线宽 1
    axisSplitLineWidth: borderBase,
    // 坐标轴指示器的标线线宽 1
    axisPointerLineWidth: borderBase, // 待定
    // 坐标轴类型
    axisLineType: lineTypeSolid,
    // 刻度线类型
    axisTickLineType: lineTypeSolid,
    // 直角坐标系分隔线类型
    axisSplitLineType: lineTypeSolid,
    // 极坐标系分隔线类型
    polarAxisSplitLineType: lineTypeSolid,
    // 坐标轴指示器标线类型
    axisPointerLineType: lineTypeSolid,
    // 坐标轴名称间距
    axisNameSpace: space2x,
    // 坐标轴文本间距
    axisLabelSpace: spaceBase,
    // 标识线宽度
    markLineWidth: borderBase,
    // 标识线高亮宽度
    markLineEmphasisWidth: borderBase,
    //  border 0
    borderWidthNone: borderNone,
    // 标题文本间距
    titleSpace: space2x,
    // 容器的间距
    containerGap: spaceBase,
    // 容器的圆角
    containerBoderRadius: borderRadiusLg,
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
    barWidth: size4x,
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
    legendCircleItemSize: size2x,
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
    colorGray5,
    colorGray10,
    colorGray20,
    colorGray50,
    colorGray70,
    colorGray90
  } = globalToken;

  return {
    //  初级底色  图表背景
    colorBgPrimary: colorGray0, // 确定
    // 次级背景色  tip背景
    colorBgSecondary: colorGray0, // 确定
    // datazoom手柄填充背景和主要文本色一致
    colorBgHandle: colorGray90,
    // 主要文本色
    colorTextPrimary: colorGray90, // 确定
    // 次级文本色
    colorTextSecondary: colorGray50, // 确定
    // 禁用文本色
    colorTextDisabled: colorGray20, // 确定
    // 图标激活色（legend翻页的颜色）
    colorIconPrimary: colorGray70, // 确定
    // 控件失效色（legend失效的颜色）
    colorInactive: colorGray10, // 确定
    // 图标禁用色（legend翻页图标禁用的颜色）
    colorIconDisabled: colorGray10, // 确定
    // 坐标轴线颜色
    colorAxisLine: colorGray10, // 确定
    // 刻度线颜色
    colorAxisTickLine: colorGray10, // 确定
    // 分隔线颜色
    colorAxisSplitLine: colorGray5, // 确定
    // 坐标轴指示器悬浮线
    colorAxisPointerLine: colorGray10, // 确定
    // 指示器阴影
    colorAxisPointerShadow: codeToRGB(colorGray10, 0.5), // 确定
    // tip阴影
    colorShadow: codeToRGB(colorGray90, 0.08), // 确定
    // 边框颜色和背景保持一致，实现透明效果
    colorBorder: colorGray0, // 确定
    // datazoom手柄边框色 把手容器色
    colorBorderHandle: colorGray0,
    // 以下和规范还未确认
    // 禁用边框颜色和图表colorBgPrimary保持一致（聚合气泡图用todo）
    colorBorderDisabled: colorGray0, // 确定
    // label颜色
    colorLabel: colorGray90,
    // label禁用颜色（和文本禁用色保持一致）
    colorLabelDisabled: colorGray20, // 确定
    // 虚线的颜色
    colorDash: colorGray0,
    // 无数据占位背景
    colorBgEmpty: colorGray10,
    // labelLine颜色
    colorLabelLine: colorGray90,
    ...getPublicToken(globalToken)
  };
}

function getDarkAliasToken(globalToken) {
  const {
    colorGray0,
    colorGray5,
    colorGray10,
    colorGray20,
    colorGray60,
    colorGray70,
    colorGray80,
    colorGray90,
    colorGray100,
  } = globalToken;

  return {
    //  初级底色  图表背景
    colorBgPrimary: codeToRGB(colorGray5, 0.1), // 确定
    // 次级背景色  tip背景
    colorBgSecondary: colorGray70, // 确定
    // datazoom手柄填充背景和主要文本色一致
    colorBgHandle: colorGray0,
    // 主要文本色
    colorTextPrimary: colorGray0, // 确定
    // 次级文本色
    colorTextSecondary: colorGray20, // 确定
    // 禁用文本色
    colorTextDisabled: colorGray60, // 确定
    // 图标激活色（legend翻页的颜色）
    colorIconPrimary: colorGray20, // 确定
    // 控件失效色（legend失效的颜色）
    colorInactive: colorGray80, // 确定
    // 图标禁用色（legend翻页图标禁用的颜色）
    colorIconDisabled: colorGray80, // 确定
    // 坐标轴线颜色
    colorAxisLine: colorGray70, // 确定
    // 刻度线颜色
    colorAxisTickLine: colorGray70, // 确定
    // 分隔线颜色
    colorAxisSplitLine: colorGray80, // 确定
    // 坐标轴指示器悬浮线
    colorAxisPointerLine: colorGray70, // 确定
    // 指示器阴影
    colorAxisPointerShadow: codeToRGB(colorGray5, 0.05), // 确定
    // tip阴影
    colorShadow: codeToRGB(colorGray100, 0.5), // 确定
    // 边框颜色和背景保持一致，实现透明效果
    colorBorder: codeToRGB(colorGray5, 0.1), // 确定
    // datazoom手柄边框色 把手容器色
    colorBorderHandle: colorGray60,
    // 以下和规范还未确认
    // 禁用边框颜色和图表colorBgPrimary保持一致（聚合气泡图用todo）
    colorBorderDisabled: codeToRGB(colorGray5, 0.1), // 确定
    // label颜色
    colorLabel: colorGray5,
    // label禁用颜色（和文本禁用色保持一致）
    colorLabelDisabled: colorGray60, // 确定
    // 虚线的颜色
    colorDash: colorGray90,
    // 无数据占位背景
    colorBgEmpty: codeToRGB(colorGray10, 0.1),
    // labelLine颜色
    colorLabelLine: colorGray5,
    ...getPublicToken(globalToken)
  };
}

export default getAliasToken;
export {
  getAliasToken as getHdesignAliasToken,
  getDarkAliasToken as getHdesignDarkAliasToken
};
