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
import { setTooltip } from './handleOptipn';
import { setSeries } from './handleSeries';
import { mergeSeries } from '../../util/merge';
import { CHART_TYPE } from '../../util/constants';

class TreeChart {

  static name = CHART_TYPE.TREE


  constructor(iChartOption) {
    this.baseOption = {};
    this.iChartOption = {};
    this.iChartOption = iChartOption;
    // 根据 iChartOption 组装 baseOption
    this.updateOption();
  }

  updateOption() {
    const iChartOption = this.iChartOption;
    const type = iChartOption.type;
    if (!type) {
      throw new Error('TreeChart must have a name');
    }
    // 图表的series
    setSeries(this.baseOption, type, iChartOption);
    //  图表鼠标悬浮提示框
    setTooltip(this.baseOption, iChartOption);
    mergeSeries(iChartOption, this.baseOption);
  }

  getOption() {
    return this.baseOption;
  }

  setOption() { }
}

export default TreeChart;
