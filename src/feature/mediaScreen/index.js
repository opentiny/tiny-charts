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
import merge from '../../util/merge';
import cloneDeep from '../../util/cloneDeep';
import { isArrayEqual } from '../../util/equal';
import defaultOption from '../adaptive';

class mediaScreen {

  constructor(dom, option, callback) {
    // 媒体查询监听的dom
    this.dom = dom;
    // 用户传递的响应式配置
    this.userOption = option;
    // 媒体查询命中时的回调函数
    this.callback = callback;
    // 当前宽度下响应式配置命中的区间
    this.curRange = [];
    // 图表初始配置
    this.initOption = {};
  }

  // 监听dom宽度变化
  observe() {
    if (!this.dom) return;
    // 媒体查询的响应式配置
    const defaultChartOption = defaultOption[this.chartName] ? defaultOption[this.chartName] : []
    this.option = this.userOption || defaultChartOption;
    let domWidth = this.dom.getBoundingClientRect().width;
    let range = this.getRange(domWidth, this.option);
    if (!isArrayEqual(this.curRange, range)) {
      let tempOption = cloneDeep(this.initOption);
      this.curRange = range;
      this.curRange.forEach((rangeIndex) => {
        merge(tempOption, this.option[rangeIndex].option);
      });
      this.callback(tempOption);
    }
  }

  // 强制触发一次监听，(解决页面挂载就调用refresh配置的问题)
  refresh() {
    this.curRange = [];
    this.observe();
  }

  // 设置图表初始配置
  setInitOption(option, chartName) {
    this.initOption = cloneDeep(option);
    this.chartName = chartName;
  }

  // 计算命中区间
  getRange(domWidth, option) {
    let range = [];
    option.forEach((item, index) => {
      // maxWidth/minWidth都存在
      if (item.maxWidth !== undefined && item.minWidth !== undefined) {
        if (domWidth <= item.maxWidth && domWidth >= item.minWidth) {
          range.push(index);
        }
      }
      // maxWidth/minWidth都不存在，直接push到this.initRange
      else if (item.maxWidth === undefined && item.minWidth === undefined) {
        range.push(index);
      }
      // minWidth不存在
      else if (item.maxWidth !== undefined && item.minWidth === undefined) {
        if (domWidth <= item.maxWidth) {
          range.push(index);
        }
      }
      // maxWidth不存在
      else if (item.maxWidth === undefined && item.minWidth !== undefined) {
        if (domWidth >= item.minWidth) {
          range.push(index);
        }
      }
    });
    // 数组去重
    range = Array.from(new Set(range));
    return range;
  }
}

export default mediaScreen;