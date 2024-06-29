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
import Layout from './Layout';
import { isFunction } from '../../util/type';

export const NODE_ID_PREFIX = 'fc-node-';

export default class NodeManager {
    // 节点数据，包括节点数据和连线数据
    data;

    constructor(data, option, container) {
        this.option = option;
        this.render = option.render;
        this.createNodes(data, container);
        setTimeout(() => {
          this.createBorder(option.renderBorder,container,data)
        }, 100);
    }

    // 将数据根据dagre算法计算出位置，并移动节点位置
    layoutNodes(data, containerPosn) {
        this.data = data;
        this.getNodeSize(this.data.nodes, containerPosn);
        new Layout(this.data, this.option, containerPosn);
        // 避免出现node的x,y为负值的情况，会导致就算父容器有滚动条也看不到该node
        const { minX, minY } = this.correctNode(this.data.nodes);
        this.moveNode(this.data.nodes, { minX, minY });
    }

    correctNode(nodes) {
        let minX = 0;
        let minY = 0;
        // 获取最大的负值的x,y
        nodes.forEach((node) => {
            if (node.x < minX) {
                minX = node.x;
            }
            if (node.y < minY) {
                minY = node.y;
            }
        });
        this.data.minX=minX
        this.data.minY=minY
        return { minX, minY };
    }

    moveNode(nodes, { minX, minY }) {
        nodes.forEach(node => {
            if (node.dom) {
                node.dom.style.top = node.y - minY + 'px';
                node.dom.style.left = node.x - minX + 'px';
            }
        });
    }

    /**
     * 计算出给个节点的宽高，用于后续排版算法
     */
    getNodeSize(nodes,containerPosn) {
        nodes.forEach(node => {
            let size = node.dom && node.dom.getBoundingClientRect();
            let innerSize = node.dom && node.dom.firstChild &&  node.dom.firstChild.getBoundingClientRect();
            // 外层容器的宽高目前是定死为50
            node.width = size && size.width/containerPosn.scaleX;
            node.height = size && size.height/containerPosn.scaleY;
            // 内层容器的宽高则根据实际情况计算
            node.innerWidth = innerSize && innerSize.width/containerPosn.scaleX;
            node.innerHeight = innerSize && innerSize.height/containerPosn.scaleY;
        });
    }

    /**
     * 创建节点
     **/
    createNode(ndata) {
        let { id, render } = ndata;
        let nodeDom = document.createElement('div');
        nodeDom.classList.add('fc-node');
        nodeDom.id = NODE_ID_PREFIX + id;
        let renderFun = render || this.render;
        if (renderFun) {
            let dom = renderFun(nodeDom, ndata);
            dom && nodeDom.appendChild(dom)
        }
        return nodeDom;
    }

    /**
     * 根据用户传入数据生成节点Dom，并插入进container中
     */
    createNodes(data, container) {
        data.nodes.forEach(node => {
            let nodeDom = this.createNode(node);
            node.dom = nodeDom;
            container.appendChild(nodeDom);
        });
    }

    /**
     * 根据用户自定义绘制矩形插入进container中
     */
    createBorder(renderBorder,container, data) {
        isFunction(renderBorder) && renderBorder(container, data.nodes);
    }

    // 更新节点位置信息
    updateNode(domId, x, y) {
        let id = domId.replace(NODE_ID_PREFIX, '');
        this.data.nodesObj[id].x = x;
        this.data.nodesObj[id].y = y;
    }
}
