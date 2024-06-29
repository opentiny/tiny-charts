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
import init from '../../option/init';
import updateWidth from './bulletChartOption';
import { handleTooltip, setDirection } from './handleOptipn';
import RectCoordSys, { xkey, xdata, ldata, ydata } from '../../option/RectSys';
import { CHART_TYPE, ADAPTIVE_THEME } from '../../util/constants';

class BulletChart {

  static name = CHART_TYPE.BULLET

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
    // 图例数据
    RectCoordSys(this.baseOption, iChartOption, CHART_TYPE.BULLET);
    // x轴key值
    const xAxisKey = xkey(iChartOption);
    // x轴数据
    const xAxisData = xdata(iChartOption.data, xAxisKey);
    this.baseOption.xAxis.forEach(item => {
      item.data = xAxisData;
    });
    // 图例数据
    const legendData = ldata(iChartOption.data, xAxisKey);
    // 连线的数据
    const seriesData = ydata(iChartOption.data, legendData);
    //  图表鼠标悬浮提示框
    handleTooltip(this.baseOption, iChartOption);
    // 图表的series
    handleSeries(this.baseOption, iChartOption, legendData, seriesData);
    // 设置柱状图的方向
    setDirection(this.baseOption, iChartOption.direction);
    // 配置图表事件
    event(this.chartInstance, iChartOption.event);
  }

  // 根据渲染出的结果，二次计算option
  updateOptionAgain() {
    let baseOption = this.baseOption;
    if (ADAPTIVE_THEME.includes(this.iChartOption.theme)) {
      updateWidth(baseOption, this.chartInstance, this.iChartOption);
    }
  }

  getOption() {
    return this.baseOption;
  }

  setOption() { }

  resize(callback) {
    if (ADAPTIVE_THEME.includes(this.iChartOption.theme)) {
      updateWidth(this.baseOption, this.chartInstance, this.iChartOption);
      callback && callback(this.baseOption);
    }
  }
}

export default BulletChart;
