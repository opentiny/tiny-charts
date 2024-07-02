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
import { setStyle, pxToNumber, insertDom, getStyle, createDom, judgeDisabled, moveToCenter, boundaryJudge } from './util.js';
import { defaultToolTip } from './defaultOption.js';
export default class NodeManager {
  dom;
  wrapper; // 节点需要多插入一层dom结构，用于回正内容
  constructor(container, data, deg, isCenter, branchInstance) {
    const { drag, snowInstance, chartContainer, option, equalDeg, wrapper: branchWrapper } = branchInstance;
    this.container = container;
    this.data = data;
    this.option = option;
    this.deg = deg;
    this.isCenter = isCenter;
    this.chartContainer = chartContainer;
    this.drag = drag;
    this.snowInstance = snowInstance;
    this.equalDeg = equalDeg;
    this.branchWrapper = branchWrapper;
    this.branchInstance = branchInstance;
    this.mount();
    // 下钻后移动选中dom到视口中心(删除会由于恢复全网视口時dom尺寸变化导致雪花图移位)
    moveToCenter(branchInstance, this, true);
  }

  mount() {
    // 创建每一个节点容器
    let domClass = this.isCenter ? 'sfc-node-center' : 'sfc-node-item';
    if (this.data.faultNumber) {
      domClass += ' sfc-node-error';
    }
    this.dom = insertDom(this.container, { class: domClass });
    this.wrapper = insertDom(this.dom);
    // 绑定事件
    this.addEvent();
    // 中心节点插入内容
    this.isCenter && this.insertContent();
    // 全网视图下，添加悬浮提示框
    this.addToolTip();
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
    // 点击后重新调用node的render方法,去刷新高亮状态。以及根据当前的scale，是否显隐
    !this.isCenter && this.insertContent();
  };

  // 叶子点击下钻,会重构dom，因此需要找到mac一致的新叶子dom，添加高亮类名。
  findSameDom() {
    this.snowInstance.branchs.forEach((item) => {
      item.leafsArr.forEach((leaf) => {
        if (leaf.data.mac === this.data.mac) {
          this.dom = leaf.node.dom;
          this.wrapper = leaf.node.wrapper;
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
      }, this.data, this.option, this.drag.scale);
    }
  }

  setSubRootWidth() {
    if (this.option.overAll) {
      // render完毕，更新宽高
      setStyle(this.branchWrapper, {
        width: pxToNumber(getStyle(this.wrapper, 'width')) + 50 * 2 + 'px',
        height: pxToNumber(getStyle(this.wrapper, 'height')) + 50 * 2 + 'px',
      });
    }
  }

  addToolTip() {
    let toolTip = document.querySelector('.sfc-overAllTip');
    if (!toolTip) { // 在家庭视口需要将其隐藏
      toolTip = document.createElement('div');
      toolTip.className = 'sfc-overAllTip';
      document.documentElement.appendChild(toolTip);
    }
    if (this.option.overAll) {
      const toolTipFun = this.data.toolTip || this.option.toolTip || defaultToolTip;

      if (this.isCenter) {
        this.wrapper.addEventListener('mousemove', (e) => {
          e.stopPropagation();
          toolTip.style.display = 'none';
        });
      } else {
        this.wrapper.addEventListener('mousemove', (e) => {
          if (this.drag.startPos) { // 此处用draging判断会出问题
            toolTip.style.display = 'none';
            return;
          }
          e.stopPropagation();
          toolTip.style.display = 'block';
          const { x, y } = boundaryJudge(e, this.drag.container, toolTip);
          toolTip.style.left = `${x}px`;
          toolTip.style.top = `${y}px`;
          toolTip.innerHTML = toolTipFun(this.data, true);
        });
        this.wrapper.addEventListener('mouseleave', (e) => {
          toolTip.style.display = 'none';
        });
      }

      this.container.addEventListener('mousemove', (e) => {
        if (this.drag.startPos) {
          toolTip.style.display = 'none';
          return;
        }
        toolTip.style.display = 'block';
        const { x, y } = boundaryJudge(e, this.drag.container, toolTip);
        toolTip.style.left = `${x}px`;
        toolTip.style.top = `${y}px`;
        toolTip.innerHTML = toolTipFun(this.data, false);
        this.container.style.backgroundImage = 'radial-gradient(rgba(89,144,253,0) 0%,rgba(89,144,253,.1) 100%)';
      });
      this.container.addEventListener('mouseleave', (e) => {
        toolTip.style.display = 'none';
        this.container.style.backgroundImage = 'unset';
      });
    } else {
      toolTip.style.display = 'none';
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
    const { faultNumber } = this.data;
    const classList = this.dom.classList;
    if (faultNumber) {
      classList.add('sfc-node-error');
    } else {
      classList.remove('sfc-node-error');
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
    // 如果是通过api下钻，不是点击，那么下钻后调用缩放自适应。
    // 如果是点击下钻，那么不走自适应，因为自适应后若scale<0.75,点击的终端看不见，交互不友好
    if (drill && !clickTrigger) {
      this.snowInstance.findFitScale();
    } else {
      this.drag.reset();
    }
    // 下钻后，如果scale在0.5-0.75之间，那么节点是隐藏状态。不应该让其居中，改变为整个图表容器居中
    // 下钻后，自适应能力不需要触发，滚轮才触发。或者首次进入图表就是家庭视口才自适应
    // this.snowInstance.findFitScale(() => {
    //   if (this.drag.scale >= 0.5 && this.drag.scale <= 0.75) {
    //     this.drag.moveTargetToCenter(this.chartContainer);
    //   }
    // });
  }
}