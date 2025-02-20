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
function LineChart(aliasToken) {

  const {
    borderWidthLG,
    borderWidthNone,
    symbolSize,
    symbolSizeSM,
    lineWidth,
    colorNone,
    colorMask,
    colorTextName,
    colorLabelSecondary,
    colorLabel
  } = aliasToken;

  return {
    symbolSizeSM,
    symbolSize,
    lineWidth,
    borderZero: borderWidthNone,
    border: borderWidthLG,
    color: colorNone,
    colorNone,
    maskColor: colorMask,
    tipSeriesNameColor: colorTextName,
    tipNameColor: colorLabelSecondary,
    tipValueColor: colorLabel,
  };
};

export default LineChart;
