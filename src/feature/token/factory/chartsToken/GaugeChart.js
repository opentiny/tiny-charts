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
function GaugeChart (aliasToken){
  const { colorAxisLine, colorBgEmpty, colorTextSecondary, colorTextPrimary } = aliasToken;
  
  return {
    axisLineColor: colorAxisLine,
    // 用于轨道，特殊使用空数据颜色
    splitLineColor: colorBgEmpty,
    axisLabelColor: colorTextSecondary,
    detailRichColor: colorTextPrimary,
  };

};

export default GaugeChart;
