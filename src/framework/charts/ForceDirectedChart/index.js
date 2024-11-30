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
import Relation from '../../core/Relation';

import {initContainer} from './initDom';

import { CHART_TYPE } from '../../../util/constants';
import Node from './libs/Node.js';

export default class ForceDirectedChart extends Relation {

    static name = CHART_TYPE.FORCE_DIRECTED

    // 图表渲染容器
    dom;
    // 图表所需数据
    data;
    // 图表容器边距
    padding = 30;
    // 图表最外层容器
    container;
    // 生成节点和计算位置
    Node

    constructor() {
        super();
        // 图表渲染容器
        this.dom = null;
        // 图表配置项
        this.option = null;
        // 图表容器的宽高变化监听器
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
        super.render()
        this.createDom();
        this.setResizeObserver();
        this.renderCallBack && this.renderCallBack(this);
    }

    // 创建渲染容器
    createDom() {
      this.dom.innerHTML = '';
      initContainer(this.dom, this.option);
      this.data = this.option.data;
      const container = this.dom.getElementsByClassName('fd-container')[0];
      this.Node = new Node(this.data, this.option, container);
      this.Node.create(this.data, this.option);
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
        this.dom.innerHTML = '';
    }

    // 绑定事件
    initEvent() {
        let self = this;
        let onClick = this.option.onClick && this.option.onClick;
        // 鼠标按下节点，后续如果情况复杂，可能改为绑定在document上
        self.htmlContainer.childNodes.forEach((item) => {
            let dom = item;
            let domId = dom.id;
            dom.onmousedown = (mousedownEvent) => {
                mousedownEvent.stopPropagation();
                self.nodeManager.getNode(self.data, domId, (data) => {
                    onClick && onClick(dom, data);
                });
            }
        })
        let list = self.htmlContainer.getElementsByClassName('mmc-node-btn');
        Array.prototype.forEach.call(list,(item) => {
            let domId = item.parentNode.id;
            item.onmousedown = (mousedownEvent) => {
                mousedownEvent.stopPropagation();
                this.mousedownNode = mousedownEvent;
                // 鼠标移动
                document.onmouseup = (mousemoveEvent) => {
                    if (this.mousedownNode) {
                        let moveX = Math.abs(mousemoveEvent.clientX - this.mousedownNode.clientX);
                        let moveY = Math.abs(mousemoveEvent.clientY - this.mousedownNode.clientY);
                        // 点击后移动小于5才触发
                        if (moveX < 5 || moveY < 5) {
                            self.nodeManager.updateNode(self.data, domId, self.svgContainer);
                            this.mousedownNode = null;
                        }
                    }
                }

            }
        })
    }

}