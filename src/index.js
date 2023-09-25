import tips from './util/tips';
import megre from './util/megre';
import Register from './register';
import * as echarts from 'echarts';
import Theme from './feature/theme';
import throttle from './util/throttle';
import { isFunction } from './util/type';
import mergeExtend from './util/mergeExtend';
import BaseChart from './components/BaseChart';
import mediaScreen from './feature/mediaScreen';

export default class IntegrateChart extends BaseChart {
  constructor() {
    super();
    // 图表echarts实例
    this.echartsIns = null;
    // 图表icharts实例
    this.ichartsIns = null;
    // 图表echarts配置项
    this.eChartOption = null;
    // 图表icharts配置项
    this.iChartOption = null;
    // 图表所在容器
    this.dom = null;
    // 图表名称
    this.chartName = '';
    // 图表依赖的三方插件
    this.plugins = {};
    // 图表还没有执行render()方法
    this.hasRender = false;
    // 图表渲染完毕的回调
    this.renderCallBack = null;
    // 图表resize节流时间
    this.resizeThrottle = 100;
    // 图表容器的宽高变化监听器
    this.resizeObserver = null;
    // 响应式布局的监听器
    this.mediaScreenObserver = undefined;
  }

  // 注册主题
  static registerTheme(name, config) {
    if (!config) { tips.error('The second parameter config is required'); return; }
    Theme.set(name, config);
  }

  // 设置主题
  static theme(name) {
    Theme.setDefaultTheme(name);
  }

  // 开启响应式布局（类媒体查询效果）
  mediaScreen(dom, screenOption) {
    this.mediaScreenObserver = new mediaScreen(dom, screenOption, (option) => {
      this.setSimpleOption(this.chartName, option, this.plugins, false);
      this.render();
    });
  }

  // 初始化echarts，并同时监听容器和窗口的大小变化
  init(chartDom, initOpts) {
    let defaultInit = {
      'domResize': true,
      'windowResize': true,
      'resizeThrottle': this.resizeThrottle,
    };
    initOpts = megre(defaultInit, initOpts);
    this.dom = chartDom;
    this.echartsIns = echarts.init(chartDom, {}, initOpts);
    // resize节流函数
    this.throttleResize = throttle(initOpts.resizeThrottle, this.setResize.bind(this));
    // 容器大小变化监听
    initOpts.domResize && this.setResizeObserver();
    // 页面大小变化监听
    initOpts.windowResize && window.addEventListener('resize', this.throttleResize);
  }

  setResizeObserver() {
    this.resizeObserver = new ResizeObserver(entries => {
      this.throttleResize();
    });
    this.resizeObserver.observe(this.dom);
  }

  // 图表宽高自适应
  setResize() {
    this.mediaScreenObserver && this.mediaScreenObserver.observe();
    this.echartsIns && this.echartsIns.resize && this.echartsIns.resize({ width: 'auto' });
    this.ichartsIns && this.ichartsIns.resize && this.ichartsIns.resize();
  }

  // 传入简化后的icharts-option
  setSimpleOption(chartName, iChartOption, plugins = {}, isInit = true) {
    if(isInit){
      Theme.setDefaultTheme(iChartOption.theme);
      this.mediaScreenObserver && this.mediaScreenObserver.setInitOption(iChartOption)
    }
    if (isFunction(chartName)) {
      this.redirectSelfChart(chartName, iChartOption);
      return;
    }
    this.plugins = plugins;
    this.chartName = chartName;
    this.iChartOption = iChartOption;
    const ChartClass = this.getChartClass(chartName);
    this.ichartsIns = new ChartClass(iChartOption, this.plugins, this.echartsIns);
    this.eChartOption = this.ichartsIns.getOption();
    mergeExtend(this.iChartOption, this.eChartOption);
  }

  // 直接传入ECharts的原生配置项
  setEchartsOption(option) {
    if (option) {
      this.eChartOption = option;
    }
  }

  // 若自研图表，走自研图表路径，并更改this指向
  redirectSelfChart(selfChart, option) {
    const stateDom = this.dom.getElementsByClassName('huicharts-state-container')[0];
    this.uninstall();
    this.dom.innerHTML = '';
    const instance = new selfChart();
    instance.init(this.dom);
    instance.setSimpleOption(selfChart, option);
    instance.renderCallBack = this.renderCallBack;
    if (stateDom) {
      this.dom.appendChild(stateDom);
    }
    this.__proto__ = instance;
    for (const key in this) {
      if (Object.hasOwnProperty.call(this, key)) {
        delete this[key];
      }
    }
  }

