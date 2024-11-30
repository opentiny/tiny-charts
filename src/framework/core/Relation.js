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
import Base from './Base';
import CanvasManager from '../module/canvas';
import LegendManger from '../module/legend';
import Contextmenu from '../module/contextmenu';

// 对外暴露的关系型图表基础组件
export default class Relation extends Base {
    constructor() {
        super();
        // 图表容器
        this.dom = undefined;
        // 图表配置
        this.option = {};
        // 画布模块
        this.canvas = {};
        // 图例模块
        this.legendManger = null
    }

    setOption(option) {
        this.option = option;
        if (this.dom === undefined) {
            console.error('This chart has not set container dom!');
            return;
        }
        // 将画布作为图表容器
        this.canvas = new CanvasManager(this.dom, this.option.canvas);
        let containers = this.canvas.containers;
        // 用户提供的容器
        this.dom = this.canvas.getCanvasDom();
        // 图表根容器 .huicharts-container
        this.root = containers.root;
        // 图表画布容器 .huicharts-canvas-container
        this.container = containers.container;
        // 图表连线容器 .huicharts-lines-container
        this.svgContainer = containers.lineContainer;
        // 图表节点容器  .huicharts-nodes-container
        this.htmlContainer = containers.nodeContainer;
        // 图表节点容器  .huicharts-animation-container
        this.animationContainer = containers.animationContainer;
        // 图表二次连线容器 .huicharts-second-lines-container
        this.secondSvgContainer = containers.secondlineContainer;
        this.secondlineGContainer = containers.secondlineGContainer;
        // lineGContainer
        if(option?.legend && !(option?.legend?.show === false) ){
            this.legendManger = new LegendManger(option.legend, this.root);
        }
        // 右键菜单
        if (option?.menu) {
            this.setContextMenu(option.menu);
        }
    }

    uninstall() {
        this.contextmenuManger?.uninstall()
    }

    render() {
        this.legendManger?.render()
    }

    setCanvas(canvasOpt) { }

    setContextMenu(contextMenuOpt) {
        this.contextmenuManger = new Contextmenu(this, contextMenuOpt);
    }
}