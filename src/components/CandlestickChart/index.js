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
import RectCoordSys from '../../option/RectSys';
import {
  handleData,
  handleAxis,
  handleDataZoom,
  handleTooltip,
  handleLegend,
  handleGrid,
  handleAxisPointer,
} from './hanleOption';
import { handleSeries } from './hanleSeries';
import { mergeSeries } from '../../util/merge';
import { CHART_TYPE } from '../../util/constants';

class CandlestickChart {

  static name = CHART_TYPE.CANDLESTICK

  constructor(iChartOption, chartInstance) {
    this.baseOption = {};
    this.iChartOption = {};
    this.chartInstance = chartInstance;
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption();
  }

  updateOption() {
    const iChartOption = this.iChartOption;
    const volume = this.iChartOption.volume;
    const data = handleData(iChartOption);
    if (!data) return;
    handleSeries(this.baseOption, iChartOption, data, this.chartInstance);
    RectCoordSys(this.baseOption, iChartOption);
    // 装载除series之外的其他配置
    handleGrid(this.baseOption, iChartOption);
    // 平均线和成交量,在这部分对ma和vol的图表进行处理
    handleAxis(this.baseOption, data, volume);
    handleTooltip(this.baseOption, iChartOption);
    handleDataZoom(this.baseOption, iChartOption);
    handleLegend(this.baseOption, iChartOption);
    handleAxisPointer(this.baseOption);
    event(this.chartInstance, iChartOption.event);
    mergeSeries(iChartOption, this.baseOption);
  }

  getOption() {
    return this.baseOption;
  }

  setOption(option) {
    this.baseOption = option;
  }
}

export default CandlestickChart;
