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
import BaseOption from './BaseOption';
import handleSeries from './handleSeries';
import cloneDeep from '../../util/cloneDeep';
import { handleTooltip } from './handleOptipn';
import { event } from '../../util/event';
import { mergeSeries } from '../../util/merge';
import init from '../../option/init'
import { CHART_TYPE } from '../../util/constants';

class GaugeChart {

  static name = CHART_TYPE.GAUGE

  constructor(iChartOption, chartInstance) {
    this.baseOption = {};
    this.iChartOption = {};
    this.baseOption = cloneDeep(BaseOption);
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption(iChartOption, chartInstance);
  }

  updateOption(iChartOption, chartInstance) {
    // 图表基础颜色
    this.baseOption.color = iChartOption.color;
    // 图表鼠标悬浮提示框
    this.baseOption.tooltip = handleTooltip(iChartOption, CHART_TYPE.GAUGE);
    // 赋值数据
    this.baseOption.series = handleSeries(iChartOption, this.baseOption.color);
    // 配置图表事件
    event(chartInstance, iChartOption.event);
    // 合并用户自定义series
    this.baseOption.legend.show = false;
    mergeSeries(iChartOption, this.baseOption);
  }

  getOption() {
    return this.baseOption;
  }

  setOption() { }
}

export default GaugeChart;
