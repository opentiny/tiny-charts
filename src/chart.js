/**
 * Copyright (c) 2022 - present TinyCharts Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import core from './core';
import Register from './register';
import Theme from './feature/token';
import xssOption from './feature/xss';
import axistip from './feature/axistip';
import { isFunction } from './util/type';
import { mergeExtend } from './util/merge';
import readScreen from './feature/readScreen';
import MediaScreen from './feature/mediaScreen';

// 图表核心对象，通过 Register 全量引入图表给 HuiCharts 渲染，打包容量较大
export default class HuiCharts extends core {
  constructor() {
    super();
    // 图表名称
    this.chartName;
  }

  // 传入简化后的icharts-option
  setSimpleOption(chartName, iChartOption, plugins = {}, isInit = true) {
    iChartOption = xssOption(iChartOption);
    if (isInit) {
      Theme.setDefaultTheme(iChartOption.theme);
      this.mediaScreenObserver && this.mediaScreenObserver.setInitOption(iChartOption);
    }
    if (iChartOption.readScreen) {
      readScreen(this.dom, iChartOption.readScreen);
    }
    if (isFunction(chartName)) {
      this.redirectSelfChart(chartName, iChartOption, plugins);
      return;
    }
    this.plugins = plugins;
    this.chartName = chartName;
    this.iChartOption = iChartOption;
    const ChartClass = this.getChartClass(chartName);
    this.ichartsIns = new ChartClass(iChartOption, this.echartsIns, this.plugins);
    this.eChartOption = this.ichartsIns.getOption();
    axistip(this.dom, this.echartsIns, this.eChartOption, this.iChartOption.axistip);
    mergeExtend(this.iChartOption, this.eChartOption);
  }

  // 获取图表类
  getChartClass(name) {
    return Register.getRegisteredComp(name);
  }

  // 开启响应式布局（类媒体查询效果）
  mediaScreen(dom, screenOption) {
    this.mediaScreenObserver = new MediaScreen(dom, screenOption, option => {
      this.setSimpleOption(this.chartName, option, this.plugins, false);
      this.render();
    });
  }

  // 图表刷新，包括刷新配置和数据
  refresh(iChartOption) {
    this.iChartOption = iChartOption;
    this.setSimpleOption(this.chartName, iChartOption, this.plugins);
    this.render();
    this.mediaScreenObserver && this.mediaScreenObserver.refresh();
  }
}
