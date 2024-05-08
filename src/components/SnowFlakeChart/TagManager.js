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
import { setStyle, pxToNumber, insertDom, getStyle, createDom, judgeDisabled, setDirection, degPositive } from './util.js';
import { tagPosition, direction } from './CommonConstant';
export default class TagManager {
  wrapper;
  constructor(container, data, option, deg, isCenter, isSubRoot) {
    this.container = container;
    this.data = data;
    this.option = option;
    this.deg = degPositive(deg);
    this.isCenter = isCenter;
    this.isSubRoot = isSubRoot;
    this.direction = setDirection(this.deg);
    this.tagPositionVal = tagPosition; // tag当前的定位值
    this.mount();
  }

  mount() {
    this.dom = insertDom(this.container, { class: 'sfc-tag-item' });
    this.wrapper = insertDom(this.dom);
    // 判断是否来自于主网关传递给子网关的tag
    this.isCenter && this.insertContent();
  }

  returnWrapper() {
    return this.wrapper || createDom();
  }

  setAngle(value) {
    this.tagPositionVal = value || this.tagPositionVal;
    const containerWidth = pxToNumber(getStyle(this.container, 'width')); // tag分组容器的宽度
    const tagItemWidth = pxToNumber(getStyle(this.wrapper, 'width')); // tagdom自身的宽度 
    let originPoint;
    let tagStyle = {};
    if (this.direction === direction['left']) {
      originPoint = (containerWidth * ((this.tagPositionVal - 50) / 100) + tagItemWidth / 2);
      tagStyle = {
        right: `${this.tagPositionVal}%`,
        transformOrigin: `${originPoint}px center`,
        transform: `translate(50%,-50%) rotate(${this.deg - 180}deg)`,
      };
    } else {
      originPoint = -1 * (containerWidth * ((this.tagPositionVal - 50) / 100) - tagItemWidth / 2);
      tagStyle = {
        left: `${this.tagPositionVal}%`,
        transformOrigin: `${originPoint}px center`,
        transform: `translate(-50%,-50%) rotate(${this.deg}deg)`,
      };
    }
    setStyle(this.dom, { ...tagStyle });
  }

  insertContent() {
    judgeDisabled(this.option, [this.dom]);
    const renderFun = this.data.render || this.option.render;
    if (renderFun) {
      renderFun({
        nodeContainer: createDom(),
        tagContainer: this.wrapper
      }, this.data, this.option);
    }
    // 重新计算tag的旋转角度和定位
    this.setAngle();
  }

  // 刷新数据的方法
  refreshData(data) {
    this.data = data;
    this.insertContent();
  }
}