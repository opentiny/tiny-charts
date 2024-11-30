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
import LineLayout from '../../module/lineLayout';
import LineManager from '../../module/line/Manager';
import NodeManager from '../../module/node/Manager';
import { CHART_TYPE } from '../../../util/constants';

const NODE_WIDTH = 100;
const NODE_HEIGHT = 50;

export default class MindmapChart extends Relation {
    static name = CHART_TYPE.MINDMAP
    // 图表渲染容器
    dom;
    // 图表外部传入数据
    optionData;
    // 图表nodes+edges格式数据
    relationData;
    // 图表最外层容器
    container;
    // 图表svg元素容器
    svgContainer;
    // 图表html元素容器
    htmlContainer;
    // 图表容器的宽高变化监听器
    resizeObserver = null;
    // 连线管理器
    lineManager;
    // 节点管理器
    nodeManager;
    // 连接点管理器
    connectorManager;

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
        this.onBufferRender();
        this.setResizeObserver();
        this.renderCallBack && this.renderCallBack(this);

    }

    // 设置默认布局
    setDefaultLayout(option) {
        option.layout = merge({
            direction: 'LR'
        }, option.layout);
    }

    // 根据节点大小和关系，计算布局，创建和渲染节点
    createNodes() {
        this.optionData = this.option.data;
        this.nodeManager = new NodeManager(this.option, this.htmlContainer);
        this.setNodeSize(this.optionData);
        this.nodeManager.layout();
        this.nodeManager.render();
        this.relationData = this.nodeManager.getData();
    }

    // 补充宽高信息到节点数据上
    setNodeSize(node) {
        node.width = node.width || this.option?.node?.width || NODE_WIDTH;
        node.height = node.height || this.option?.node?.height || NODE_HEIGHT;
        if (node.children && node.children.length > 0) {
            node.children.forEach(child => {
                this.setNodeSize(child);
            })
        }
    }

    // 创建连线
    createLines() {
        new LineLayout(this.relationData, this.option);
        this.option.data = { ...this.option.data, ...this.relationData };
        // 绘制连线
        this.lineManager = new LineManager(this.option, this.svgContainer, this);
        this.lineManager.layout(this.nodeManager);
        this.lineManager.render();
    }

    // 鼠标缩放移动的回调进行局部渲染
    onBufferRender() {
        this.canvas.onMove = (params) => {
            this.nodeManager.onBufferRender(params);
            this.lineManager.onBufferRender(params);
        };
    }

    // 图表渲染完成时回调
    onRendered(callback) {
        this.renderCallBack = callback;
    }

    // 图表刷新，刷新配置项
    refresh(option) {
      this.setDefaultLayout(option);
      this.setNodeSize(option.data);
      this.nodeManager.relayout(option);
      this.nodeManager.refresh(option);
      // this.relationData = this.nodeManager.getData();

      // 线随着node节点时刻变化位置
      this.lineManager.refresh(option);
    }

    // 图表刷新，仅刷新数据
    refreshData() {

    }

    // 刷新图表自适应宽度
    resize() {

    }

    setResizeObserver() {

    }

    // 销毁图表
    uninstall() {
        super.uninstall();
        this.resizeObserver.disconnect();
    }
}

