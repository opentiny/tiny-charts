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
import Node from './index';
import nodeLayout from '../nodeLayout';
import convertData from './convertData';
import bufferRender from './bufferRender';

export default class NodeManager {
    // nodes + edges 数组格式数据, 即 relationData
    data;
    // 节点数据
    nodes;
    // 节点关系
    edges;
    // 布局名称
    layoutName;
    // 节点理器工厂
    instance = {};

    constructor(option, container) {
        this.option = option;
        this.container = container;
        this.canvasContainter = this.container.parentNode;
    }

    // option.layout.algorithm 为自定义布局算法
    init(option) {
        if (option?.layout?.algorithm) {
            this.layoutName = 'customize';
        } else {
            this.layoutName = option?.layout?.type || 'defaults';
        }
    }

    // 计算布局
    layout() {
        this.init(this.option);
        let layoutClass = nodeLayout[this.layoutName];
        let containerRect = this.container.getBoundingClientRect();
        new layoutClass(this.option.data, containerRect, this.option);
        // 将 optionData 转成 relationData
        this.data = convertData[this.layoutName](this.option.data);
        
        
    }

    relayout(option) {
        this.init(option);
        let layoutClass = nodeLayout[this.layoutName];
        let containerRect = this.container.getBoundingClientRect();
        new layoutClass(option.data, containerRect, option);
        // 将 optionData 转成 relationData
        this.data = convertData[this.layoutName](option.data);
    }

    render() {
        this.instance = {};
        let containerRect = this.container.getBoundingClientRect();
        this.canvasContainterRect = this.canvasContainter.getBoundingClientRect();
        this.containerCenter = {
            x: containerRect.width / 2,
            y: containerRect.height / 2
        };
        if (this.option.layout?.bufferRender) {
            // 执行局部渲染方法
            this.data.nodes.forEach(node => {
                this.bufferRenderNode(node, this.option);
            });
        } else {
            // 执行全局渲染方法
            this.data.nodes.forEach(node => {
                this.renderNode(node, this.option);
            });
        }

    }

    // 全局渲染
    renderNode(node, option) {
        let nodeInstance = new Node(node, option, this.container);
        let nodeDom = nodeInstance.render();
        this.container.appendChild(nodeDom);
        this.instance[node.id] = nodeInstance;
    }

    // 局部渲染
    bufferRenderNode(node, option) {
        let nodeInstance = new Node(node, option, this.container);
        // 使用初始偏移 (0, 0) 进行首次渲染
        bufferRender(nodeInstance, {
            scale: 1,
            lastScale: 1,
            offset: { x: 0, y: 0 },
            center: this.containerCenter
        }, this.container, this.canvasContainterRect);// TODO 初始渲染可能缩放值不是1
        this.instance[node.id] = nodeInstance;
    }

    // 外部触发局部渲染回调
    onBufferRender(params) {
        if (!this.option.layout?.bufferRender) return;
        for (let id in this.instance) {
            bufferRender(this.instance[id], params, this.container, this.canvasContainterRect);
        };
    };

    // 刷新所有节点，并执行位移动画, this.data为新数据, this.instance为旧数据
    refresh(option) {
        let newIds = [];
        let oldIds = [];
        this.data.nodes.forEach(newNode => {
            newIds.push(newNode.id);
            if (this.isExist(newNode.id)) {
                this.instance[newNode.id].refresh(newNode);
            } else {
                if (option.layout?.bufferRender) {
                    // 执行局部渲染方法
                    this.bufferRenderNode(newNode, option);
                } else {
                    // 执行全局渲染方法
                    this.renderNode(newNode, option);
                }
            }
        });
        oldIds = Object.keys(this.instance);
        oldIds.forEach(id => {
            if (newIds.indexOf(id) == -1) {
                this.unmount(id);
            }
        })
    }

    getNodeData(id) {
        return this.instance[id]?.getData();
    }

    getNode(id) {
        return this.instance[id];
    }

    // 保存节点的实时位置+大小，用于做动效
    getCurrentPosition() {
        let current = {};
        Object.keys(this.instance).forEach(id => {
            current[id] = this.instance[id].getCurrentPosition()
        });
        return current;
    }

    getData() {
        return this.data;// nodes, edges
    }

    getDom(id){
        return this.instance[id]?.getDom();
    }

    isExist(id) {
        return this.instance[id];
    }

    updata(id, data) {
        this.instance[id].updata(data);
    }

    // 指定节点添加事件
    addEventListener(id, eventName, eventCallBack){
        this.getNode(id).addEventListener(eventName, eventCallBack);
    }

    unmount(id) {
        this.instance[id].unmount();
        delete this.instance[id];
    }
}