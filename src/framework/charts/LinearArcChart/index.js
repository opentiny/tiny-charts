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
import ConnectorManager from '../../module/connector/Manager';

const NODE_WIDTH = 100;
const NODE_HEIGHT = 50;

export default class LinearArcChart extends Relation {
    static name = CHART_TYPE.GRID
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
        // this.createContainer();
        this.setDefaultLayout();
        this.createNodes();
        this.createLines();
        this.setResizeObserver();
        this.renderCallBack && this.renderCallBack(this);

    }


    // 设置默认布局
    setDefaultLayout(){
        this.option.layout = merge({
            nodeShape: 'circle',
            rows:1
        },this.option.layout);
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
    setNodeSize(optionData) {
        optionData.nodes.forEach(child => {
            child.width = child.width || this.option?.node?.width || NODE_WIDTH;
            child.height = child.height || this.option?.node?.height || NODE_HEIGHT;
        }) 
    }

    // 创建连线
    createLines() {
        // 绘制连线

        this.lineManager = new LineManager(this.option,this.svgContainer,this);
        this.lineManager.layout(this.nodeManager);        
        this.lineManager.render(); 
        // 绘制连接点
        this.connectorManager = new ConnectorManager(this, this.relationData.edges,this.option);
    }

    // 图表渲染完成时回调
    onRendered(callback) {
        this.renderCallBack = callback;
    }

    // 图表刷新，刷新配置项
    refresh() {

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
        this.resizeObserver.disconnect();
    }
}

