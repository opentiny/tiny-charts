import './index.less';
import BaseChart from '../BaseChart';
import Theme from '../../feature/theme';
import { initContainer } from './insert';
import defaultPath from './defaultPath';
import IntegrateChart from '../../index';
import defendXSS from '../../util/defendXSS';
import defaultGradient from './defaultGradient';
import { isString, isDOM, isArray } from '../../util/type';
import { insertStateDom, removeStateDom } from '../../util/init/insert';
import { createDom, appendDom, appendHTML, setStyle, percentToDecimal } from './util';


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
        // 阈值线数量
        this.splitNumber = null;
        // 刻度值的最大值
        this.radarMax = null;
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
        if (this.data) {
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
        // 雷达图的dom
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
        } else {
            this.svg.style.opacity = 1;
        }
    }

    // 配置dom位置
    handlePosition() {
        let basePosition = null;
        // 位置和大小
        if (isArray(this.data)) {
            basePosition = {
                center: ['50%', '50%'],
                radius: '70%'
            };
        } else {
            basePosition = {
                center: ['50%', '50%'],
                radius: ['25.2%', '70%']
            };
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

    // radar背景
    initRadar() {
        const colorBase = Theme.color.base;
        this.splitNumber = (this.option.splitNumber) || 5;
        this.radarMax = (this.option.radarMax);
        // 创建图表实例
        const chartIns = new IntegrateChart();
        chartIns.init(this.rContainer);
        const chartOption = {
            _isWaveRadar: null,
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
                axisName: {
                    formatter: indicatorName => {
                        return `{a|${indicatorName}}`;
                    },
                    rich: {
                        a: {
                            // color: 'rgba(128,128,128,1.00)',
                            color: colorBase.subfont,
                            align: 'center',
                            fontSize: 12,
                            lineHeight: 12
                        },
                    },
                },
                axisLabel: {
                    // color: 'rgba(128,128,128,1.00)',
                    color: colorBase.subfont,
                    showMinLabel: false
                },
                axisLine: {
                    lineStyle: {
                        // color: 'rgba(0, 0, 0, 0.08)',
                        color: colorBase.subaxis
                    },
                },
                splitLine: {
                    lineStyle: {
                        type: 'solid',
                        color: colorBase.subaxis
                    },
                },
            },
        };
        const { type = 'health', theme = 'light' } = this.option;
        if (type == 'health') {
            chartOption.color = ['#5CB300'];
        } else if (type == 'warning') {
            chartOption.color = ['#FFB700'];
        } else if (type == 'risk') {
            chartOption.color = ['#F23030'];
        }

        if (isArray(this.data)) {
            this.data.forEach(item => {
                chartOption.data.label[item] = 0;
            });
        } else {
            chartOption.data = this.data;
        }
        theme && (chartOption.theme = this.option.theme);
        chartOption._isWaveRadar = (theme.toLowerCase().indexOf('cloud-light') !== -1);
        this.option.radarMark && (chartOption.radarMark = this.option.radarMark);
        this.radarMax && (chartOption.radarMax = this.radarMax);
        chartOption.position.center = this.center;
        chartOption.position.radius = this.radius;
        chartOption.radar.splitNumber = this.splitNumber;
        chartIns.setSimpleOption('RadarChart', chartOption);
        // 开始渲染
        chartIns.render();
    }

    resizeDom() {
        const width = this.svg.getAttribute('width');
        const height = this.svg.getAttribute('height');
        let scaleWidth = null;
        let decimal = null;
        let domDecimal = null;
        const clientWidth = this.rContainer.clientWidth;
        const clientHeight = this.rContainer.clientHeight;

        if (isArray(this.radius)) {
            decimal = percentToDecimal(this.radius[1]);
            domDecimal = percentToDecimal(this.radius[0]);
        } else {
            decimal = percentToDecimal(this.radius);
        }

        const scaleX = (((clientWidth * decimal) / width) * 0.9).toFixed(2);
        const scaleY = (((clientHeight * decimal) / height) * 0.9).toFixed(2);
        const scale = clientWidth >= clientHeight ? scaleY : scaleX;
        this.scale = scale;
        this.svg.style.transform = `translate(-50%, -50%) scale(${scale})`;
        const loadingSvg = this.dom.getElementsByClassName('wave_loading_svg')[0];

        if (isArray(this.radius)) {
            scaleWidth = `${(clientWidth >= clientHeight ? clientHeight : clientWidth) * domDecimal + 10}px`;
        } else {
            scaleWidth = `${width * 0.45 * scale}px`;
        }
        this.domContainer.style.width = scaleWidth;
        this.loadingDom.style.width = scaleWidth;
        this.domContainer.style.height = scaleWidth;
        this.loadingDom.style.height = scaleWidth;
        loadingSvg.style.width = scaleWidth;
        loadingSvg.style.height = scaleWidth;
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
        if (this.data) {
            this.initRadar();
        }
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
