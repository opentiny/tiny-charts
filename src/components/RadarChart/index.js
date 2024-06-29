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
import { event } from '../../util/event';
import init from '../../option/init';
import { isArray } from '../../util/type';
import { setSeries, setMarkLineSeries } from './handleSeries';
import { mergeSeries } from '../../util/merge';
import { setRadar, setTooltip, getRadarMax, getRadarKeys, setMarkLine, initRadarSys } from './handleOptipn';
import { CHART_TYPE } from '../../util/constants';
import GradientRadar from './GradientRadar'

class RadarChart {

  gradientRadar = null

  static name = CHART_TYPE.RADAR

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
    // 雷达坐标系最大值
    const isCustomMaxVal = !!(isArray(iChartOption.radarMax) || iChartOption?.radar?.indicator);
    // 在配置不同系列的最大值的时候。数据不在同一维度，不显示markLine
    initRadarSys(this.baseOption, iChartOption)
    // 雷达所有维度
    const radarKeys = getRadarKeys(iChartOption.data);
    iChartOption.radarMax = iChartOption.radarMax || getRadarMax(iChartOption.data, iChartOption, isCustomMaxVal);
    if (iChartOption.gradient) {
      this.gradientRadar = new GradientRadar(chartInstance, { iChartOption, baseOption: this.baseOption, radarKeys })
    }
    // 绘制雷达地图
    setRadar(this.baseOption, iChartOption, radarKeys, isCustomMaxVal);
    // 赋值数据
    setSeries(this.baseOption, iChartOption, radarKeys, iChartOption.data);
    // 阈值线
    setMarkLine(this.baseOption, iChartOption, radarKeys, isCustomMaxVal);
    // 图表鼠标悬浮提示框
    setTooltip(this.baseOption, iChartOption, radarKeys, iChartOption.data);
    // 设置阈值红点
    setMarkLineSeries(this.baseOption, iChartOption, radarKeys);
    // 目前只允许合并基础的雷达图的series，对于阈值线和红点所在的series不处理，普通雷达图用series.name='data'标识，目前本接口只给opentinty和aui使用
    mergeSeries(iChartOption, this.baseOption);
    event(chartInstance, iChartOption.event);
    if (iChartOption.gradient) {
      this.gradientRadar.init()
      this.gradientRadar.setLegend()
      this.gradientRadar.setTooltip()
      this.gradientRadar.setSeries()
    }
  }

  getOption() {
    return this.baseOption;
  }

  resize() {
    if (this.gradientRadar) this.gradientRadar.resize()
  }
}

export default RadarChart;
