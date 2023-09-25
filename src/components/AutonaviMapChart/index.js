import BaseChart from '../BaseChart';
import './index.less';

// 常规的调用方法
// integrateChart.init(chartRef.current);
// integrateChart.setSimpleOption(AutonaviMapChart, option, {});
// integrateChart.render();

export default class AutonaviMapChart extends BaseChart {
    constructor() {
        super();
        // 图表渲染容器
        this.dom = null;
        // 图表配置项
        this.option = null;
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
      
    }

    // 图表渲染完成时回调
    onRenderReady(callback) {
        
    }

    // 渲染dom
    initDom() {

    }


    // 监听容器变化
    setResizeObserver() {
        this.resizeObserver = new ResizeObserver(entries => {
            this.resizeDom();
        });
        this.resizeObserver.observe(this.dom);
    }

    resizeDom() {
        
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
