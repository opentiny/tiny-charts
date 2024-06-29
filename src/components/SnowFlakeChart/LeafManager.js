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
import NodeManager from './NodeManager';
import LineManager from './line';
import TagManager from './TagManager';
import { moveToCenter, judgeDisabled, getCssNumber } from './util';

class LeafManager {
  node;
  line;
  tag;
  constructor(data, container, deg, branchInstance) {
    const { imageList, option } = branchInstance;
    this.data = data;
    this.imageList = imageList;
    this.option = option;
    this.mount(container, deg, branchInstance);
    // 下钻后移动选中dom到视口中心(删除会由于雪花图未插入自定义render就定位中心导致有视图偏差)
    moveToCenter(branchInstance, this, false);
  }


  mount(container, deg, branchInstance) {
    // dom分组
    this.grouping(container, deg, branchInstance);
    // 插入自定义内容
    this.insertContent();
    // 渲染连线，连线的宽度需要用容器的一半减去中心dom和叶子dom的值
    this.renderLine(container, deg, branchInstance);
  }

  grouping(container, deg, branchInstance) {
    const { nodeWrapper, tagWrapper } = container;
    this.node = new NodeManager(nodeWrapper, this.data, deg, false, branchInstance);
    this.tag = new TagManager(tagWrapper, this.data, this.option, deg, false, branchInstance.drag);
  }

  insertContent() {
    const nodeContainer = this.node.returnWrapper();
    const tagContainer = this.tag.returnWrapper();
    const renderFun = this.data.render || this.option.render;
    judgeDisabled(this.option, [nodeContainer.parentNode, tagContainer.parentNode], true, this.data);
    if (renderFun) {
      renderFun({
        nodeContainer: nodeContainer,
        tagContainer: tagContainer,
      }, this.data, this.option);
    }
    // 子节点与tag节点回正
    this.node.setAngle();
    this.tag.setAngle();
  }

  renderLine(container, deg, branchInstance) {
    const { lineWrapper } = container;
    const tagWidth = getCssNumber(this.tag.dom, 'width');
    this.line = new LineManager({ lineWrapper, leafNode: this.node }, this.data, deg, branchInstance, false, tagWidth);
  }

  // 刷新数据的方法
  refreshData(data) {
    this.data = data !== undefined ? data : this.data;
    this.insertContent();
  }
}

export default LeafManager;