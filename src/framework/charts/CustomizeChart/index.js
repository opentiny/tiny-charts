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
import merge from '../../../util/merge';
import Relation from '../../core/Relation';
import LineManager from '../../module/line/Manager';
import NodeManager from '../../module/node/Manager';
import { CHART_TYPE } from '../../../util/constants';

const NODE_WIDTH = 100;
const NODE_HEIGHT = 50;

export default class CustomizeChart extends Relation {
  static name = CHART_TYPE.CUSTOMIZE
  // 图表渲染容器
  dom;
  // 图表外部传入数据
  optionData;
  // 图表nodes+edges格式数据
  relationData;
  // 图表容器边距
  padding = 30;
  // 图表最外层容器
  container;
  // 图表svg元素容器
  svgContainer;
  // 图表二次连线svg元素容器
  secondSvgContainer;
  secondlineGContainer;
  // 图表html元素容器
  htmlContainer;
  // 图表容器的宽高变化监听器
  resizeObserver = null;
  // 连线管理器
  lineManager;
  // 节点管理器
  nodeManager;

  constructor() {
    super();
    this.dom = null;
    this.option = null;
    this.resizeObserver = null;
  }

  // 初始化图表渲染容器
  init(dom) {
    this.dom = dom;
  }

  // 初始化图表渲染配置
  setOption(option) {
    super.setOption(option);
  }

  // 图表渲染
  render() {
    super.render();
    this.setDefaultLayout(this.option);
    this.createNodes();
    this.createLines();
    this.setResizeObserver();
    this.renderCallBack && this.renderCallBack(this);
  }

  // 设置默认布局
  setDefaultLayout(option) {
    option.layout = merge({
      nodeShape: 'circle',
    }, option.layout);
  }

  // 根据节点大小和关系，计算布局，创建和渲染节点
  createNodes() {
    this.nodeManager = new NodeManager(this.option, this.htmlContainer);
    this.setNodeSize(this.option);
    this.nodeManager.layout();
    this.nodeManager.render();
    this.relationData = this.nodeManager.getData();
  }

  // 补充宽高信息到节点数据上
  setNodeSize(option) {
    option.data.nodes.forEach(node => {
      node.width = node.width || option?.node?.width || NODE_WIDTH;
      node.height = node.height || option?.node?.height || NODE_HEIGHT;
    })
  }

  // 创建连线
  createLines() {
    this.lineManager = new LineManager(this.option, this.svgContainer,this);
    this.lineManager.layout(this.nodeManager);
    this.lineManager.render();
  }

  createCustomizeLines(option) {
    let svgRect = this.secondSvgContainer.getBoundingClientRect();
    let canvas = this.canvas;
  
    option.data.nodes.forEach(node => {
      let nodeId = node.id;
      let domRect = document.getElementById(nodeId).getBoundingClientRect();
      node.x = svgRect.width/2 + ((domRect.left - canvas.nodeOrigin.x)/canvas.scale);
      node.y = svgRect.height/2 + ((domRect.top - canvas.nodeOrigin.y)/canvas.scale);

    })
    this.lineManager.renderCustom(option, this.secondlineGContainer);

    // 1. 由于需要连线的node分布在不同的图层中，需要查找到分布到各个图层中node，计算他们相对于最外层的x,y

    // 2. 根据1生成一个新的relationData

    // 3. 执行LineLayout算法

    // 4. 绘制连线
    // render
  }


  // 图表渲染完成时回调
  onRendered(callback) {
    this.renderCallBack = callback;
  }

  // 图表刷新，刷新配置项
  refresh(option) {
    option.layout = merge({ type: '', nodeShape: 'circle' }, option.layout);
    this.setDefaultLayout(option);
    this.setNodeSize(option);
    this.nodeManager.relayout(option);
    this.nodeManager.refresh(option);
    this.lineManager.refresh(option);
    // Connector 位移最后再做
  }



  // 图表刷新，仅刷新数据
  refreshData() {
    // this.refresh()
  }

  // 刷新图表自适应宽度
  resize() {

  }

  setResizeObserver() {

  }

  // 销毁图表
  uninstall() {
    this.resizeObserver.disconnect();
  }
}

