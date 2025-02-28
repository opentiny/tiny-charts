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
import getSceneToken from './getSceneToken';

function getAliasToken(globalToken, light = true) {

  const {
    fontSizeBase,
    fontSizeMd,
    space2x,
    spaceBase,
    fontSizeLg,
    fontSize4xl,
    lineTypeSolid,
    lineTypeDashedLG,
    borderNone,
    borderBase,
    borderRadiusBase,
    border2x,
    borderRadiusNone,
    spaceNone,
    space4x,
    size05x,
    size6x,
    size5x,
    size2x,
    sizeBase,
  } = globalToken;

  const {
    colorBgMask,
    colorBgPrimary,
    colorBgSecondary,
    colorBgPlaceholder,
    colorBgHover,
    colorBgHandle,
    colorTextPrimary,
    colorTextSecondary,
    colorTextPlaceholder,
    colorTextDisabled,
    colorIconPrimary,
    colorIconDisabled,
    colorLine,
    colorLineSecondary,
    colorLineSeparator,
    colorFillNone,
    colorFill,
    colorFillSelect,
    colorFillSelectSecondary,
    colorFillHover,
    colorFillHandle,
    colorBorder,
    colorBorderSelect,
    colorShadowPrimary,
    colorShadowSecondary,
    shadowOffsetYPrimary,
    shadowOffsetYSecondary,
    shadowBlurPrimary,
    shadowBlurSecondary,
  } = getSceneToken(globalToken, light)

  return {
    // -----------------------------------------------------颜色-------------------------------------------------------------------------
    // 卡片背景
    colorBgContainer: colorBgPrimary,
    // tip背景
    colorBgContainerSecondary: colorBgSecondary,
    // 悬浮背景
    colorBgContainerHover: colorBgHover,
    // 标题颜色
    colorTitle: colorTextPrimary,
    // 副标题颜色
    colorSubTitle: colorTextSecondary,
    // 名称文本（轴名称，legend名称等）
    colorTextName: colorTextPlaceholder,
    // 轴label
    colorAxisLabel: colorTextPlaceholder,
    // label颜色
    colorLabel: colorTextPrimary,
    // 进度图专用name名称
    colorLabelSecondary: colorTextPlaceholder,
    // label禁用颜色
    colorLabelDisabled: colorTextDisabled,
    // 图标色
    colorIcon: colorIconPrimary,
    // 图标失效色
    colorIconInactive: colorIconDisabled,
    // 坐标轴线颜色
    colorAxisLine: colorLine,
    // 刻度线颜色
    colorAxisTickLine: colorLineSecondary,
    // 分隔线颜色
    colorAxisSplitLine: colorLine,
    // 用于极坐标的径向轴和雷达坐标的分隔线颜色，和坐标轴线颜色保持一致，特殊处理专用
    colorAxisSplitLineSecondary: colorLine,
    // 坐标轴指示器悬浮线
    colorAxisPointerLine: colorLineSeparator,
    // 分隔线
    colorSeparatorLine: colorLineSeparator,
    // lableline
    colorLabelLine: colorLine,
    // 无色
    colorNone: colorFillNone,
    // 占位色
    colorPlaceholder: colorBgPlaceholder,
    // 遮盖色
    colorMask: colorBgMask,
    // zoom背景色
    colorZoomBg: colorBgHover,
    // zoom border颜色
    colorZoomBorder: colorFillNone,
    // zoom 数据区域 border
    colorZoomDataAreaBorder: colorBorder,
    // zoom 数据区域填充
    colorZoomDataAreaFill: colorFill,
    // zoom 选中区域填充
    colorZoomFill: colorFillSelect,
    // zoom 选中区域数据border
    colorZoomSelectDataAreaBorder: colorBorderSelect,
    // zoom 选中区域数据填充
    colorZoomSelectDataAreaFill: colorFillSelectSecondary,
    // zoom 手柄颜色
    colorZoomHandle: colorFillHandle,
    // zoom 手柄border
    colorZoomHandleBorder: colorBgHandle,
    // hover阴影
    colorShadowHover: colorFillHover,
    // tip阴影
    colorShadowContainer: colorShadowPrimary,
    // 手柄阴影
    colorShadowHandle: colorShadowSecondary,
    // symbol hover填充
    symbolFillHover: colorBgMask,
    // ---------------------------------------------------阴影-------------------------------------------------
    // tip阴影offsetY
    shadowOffsetYContainer: shadowOffsetYPrimary,
    // 手柄阴影offsetY
    shadowOffsetYHandle: shadowOffsetYSecondary,
    // tip阴影模糊
    shadowBlurContainer: shadowBlurPrimary,
    // 手柄阴影模糊
    shadowBlurHandle: shadowBlurSecondary,
    // ------------------------------------------------------------------字号---------------------------------------------------
    // 主文本字号
    textFontSize: fontSizeMd, // 确定
    // 次级文本字号
    subtextFontSize: fontSizeBase, // 确定
    // 标题文本字号
    titleFontSize: fontSize4xl,
    // 副标题文本字号
    subtitleFontSize: fontSizeLg,
    // label字号
    labelFontSize: fontSizeBase,
    // ----------------------------------------------线宽---------------------------------------------------------
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
    // 常规线宽
    lineWidth: border2x,
    // 二级线宽
    lineWidthSecondary: borderBase,
    // 无线宽
    lineWidthNone: borderNone,
    // -------------------------------------------------------------------线型-------------------------------------------------------------------
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
    // ---------------------------------------------------------------------间距------------------------------------------------------------------------------- 
    // 坐标轴名称间距
    axisNameSpace: space2x,
    // 坐标轴文本间距
    axisLabelSpace: spaceBase,
    // 标题文本间距
    titleSpace: space2x,
    // 容器的间距
    containerGap: spaceBase,
    // 图例的间距
    legendSpace: space4x,
    // 无padding
    paddingNone: spaceNone,
    paddingSM: spaceBase,
    padding: space2x,
    paddingLG: space4x,
    // -----------------------------------------------------------------边框------------------------------------------------------------------------------
    // zoom数据区域边框
    zoomDataAreaBorderWidth: borderBase,
    // 边框 细
    borderWidth: borderBase,
    // 边框
    borderWidthLG: border2x,
    //  border 0
    borderWidthNone: borderNone,
    // 图元的边框0
    symbolBorderWidthNone: borderNone,
    // 图元的边框
    symbolBorderWidth: border2x,
    // -------------------------------------------------------------size----------------------------------------------------------------------------------------
    // 图元 
    symbolSize: size2x,
    // 雷达图专用
    symbolSizeSecondary: size2x - 2,
    // 图元  线形图用
    symbolSizeSM: sizeBase,
    // 柱条的宽度
    barWidth: size2x,
    // 堆叠进度图宽度 20
    barWidthLG: size5x,
    // 图例单元尺寸
    legendItemSize: size05x,
    // 图例圆形单元尺寸
    legendCircleItemSize: size2x - 2,
    // labelLine的长度
    labelLineLength: size6x,
    // ------------------------------------------------圆角---------------------------------------------------
    // 容器的圆角
    containerBoderRadius: borderRadiusBase,
    // 圆角 0
    borderRadiusNone,
    // 圆角 小
    borderRadius: borderRadiusBase,
  };
}

export default getAliasToken;
export { getAliasToken as getCloudAliasToken };
