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
import cloneDeep from '../../util/cloneDeep';
import { setTooltip } from './handleOptipn';
import handleSeries from './handleSeries';
import init from '../../option/init';
import { CHART_TYPE } from '../../util/constants';

class WordCloudChart {
 
  static name = CHART_TYPE.WORD_CLOUD

  constructor(iChartOption) {
    this.baseOption = {};
    this.iChartOption = {};
    this.baseOption = cloneDeep(BaseOption);
    // 组装 iChartOption, 补全默认值
    this.iChartOption = init(iChartOption);
    // 根据 iChartOption 组装 baseOption
    this.updateOption();
  }

  updateOption() {
    const iChartOption = this.iChartOption;
    // 图表基础颜色
    this.baseOption.color = iChartOption.color;
    // 图表鼠标悬浮提示框
    this.baseOption.tooltip = setTooltip(iChartOption);
    // 数据
    this.baseOption.series = handleSeries({
      data: iChartOption.data,
      width: iChartOption.width,
      height: iChartOption.height,
      gridSize: iChartOption.gridSize,
      sizeRang: iChartOption.sizeRange,
      rotationRange: iChartOption.rotationRange,
      rotationStep: iChartOption.rotationStep,
      shape: iChartOption.shape,
      maskImage: iChartOption.maskImage,
      textColor: iChartOption.textColor,
      colors: this.baseOption.color,
    });
    // 图表位置
    this.baseOption.grid.top = iChartOption.padding[0];
    this.baseOption.grid.right = iChartOption.padding[1];
    this.baseOption.grid.bottom = iChartOption.padding[2];
    this.baseOption.grid.left = iChartOption.padding[3];
  }

  getOption() {
    return this.baseOption;
  }

  setOption() {}
}

export default WordCloudChart;
