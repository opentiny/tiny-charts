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
import { createEl, appendEL, className, appendNode } from './util';
import TimeLine from './TimeLine';
import { CHART_TYPE } from '../../util/constants';

export default class GanttChart {

  static name = CHART_TYPE.GANTT
  // 图表的父容器
  container;
  // 配置项
  option;
  // 移动的初始距离
  timeLine;

  // 初始化
  init(container) {
    this.container = container;
  }
  // 设置图表的配置项
  setOption(option) {
    if (this.container) {
      appendNode(this.container, '');
    }

    this.option = option;
    // 图表内容区的像素宽度
    this.chartWidth = this.container.offsetWidth - 108 - 28;
    // 图表内容区的像素高度
    this.chartHeight = this.container.offsetHeight - 56;
    this.render();
  }

  render() {
    const wrapper = createEl('div');
    className(wrapper, 'ev_GanttChart_wrapper');
    appendEL(this.container, wrapper);
    this.timeLine = new TimeLine(wrapper, this.option, this.chartWidth, this.chartHeight);
    this.timeLine.init();
  }
}
