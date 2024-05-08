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
function AssembleBubbleChart(aliasToken){
  const { colorLabel, colorLabelDisabled, colorBorderDisabled, colorInactive } = aliasToken;
  //    此图为自定义echarts不知道怎么排布数据结构，todo
  
  return {
    labelColor: colorLabel,
    disabledLabelColor: colorLabelDisabled,
    disabledBorderColor: colorBorderDisabled,
    disabledItemColor: colorInactive,
  };

};

export default AssembleBubbleChart;



