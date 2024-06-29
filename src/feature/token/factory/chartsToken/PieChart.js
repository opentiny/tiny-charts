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
function PieChart(aliasToken) {
  const {
    colorBorder,
    borderWidthLG,
    borderWidthNone,
    colorLabel,
    labelFontSize,
    labelLineLength,
    colorLabelLine,
    borderRadiusNone,
    colorBgEmpty,
  } = aliasToken;

  return {
    // 图形描边宽度
    borderWidth: borderWidthLG,
    // 图形描边颜色
    borderColor: colorBorder,
    // 图形内外圆角半径
    borderRadius: borderRadiusNone,
    // 数据和为0时图形描边宽度
    borderWidthShowZero: borderWidthNone,
    // 数据和为0时背景图形颜色
    colorShowZero: colorBgEmpty,
    // 标签文本字体大小
    labelFontSize,
    // 标签文本颜色
    labelColor: colorLabel,
    // 标签引导线长度
    labelLineLength,
    // 标签引导线颜色
    labelLineColor: colorLabelLine,
  };
};

export default PieChart;
