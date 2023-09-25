import { createEl, appendEL, className, appendNode, setStyle } from './util';
import { setChartPadding } from './handleOptipn';
import { renderHeader } from './handleHeader';
import { renderBody } from './handleBody';
import './index.less';

export default class GanttChart {
  // 图表的父容器
  container;
  // 配置项
  option;
  // 初始化
  init(container) {
    this.container = container;
    this.beforeRender();
  }
  // 设置图表的配置项
  beforeRender() {
    // 刷新图表的时候清空内部的节点
    if (this.container) {
      appendNode(this.container, '');
    }
  }
  render() {
    // 图表包装层
    const wrapper = createEl('div');
    className(wrapper, 'ev_GanttChart_wrapper');
    this.wrapper = wrapper;
    // 图表最外层
    const ganttContainer = createEl('div');
    className(ganttContainer, 'ev_GanttChart_container');
    const _padding = setChartPadding(this.option.chartPadding);
    const padding = `${_padding[0]}px ${_padding[1]}px ${_padding[2]}px ${_padding[3]}px`;
    setStyle(ganttContainer, 'padding', padding);
    appendEL(ganttContainer, wrapper);
    appendEL(this.container, ganttContainer);
    // 图表内容区的像素宽度
    this.chartWidth = wrapper.offsetWidth - 108;
    // 图表内容区的像素高度
    this.chartHeight = wrapper.offsetHeight - 50;
    renderHeader(this.wrapper, this.option);
    renderBody(wrapper, this.option, this.chartWidth, this.chartHeight);
  }

  setOption(option) {
    this.option = option;
    if (this.container) {
      appendNode(this.container, '');
    }
    this.render();
  }
}
