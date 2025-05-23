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
import Token from './feature/token';
import { THEMES } from './feature/token';
import cloneDeep from './util/cloneDeep';
import { updateStateDom } from './util/init/insert';

window.getConsoleContext?.().get?.({ name: 'theme' })?.getThemeFlagAsync?.().then((theme) => {
  const cftheme = theme === 'dark' ? 'cloud-dark' : 'cloud-light';
  Theme.init(cftheme);
})

window.addEventListener('cfThemeChange', (e) => {
  if (e.detail.themeFlag) {
    const cftheme = e.detail.themeFlag === 'dark' ? 'cloud-dark' : 'cloud-light';
    Theme.set(cftheme);
  }
})

export default class Theme {
  static currentChartsInstance = {};
  static preChartsInstance = {};
  static globalName = undefined;
  static THEMES = cloneDeep(THEMES)
  constructor() { }

  // 收集图表类
  static registerCharts(instance, uuid) {
    for (const key in this.currentChartsInstance) {
      const item = this.currentChartsInstance[key];
      const rect = item.dom?.getBoundingClientRect();
      if (rect && rect.left === 0 && rect.right === 0 && rect.top === 0 && rect.bottom === 0) {
        delete this.currentChartsInstance[key];
      }
    }
    this.currentChartsInstance[uuid] = instance;
  }

  // 移除图表类
  static deleteCharts(uuid) {
    delete this.currentChartsInstance[uuid];
  }

  // 初始化主题
  static init(theme) {
    this.globalName = theme;
    Token.setDefaultTheme(theme);
  }

  // 设置主题
  static set(theme) {
    this.globalName = theme;
    this.preChartsInstance = this.currentChartsInstance;
    this.currentChartsInstance = {};
    for (const key in this.preChartsInstance) {
      const item = this.preChartsInstance[key];
      if (item.iChartOption) {
        Token.setDefaultTheme(theme);
        item.refresh?.(item.initIChartOption);
      }
    }
    // 更新‘数据状态’相关节点
    updateStateDom();
  }

  static getColors() {
    return Token.getColors()
  }
}
