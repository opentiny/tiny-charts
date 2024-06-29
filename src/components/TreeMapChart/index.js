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
import { handleGrid, handleTooltip, handleTitle } from './handleOptipn';
import init from '../../option/init';
import { CHART_TYPE } from '../../util/constants';

class TreeMapChart {

  static name = CHART_TYPE.TREE_MAP


  constructor(iChartOption, chartInstance) {
    this.baseOption = {};
    this.iChartOption = {};
    this.iChartOption = init(iChartOption);
    this.chartInstance = chartInstance;
    // 根据 iChartOption 组装 baseOption
    this.updateOption();
  }

  updateOption() {
    const treeMapiChartOption = this.iChartOption;
    // 图表数据
    const data = treeMapiChartOption.data;
    if (!data.length) return;
    // 设置chartpadding
    handleGrid(this.baseOption, treeMapiChartOption);
    //  图表鼠标悬浮提示框
    handleTooltip(this.baseOption, treeMapiChartOption);
    //  图表标题
    handleTitle(this.baseOption, treeMapiChartOption);
    // 图表的series
    handleSeries(this.baseOption, treeMapiChartOption);
    // 配置图表事件
    event(this.chartInstance, treeMapiChartOption.event);
  }

  getOption() {
    return this.baseOption;
  }

  setOption() { }
}

export default TreeMapChart;
