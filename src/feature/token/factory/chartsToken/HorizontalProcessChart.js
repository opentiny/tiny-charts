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
function HorizontalProcessChart(aliasToken) {
  const {
    colorLabel,
    colorPlaceholder,
    colorBgContainer,
    colorBgContainerSecondary,
    colorAxisLabel,
    borderWidth,
    colorNone,
    borderRadius,
    textFontSize,
    colorLegendName,
    barWidth
  } = aliasToken;

  return {
    fontSize: textFontSize,
    borderWidth,
    borderColor: colorNone,
    borderRadius,

    header: {
      bgColor: colorBgContainerSecondary,
      textColor: colorLabel,
    },

    row: {
      bgColor: colorBgContainer,
      infoColor: colorLabel,
      itemBgEmpty: colorPlaceholder,
      progressBarHeight: barWidth * 0.75,
      progressBarRadius: borderRadius,
    },

    scroll: {
      trackColor: colorPlaceholder,
      thumbColor: colorAxisLabel,
      thumbHoverColor: colorLegendName,
    }
  };
};

export default HorizontalProcessChart;