/**
 * Copyright (c) 2022 - present TinyCharts Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { initContainer } from './insertDom';
import BaseChart from '../BaseChart';
import TimeLine from './timeline';

export default class TimelineChart extends BaseChart {
    constructor() {
        super();
        // 图表渲染容器
        this.dom = null;
        // 图表配置项
        this.option = null;
        // 图表容器的宽高变化监听器
        this.resizeObserver = null;
        // 时间轴容器
        this.timeline = null;
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
        this.initDom();
        this.setResizeObserver();
        this.renderCallBack && this.renderCallBack(this);
    }

    // 图表渲染完成时回调
    onRenderReady(callback) {
        this.renderCallBack = callback;
    }

    // 渲染dom
    initDom() {
        initContainer(this.dom);
        this.container = document.getElementsByClassName('timeline_container')[0];
        this.chartContainer = document.getElementById('timeline_chart');
        this.canvas = document.getElementById('timeline');
        this.resizeDom();
    }

    // 销毁图表
    uninstall() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
        this.dom.innerHTML = '';
    }

    // 调整dom大小
    resizeDom() {
        const width = this.container.offsetWidth;
        const height = this.container.offsetHeight;
        this.canvas.setAttribute('width', width);
        this.canvas.setAttribute('height', height);

    }

    // 图表刷新，刷新配置项
    refresh(option) {
        this.option = option;
        this.dom.innerHTML = '';
        this.initDom();
        this.timeline = new TimeLine('timeline', new Date().getTime(), this.option);
    }

    // 监听容器变化
    setResizeObserver() {
        this.resizeObserver = new ResizeObserver(entries => {
            this.resizeDom();
            this.timeline = new TimeLine('timeline', new Date().getTime(), this.option);
        });
        this.resizeObserver.observe(this.dom);
    }

    // 图表刷新，仅刷新数据
    refreshData() {

    }

    // 刷新图表自适应宽度
    setResize() {
        this.resizeDom();
    }

}