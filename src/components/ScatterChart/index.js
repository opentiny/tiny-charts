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
import { handleSeries } from './handleSeries';
import { event } from '../../util/event';
import { handleXaxis, handleYaxis, handleGrid, handleTooltip } from './handleOptipn';
import init from '../../option/init';
import RectCoordSys from '../../option/RectSys';
import { CHART_TYPE } from '../../util/constants';

class ScatterChart {

  static name = CHART_TYPE.SCATTER


  constructor(iChartOption, chartInstance) {
    this.baseOption = {};
    this.iChartOption = {};
    this.iChartOption = init(iChartOption);
    this.chartInstance = chartInstance;
    // 根据 iChartOption 组装 baseOption
    this.updateOption();
  }

  updateOption() {
    const iChartOption = this.iChartOption;
    // 图表数据
    const data = [];
    Object.keys(iChartOption.data).forEach(v => {
      data.push(...iChartOption.data[v]);
    });
    if (!data.length) return;
    // 图例数据
    RectCoordSys(this.baseOption, iChartOption, 'ScatterChart');
    // 图表x轴
    handleXaxis(this.baseOption, iChartOption);
    // 图表y轴
    handleYaxis(this.baseOption, iChartOption);
    // 设置chartpadding
    handleGrid(this.baseOption, iChartOption);
    //  图表鼠标悬浮提示框
    handleTooltip(this.baseOption, iChartOption);
    // 图表的series
    handleSeries(this.baseOption, iChartOption);
    // 配置图表事件
    event(this.chartInstance, iChartOption.event);
  }

  getOption() {
    return this.baseOption;
  }

  setOption() {}
}

export default ScatterChart;
