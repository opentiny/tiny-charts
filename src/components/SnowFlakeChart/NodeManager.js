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
import { setStyle, pxToNumber, insertDom, getStyle, createDom, judgeDisabled, moveToCenter } from './util.js';
import { tagActivePosition } from './CommonConstant.js';
export default class NodeManager {
  dom;
  wrapper; // 节点需要多插入一层dom结构，用于回正内容
  constructor(container, data, deg, isCenter, branchInstance) {
    const { drag, snowInstance, chartContainer, option } = branchInstance;
    this.container = container;
    this.data = data;
    this.option = option;
    this.deg = deg;
    this.isCenter = isCenter;
    this.chartContainer = chartContainer;
    this.drag = drag;
    this.snowInstance = snowInstance;
    this.mount();
    // 下钻后移动选中dom到视口中心(删除会由于恢复全网视口時dom尺寸变化导致雪花图移位)
    moveToCenter(branchInstance, this, true);
  }

  mount() {
    // 创建每一个节点容器
    let domClass = this.isCenter ? 'sfc-node-center' : 'sfc-node-item';
    if (this.data.faultNumber) {
      if (this.data.faultLevel == 2) { // 2是一般warning等级，默认等级为1
        domClass += ' sfc-node-warning';
      } else {
        domClass += ' sfc-node-error';
      }
    }
    this.dom = insertDom(this.container, { class: domClass });
    this.wrapper = insertDom(this.dom);
    // 绑定事件
    this.addEvent();
    // 中心节点插入内容
    this.isCenter && this.insertContent();
  }

  returnWrapper() {
    return this.wrapper;
  }

  addEvent() {
    this.dom.addEventListener('click', this.nodeClick);
    this.container.addEventListener('click', this.containerClick);
  }

  nodeClick = (e) => {
    if (this.drag.draging || this.data.disabled) { // 拖动中、disabled不触发点击
      return;
    }
    // 每次只能高亮一个节点，移除其他节点的高亮状态
    this.snowInstance.removeNodeActive();
    // 非中心dom添加点击下钻
    !this.isCenter && this.drillDown(true, true, true);
    this.findSameDom();
    if (this.data.click) {
      this.data.click(e, { ...this.data, dom: this.dom });
    }
    // 点击后重新调用node的render方法
    !this.isCenter && this.insertContent();
  };

  // 叶子点击下钻,会重构dom，因此需要找到mac一致的新叶子dom，添加高亮类名。
  findSameDom() {
    this.snowInstance.branchs.forEach((item) => {
      item.leafsArr.forEach((leaf) => {
        if (leaf.data.mac === this.data.mac) {
          this.dom = leaf.node.dom;
          this.wrapper = leaf.node.wrapper;
          // 将tag的定位往内调整
          leaf.tag.setAngle(tagActivePosition);
        }
      });
    });
    this.dom.classList.add('nodeActive');
  }

  containerClick = (e) => {
    if (this.drag.draging) {
      return;
    }
    if (e.target === this.container) {
      // 容器允许点击下钻，下钻后将容器展示在视口中心
      this.drillDown(true, false, true);
      if (this.data.containerClick) {
        this.data.containerClick(e, this.data);
      }
    }
  };

  setAngle() {
    // 获取整个雪花图容器与每个节点的宽度，计算旋转中心
    const containerWidth = getStyle(this.container, 'width'); // 节点所在分组容器的宽度
    const nodeItemWidth = getStyle(this.wrapper, 'width');  // 节点自身的宽度
    setStyle(this.dom, {
      transform: ` translate(-50%,-50%) rotate(${this.deg}deg)`,
      transformOrigin: `${-1 * (pxToNumber(containerWidth) / 2 - pxToNumber(nodeItemWidth) / 2)}px center`,
    });
    setStyle(this.wrapper, {
      transform: `rotate(${360 - this.deg}deg)`,
    });
  }

  insertContent() {
    judgeDisabled(this.option, [this.dom], false, this.data, true);
    const renderFun = this.data.render || this.option.render;
    if (renderFun) {
      renderFun({
        nodeContainer: this.wrapper,
        tagContainer: createDom()
      }, this.data, this.option);
    }
  }

  // 刷新数据的方法
  refreshData(data) {
    this.data = data !== undefined ? data : this.data;
    this.insertContent();
    this.upDateNodeClass();
  }

  // 判断data.faultNumber字段,更新node节点类名
  upDateNodeClass() {
    const { faultNumber, faultLevel } = this.data;
    const classList = this.dom.classList;
    if (faultNumber) {
      if (faultLevel === 1 && [...classList].indexOf('sfc-node-error') === -1) {
        classList.add('sfc-node-error');
      } else if (faultLevel === 2 && [...classList].indexOf('sfc-node-warning') === -1) {
        classList.add('sfc-node-warning');
      }
    } else {
      classList.remove('sfc-node-error');
      classList.remove('sfc-node-warning');
    }
  }

  // 点击下钻（node、tag、lina、次级根节点node修改样式）
  drillDown(drill = true, leafTrigger, clickTrigger, mac) {
    // 下钻
    if (drill) {
      // 已经是下钻状态，如果再次点击下钻，直接return
      if (this.option.overAll === false && clickTrigger) {
        return;
      }
      this.option.overAll = false;
      this.chartContainer.classList.remove('overAll');
    }
    else {
      this.option.overAll = true;
      this.chartContainer.classList.add('overAll');
    }
    // 重刷dom结构
    this.snowInstance.branchs[0].reRender(mac || this.data.mac, leafTrigger);
  }
}