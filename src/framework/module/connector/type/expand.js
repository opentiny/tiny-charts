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
import { AnimationGroup } from '../../animation/index';

function getIcon(isOpen){
    const iconKey = isOpen ? 'open' : 'close';
    const Icon = {
        open: 'M20,11.25 C20.4142136,11.25 20.75,11.5857864 20.75,12 C20.75,12.3796958 20.4678461,12.693491 20.1017706,12.7431534 L20,12.75 L4,12.75 C3.58578644,12.75 3.25,12.4142136 3.25,12 C3.25,11.6203042 3.53215388,11.306509 3.89822944,11.2568466 L4,11.25 L20,11.25 Z',
        close: 'M12,3.25 C12.3796958,3.25 12.693491,3.53215388 12.7431534,3.89822944 L12.75,4 L12.75,11.25 L20,11.25 C20.4142136,11.25 20.75,11.5857864 20.75,12 C20.75,12.3796958 20.4678461,12.693491 20.1017706,12.7431534 L20,12.75 L12.75,12.75 L12.75,20 C12.75,20.4142136 12.4142136,20.75 12,20.75 C11.6203042,20.75 11.306509,20.4678461 11.2568466,20.1017706 L11.25,20 L11.25,12.75 L4,12.75 C3.58578644,12.75 3.25,12.4142136 3.25,12 C3.25,11.6203042 3.53215388,11.306509 3.89822944,11.2568466 L4,11.25 L11.25,11.25 L11.25,4 C11.25,3.58578644 11.5857864,3.25 12,3.25 Z',
    }
    const expandIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 24 24" version="1.1">
            <g stroke-width="1" fill="none" fill-rule="evenodd">
                <g>
                    <rect fill="#191919" opacity="0" x="0" y="0" width="16" height="16"></rect>
                    <path d="${Icon[iconKey]}" id="形状结合" fill="#191919"></path>
                </g>
            </g>
        </svg>`;
    return expandIcon;
}

export default class Expand {
    // connector数据
    data;
    // 是否展开
    isOpen= true;
    // 图表实例
    chartInstance;

    constructor(data, chartInstance) {}

    render(data, chartInstance) {
        this.data = data;
        this.chartInstance = chartInstance;
        let canExpand = this.hasChildren(chartInstance.nodeManager.getData().edges, data.nodeId);
        if (data.port === 'start' && canExpand) {
            this.dom = document.createElement('div');
            this.dom.setAttribute('class', `connector-expand`);
            this.dom.innerHTML = getIcon(this.isOpen)
            this.dom.addEventListener("click", ()=>{
                this.toggleIcon();
                this.setAnimation();
            })
        }
        return this.dom;
    }

    // 切换图标
    toggleIcon() {
        this.isOpen = !this.isOpen;
        this.dom.innerHTML = getIcon(this.isOpen);
    }
    
    // 执行展开收起动画
    setAnimation() {
        let { lineManager, nodeManager } = this.chartInstance;
        let nodesData = nodeManager.getData();
        let edges = nodesData.edges;
        let startNode = nodeManager.getNodeData(this.data.nodeId);
        let animateNodes = [];
        this.findAnimateNodes(this.data.id, edges, animateNodes);
        const group = new AnimationGroup();
        
        let updateStartConnector = (animateLine,params,isOpen) => {
            for (const lineId in edges) {
                const line = edges[lineId];
                if (line.start === animateLine.end) {
                    line.startConnector.absolute.x = (!isOpen ? animateLine.startConnector.x : line.startConnector.x) + params.left;
                    line.startConnector.absolute.y = (!isOpen ? animateLine.startConnector.y : line.startConnector.y) + params.top;
                }
            }
        };
        for (let index = 0; index < animateNodes.length; index++) {
            const id = animateNodes[index];
            // 需要位移的节点
            let endNode = nodeManager.getNodeData(id);
            let endNodeDom = nodeManager.getDom(id);
            // 以该节点为end的连线
            let endLine = edges.filter(obj => obj.end === id)[0];
            let nodeStart = {
                left: this.isOpen ? startNode.x : endNode.x,
                top: this.isOpen ? startNode.y : endNode.y,
                opacity: this.isOpen || endNode.fold ? 0 : 1
            }
            // 记录该次折叠信息
            this.collapseRecord(startNode, endNode, this.data);
            // 如果折叠状态不存在，初次操作时为折叠---用于后续设置 透明度 和 样式 ‘pointer-events’
            if (endNode.fold == undefined) endNode.fold = true;
            // actionsId 记录初次操作折叠的节点id
            // 如果操作id与actionsId相同，且isOpen为true，则该节点已展开至记录的起始位置；删除节点状态 fold和actionsId
            if (this.isOpen && endNode.actionsId == this.data.nodeId) {
                delete endNode.fold;
                delete endNode.actionsId;
            }else if (!endNode.actionsId) {
                endNode.actionsId = this.data.nodeId;
            }
            // 根据isOpen使用折叠信息记录的起始位置
            let nodeEnd = {
                left: this.isOpen ? endNode.actions[this.data.nodeId].start.x : endNode.actions[this.data.nodeId].end.x,
                top: this.isOpen ? endNode.actions[this.data.nodeId].start.y : endNode.actions[this.data.nodeId].end.y,
                opacity: this.isOpen && !endNode.actions[this.data.nodeId].fold && !endNode.fold ? 1 : 0
            }
            group.add(endNodeDom, {
                start: nodeStart,
                end: nodeEnd,
                duration: lineManager.RE_CREATE_TIME,
                onAfterUpdate: (params, elapsed, element)=> {
                    let animateLine = Object.assign({},endLine)
                    animateLine.endConnector.absolute.x = animateLine.endConnector.x + params.left;
                    animateLine.endConnector.absolute.y = animateLine.endConnector.y + params.top;
                    updateStartConnector(animateLine, params, this.isOpen);
                    lineManager.update(animateLine);
                },
                onFinish: () => {
                    endNode.x = nodeEnd.left;
                    endNode.y = nodeEnd.top;
                    !this.isOpen && lineManager.hide(endLine);
                    if (endNodeDom) endNodeDom.style['pointer-events'] = this.isOpen ? 'auto' : 'none';
                    if (this.isOpen && !endNode.actions[this.data.nodeId]?.fold && endNode.fold && endNodeDom) endNodeDom.style['pointer-events'] = 'none';
                    //折叠完成，删除该次折叠信息
                    if (this.isOpen) delete endNode.actions[this.data.nodeId];
                }
            });
        }
        group.start();
    }

    // 查找所有需要展开收起的节点的id集合
    findAnimateNodes(id, edges, animateNodes, endId) {
        edges.forEach(item => {
            let splitID = item.id.split("-to-");
            if (item.start == endId || splitID[0] == id) {
                animateNodes.push(item.end);
                this.findAnimateNodes(splitID[1], edges, animateNodes, item.end);
            }
        });
    }

    //递归查找子节点
    childId(id, edgeData, childIdArr){
        edgeData.forEach(item => {
            if(item.start == id) {
                childIdArr.push(item.end);
                this.childId(item.end, edgeData, childIdArr);
            }
        })
    }

    // 查询节点是否存在子节点
    hasChildren(edgeData, id) {
        let childIdArr = [];
        // 获取所有节点id下面的子节点,放到childIdArr
        this.childId(id, edgeData, childIdArr);
        // 去除相同的节点
        childIdArr =  [...new Set(childIdArr)];
        if(childIdArr.length > 0) {
            let singleNum = 0;// 只有一个父节点的数量
            childIdArr.forEach(child => {
                let num = 0;
                for (let k = 0; k < edgeData.length; k++) {
                    if(edgeData[k].end === child) {
                        num++;
                    }
                    // 子节点的父节点数量大于1，则终止循环
                    if(num > 1){
                        break
                    }
                    if(k == edgeData.length - 1) {
                        singleNum++
                    }
                }
            })
            // 如果所有的子节点的父节点都是唯一的
            if(singleNum == childIdArr.length) {
                return true;
            } else {
                return false;
            }
        }
    }
    
    // 记录折叠信息，折叠操作的id，起始坐标, 节点对于该操作记录的折叠状态
    collapseRecord(startNode, endNode, data) {
        if (!endNode.actions) endNode.actions = {};
        if (!endNode.actions[data.nodeId]) {
            endNode.actions[data.nodeId] = {
                fold: true,
                start: {
                    x: endNode.x,
                    y: endNode.y
                },
                end: {
                    x: startNode.x,
                    y: startNode.y
                }
            }
        } else {
            endNode.actions[data.nodeId].fold = false;
        }
    }
}