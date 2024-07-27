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
function GaugeChart (aliasToken){
  const { colorBgEmpty, colorAxisTickLine, colorTextTertiary, colorTextPrimary } = aliasToken;
  
  return {
    // 用于轨道，特殊使用空数据颜色
    axisLineColor: colorBgEmpty,
    splitLineColor: colorAxisTickLine,
    axisLabelColor: colorTextTertiary,
    detailRichColor: colorTextPrimary,
  };

};

export default GaugeChart;
