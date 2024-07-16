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
import  setSeries from './handleSeries';
import { setDirection, setTooltip } from './handleOption';
import RectCoordSys from '../../option/RectSys';
import { CHART_TYPE } from '../../util/constants';

export default class BoxplotChart {

  static name = CHART_TYPE.BOXPLOT

  constructor(iChartOption) {
    this.baseOption = {};
    this.iChartOption = {};
    this.iChartOption = init(iChartOption);
    this.updateOption();
  }

  updateOption() {
    const iChartOption = this.iChartOption;
    // 装载除series之外的其他配置
    RectCoordSys(this.baseOption, this.iChartOption, CHART_TYPE.BOXPLOT);
    // 箱形图data必须设为undefined
    this.baseOption.xAxis[0].data = undefined;
    // 提示框trigger设为item
    this.baseOption.tooltip.trigger = 'item';
    setSeries(this.baseOption,iChartOption)
    // 横向
    setDirection(this.baseOption, iChartOption.direction);
    // 提示框
    setTooltip(this.baseOption);
  }

  getOption() {
    return this.baseOption;
  }
}
