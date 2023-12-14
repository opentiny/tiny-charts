import './index.less';
import BaseChart from '../BaseChart';
import Theme from '../../feature/theme';
import { initContainer } from './insert';
import IntegrateChart from '../../index';
import defendXSS from '../../util/defendXSS';
import { percentToDecimal } from '../../util/math';
import { appendHTML, appendDom } from '../../util/dom';
import { isString, isDOM, isArray } from '../../util/type';
import { insertStateDom, removeStateDom } from '../../util/init/insert';

const LARGE_SYMBOL_SIZE = 12;
const SMALL_SYMBOL_SIZE = 8;
const LARGE_BORDER_WIDTH = 2;
const SMALL_BORDER_WIDTH = 1.5;
const LARGE_LINE_WIDTH = 3;
const SMALL_LINE_WIDTH = 2;
const HEALTH_RGBA = '130,204,51,'
const WARNING_RGBA = '255,183,0,'
const RISK_RGBA = '242,48,48,'

export default class WaveChart extends BaseChart {
    constructor() {
        super();
        // 图表渲染容器
        this.dom = null;
        // 图表配置项
        this.option = null;
        // 图表所需数据
        this.data = null;
        // 自定义dom容器
        this.domContainer = null;
        // 自定义innerdom容器
        this.innerContainer = null;
        // radar容器
        this.rContainer = null;
        // loading状态容器
        this.loadingContainer = null;
        // 位置
        this.center = null;
        // 大小
        this.radius = null;
        // 阈值线的数量
        this.splitNumber = null;
        // 刻度值的最大值
        this.radarMax = null;
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
        // 位置定位
        this.setPosition();
        // 初始化Radar
        this.data && this.setRadar();
        this.setResizeObserver();
        this.renderCallBack && this.renderCallBack(this);
    }

    // 渲染dom
    initDom() {
        initContainer(this.dom);
        this.domContainer = this.dom.getElementsByClassName('wave_dom_container')[0];
        this.innerContainer = this.dom.getElementsByClassName('wave_inner_container')[0];
        this.rContainer = this.dom.getElementsByClassName('wave_radar_container')[0];
        this.loadingContainer = this.dom.getElementsByClassName('wave_loading_container')[0];
        this.loadingDom = this.dom.getElementsByClassName('loading_dom')[0];
        const { centerDom } = this.option;
        this.insertCenterDom(centerDom, this.domContainer);
    }

    // 自定义dom插入
    insertCenterDom(centerDom, dom) {
        if (centerDom) {
            if (!dom) return;
            const initCustomdom = centerDom(dom);
            isString(initCustomdom) && appendHTML(dom, initCustomdom);
            isDOM(initCustomdom) && appendDom(dom, initCustomdom);
        }
    }

    // 设置dom位置 
    setPosition() {
        let basePosition = {
            center: ['50%', '50%'],
            radius: ['35%', '70%']
        };
        const position = this.option.position;
        this.radius = (position && position.radius) || basePosition.radius;
        this.center = (position && position.center) || basePosition.center;
        // 处理只有外半径的情况 
        if (!isArray(this.radius)) {
            let innerRadius = (percentToDecimal(this.radius) / 2 * 100).toString() + '%';
            this.radius = [innerRadius, this.radius];
        }
        const newPosition = this.center.map(item => {
            if (item.indexOf('px') === -1 && item.indexOf('%') === -1) {
                item = `${item}px`;
            }
            return item;
        });
        this.setPointAndLineStyle()
        const left = newPosition[0];
        const top = newPosition[1];
        this.domContainer.style.left = left;
        this.domContainer.style.top = top;
        this.loadingContainer.style.left = left;
        this.loadingContainer.style.top = top;
        this.innerContainer.style.left = `${this.clientWidth * parseInt(left) / 100}px`;
        this.innerContainer.style.top = `${this.clientHeight * parseInt(top) / 100}px`;
    }

    // 设置雷达图点和线的样式随着尺寸自适应
    setPointAndLineStyle() {
        this.clientWidth = this.rContainer.clientWidth;
        this.clientHeight = this.rContainer.clientHeight;
        this.innerRadiusDecimal = percentToDecimal(this.radius[0]);
        this.outerRadiusDecimal = percentToDecimal(this.radius[1]);
        let trueWidth = Math.min(this.clientWidth, this.clientHeight) * this.outerRadiusDecimal;
        if (trueWidth > 280) {
            this.symbolSize = LARGE_SYMBOL_SIZE;
            this.borderitemStyleWidth = LARGE_BORDER_WIDTH;
            this.lineStyleWidth = LARGE_LINE_WIDTH;
        } else {
            this.symbolSize = SMALL_SYMBOL_SIZE;
            this.borderitemStyleWidth = SMALL_BORDER_WIDTH;
            this.lineStyleWidth = SMALL_LINE_WIDTH;
        }
    }

