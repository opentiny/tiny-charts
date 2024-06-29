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
import merge from '../../util/merge';

class GraphChart {
  constructor(iChartOption) {
    this.rootData = {};
    this.baseOption = {};
    // 根据 iChartOption 组装 baseOption
    this.updateOption(iChartOption);
  }

  updateOption(iChartOption) {
    // 兼容echarts属性
    merge(this.baseOption, iChartOption);
  }

  getOption() {
    return this.baseOption;
  }

  setOption() { }
}

export default GraphChart;
