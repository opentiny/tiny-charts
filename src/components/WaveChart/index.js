import BaseChart from '../BaseChart';
import { initContainer } from './insert';
import defaultPath from './defaultPath';
import IntegrateChart from '../../index';
import defaultGradient from './defaultGradient';
import { isString, isDOM } from '../../util/type';
import defendXSS from '../../util/defendXSS';
import { insertStateDom, removeStateDom } from '../../util/init/insert';
import { createDom, appendDom, appendHTML, setStyle, percentToDecimal } from './util';
import './index.less';
import Theme from '../../feature/theme'
export default class WaveChart extends BaseChart {
    constructor() {
        super();
        // 图表渲染容器
        this.dom = null;
        // 图表配置项
        this.option = null;
        // 图表所需数据
        this.data = null;
        // 波纹容器
        this.svg = null;
        // 自定义dom容器
        this.domContainer = null;
        // radar容器
        this.rContainer = null;
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
        // 是否显示波纹
        this.showWave = null;
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
        if (this.data && this.data.length > 0) {
            this.initRadar();
        }
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
        const gContainer = this.dom.getElementsByClassName('wave_g_container')[0];
        this.svg = this.dom.getElementsByClassName('wave_svg_container')[0];
        this.domContainer = this.dom.getElementsByClassName('wave_dom_container')[0];
        this.rContainer = this.dom.getElementsByClassName('wave_radar_container')[0];
        this.loadingContainer = this.dom.getElementsByClassName('wave_loading_container')[0];
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
        // 波纹图渲染
        const { type = 'health' } = this.option;
        defaultGradient.forEach(item => {
            if (item.type === type) {
                appendHTML(this.svg, item.lineGradient);
            }
        });
        // 是否显示波纹图
        this.showWave = this.option.showWave !== undefined ? this.option.showWave : true;
        if (!this.showWave) {
            this.svg.style.opacity = 0;
        }
    }

    // 配置dom位置
    handlePosition() {
        // 位置和大小
        const basePosition = {
            center: ['50%', '50%'],
            radius: '50%',
        };
        const position = this.option.position;
        this.radius = (position && position.radius) || basePosition.radius;
        this.center = (position && position.center) || basePosition.center;
        const newPosition = this.center.map(item => {
            if (item.indexOf('px') === -1 && item.indexOf('%') === -1) {
                item = `${item  }px`;
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

    // radar背景
    initRadar() {
        const colorBase = Theme.color.base 
        // 创建图表实例
        const chartIns = new IntegrateChart();
        chartIns.init(this.rContainer);
        const chartOption = {
            radarMark: false,
            radarMax: 100,
            position: {},
            legend: {
                show: false,
            },
            data: {
                label: {},
            },
            radar: {
                splitNumber: 6,
                axisName: {
                    formatter: indicatorName => {
                        return `{a|${indicatorName}}`;
                    },
                    rich: {
                        a: {
                            color: colorBase.subfont,
                            align: 'center',
                            fontSize: 12,
                            lineHeight: 12,
                        },
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: colorBase.subaxis,
                    },
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: colorBase.subaxis,
                    },
                },
            },
        };

        this.data.forEach(item => {
            chartOption.data.label[item] = 0;
        });
        chartOption.position.center = this.center;
        chartOption.position.radius = this.radius;
        chartIns.setSimpleOption('RadarChart', chartOption);
        // 开始渲染
        chartIns.render();
    }

    resizeDom() {
        const width = this.svg.getAttribute('width');
        const height = this.svg.getAttribute('height');
        const decimal = percentToDecimal(this.radius);
        const clientWidth = this.rContainer.clientWidth;
        const clientHeight = this.rContainer.clientHeight;
        const scaleX = (((clientWidth * decimal) / width) * 0.9).toFixed(2);
        const scaleY = (((clientHeight * decimal) / height) * 0.9).toFixed(2);
        const scale = clientWidth >= clientHeight ? scaleY : scaleX;
        this.scale = scale;
        this.svg.style.transform = `translate(-50%, -50%) scale(${scale})`;
        const loadingSvg = this.dom.getElementsByClassName('wave_loading_svg')[0];
        const scaleWidth = `${width * 0.45 * scale  }px`;
        this.domContainer.style.width = scaleWidth;
        this.loadingDom.style.width = scaleWidth;
        this.domContainer.style.height = scaleWidth;
        this.loadingDom.style.height = scaleWidth;
        loadingSvg.style.transform = `scale(${this.scale}`;
    }

    // 自定义dom插入
    insertCenterDom(centerDom, dom) {
        if (!dom) return;
        const initCustomdom = centerDom(dom);
        isString(initCustomdom) && appendHTML(dom, initCustomdom);
        isDOM(initCustomdom) && appendDom(dom, initCustomdom);
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
        this.domContainer.innerHTML = '';
        const defsDom = this.svg.getElementsByTagName('defs')[0];
        if (defsDom) { this.svg.removeChild(defsDom) }
        this.option = option;
        this.data = option.data;
        this.initFlagParams();
        this.handlePosition();
        this.resizeDom();
        if (this.data && this.data.length > 0) {
            this.initRadar();
        }
    }

    // 图表刷新，仅刷新数据
    refreshData(data) {
        this.option.data = data;
        this.refresh(this.option)
    }

    // 刷新图表自适应宽度
    setResize() {
        this.resizeDom();
    }

    // 加载状态
    showLoading(option) {
        if (this.loadingContainer) {
            this.loadingDom.innerHTML = '';
            option = Object.assign({ theme: 'light' }, option);
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
        if (this.showWave && this.svg) {
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
