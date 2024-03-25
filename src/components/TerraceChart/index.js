import BaseChart from '../BaseChart';
import defaultPath from './defaultPath';
import { initContainer } from './insert';
import defendXSS from '../../util/defendXSS';
import defaultGradient from './defaultGradient';
import { isString, isDOM } from '../../util/type';
import { percentToDecimal } from '../../util/math';
import { insertStateDom, removeStateDom } from '../../util/init/insert';
import { createDom, setStyle, appendHTML, appendDom } from '../../util/dom';

export default class TerraceChart extends BaseChart {
    constructor() {
        super();
        // 图表渲染容器
        this.dom = null;
        // 图表配置项
        this.option = null;
        // 图表所需数据
        this.data = null;
        // 梯田容器
        this.svg = null;
        // 自定义dom容器
        this.domContainer = null;
        // 位置
        this.center = null;
        // 大小
        this.radius = null;
        // loading状态容器
        this.loadingContainer = null;
        // loading文本容器
        this.loadingDom = null;
        // 图表容器的宽高变化监听器
        this.resizeObserver = null;
        // 是否显示梯田
        this.showTerrace = null;
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
        this.data = this.option.data;
        // 渲染dom
        this.initDom();
        // 渲染refresh相关dom
        this.initFlagParams();
        // 位置定位
        this.handlePosition();
        this.setResizeObserver();
        this.renderCallBack && this.renderCallBack(this);
    }


    // 渲染dom
    initDom() {
        initContainer(this.dom);
        this.svg = this.dom.getElementsByClassName('terrace_svg_container')[0];
        this.container = this.dom.getElementsByClassName('terrace_chart_container')[0];
        const gContainer = this.dom.getElementsByClassName('terrace_g_container')[0];
        this.domContainer = this.dom.getElementsByClassName('terrace_dom_container')[0];
        this.loadingContainer = this.dom.getElementsByClassName('terrace_loading_container')[0];
        this.loadingDom = this.dom.getElementsByClassName('loading_dom')[0];
        defaultPath.forEach((item, index) => {
            const gItem = createDom('g');
            setStyle(gItem, { class: `g_Item_${index}` });
            appendHTML(gItem, item.path);
            appendDom(gContainer, gItem);
        });
        const gContainerInfo = gContainer.getBoundingClientRect();
        const width = gContainerInfo.width;
        const height = gContainerInfo.height;
        setStyle(this.svg, { width, height });
    }

    // refresh相关dom
    initFlagParams() {
        // 自定义dom插入
        const { centerDom } = this.option;
        if (centerDom) {
            this.insertCenterDom(centerDom, this.domContainer)
        }
        // 梯田图渲染
        const { type = 'health' } = this.option;
        defaultGradient.forEach(item => {
            if (item.type === type) {
                appendHTML(this.svg, item.lineGradient);
            }
        });
        // 是否显示梯田图
        this.showTerrace = this.option.showTerrace !== undefined ? this.option.showTerrace : true;
        if (!this.showTerrace) {
            this.svg.style.opacity = 0;
        } else {
            this.svg.style.opacity = 1;
        }
    }

    // 自定义dom插入
    insertCenterDom(centerDom, dom) {
        if (!dom) return;
        const initCustomdom = centerDom(dom);
        isString(initCustomdom) && appendHTML(dom, initCustomdom);
        isDOM(initCustomdom) && appendDom(dom, initCustomdom);
    }

    // 配置dom位置
    handlePosition() {
        let basePosition = null;
        // 位置和大小
        basePosition = {
            center: ['50%', '50%'],
            radius: ['30%', '70%']
        }
        const position = this.option.position;
        this.radius = (position && position.radius) || basePosition.radius;
        this.center = (position && position.center) || basePosition.center;
        const newPosition = this.center.map(item => {
            if (item.indexOf('px') === -1 && item.indexOf('%') === -1) {
                item = `${item}px`;
            }
            return item;
        });
        const left = newPosition[0];
        const top = newPosition[1];
        this.svg.style.left = left;
        this.svg.style.top = top;
        this.domContainer.style.left = left;
        this.domContainer.style.top = top;
        this.loadingContainer.style.left = left;
        this.loadingContainer.style.top = top;
    }

    resizeDom() {
        const width = this.svg.getAttribute('width');
        const height = this.svg.getAttribute('height');
        const clientWidth = this.container.clientWidth;
        const clientHeight = this.container.clientHeight;
        this.innerDecimal = percentToDecimal(this.radius[0]);
        this.outerDecimal = percentToDecimal(this.radius[1]);
        const scaleX = ((clientWidth * this.outerDecimal) / width).toFixed(2);
        const scaleY = ((clientHeight * this.outerDecimal) / height).toFixed(2);
        const scale = clientWidth >= clientHeight ? scaleY : scaleX;
        this.svg.style.transform = `translate(-50%, -50%) scale(${scale})`;
        const loadingSvg = this.dom.getElementsByClassName('terrace_loading_svg')[0];
        let scaleWidth = `${Math.min(clientWidth, clientHeight) * this.innerDecimal}px`;
        this.domContainer.style.width = scaleWidth;
        this.domContainer.style.height = scaleWidth;
        this.loadingDom.style.width = scaleWidth;
        this.loadingDom.style.height = scaleWidth;
        loadingSvg.style.width = scaleWidth;
        loadingSvg.style.height = scaleWidth;
    }

    // 监听容器变化
    setResizeObserver() {
        this.resizeObserver = new ResizeObserver(entries => {
            this.resizeDom();
        });
        this.resizeObserver.observe(this.dom);
    }

    // 图表渲染完成时回调
    onRenderReady(callback) {
        this.renderCallBack = callback;
    }

    // 图表刷新，刷新配置项
    refresh(option) {
        this.domContainer.innerHTML = '';
        const defsDom = this.svg.getElementsByTagName('defs')[0];
        if (defsDom) { this.svg.removeChild(defsDom) }
        this.initFlagParams();
        this.handlePosition();
        this.resizeDom();
    }

    // 图表刷新，仅刷新数据
    refreshData(data) {
        this.option.data = data;
        this.refresh(this.option);
    }

    // 刷新图表自适应宽度
    setResize() {
        this.resizeDom();
    }

    // 加载状态
    showLoading(option) {
        if (this.loadingContainer) {
            this.loadingDom.innerHTML = '';
            option = { theme: 'light' , ...option};
            const text = option.text || '加载中...';
            const textSize = option.textSize || 14;
            const textShow = option.textShow === false ? false : true;
            const textColor = option.textColor || (option.theme.indexOf('dark') !== -1 ? '#FFFFFF' : '#808080');
            const centerDom = () => {
                const dom = `
                <div style="color: ${defendXSS(textColor)};font-size: ${defendXSS(textSize)}px;line-height: ${defendXSS(textSize)}px;display: ${defendXSS(textShow ? 'block' : 'none')};letter-spacing: 0.5px;">
                    ${defendXSS(text)}
                </div>`;
                return dom;
            };
            this.insertCenterDom(centerDom, this.loadingDom);
            this.loadingContainer.style.display = 'block';
            this.svg.style.opacity = 0;
        } else {
            // 显示通用性loading
            insertStateDom(this.dom, 'loading', option);
        }
    }

    // 关闭加载
    closeLoading() {
        // 通用性loading也要关闭
        removeStateDom(this.dom, 'loading');
        if (this.loadingContainer) {
            this.loadingContainer.style.display = 'none';
        }
        if (this.showTerrace && this.svg) {
            this.svg.style.opacity = 1;
        }
    }

    hideLoading() {
        this.closeLoading();
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