    // 初始化radar
    setRadar() {
        const { type = 'health', theme = 'light' } = this.option;
        const colorBase = Theme.color.base;
        this.splitNumber = 3;
        this.radarMax = this.option.radarMax;
        this.radarMark = this.option.radarMark;
        // 创建图表实例
        const chartIns = new IntegrateChart();
        chartIns.init(this.rContainer);
        this.setAreaColor(type, this.splitNumber)
        const chartOption = {
            isWaveRadar: null,
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
                            color: colorBase.subfont,
                            align: 'center',
                            fontSize: 12,
                            lineHeight: 12
                        },
                    },
                },
                axisLabel: {
                    color: colorBase.subfont,
                    showMinLabel: false
                },
                axisLine: {
                    lineStyle: {
                        color: colorBase.subaxis
                    },
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        type: 'solid',
                        color: colorBase.subaxis
                    },
                },
                splitArea: {
                    show: true,
                    areaStyle:
                    {
                        color: this.colorArr
                    }
                }
            },
            series: [{
                name: 'data',
                symbol: '',
                symbolSize: this.symbolSize,
                itemStyle: {
                    borderWidth: this.borderitemStyleWidth
                },
                lineStyle: {
                    width: this.lineStyleWidth
                },

            }]
        };
        // 设置雷达图覆盖颜色
        if (type == 'health') {
            chartOption.color = ['#5CB300'];
        } else if (type == 'warning') {
            chartOption.color = ['#FFB700'];
        } else if (type == 'risk') {
            chartOption.color = ['#F23030'];
        }
        // 雷达图数据为空时，显示分割线
        if (isArray(this.data)) {
            this.data.forEach(item => {
                chartOption.data.label[item] = 0;
            });
        } else {
            chartOption.data = this.data;
        }
        chartOption.isWaveRadar = (theme.toLowerCase().indexOf('cloud-light') !== -1);
        theme && (chartOption.theme = this.option.theme);
        this.radarMark && (chartOption.radarMark = this.radarMark);
        this.radarMax && (chartOption.radarMax = this.radarMax);
        chartOption.position.center = this.center;
        chartOption.position.radius = this.radius;
        chartOption.radar.splitNumber = this.splitNumber;
        // 是否显示背景
        this.showWave = this.option.showWave !== undefined ? this.option.showWave : true;
        if (!this.showWave) {
            chartOption.radar.splitArea.show = false;
            this.innerContainer.style.backgroundColor = '#fff';
            chartOption.radar.splitLine.show = true;
            chartOption.series[0].symbol = 'none';
            chartOption.series[0].lineStyle.width = 0;
            chartOption.series[0]['areaStyle'] = {
                opacity: 0
            };
            chartOption.series[0]['emphasis'] = {
                areaStyle: {
                    opacity: 0
                }
            };
            this.innerContainer.style.display = 'none';
            chartOption['tooltip'] = { show: false };
        }
        chartIns.setSimpleOption('RadarChart', chartOption);
        // 开始渲染
        chartIns.render();
    }

    // 根据分割段和健康类型设置分割段颜色
    setAreaColor(type, splitNumber) {
        if (type == 'health') {
            this.rgba = HEALTH_RGBA;
        } else if (type == 'warning') {
            this.rgba = WARNING_RGBA;
        } else if (type == 'risk') {
            this.rgba = RISK_RGBA;
        }
        let arr = [];
        const base = type == 'risk' ? 0.08 : 0.1
        for (let i = 1; i <= splitNumber + 1; i++) {
            let opacity = base * i;
            let rgba = 'rgba(' + this.rgba + opacity + ')';
            arr.push(rgba);
        }
        this.backgroundColor = arr.reverse().shift()
        this.colorArr = arr;
    }

    resizeDom() {
        this.setPointAndLineStyle()
        const loadingSvg = this.dom.getElementsByClassName('wave_loading_svg')[0];
        const scaleWidth = `${Math.min(this.clientWidth, this.clientHeight) * this.innerRadiusDecimal * (1 - 1 / this.splitNumber)}px`;
        const innerWidth = `${Math.min(this.clientWidth, this.clientHeight) * this.innerRadiusDecimal + 1}px`
        this.domContainer.style.width = scaleWidth;
        this.domContainer.style.height = scaleWidth;
        this.innerContainer.style.width = innerWidth;
        this.innerContainer.style.height = innerWidth;
        this.innerContainer.style.backgroundColor = this.backgroundColor;
        this.loadingDom.style.width = scaleWidth;
        this.loadingDom.style.height = scaleWidth;
        loadingSvg.style.width = scaleWidth;
        loadingSvg.style.height = scaleWidth;
    }

    // 图表渲染完成时回调
    onRenderReady(callback) {
        this.renderCallBack = callback;
    }

    // 监听容器变化
    setResizeObserver() {
        this.resizeObserver = new ResizeObserver(entries => {
            this.setPosition();
            this.resizeDom();
            this.setRadar();
        });
        this.resizeObserver.observe(this.dom);
    }

    // 图表刷新，刷新配置项
    refresh(option) {
        if (this.innerContainer) {
            this.innerContainer.style.display = 'block';
        }
        this.domContainer.innerHTML = '';
        this.innerContainer.innerHTML = '';
        this.option = option;
        this.data = option.data;
        this.centerDom = option.centerDom;
        this.insertCenterDom(this.centerDom, this.domContainer);
        this.setPosition();
        this.data && this.setRadar();
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
            this.domContainer.innerHTML = '';
            this.loadingDom.innerHTML = '';
            option = Object.assign({ theme: 'light' }, option);
            const text = option.text || '加载中...';
            const textSize = option.textSize || 24;
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
