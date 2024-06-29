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
import LineChart from '../LineChart';
import mini from '../../feature/mini/miniBarChart';
import init from '../../option/init';
import { event } from '../../util/event';
import cloneDeep from '../../util/cloneDeep';
import BaseOption from '../../option/base';
import updateWidth from './barChartOption';
import { mergeVisualMap, mergeSeries } from '../../util/merge';
import { setStack, setDirection, setDoubleSides } from './handleOptipn';
import RectCoordSys, { xkey, xdata, ldata, ydata } from '../../option/RectSys';
import { setSeries, setRange, setMarkLine, setWaterFall, setLimitFormatter } from './handleSeries';
import { CHART_TYPE, ADAPTIVE_THEME } from '../../util/constants';

class BarChart {

  static name = CHART_TYPE.BAR

  constructor(iChartOption, chartInstance) {
    this.baseOption = {};
    this.baseOption = cloneDeep(BaseOption);
    this.chartInstance = chartInstance;
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption();
  }

  updateOption() {
    const iChartOption = this.iChartOption;
    // 装载除series之外的其他配置
    RectCoordSys(this.baseOption, this.iChartOption, CHART_TYPE.BAR);
    // x轴key值
    const xAxisKey = xkey(iChartOption);
    // x轴数据
    const xAxisData = xdata(iChartOption.data, xAxisKey);
    // 图例数据
    const legendData = ldata(iChartOption.data, xAxisKey);
    // 连线的数据
    const seriesData = ydata(iChartOption.data, legendData);
    // 赋值数据
    this.baseOption.legend.data = iChartOption.legend.data || legendData;
    this.baseOption.xAxis.forEach(item => {
      item.data = xAxisData;
    });
    this.baseOption.series = setSeries(seriesData, legendData, iChartOption);
    // 给堆叠图的柱子中间加上空白缝隙，并覆盖图例的点击事件
    setStack(this.baseOption, iChartOption, legendData, seriesData);
    // 针对数据均为正数的双向柱状图进行一些特殊处理
    setDoubleSides(this.baseOption, iChartOption);
    // 针对瀑布图表需求，图表需要进行特殊处理
    setWaterFall(this.baseOption, iChartOption);
    // 针对区间图表需求，图表需要进行特殊处理
    setRange(this.baseOption, iChartOption);
    // 针对阈值线变色，图表需要进行特殊处理
    setMarkLine(this.baseOption, iChartOption);
    // 设置柱状图的方向
    setDirection(this.baseOption, iChartOption.direction);
    // 对 tooltip.formatter 进行二次封装
    setLimitFormatter(this.baseOption, iChartOption, seriesData);
    // 配置图表事件
    if (iChartOption.event) {
      event(this.chartInstance, iChartOption.event);
    }
    // 是否关闭hover态的效果，默认为false
    if (iChartOption.silent) {
      this.baseOption.tooltip = {};
    }
    // 合并用户自定义series
    mergeSeries(iChartOption, this.baseOption);
    // 合并用户自定义visualMap
    mergeVisualMap(iChartOption, this.baseOption);
    // 处理特性
    mini(iChartOption, this.baseOption);
  }

  // 根据渲染出的结果，二次计算option
  updateOptionAgain() {
    let baseOption = this.baseOption;
    const iChartOption = this.iChartOption;
    const lineDataName = iChartOption.lineDataName;
    // 折柱混合
    if (lineDataName && lineDataName.length > 0) {
      const lineChartBaseOpt = new LineChart(iChartOption, {}, this.chartInstance);
      const lineBaseOption = lineChartBaseOpt.getOption();
      const lineSeries = lineBaseOption.series;
      const barSeries = baseOption.series;
      lineDataName.forEach(lineName => {
        let bar = null;
        let line = null;
        for (let i = 0; i < lineSeries.length; i++) {
          if (lineSeries[i].name === lineName) {
            line = lineSeries[i];
            break;
          }
        }
        for (let i = 0; i < barSeries.length; i++) {
          if (barSeries[i].name === lineName) {
            bar = barSeries[i];
            break;
          }
        }
        for (const key in line) {
          if (Object.hasOwnProperty.call(line, key)) {
            bar[key] = line[key];
          }
        }
      });
    }
    if (ADAPTIVE_THEME.includes(this.iChartOption.theme)) {
      updateWidth(baseOption, this.chartInstance, this.iChartOption);
    }
  }

  getOption() {
    return this.baseOption;
  }

  setOption() { }

  // 自适应柱条宽度
  resize(callback) {
    if (ADAPTIVE_THEME.includes(this.iChartOption.theme)) {
      updateWidth(this.baseOption, this.chartInstance, this.iChartOption);
      callback && callback(this.baseOption);
    }
  }
}

export default BarChart;
