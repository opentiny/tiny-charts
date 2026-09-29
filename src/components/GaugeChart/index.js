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
import BaseOption from './BaseOption';
import {handleSeries, handleSize, handleDetail, handleStatus, adapt, setMarkLineoffset} from './handleSeries';
import cloneDeep from '../../util/cloneDeep';
import { handleTooltip, setMiniGauge  } from './handleOptipn';
import { mergeSeries } from '../../util/merge';
import init from '../../option/init'
import { CHART_TYPE } from '../../util/constants';
import setA2ui from '../../feature/a2ui';

class GaugeChart {

  static name = CHART_TYPE.GAUGE

  constructor(iChartOption, chartInstance) {
    this.baseOption = {};
    this.iChartOption = {};
    this.chartName = CHART_TYPE.GAUGE;
    this.dom = chartInstance._dom;
    this.baseOption = cloneDeep(BaseOption);
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    this.chartInstance = chartInstance;
    // 根据 iChartOption 组装 baseOption
    this.updateOption(iChartOption, chartInstance);
  }

  updateOption(iChartOption, chartInstance) {
    let containerDom = chartInstance._dom;
    let containerWidth = containerDom.clientWidth;
    let containerHeight = containerDom.clientHeight;
    // 图表基础颜色
    this.baseOption.color = iChartOption.color;
    // 图表鼠标悬浮提示框
    this.baseOption.tooltip = handleTooltip(iChartOption, CHART_TYPE.GAUGE);
    // 赋值数据
    this.baseOption.series = handleSeries(iChartOption, this.baseOption.color,containerWidth,containerHeight);
    // 合并用户自定义series
    this.baseOption.legend.show = false;
    adapt(iChartOption, this.baseOption, containerWidth, containerHeight);
    setMarkLineoffset(this.iChartOption, this.baseOption, this.chartInstance, this);
    setMiniGauge(this.baseOption, iChartOption);
    mergeSeries(iChartOption, this.baseOption);
  }

  getOption() {
    return this.baseOption;
   
  }

  setOption() { }

  resize(callback) {

    let containerDom = this.chartInstance._dom;
    let containerWidth = containerDom.clientWidth;
    let containerHeight = containerDom.clientHeight;
    const radiusSize = containerWidth > containerHeight ? containerHeight : containerWidth;
    const series = this.baseOption.series[0];
    const sizeData = handleSize(series,radiusSize);
    const text = this.iChartOption.text || {};
    if(this.iChartOption.a2ui) {
      setA2ui(this.iChartOption, this);
    }
    // 中间文本
    handleDetail(series, text, this.iChartOption.data,sizeData);
    // 内置状态仪表盘
    handleStatus(series, this.iChartOption,radiusSize,text,sizeData);
    adapt(this.iChartOption,this.baseOption,containerWidth,containerHeight);
    setMiniGauge(this.baseOption, this.iChartOption, this);
    callback(this.baseOption);
  }
}

export default GaugeChart;
