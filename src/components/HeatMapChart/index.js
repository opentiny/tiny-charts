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
import cloneDeep from '../../util/cloneDeep';
import { getData } from './handleData';
import { handleSeries } from './handleSeries';
import { setVisualMap } from './handleVisualMap';
import { event } from '../../util/event';
import {
  handleXaxis,
  handleYaxis,
  handleColor,
  handleGrid,
  handleTooltip,
  setHeatMapDeaultIchartOption,
} from './handleOptipn';
import init from '../../option/init';
import { CHART_TYPE } from '../../util/constants';

class HeatMapChart {

  static name = CHART_TYPE.HEAT_MAP

  constructor(iChartOption, chartInstance) {
    this.baseOption = {};
    this.iChartOption = {};
    this.initIchartOption = cloneDeep(iChartOption);
    this.baseOption = cloneDeep(BaseOption);
    setHeatMapDeaultIchartOption(iChartOption);
    this.iChartOption = init(iChartOption);
    this.chartInstance = chartInstance;
    // 根据 iChartOption 组装 baseOption
    this.updateOption();
  }

  updateOption() {
    const iChartOption = this.iChartOption;
    const {type } = iChartOption;
    if (!type) {
      throw new Error('HeatMapChart must have a name');
    }
    // 图表数据
    const data = getData(type, iChartOption, this.chartInstance);
    if (!data) return;
    handleColor(this.baseOption, iChartOption);
    // 图表x轴
    handleXaxis(this.baseOption, type, data, iChartOption,this.initIchartOption);
    // 图表y轴
    handleYaxis(this.baseOption, type, data, iChartOption,this.initIchartOption);
    // 设置chartpadding
    handleGrid(this.baseOption, iChartOption);
    //  图表鼠标悬浮提示框
    handleTooltip(this.baseOption, iChartOption, type);
    // 图表的series
    handleSeries(this.baseOption, iChartOption, data, type);
    // 图表VisualMap
    setVisualMap(this.baseOption, type, data, iChartOption);
    // 配置图表事件
    event(this.chartInstance, iChartOption.event);
  }

  // 页面需要重新resize
  resize() {
    // 仅针对蜂窝热力图需要在resize的时候去重新render图表
    if (this.iChartOption.type === 'HexagonHeatMapChart') {
      this.updateOption(this.iChartOption, this.chartInstance);
      this.chartInstance?.setOption(this.baseOption);
    }
  }

  getOption() {
    return this.baseOption;
  }

  setOption() {}
}

export default HeatMapChart;
