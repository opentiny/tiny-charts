import './index.less';
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
        // selected[0] 表示第一层组织正在显示的index
        // selected[1] 表示第二层组织正在显示的index
        this.selected = [1, 1];
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
        if(!this.data) return;
        this.container = document.createElement('div');
        this.container.setAttribute('class', 'ozc_container');
        if(this.option.theme && this.option.theme.indexOf('dark') !== -1){
            this.container.classList.add('ozc_container_dark');
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
