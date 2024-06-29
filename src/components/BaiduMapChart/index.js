/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
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
import * as echarts from 'echarts';
import 'echarts/extension/bmap/bmap';
import { CHART_TYPE } from '../../util/constants';

// 判断map资源加载的flag
let mapApiLoaded = false;
export default class BaiduMapChart extends BaseChart {

    static name = CHART_TYPE.BAIDU_MAP

    constructor() {
        super();
        // 图表echarts实例
        this.echartsIns = null;
        // 图表渲染容器
        this.dom = null;
        // 图表配置项
        this.option = null;
        // 图表所需数据
        this.data = null;
        // 图表容器的宽高变化监听器
        this.resizeObserver = null;
    }

    // 初始化图表渲染容器
    init(dom) {
        this.uninstall();
        this.dom = dom;
    }

    // 初始化图表渲染配置
    setSimpleOption(chartName, option) {
        this.option = option;
    }

    loadMap({ key, version, url }) {
        return new Promise((resolve) => {
            if (mapApiLoaded) {
                resolve(window.BMap);
                return
            }
            let cbName = 'bmap' + Date.now();
            let script = document.createElement('script');
            let ver = version || '2.0';

            window[cbName] = function () {
                mapApiLoaded = true;
                resolve(window.BMap);
            }
            script.src = [`${url}?${ver}`, `ak=${key}`, `callback=${cbName}`].join('&');
            document.body.appendChild(script);
        })
    }

    // 加载百度api，并渲染图表
    render() {
        let url = this.option.url;
        let ver = this.option.v || '2.0';
        let key = this.option.key;
        this.loadMap({ key, version: ver, url }).then(() => {
            this.renderInit();
        })
    }

    // 渲染图表
    renderInit() {
        this.echartsIns = echarts.init(this.dom);
        // 渲染
        this.setOption(this.option);
        this.setResizeObserver();
        // 图表渲染完成时回调
        this.renderCallBack && this.renderCallBack(this.echartsIns);
    }

    // 第一次渲染: 调用echarts原生的setOption
    setOption(option) {
        this.echartsIns.setOption(option);
    }

    // 图表渲染完成时回调
    onRenderReady(callback) {
        this.renderCallBack = callback;
    }

    // 监听容器变化
    setResizeObserver() {
        this.resizeObserver = new ResizeObserver(entries => {
            this.resizeDom();
        });
        this.resizeObserver.observe(this.dom);
    }

    resizeDom() {
        this.echartsIns && this.echartsIns.resize && this.echartsIns.resize();
    }

    // 图表刷新，包括刷新配置和数据
    refresh(iChartOption) {
        this.iChartOption = iChartOption;
        this.setSimpleOption(this.chartName, iChartOption);
        this.render();
    }

    // 图表刷新，仅刷新数据
    refreshData(data) {
        this.iChartOption.series[0].data = data;
        this.refresh(this.iChartOption);
    }

    // 刷新图表自适应宽度
    setResize() {
        this.resizeDom();
    }

    // 销毁图表
    uninstall() {
        // 卸载window resize监听功能
        window.removeEventListener('resize', this.throttleResize);
        // 卸载container容器变化监听
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
        this.echartsDisposed();
        this.echartsIns = null; 
        // 销毁dom
        this.dom = null;
    }
    
    // 销毁ECharts实例
    echartsDisposed() {
        if (this.echartsIns && !this.echartsIns.isDisposed()) {
            this.echartsIns.dispose();
        }
    }
}