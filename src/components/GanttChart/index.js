import { createEl, appendEL, className, appendNode } from './util';
import TimeLine from './TimeLine';
import './index.less';
export default class GanttChart {
  // 图表的父容器
  container;
  // 配置项
  option;
  // 移动的初始距离
  timeLine;

  // 初始化
  init(container) {
    this.container = container;
  }
  // 设置图表的配置项
  setOption(option) {
    if (this.container) {
      appendNode(this.container, '');
    }

    this.option = option;
    // 图表内容区的像素宽度
    this.chartWidth = this.container.offsetWidth - 108 - 28;
    // 图表内容区的像素高度
    this.chartHeight = this.container.offsetHeight - 56;
    this.render();
  }

  render() {
    const wrapper = createEl('div');
    className(wrapper, 'ev_GanttChart_wrapper');
    appendEL(this.container, wrapper);
    this.timeLine = new TimeLine(wrapper, this.option, this.chartWidth, this.chartHeight);
    this.timeLine.init();
  }
}
