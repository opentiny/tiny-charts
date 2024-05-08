/**
 * Copyright (c) 2022 - present TinyCharts Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
function LineChart(aliasToken) {
  const { colorBorder, borderWidthLG, borderWidthNone, symbolSizeLG, symbolSizeSM, lineWidth, colorLineTransparent } =
    aliasToken;

  return {
    symbolSizeSM,
    symbolSizeLG,
    lineWidth,
    borderZero: borderWidthNone,
    border: borderWidthLG,
    borderColor: colorBorder,
    color: colorLineTransparent,
  };
};

export default LineChart;
