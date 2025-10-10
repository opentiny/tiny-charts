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
function RankProcessChart(aliasToken) {
  const {
    colorPlaceholder,
    colorBgContainer,
    colorBgContainerSecondary,
    borderWidth,
    colorNone,
    borderRadius,
    labelFontSize,
    barWidth,
    colorLabel,
    colorAxisLabel,
    colorLabelDisabled
  } = aliasToken;

  return {
    fontSize: labelFontSize,
    borderWidth,
    borderColor: colorNone,
    borderRadius,
    textDeepColor: colorLabel,
    textPaleColor: colorAxisLabel,

    header: {
      bgColor: colorBgContainerSecondary,
    },

    row: {
      bgColor: colorBgContainer,
      itemBgEmpty: colorPlaceholder,
      progressBarHeight: barWidth * 0.5,
      progressBarRadius: borderRadius,
    },

    scroll: {
      trackColor: colorBgContainer,
      thumbColor: colorLabelDisabled,
    }
  };
};

export default RankProcessChart;