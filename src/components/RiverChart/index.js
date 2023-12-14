import baseOption from './baseOption';
import Manager from './Manager';
import { setChartSize, initWrapper } from './util';
import './index.less';
export default class RiverChart {
  // 配置项
  option = {};
  // 整个图表容器
  container = null;
  // 图表的外层wrapper
  wrapper = null;
  // 节点的容器
  nodeContainer = null;
  // svg容器
  svgElement = null;
  // 图表容器大小
  containerSize = {
    width: 0,
    height: 0,
  };
  manager = null;

  // 初始化
  init(container) {
    this.container = container;
    this.beforeRender();
    const _this = this;
    initWrapper(this.container, _this);
    // 算出容器的大小
    const size = container.getBoundingClientRect();
    this.containerSize.width = size.width;
    this.containerSize.height = size.height;
  }

  beforeRender() {
    // 刷新图表的时候清空内部的节点
    if (this.container) this.container.innerHTML = '';
  }

  // 设置图表的配置项
  setOption(option) {
    this.option = Object.assign(baseOption(), option);
    setChartSize(this.svgElement, this.nodeContainer, this.option);
    if (this.svgElement) this.svgElement.innerHTML = '';
    if (this.nodeContainer) this.nodeContainer.innerHTML = '';
    this.render();
  }

  render() {
    const { data, width } = this.option;
    if (!width) {
      this.option.width = this.containerSize.width;
      this.option.height = this.containerSize.height;
    }
    this.manager = new Manager(this.svgElement, this.nodeContainer, this.option, data);
    this.manager.init();
    this.manager.render();
  }

  destory() {
    this.container.innerHTML = '';
    this.manager = null;
  }
}
