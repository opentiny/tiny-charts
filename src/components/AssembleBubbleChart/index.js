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
import cloneDeep from '../../util/cloneDeep';
import BaseOption from './BaseOption';
import { defaultTooltipFormatter, judgeType, bindLegendEvent } from './handleOption';
import { handleRootData } from './handleRootData';
import { handleSeriesData } from './handleSeriesData';
import init from '../../option/init';
import { isArray } from '../../util/type';
import { CHART_TYPE } from '../../util/constants';
import PolarCoordSys from '../../option/PolarSys';

class AssembleBubbleChart {

  static name = CHART_TYPE.ASSEMBLE_BUBBLE;
  static chartType;

  constructor(iChartOption, chartInstance, plugins) {
    this.baseOption = cloneDeep(BaseOption);
    this.iChartOption = init(iChartOption);
    this.chartInstance = chartInstance;
    this.plugins = plugins;
    this.updateOption(chartInstance);
  }

  updateOption(chartInstance) {
    this.iChartOption.position = this.iChartOption.position ?? this.iChartOption.chartPosition;
    const { d3 } = this.plugins;
    if (!d3) throw new Error('您必须安装d3才可以使用聚合气泡图');
    if (!isArray(this.iChartOption.color)) { this.iChartOption.color = [this.iChartOption.color]; }
    // 判断图表类型
    judgeType(this);
    // 装载除series之外的其他配置
    PolarCoordSys(this.baseOption, this.iChartOption, CHART_TYPE.ASSEMBLE_BUBBLE);
    // 补齐默认的tooltip.formatter
    defaultTooltipFormatter(this.baseOption);
    // 处理dataset、legend.data、补全series
    handleSeriesData(this.iChartOption, this.baseOption, this.chartType);
    // 编写自定义renderItem函数
    handleRootData(d3, this);
    // 聚合气泡图属于自定义系列，使用polar会报错，需要删除
    delete this.baseOption.polar;
    // 自定义系列的图例点击事件需要自行绑定
    bindLegendEvent(this.baseOption, chartInstance);
  }

  getOption() {
    return this.baseOption;
  }

  setOption(option) {
    this.baseOption = option;
  }
}

export default AssembleBubbleChart;
