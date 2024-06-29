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
import Node from './Node';
import { renderSvgDom } from './util.js';

export default class Manager {
  // svg容器
  svgContainer;
  // 节点的容器
  nodeContainer;
  //   配置项
  config;
  //  节点数据
  initalData;
  //   河流节点
  nodes;
  //   连接带节点
  belts;
  // 数据是否合法
  legal = true;
  // svg节点容器
  svgNodeGroup;
  // svg渐变色容器
  svgNodeGradientDefs;
  // svg连接带容器
  svgBeltPathGroup;
  // svg连接带渐变色容器
  svgBeltGradientDefs;

  constructor(svgContainer, nodeContainer, config, initalData) {
    this.svgContainer = svgContainer;
    this.nodeContainer = nodeContainer;
    this.config = config;
    this.initalData = initalData;
    this.nodes = [];
    this.belts = [];
    this.checkInitalData();
    this.initSvgGroupContainer();
  }

  initSvgGroupContainer() {
    if (!this.legal) return;
    // 节点组
    const nodeGroup = renderSvgDom('g', { id: 'rc_nodeGroup' });
    // 用来包裹path的组
    const pathGroup = renderSvgDom('g', { id: 'rc_pathGroup' });
    // 用来包裹node渐变色的组
    const nodeGradientGroup = renderSvgDom('g', { id: 'rc_nodeGradientGroup' });
    // 用来包裹link渐变色的组
    const linkGradientGroup = renderSvgDom('g', { id: 'rc_linkGradientGroup' });
    // 放置node渐变色def
    const nodeGradientDefs = renderSvgDom('defs');
    // 放置link渐变色def
    const linkGradientDefs = renderSvgDom('defs');
    nodeGradientGroup.appendChild(nodeGradientDefs);
    linkGradientGroup.appendChild(linkGradientDefs);
    this.svgContainer.appendChild(nodeGroup);
    this.svgContainer.appendChild(pathGroup);
    this.svgContainer.appendChild(nodeGradientGroup);
    this.svgContainer.appendChild(linkGradientGroup);
    this.svgNodeGroup = nodeGroup;
    this.svgNodeGradientDefs = nodeGradientDefs;
    this.svgBeltPathGroup = pathGroup;
    this.svgBeltGradientDefs = linkGradientDefs;
  }

  // 检查数据是否合规
  checkInitalData() {
    if (!this.initalData) return (this.legal = false);
    const { nodes, links } = this.initalData;
    if (!nodes || !links) return (this.legal = false);
    if ((nodes && nodes.length === 0) || (links && links.length === 0)) this.legal = false;
  }

  createNode(initialNode) {
    return new Node(initialNode, this.config, this.initalData, this.belts);
  }

  addNode(node) {
    this.nodes.push(node);
  }

  findInitalNode(name) {
    return this.initalData.nodes.find(item => item.name === name);
  }

  findNode(name) {
    return this.nodes.find(item => item.name === name);
  }

  // 检查节点是否已存在this.nodes,没有就新建节点
  checkNodeExist(name, initalNode) {
    let targetNode = this.findNode(name);
    if (!targetNode) {
      const initNode = initalNode ? initalNode : this.findInitalNode(name);
      const newNode = this.createNode(initNode);
      this.addNode(newNode);
      targetNode = newNode;
    }
    return targetNode;
  }

  // 增加节点的依赖关系
  addNodeDependency(dependency, node, isParent = true) {
    if (dependency && dependency.length > 0) {
      dependency.forEach(name => {
        const targetNode = this.checkNodeExist(name);
        isParent ? node.setParent(targetNode) : node.setChildren(targetNode);
      });
    }
  }

  addNodeParent(parentName, node) {
    this.addNodeDependency(parentName, node);
  }

  addNodeChildren(childrenName, node) {
    this.addNodeDependency(childrenName, node, false);
  }

  init() {
    if (!this.legal) return;
    this.initNodes();
    this.initBelts();
  }

  initNodes() {
    this.initalData.nodes.forEach(initialNode => {
      const node = this.checkNodeExist(initialNode.name, initialNode);
      const parentName = [];
      const childrenName = [];
      this.initalData.links.forEach(link => {
        if (link.target === initialNode.name) {
          parentName.push(link.source);
        }
        if (link.source === initialNode.name) {
          childrenName.push(link.target);
        }
      });
      this.addNodeParent(parentName, node);
      this.addNodeChildren(childrenName, node);
    });
  }

  initBelts() {
    this.nodes.forEach(node => {
      node.initBelts();
    });
  }

  renderNodes() {
    this.nodes.forEach(node => node.render(this.nodeContainer, this.svgNodeGroup, this.svgNodeGradientDefs));
  }

  renderBelts() {
    this.belts.forEach(belt => belt.render(this.svgBeltPathGroup, this.svgBeltGradientDefs));
  }

  // 绘制节点和连接带
  render() {
    this.renderNodes();
    this.renderBelts();
  }
}
