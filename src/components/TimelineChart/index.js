import { initContainer } from './insertDom';
import BaseChart from '../BaseChart';
import timeline from './timeline';

import './index.less';

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
        this.timeline = new timeline("timeline", new Date().getTime(), this.option);
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
        this.container = document.getElementsByClassName('container')[0];
        this.chartContainer = document.getElementById('chart_container');
        this.canvas = document.getElementById('timeline');
        this.resizeDom();
    }

    // 调整dom大小
    resizeDom() {
        const width = this.container.offsetWidth;
        const height = this.container.offsetHeight;
        if (this.option.trendingData != undefined) {
            this.chartContainer.setAttribute('style', `width: ${width}px; height: ${height / 3}px;`);
            this.canvas.setAttribute('width', width);
            this.canvas.setAttribute('height', height * 2 / 3);
        } else {
            this.canvas.setAttribute('width', width);
            this.canvas.setAttribute('height', height);
        }

    }

    // 图表刷新，刷新配置项
    refresh(option) {
        this.resizeDom();
        this.timeline.clearTimer1();
        this.timeline = new timeline("timeline", new Date().getTime(), option);
    }

    // 图表刷新，仅刷新数据
    refreshData(data) {

    }

    // 刷新图表自适应宽度
    setResize() {
        this.resizeDom();
    }

    // 监听容器变化
    setResizeObserver() {
        this.resizeObserver = new ResizeObserver(entries => {
            this.resizeDom();
            this.timeline = new timeline("timeline", new Date().getTime(), this.option);
        });
        this.resizeObserver.observe(this.dom);
    }

    // 销毁图表
    uninstall() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
        this.dom.innerHTML = '';
    }
}