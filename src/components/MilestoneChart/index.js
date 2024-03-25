import BaseChart from '../BaseChart';
import Node from './Node';
import { initContainer } from './insertDom';
import Theme from '../../feature/token';

export default class MilestoneChart extends BaseChart {
  // 图表渲染容器
  dom;
  // 图表所需数据
  data;
  // 生成节点和计算位置
  Node;

  constructor() {
    super();
    // 图表渲染容器
    this.dom = null;
    // 图表配置项
    this.option = null;
    // 图表容器的宽高变化监听器
    this.resizeObserver = null;
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
    this.createDom();
    this.setResizeObserver();
  }

  // 图表渲染完成时回调
  onRenderReady(callback) {
    this.renderCallBack = callback;
  }

  createDom() {
    this.dom.innerHTML = '';
    initContainer(this.dom, this.option);
    this.data = this.option.data;
    const container = this.dom.getElementsByClassName('mc-container')[0];
    this.Node = new Node(this.data, this.option, container);
    this.Node.create(this.data, this.option, Theme);
    container.style.setProperty('--operationButtonBgColor', Theme.config.colorBoard.blue.colorBlue50);
    container.style.setProperty('--tooltipBgColor', Theme.config.tooltipBg);
    container.style.setProperty('--tooltipBoxShadow', `0 ${Theme.config.tooltipShadowOffsetY}px ${Theme.config.tooltipShadowBlur}px 0 ${Theme.config.tooltipShadowColor}`);
    container.style.setProperty('--currentTextColor', Theme.config.titleTextColor);
    container.style.setProperty('--newPitch', this.option.padding || '0, 20px');
    container.style.setProperty('--maxWidth', this.option.itemStyle.maxWidth+'px' || '160px');
    container.style.setProperty('--maxHeight', this.option.itemStyle.maxHeight+'px' || '120px');
    this.renderCallBack && this.renderCallBack(this);
  }

  // 图表刷新，刷新配置项
  refresh(option) {
    this.option = option;
    this.createDom();
  }

  // 图表刷新，仅刷新数据
  refreshData() {
    this.createDom();
  }

  // 刷新图表自适应宽度
  setResize() {
    this.createDom();
  }

  // 监听容器变化
  setResizeObserver() {
    this.resizeObserver = new ResizeObserver(entries => {
      this.setResize();
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
