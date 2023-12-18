import { setAttribute, setStyle, imageOnload, insertDom } from './util.js';
import NodeManager from './NodeManager.js';
import LineManager from './LineManager.js';
import ExtraManager from './ExtraManager.js';
import './index.less';

export default class SnowFlakeChart {
  nodeWrapper;  // 返回的节点容器
  extraWrapper; // 返回的extra容器
  constructor(container, option) {
    this.data = option.data;
    this.container = container;
    this.option = option;
    this.imgList = [
      { src: './image/charts/SnowFlakeChart/5gRight.png', name: 'image5R' },
      { src: './image/charts/SnowFlakeChart/5gLeft.png', name: 'image5L' },
      { src: './image/charts/SnowFlakeChart/2.4gRight.png', name: 'image2R' },
      { src: './image/charts/SnowFlakeChart/2.4gLeft.png', name: 'image2L' },
      { src: './image/charts/SnowFlakeChart/up.svg', name: 'imageUp' },
      { src: './image/charts/SnowFlakeChart/down.svg', name: 'imageDown' },
    ];
    this.imageList = {}; // 所有图片的实例对象集合
    this.nodes = [];
    this.initImage();
    this.init(option.data, container);
  }

  // 创建canvas用到图片的实例对象
  initImage() {
    this.imgList.forEach((item) => {
      const img = new Image();
      img.src = item.src;
      this.imageList[item.name] = img;
    });
  }

  init(data, container) {
    // 雪花图外层容器
    const wrapper = insertDom(container, { class: 'sc-container' });
    // 创建中心节点
    if (data && data.length > 0) {
      data.forEach(dataItem => {
        this.initCenterNode(dataItem, wrapper);
      });
    }
  }

  // 创建中心节点
  initCenterNode(data, wrapper) {
    const centerNode = new NodeManager(wrapper, data, this.option);
    centerNode.init(); 
    
    this.nodeWrapper = centerNode.returnWrapper();

    this.extraWrapper = document.createElement('div');
    this.initContent(data);
    if (data.children && data.children.length > 0) {
      // 外层节点分组
      const childNodeGroup = insertDom(wrapper, { class: 'sc-childNode-container' });
      // canvas连线分组
      const lineGroup = insertDom(wrapper, { class: 'sc-line-container' });
      // 信道dom分组
      const extraGroup = insertDom(wrapper, { class: 'sc-extra-container' });
      // 全部图片onload完毕执行回调
      imageOnload(this.imageList, () => {
        this.initOther(data, childNodeGroup, centerNode, lineGroup, extraGroup);
      });
    }
    this.nodes.push(centerNode);
  }

  initOther(data, childNodeGroup, centerNode, lineGroup, extraGroup) {
    data.children.forEach((childData, index) => {
      let deg = (360 / data.children.length) * index;
      if (childData.children && childData.children.length > 0) {
        // 多级嵌套的情况
      } else {
        // 创建外层节点
        this.initChildNode(childData, centerNode, deg, childNodeGroup);
        // 创建canvas连线
        this.initLine(childData, deg, lineGroup);
        // 创建信道节点
        this.initExtra(childData, deg, extraGroup);
        // 插入用户自定义内容
        this.initContent(childData);
      }
    });
  }

  // 创建外层子节点
  initChildNode(childData, centerNode, deg, childNodeGroup) {
    this.childNode = new NodeManager(childNodeGroup, childData, this.option, deg);
    this.childNode.init(false);
    this.nodeWrapper = this.childNode.returnWrapper();
    centerNode.addChildren(this.childNode);
  }

  // 创建canvas连线
  initLine(childData, deg, lineGroup) {
    new LineManager(lineGroup, childData, this.option, deg, this.imageList);
  }

  // 创建信道节点
  initExtra(childData, deg, extraGroup) {
    this.extraNode = new ExtraManager(extraGroup, childData, this.option, deg,);
    this.extraWrapper = this.extraNode.returnWrapper();
  }

  // 插入用户自定义内容
  initContent(data) {
    const renderFun = this.data.render || this.option.render;
    if (renderFun) {
      renderFun(this.nodeWrapper, this.extraWrapper, data);
      // 子节点与extra节点回正
      this.childNode && this.childNode.setAngle();
      this.extraNode && this.extraNode.setAngle();
    }
  }
}