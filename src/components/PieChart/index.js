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

class PieChart {

  static name = CHART_TYPE.PIE


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
    const type = iChartOption.type || 'circle';
    // 装载除series之外的其他配置
    PolarCoordSys(this.baseOption, this.iChartOption, 'PieChart');
    // 兼容旧属性chartPosition
    const position = iChartOption.position || iChartOption.chartPosition;
    // 处理series数据
    this.baseOption.series = handleSeries(type, iChartOption, chartInstance, position);
    // 针对多重圆环图表需求，图表需要进行特殊处理
    handleMulti(type, this.baseOption, iChartOption.legend, iChartOption.data);
    // 是否关闭hover态的效果，默认为false
    if (iChartOption.silent) {
      this.baseOption.tooltip = {};
    }
  }

  getOption() {
    return this.baseOption;
  }

  setOption() {}
}

export default PieChart;
