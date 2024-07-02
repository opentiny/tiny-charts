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
import Theme from '../../feature/token';

// 暂时这样处理为了去除老的token使用待review处理
const themeColor = {
  light: ['#e8e8e8', '#bbbbbb', '#ffffff'],
  dark: ['#2e2e2e', '#4e4e4e', '#272727'],
  'bpit-light': ['#e8e8e8', '#bbbbbb', '#ffffff'],
  'bpit-dark': ['#2e2e2e', '#4e4e4e', '#272727'],
  'cloud-light': ['#f2f2f2', '#bbbbbb', '#ffffff'],
  'cloud-dark': ['#2e2e2e', '#4e4e4e', '#272727'],
  'hdesign-light': ['#e8e8e8', '#bbbbbb', '#ffffff'],
  'hdesign-dark': ['#2e2e2e', '#4e4e4e', '#272727'],
};

function color(items, type) {
  const [subg, subfont, bg] = themeColor[Theme.themeName];
  // 失效的球的颜色
  items.color = subg;
  // 不懂做什么用的保持和原来逻辑一致，item的color和colorSec用一个颜色待review
  items.borderColor = subg;
  items.textColor = subfont;
  if (items.depth >= 1 && type === 'nested') {
    // 失效球的边框色(发现需要和图表背景保持一个颜色相当。。。。)
    items.borderColor = bg;
  }
}

function show(params, items, itemc, type) {
  if (!params.selected[itemc]) {
    if (items.type === itemc) {
      color(items, type);
    }
  }
}

// 点击图例消失
export function legendDisappear(paramsd) {
  const { seriesData, params, type, baseOption, chartInstance } = paramsd;
  seriesData.forEach(items => {
    if (items.type === params.name) {
      color(items, type);
    }
  });
  baseOption.dataset[0].source = seriesData;
  chartInstance.setOption(baseOption);
}

// 点击图例出现
export function legendShow(paramss) {
  const { seriesData, type, params, baseOption, chartInstance } = paramss;
  seriesData.forEach(items => {
    if (items.type !== params.name) {
      Object.keys(params.selected).forEach(itemc => {
        show(params, items, itemc, type);
      });
    }
  });
  baseOption.dataset[0].source = seriesData;
  chartInstance.setOption(baseOption);
}
