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
function FunnelChart(aliasToken) {
  const { colorLabel, borderWidthNone, colorBorder } = aliasToken;

  return {
    // 标签文本颜色
    labelColor: colorLabel,
    // 图形描边宽度
    borderWidth: borderWidthNone,
    // 图形描边颜色
    borderColor: colorBorder,
  };

};

export default FunnelChart;
