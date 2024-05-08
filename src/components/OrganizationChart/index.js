/**
 * Copyright (c) 2024 - present TinyCharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import BaseChart from '../BaseChart';
import NodeManager from './NodeManager';
import RotateManager from './RotateManager';
export default class OrganizationChart extends BaseChart {
    constructor() {
        super();
        // 图表渲染容器
        this.dom = null;
        // 图表配置项
        this.option = null;
        // 图表所需数据
        this.data = null;
        // 图表容器的宽高变化监听器
        this.resizeObserver = null;
        // 生成节点和计算位置
        this.nodeManager = null;
        // 当前选中的组织index
        this.selected = null;
    }

    // 初始化图表渲染容器
    init(dom) {
        this.dom = dom;
    }

    // 初始化图表渲染配置
    setSimpleOption(chartName, option) {
        this.option = option;
    }

    // 图表渲染回调
    render() {
        this.data = this.option.data || [];
        this.selected = this.option.selected || [1, 1];
        this.initDom();
        this.setResizeObserver();
        this.renderCallBack && this.renderCallBack(this);
    }

    // 图表渲染完成时回调
    onRenderReady(callback) {
        this.renderCallBack = callback;
    }

    initDom() {
        if(!this.data) return;
        this.container = document.createElement('div');
        this.container.setAttribute('class', 'ozc_container');
        if(this.option.theme && this.option.theme.indexOf('dark') !== -1){
            this.container.classList.add('ozc_container_dark');
        }
        for (const styleKey in this.option.position) {
            if(Object.hasOwnProperty.call(this.option.position,styleKey)){
                this.container.style[styleKey] = this.option.position[styleKey];
            }         
        }
        this.dom.appendChild(this.container);
        this.nodeManager = new NodeManager(this.container, this.option, this.selected);
        this.rotateManager = new RotateManager(this.container, this.option, this.selected, this.nodeManager);
    }

    resizeDom() {
       
    }

    // 监听容器变化
    setResizeObserver() {
        this.resizeObserver = new ResizeObserver(entries => {
            this.resizeDom();
        });
        this.resizeObserver.observe(this.dom);
    }

    // 图表刷新，刷新配置项
    refresh(option) {
        
    }

    // 图表刷新，仅刷新数据
    refreshData(data) {
       
    }

    // 销毁图表
    uninstall() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
        this.dom.innerHTML = '';
    }

    // 刷新图表自适应宽度
    setResize() {
        this.resizeDom();
    }
}
