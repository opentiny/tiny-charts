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
import core from './core';
import Register from './register';
import { isFunction } from './util/type';

// 图表核心对象，通过 Register 全量引入图表给 HuiCharts 渲染，打包容量较大
export default class HuiCharts extends core {
  constructor() {
    super();
    // 图表名称
    this.chartName = null;
  }

  /**
   * 传入配置项
   * @param {图表类型, 当为string型时需要转换为对应图表class} chart 
   * @param {配置项} iChartOption 
   * @param {三方插件} plugins 
   * @param {是否初始渲染} isInit 
   */
  setSimpleOption(chart, iChartOption, plugins = {}, isInit = true) {
    let ChartClass = null; 
    if(isFunction(chart)){
      this.chartName = chart.name;
      ChartClass = chart;
    } else {
      this.chartName = chart;
      ChartClass = this.getChartClass(chart);
    }
    super.setSimpleOption(ChartClass, iChartOption, plugins, isInit);
  }

  // 获取图表类
  getChartClass(name) {
    return Register.getRegisteredComp(name);
  }
}
