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
import handleMulti from './handleMulti';
import handleSeries from './handleSeries';
import PolarCoordSys from '../../option/PolarSys';
import { CHART_TYPE } from '../../util/constants';
import handleCenterTitle from '../../option/config/polarTitle/handleCenterTitle';
import handleCenterPosition from './handleCenterPosition';
import { mergeSeries } from '../../util/merge';

class PieChart {

  static name = CHART_TYPE.PIE

  constructor(iChartOption, chartInstance) {
    this.baseOption = {};
    this.iChartOption = {};
    this.chartInstance = chartInstance;
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption(chartInstance);
  }

  updateOption(chartInstance) {
    const iChartOption = this.iChartOption;
    const type = iChartOption.type || 'circle';
    // 装载除series之外的其他配置
    PolarCoordSys(this.baseOption, this.iChartOption, 'PieChart');
    // 1.根据adaptive决定radius和center，再放到series里面处理
    this.position = handleCenterPosition(iChartOption, this.baseOption.legend, chartInstance);
    // 处理series数据
    this.baseOption.series = handleSeries(type, iChartOption, chartInstance, this.position, this.baseOption.legend);
    // 针对给定的color值，需要进行特殊处理
    this.baseOption.color = iChartOption.color;
    // 针对多重圆环图表需求，图表需要进行特殊处理
    handleMulti(type, this.baseOption, iChartOption.legend, iChartOption.data);
    // 是否关闭hover态的效果，默认为false
    if (iChartOption.silent) {
      this.baseOption.tooltip = {};
    }
    // 3.自适应中心文本大小和中心文本位置，不影响默认居中功能
    if (this.baseOption?.title?.text || this.baseOption?.title?.subtext) {
      handleCenterTitle(this.position, chartInstance, this.baseOption, iChartOption);
    }
    // 合并用户自定义series
    mergeSeries(iChartOption, this.baseOption);
  }

  getOption() {
    return this.baseOption;
  }

  setOption() { }

  resize(callback) {
    this.updateOption(this.chartInstance);
    callback(this.baseOption);
  }
}

export default PieChart;
