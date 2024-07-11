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
import init from '../../option/init';
import { setLegend } from './handleLegend.js';
import { setSeries } from './handleSeries.js';
import PolarCoordSys from '../../option/PolarSys';
import { CHART_TYPE } from '../../util/constants';

export default class FunnelChart {

  static name = CHART_TYPE.FUNNEL

  constructor(iChartOption, chartInstance) {
    this.baseOption = {};
    this.iChartOption = {};
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption(chartInstance);
  }

  updateOption(chartInstance) {
    const iChartOption = this.iChartOption;
    // 装载除series之外的其他配置   
    PolarCoordSys(this.baseOption, iChartOption, CHART_TYPE.FUNNEL);
    // 组装series 
    this.baseOption.series = setSeries(iChartOption);
    // 组装legend.data
    this.baseOption.legend.data ? this.baseOption.legend.data : setLegend(this.baseOption);
  }

  getOption() {
    return this.baseOption;
  }
}