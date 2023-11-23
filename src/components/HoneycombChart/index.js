import './index.less';
import BaseChart from '../BaseChart';
import NodeManager from './NodeManager';

export default class HoneycombChart extends BaseChart {
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
        this.initDom();
        this.setResizeObserver();
        this.renderCallBack && this.renderCallBack(this);
    }

    // 图表渲染完成时回调
    onRenderReady(callback) {
        this.renderCallBack = callback;
    }

    initDom() {
        this.dom.style.padding = this.option.padding || 0;
        this.dom.insertAdjacentHTML('beforeend', `<div class="hc-container"><div class="hc-rows"></div></div>`);
        if (this.data.length > 0) {
            this.nodeManager = new NodeManager(this.dom, this.option);
        }
    }

    resizeDom() {
        if (this.data.length > 0) {
            Array.prototype.slice.call(this.dom.getElementsByClassName('hc-row')).forEach(element => {
                element.remove();
            });
            this.nodeManager.layoutNodes();
        }
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
        Array.prototype.slice.call(this.dom.getElementsByClassName('hc-container')).forEach(element => {
            element.remove();
        });
        this.option = option;
        this.data = option.data;
        this.initDom();
        this.resizeDom();
    }

    // 图表刷新，仅刷新数据
    refreshData(data) {
        Array.prototype.slice.call(this.dom.getElementsByClassName('hc-container')).forEach(element => {
            element.remove();
        });
        this.data = data;
        this.option.data = data;
        this.initDom();
        this.resizeDom();
    }

    // 刷新图表自适应宽度
    setResize() {
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
}
