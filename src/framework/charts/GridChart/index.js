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

export default class GridChart extends Relation {
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
        this.lineManager = new LineManager(this.option, this.svgContainer, this);
        this.lineManager.layout(this.nodeManager);
        this.lineManager.render();

    }

    // 图表渲染完成时回调
    onRendered(callback) {
        this.renderCallBack = callback;
    }

    // 图表刷新，刷新配置项
    refresh(option) {
        // TODO 图例的重新渲染还没做  
        // TODO 节点的数据变化还没做
        option.layout = merge({ nodeShape: 'circle' }, option.layout);
        this.setDefaultLayout(option);
        this.setNodeSize(option);
        this.nodeManager.relayout(option);
        this.nodeManager.refresh(option);

        // 线随着node节点时刻变化位置
        // this.lineManager.refresh(option);

        // 连线删除后重新绘制
        this.lineManager.reCreate(this.nodeManager,option);

        // 每一帧需要刷新连线的时候，调用 this.nodeManagerget.CurrentPosition（）；
        // option.animation.duration





        // 如果节点的大小已经改变了，那就需要重新计算




        // 先不考虑样式的变化，仅作位移



        // Connector 位移最后再做

    }

    // 鼠标缩放移动的回调进行局部渲染
    onBufferRender() {
        this.canvas.onMove = (params) => {
            this.nodeManager.onBufferRender(params);
            this.lineManager.onBufferRender(params);
        };
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

