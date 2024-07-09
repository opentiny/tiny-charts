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
import getBaseOption from './baseOption';
import {
  handleData,
  handleColor,
  handleText,
  handlePadding,
  handleCoincide,
  setGradientColor,
  handleMarkLine,
} from './handleOption';
import { handleEmphasis } from './handleSeries';
import { event } from '../../util/event';
import init from '../../option/init';
import title from '../../option/config/rectTitle';
import toolTip from '../../option/config/tooltip';
import xAxis from '../../option/config/xAxis';
import yAxis from '../../option/config/yAxis';
import { CHART_TYPE } from '../../util/constants';

class HillChart {

  static name = CHART_TYPE.HILL

  constructor(iChartOption, chartInstance) {
    this.baseOption = {};
    this.iChartOption = {};
    this.baseOption = getBaseOption();
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption(iChartOption, chartInstance);
  }

  updateOption(iChartOption, chartInstance) {
    // 是否显示坐标轴
    // 配置x轴
    this.baseOption.xAxis = xAxis(iChartOption)[0];
    if (iChartOption.axis && iChartOption.axis.show) {
      // 配置y轴
      this.baseOption.yAxis = yAxis(this.baseOption, iChartOption, CHART_TYPE.HILL);
    } else {
      this.baseOption.xAxis['axisLine'] = {
        show: false,
      };
      this.baseOption.xAxis['axisTick'] = {
        show: false,
      };
      this.baseOption.yAxis.show = false;
    }
    // 配置标题
    this.baseOption.title = title(iChartOption);
    // 配置数据
    handleData(iChartOption, this.baseOption);
    // 配置山峰颜色及透明度
    handleColor(iChartOption, this.baseOption);
    // 配置文本
    handleText(iChartOption, this.baseOption);
    // 配置ChartPadding
    handlePadding(iChartOption, this.baseOption);
    // 配置相邻山峰间隔
    handleCoincide(iChartOption, this.baseOption);
    // 配置悬浮提示框
    this.baseOption.tooltip = toolTip(iChartOption, CHART_TYPE.HILL);
    this.baseOption.tooltip.trigger = 'item';
    // 配置渐变色
    setGradientColor(
      this.baseOption,
      iChartOption.color,
      iChartOption.gradientColor,
      iChartOption.opacity,
      iChartOption,
    );
    // 配置图表事件
    event(chartInstance, iChartOption.event);
    // 配置阈值线
    handleMarkLine(this.baseOption, iChartOption);
    // 配置高亮状态
    handleEmphasis(this.baseOption, iChartOption);
  }

  getOption() {
    return this.baseOption;
  }

  setOption() { }
}

export default HillChart;
