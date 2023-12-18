import { setAttribute, setStyle, pxToNumber, insertDom, getStyle } from './util.js';

export default class ExtraManager {
  customWrapper;
  constructor(container, data, option, deg) {
    this.container = container;
    this.data = data;
    this.option = option;
    this.deg = deg;
    this.init();
  }

  init() {
    this.dom = insertDom(this.container, { class: 'sc-extra-item' });
    this.customWrapper = this.dom;
    // 插入反向旋转dom
    this.initRotate();
  }

  initRotate() {
    this.customWrapper = insertDom(this.dom);
  }

  returnWrapper() {
    return this.customWrapper;
  }

  setAngle() {
    const containerWidth = getStyle(this.container, 'width'); // 信道分组容器的宽度
    const extraItemWidth = getStyle(this.customWrapper, 'width'); // 信道dom自身的宽度
    const distance = 88; // 信道dom与node节点的间距
    const horOrigin = -1 * (pxToNumber(containerWidth) * (distance / 100 - 0.5) - pxToNumber(extraItemWidth) / 2);
    setStyle(this.dom, {
      left: `${distance}%`,
      transformOrigin: `${horOrigin}px center`,
      transform: `translate(-50%,-50%) rotate(${this.deg}deg)`,
    });
    setStyle(this.customWrapper, {
      transform: `rotate(${360 - this.deg}deg)`,
    });
  }
}