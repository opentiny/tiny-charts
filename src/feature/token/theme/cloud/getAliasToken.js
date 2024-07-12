/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
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

function getAliasToken(globalToken, light = true) {
  const {
    colorGray0,
    colorGray5,
    colorGray30,
    colorGray40,
    colorGray50,
    colorGray60,
    colorGray80,
    colorGray70,
    colorGray90,
    colorGray100,
    colorTransparent,
    fontSizeBase,
    fontSizeMd,
    space2x,
    spaceBase,
    fontSizeLg,
    fontSize4xl,
    lineTypeSolid,
    lineTypeDashedLG,
    space6x,
    borderNone,
    borderBase,
    borderRadiusBase,
    border2x,
    borderRadiusNone,
    spaceNone,
    space8x,
    space4x,
    size05x,
    size6x,
    size5x,
    size3x,
    size2x,
  } = globalToken;

  return {
    //  初级底色 图表背景
    colorBgPrimary: light ? colorGray0 : colorGray90, // 确定
    // 次级背景色 tip背景
    colorBgSecondary: light ? colorGray0 : colorGray80, // 确定
    // datazoom背景色
    colorBgTertiary: light ? colorGray5 : colorGray80,
    //datazoom手柄填充背景和主要文本色一致
    colorBgQuaternary: light ? colorGray90 : colorGray0,
    // datazoom选中区域外的线条颜色和面积颜色
    colorFill: light ? colorGray50 : colorGray70,
    // symbol等填充颜色
    colorFillSecondary: light ? colorGray0 : colorGray90,// 确定
    // 主要文本色
    colorTextPrimary: light ? colorGray90 : colorGray40, // 确定
    // 次级文本色
    colorTextSecondary: light ? colorGray60 : colorGray50, // 确定
    // 三级文本色
    colorTextTertiary: light ? colorGray60 : colorGray50, // 确定
    // 禁用文本色
    colorTextDisabled: light ? colorGray50 : colorGray60, // 确定
    // 图标激活色（legend翻页的颜色）
    colorIconPrimary: light ? colorGray60 : colorGray60, // 确定
    // 控件失效色（legend失效的颜色）
    colorInactive: light ? colorGray50 : colorGray80, // 确定
    // 图标禁用色（legend翻页图标禁用的颜色）
    colorIconDisabled: light ? colorGray50 : colorGray80, // 确定
    // 坐标轴线颜色
    colorAxisLine: light ? colorGray30 : colorGray80, // 确定
    // 用于极坐标的径向轴和雷达坐标的分隔线颜色，和坐标轴线颜色保持一致，特殊处理专用
    colorAxisLineSecondary: light ? colorGray30 : colorGray80, // 确定
    // 刻度线颜色
    colorAxisTickLine: light ? colorGray30 : colorGray80, // 确定
    // 分隔线颜色
    colorAxisSplitLine: light ? colorGray30 : colorGray80, // 确定
    // 坐标轴指示器悬浮线
    colorAxisPointerLine: light ? colorGray60 : colorGray70, // 确定
    // 透明边框色
    colorBorderTransparent: colorTransparent,
    // 文本透明
    colorTextTransparent: colorTransparent,
    // 指示器阴影
    colorAxisPointerShadow: light ? codeToRGB(colorGray90, 0.08) : codeToRGB(colorGray90, 0.08), //
    // tip阴影
    colorShadow: light ? codeToRGB(colorGray90, 0.08) : codeToRGB(colorGray90, 0.08), //
    // datazoom手柄阴影
    colorShadowSecondary: light ? codeToRGB(colorGray100, 0.04) : codeToRGB(colorGray100, 0.24),// 确定
    // 边框颜色
    colorBorder: light ? colorGray0 : colorGray90, // 确定
    // 边框反选色
    colorBorderInverse: light ? colorGray90 : colorGray0, // 确定
    // datazoom手柄边框色 把手容器色
    colorBorderSecondary: light ? colorGray0 : colorGray60,
    // 禁用边框颜色和图表colorBgPrimary保持一致（聚合气泡图用todo）
    colorBorderDisabled: light ? colorGray0 : colorGray90, // 确定
    // label颜色
    colorLabel: light ? colorGray90 : colorGray40, // 确定
    // label禁用颜色（和文本禁用色保持一致）
    colorLabelDisabled: light ? colorGray50 : colorGray60, // 确定
    // 虚线的颜色
    colorDash: light ? colorGray0 : colorGray90,
    // 背景透明
    colorBgTransparent: colorTransparent,
    // 无数据占位背景
    colorBgEmpty: light ? colorGray30 : colorGray80, // 确定
    // labelLine颜色
    colorLabelLine: light ? colorGray90 : colorGray40, // 确定
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
    // 坐标轴 1
    axisLineWidth: borderBase,
    // 用于极坐标系和雷达坐标系
    axisLineWidthSecondary: borderBase,// 确定
    //   刻度线  1
    axisTickLineWidth: borderBase,
    // 分隔线线宽 1
    axisSplitLineWidth: borderBase,
    // 坐标轴指示器的标线线宽 1
    axisPointerLineWidth: borderBase,
    // 坐标轴类型
    axisLineType: lineTypeSolid,
    // 刻度线类型
    axisTickLineType: lineTypeSolid,
    // 直角坐标系分隔线类型
    axisSplitLineType: lineTypeDashedLG,
    // 极坐标系分隔线类型
    axisSplitLineTypeSecondary: lineTypeSolid,
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
    containerBoderRadius: borderRadiusBase,
    // 图元 
    symbolSize: size3x,
    // 图元  线形图用
    symbolSizeSM: size2x,
    // 图元的边框0
    symbolBorderWidthNone: borderNone,
    // 图元的边框
    symbolBorderWidth: border2x,
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
    legendCircleItemSize: size2x,
    // 图例的间距
    legendSpace: space8x,
    // 无padding
    paddingNone: spaceNone,
    paddingSM: spaceBase,
    padding: space2x,
    paddingLG: space4x,
  };
}

export default getAliasToken;
export { getAliasToken as getCloudAliasToken };
