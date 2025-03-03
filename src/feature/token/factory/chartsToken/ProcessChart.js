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
function ProcessChart(aliasToken) {
  const {
    colorLabel,
    colorPlaceholder,
    borderWidth,
    colorNone,
    borderRadius,
    textFontSize,
    labelFontSize,
    colorLabelSecondary,
    barWidth,
    barWidthSecondary,
    colorTextName,
    legendCircleItemSize,
    tipItemGap,
    tipIconGap,
    tipValueGap,
  } = aliasToken;

  return {
    nameColor: colorLabelSecondary,
    labelColor: colorLabel,
    itemBgEmpty: colorPlaceholder,
    borderWidth,
    borderColor: colorNone,
    borderRadius,
    fontSize: textFontSize,
    labelFontSize,
    barWidth,
    stackBarWidth: barWidthSecondary,
    tipSeriesNameColor: colorTextName,
    tipNameColor: colorLabelSecondary,
    tipValueColor: colorLabel,
    legendCircleItemSize,
    tipItemGap,
    tipIconGap,
    tipValueGap,
  };
};

export default ProcessChart;
