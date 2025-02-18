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
import BaseOption from './BaseOption';
import cloneDeep from '../../util/cloneDeep';
import { setSeriesData, reverseData } from './handleSeries';
import { handleLabelFormatter } from './labelFormatter';
import PolarCoordSys from '../../option/PolarSys';
import { setStartAngle, setbarWidth, handleLegendData } from './handleOption';
import { CHART_TYPE } from '../../util/constants';

class JadeJueChart {

  static name = CHART_TYPE.JADGEJUE;
  static chartType;

  constructor(iChartOption, chartInstance) {
    this.baseOption = {};
    this.iChartOption = {};
    this.baseOption = cloneDeep(BaseOption);
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(cloneDeep(iChartOption));
    // 根据 iChartOption 组装 baseOption
    this.updateOption(chartInstance);
  }

  updateOption(chartInstance) {
    const iChartOption = this.iChartOption;
    iChartOption.position = iChartOption.position || iChartOption.chartPosition;
    iChartOption.max = iChartOption.max || iChartOption.calibrationValue;
    // 对非堆叠类型数据取反（已对iChartOption进行深拷贝），实现数据从外向内展示（echarts默认为内向外）
    reverseData(iChartOption, this);
    // 装载除series之外的其他配置
    PolarCoordSys(this.baseOption, iChartOption, CHART_TYPE.JADGEJUE);
    // 配置玉玦图的标定值和两种data下不同的angleAxis.sum和angleAxis.max
    handleLabelFormatter(iChartOption, this.baseOption, this.chartType);
    // 配置玉玦图的seriesData数据（value,name,color）
    setSeriesData(iChartOption, this.baseOption, this.chartType);
    // 设置默认线宽为(8=>16)
    setbarWidth(iChartOption, this.baseOption, chartInstance, this.chartType);
    // 配置玉玦图的起点角度及文本位置
    setStartAngle(iChartOption, this.baseOption);
    // 为第一种数据类型单独配置legend.data和对应颜色
    handleLegendData(iChartOption, this.baseOption, this.chartType);
  }

  getOption() {
    return this.baseOption;
  }

  setOption() { }
}

export default JadeJueChart;