  // 渲染图表
  render(option) {
    // 已经开始渲染
    this.hasRender = true;
    // 第一次渲染
    this.setOption(this.eChartOption, option);
    // 第二次渲染
    this.setOptionAgain(this.eChartOption);
    // 图表渲染完成时回调
    this.renderCallBack && this.renderCallBack(this.echartsIns);
  }

  // 第一次渲染: 调用echarts原生的setOption
  setOption(eChartOption, option) {
    option = megre({ notMerge: true }, option);
    eChartOption && this.echartsIns.setOption(eChartOption, option);
  }

  // 第二次渲染: 有些图表需要根据第一次渲染出来的结果进行二次计算
  setOptionAgain() {
    if (this.ichartsIns && this.ichartsIns.updateOptionAgain) {
      const YAxiMax = this.getYAxisMaxValue(0);
      const YAxiMin = this.getYAxisMinValue(0);
      // 根据网格重新计算option
      this.ichartsIns.updateOptionAgain(YAxiMax, YAxiMin);
      // 再次渲染
      this.setOption(this.eChartOption);
    }
  }

  // 图表刷新，包括刷新配置和数据
  refresh(iChartOption) {
    this.iChartOption = iChartOption;
    this.setSimpleOption(this.chartName, iChartOption, this.plugins);
    this.render();
  }

  // 图表刷新，仅刷新数据
  refreshData(data) {
    this.iChartOption.data = data;
    this.refresh(this.iChartOption);
  }

  // 图表渲染完成时回调
  onRenderReady(callback) {
    this.renderCallBack = callback;
  }

  // 给echarts单独绑定事件
  on() {
    this.echartsIns && this.echartsIns.on(...arguments);
  }

  // 给echarts单独解绑事件
  off() {
    this.echartsIns && this.echartsIns.off(...arguments);
  }

  // 给echarts实例绑定事件
  bindEvents(events) {
    if (events && events.length !== 0) {
      events.forEach(item => {
        if (item.query) {
          this.off(item.eventName, item.handler);
          this.on(item.eventName, item.query, item.handler);
        } else {
          this.off(item.eventName, item.handler);
          this.on(item.eventName, item.handler);
        }
      });
    }
  }

  // 批量给echarts实例解绑事件
  unbindEvents(events) {
    if (events && events.length !== 0) {
      events.forEach(item => {
        if (item.handler) {
          this.off(item.eventName, item.handler);
        } else {
          this.off(item.eventName);
        }
      });
    }
  }

  // 卸载图表时,
  uninstall() {
    // 卸载window resize监听功能
    window.removeEventListener('resize', this.throttleResize);
    // 卸载container容器变化监听
    if (this.resizeObserver) {
      this.resizeObserver.unobserve(this.dom);
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    // 销毁ECharts实例
    if (this.echartsIns && !this.echartsIns.isDisposed()) {
      this.echartsIns.dispose();
    }
    this.echartsIns = null;
  }

  // 获取图表类
  getChartClass(name) {
    return Register.getRegisteredComp(name);
  }

  // 获取到ECharts实例
  getEchartsInstance() {
    return this.echartsIns;
  }

  // 获取到ECharts配置项
  getEchartsOption() {
    return this.eChartOption;
  }

  /**
   * 图表渲染完毕后，获得y刻度的最大值
   * @param {index为yAxis数组下标} index
   * _extent是一个数组，_extent[0]为该轴上最小值，_extent[1]为该轴上最大值
   */
  getYAxisMaxValue(index) {
    return this.echartsIns.getModel().getComponent('yAxis', index).axis.scale._extent[1];
  }

  /**
   * 图表渲染完毕后，获得y轴刻度的最小值
   * @param {index为yAxis数组下标} index
   * _extent是一个数组，_extent[0]为该轴上最小值，_extent[1]为该轴上最大值
   */
  getYAxisMinValue(index) {
    return this.echartsIns.getModel().getComponent('yAxis', index).axis.scale._extent[0];
  }
}
