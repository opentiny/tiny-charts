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
import { setLegend, setTooltip } from './handleOption';
import { handleColor } from './handleColor';
import { handleRootData } from './handleRootData';
import { handleVirtualLengend } from './handleVirtualLengend';
import { handleSeriesData } from './handleSeriesData';
import { legendDisappear, legendShow } from './legendSelectChanged';
import init from '../../option/init';
import { isArray } from '../../util/type';
import { CHART_TYPE } from '../../util/constants';

class AssembleBubbleChart {

  static name = CHART_TYPE.ASSEMBLE_BUBBLE

  constructor(iChartOption, chartInstance, plugins) {
    this.baseOption = cloneDeep(BaseOption);
    this.iChartOption = init(iChartOption);
    this.chartInstance = chartInstance;
    this.plugins = plugins;
    this.updateOption(chartInstance);
  }

  updateOption(chartInstance) {
    const { d3 } = this.plugins;
    if (!d3) throw new Error('您必须安装d3才可以使用聚合气泡图');
    if (!isArray(this.iChartOption.color)) { this.iChartOption.color = [this.iChartOption.color]; }
    const { color, type } = this.iChartOption;
    this.baseOption.color = color;
    this.baseOption.tooltip = setTooltip(this.iChartOption);
    this.baseOption.legend = setLegend(this.iChartOption);
    const { depthFirst, depthMore } = handleSeriesData(this.iChartOption, this.baseOption);
    handleColor({
      depthFirst,
      depthMore,
      color,
      type,
    }, this.baseOption);
    // 给BaseOption设置虚拟图例
    this.baseOption.series.unshift(...handleVirtualLengend(this.baseOption.legend.data));
    handleRootData({
      d3,
      baseOption: this.baseOption,
      chartInstance,
      iChartOption: this.iChartOption
    });

    let baseOption = this.baseOption;
    chartInstance.on('legendselectchanged', function (params) {
      if (!params.selected[params.name]) {
        // 点击图例消失
        legendDisappear({
          seriesData: baseOption.dataset[0].source,
          params,
          type,
          baseOption,
          chartInstance
        });
      } else {
        handleColor({
          depthFirst,
          depthMore,
          color,
          type,
        }, baseOption);
        // 点击图例出现
        legendShow({
          seriesData: baseOption.dataset[0].source,
          type,
          params,
          baseOption,
          chartInstance
        });
      }
    });
  }

  getOption() {
    return this.baseOption;
  }

  setOption(option) {
    this.baseOption = option;
  }
}

export default AssembleBubbleChart;
