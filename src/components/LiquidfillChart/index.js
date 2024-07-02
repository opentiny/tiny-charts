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
import { event } from '../../util/event';
import { setSeries } from './handleSeries.js';
import PolarCoordSys from '../../option/PolarSys';
import { CHART_TYPE } from '../../util/constants';

export default class LiquidfillChart {

  static name = CHART_TYPE.LIQUID_FILL

  constructor(iChartOption, liquidChartInstance) {
    this.baseOption = {};
    this.iChartOption = {};
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption(liquidChartInstance);
  }

  updateOption(chartInstance) {
    const iChartOption = this.iChartOption;
    // 装载除series之外的其他配置
    PolarCoordSys(this.baseOption, iChartOption, CHART_TYPE.LIQUID_FILL);
    // 组装series 
    this.baseOption.series = setSeries(iChartOption);
    // 配置图表事件
    if (iChartOption.event) {
      event(chartInstance, iChartOption.event);
    }
  }

  getOption() {
    return this.baseOption;
  }
}