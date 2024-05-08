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
function BarChart (aliasToken) {
  const { borderWidth, barWidth, colorLabel, labelFontSize, colorBorderTransparent, borderRadius, colorBgTransparent } =
    aliasToken;

  return {
    borderWidth,
    borderColor:colorBorderTransparent,
    borderRadius,
    color: colorBgTransparent,
    labelColor: colorLabel,
    fontSize: labelFontSize,
    barWidth,
  };
};

export default BarChart;
