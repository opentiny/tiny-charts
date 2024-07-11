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
import mini from '../../feature/mini/miniCircleProcessChart';
import { getSeriesData, setTooltip } from './handleOption';
import { setSeries } from './handleSeries';
import PolarCoordSys from '../../option/PolarSys';
import { CHART_TYPE } from '../../util/constants';

export default class CircleProcessChart {

  static name = CHART_TYPE.CIRCLE_PROCESS

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
    PolarCoordSys(this.baseOption, iChartOption, CHART_TYPE.CIRCLE_PROCESS);
    // tooltip悬浮框
    setTooltip(this.baseOption);
    // legend数据
    this.baseOption.legend.data = iChartOption.data;
    // series bar数据
    const seriesData = getSeriesData(iChartOption.data);
    this.baseOption.series = setSeries(seriesData, iChartOption);
    mini(iChartOption, this.baseOption);
  }
  getOption() {
    return this.baseOption;
  }
}
