import { forEach } from 'lodash';
import { setStyle, pxToNumber, insertDom, getStyle } from './util.js';
import LineManager from './LineManager.js';
export default class NodeManager {
  dom;
  children = null;
  customWrapper; // 如果是非中心点，需要多插入一层dom，用于回正内容
  constructor(container, data, option, deg) {
    this.container = container;
    this.data = data;
    this.option = option;
    this.deg = deg;
  }

  init(isCenter = true) {
    // 创建每一个节点容器
    this.createDom(isCenter);
    // 插入反向旋转dom
    !isCenter && this.initRotate();
    // 绑定事件
    this.addEvent();
  }

  createDom(isCenter) {
    this.dom = insertDom(this.container, { class: isCenter ? 'sc-centerNode-container' : 'sc-childNode-item' });
    this.customWrapper = this.dom;
  }

  initRotate() {
    this.customWrapper = insertDom(this.dom);
  }

  returnWrapper() {
    return this.customWrapper;
  }

  addEvent() {
    this.dom.addEventListener('click', this.clickNode);
  }

  clickNode = (e) => {
    if (this.data.click) {
      this.data.click(e, this.data);
    }
  };

  setAngle() {
    // 获取整个雪花图容器与每个节点的宽度，计算旋转中心
    const containerWidth = getStyle(this.container, 'width'); // 节点所在分组容器的宽度
    const nodeItemWidth = getStyle(this.customWrapper, 'width');  // 节点自身的宽度
    setStyle(this.dom, {
      transform: ` translate(-50%,-50%) rotate(${this.deg}deg)`,
      transformOrigin: `${-1 * (pxToNumber(containerWidth) / 2 - pxToNumber(nodeItemWidth) / 2)}px center`,
    });
    setStyle(this.customWrapper, {
      transform: `rotate(${360 - this.deg}deg)`,
    });
  }

  addChildren(child) {
    if (!this.children) {
      this.children = [];
    }
    this.children.push(child);
  }
}