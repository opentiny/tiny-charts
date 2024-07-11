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
import merge from '../../util/merge';
import { setOption } from './handleOption';
import tooltip from '../../option/config/tooltip';
import { CHART_TYPE } from '../../util/constants';

export default class RegionChart {

  static name = CHART_TYPE.REGION


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
    // 装载除series以外的一级属性
    setOption(this.iChartOption);
    // 配置悬浮提示框
    this.baseOption.tooltip = tooltip(iChartOption, CHART_TYPE.REGION);
    // 兼容echarts属性
    merge(this.baseOption, iChartOption);
    // 删除部分无用的默认值
    delete this.baseOption.legend;
    delete this.baseOption.dataZoom;
    delete this.baseOption.xAxis;
  }

  getOption() {
    return this.baseOption;
  }

}