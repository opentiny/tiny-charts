import { insertDom, onImageLoad, setDefault, arrFlat, isDataDisabled, compareRefresh, setAttribute } from './util.js';
import BranchManager from './BranchManager';
import BaseChart from '../BaseChart';
import defaultOption from './defaultOption.js';
import { tagPosition } from './CommonConstant.js';

// 最顶层：用来管理所有branch和下转功能
export default class SnowFlakeChart extends BaseChart {
  constructor() {
    super();
    this.dom;
    this.drag;
    this.option;
    this.data;
    this.branchs = []; // branch的集合
    this.renderCallBack = null; // 图表渲染完毕的回调
  }

  init(dom) {
    this.dom = dom;
    this.dom.innerHTML = '';
    this.container = insertDom(this.dom);
  }

  setSimpleOption(chartName, option, { drag }) {
    setDefault(option, defaultOption);
    this.data = option.data;
    this.option = option;
    this.drag = drag;
    setAttribute(this.container, { class: `sfc-container ${option.overAll ? 'overAll' : ''}` });
  }

  setResize() {

  }

  // 首次render需要等所有内置的图片全部加载完毕
  render(assets, callback) {
    this.initImage(assets);
    onImageLoad(this.imageList, () => {
      this.renderBranch();
      callback && callback();
    });
  }

  // 创建canvas用到图片的实例对象
  initImage(assets = {}) {
    const { image5R, image5L, image2R, image2L, imageUp, imageDown } = assets;
    this.imageList = {
      'image5R': { src: image5R },
      'image5L': { src: image5L },
      'image2R': { src: image2R },
      'image2L': { src: image2L },
      'imageUp': { src: imageUp },
      'imageDown': { src: imageDown },
    };
    for (let item in this.imageList) {
      if (Object.hasOwnProperty.call(this.imageList, item)) {
        const img = new Image();
        img.src = this.imageList[item]['src'];
        this.imageList[item]['image'] = img;
      }
    }
  }

  renderBranch() {
    if (this.option.theme !== 'dark') {
      this.container.classList.add('snowLight');
    }
    if (this.data && this.data.length > 0) {
      this.data.forEach((dataItem) => {
        this.branchs.push(new BranchManager(dataItem, this.container, this));
      });
      // 判断数据的disabled，给外层容器挂上类名,设置容器外环的样式
      isDataDisabled(arrFlat(this.data), this.container, this.option);
    }
    setTimeout(() => {
      this.renderCallBack && this.renderCallBack(this);
    }, 0);
  }

  // 切换下钻状态（需要重刷dom结构）,下钻后可以设置居中的dom。默认中心dom(允许传入mac，自定义居中的dom)下钻后居中
  switchView(drill = true, mac, callback) {
    this.branchs.forEach((item) => {
      item.centerDomArr[0].drillDown(drill, true, false, mac);
    });
    callback && callback();
  }

  // 已经是下钻状态下且状态不变（不用重刷dom结构），设置切换居中点
  switchCenterByDrill(mac) {
    this.branchs.forEach((item) => {
      // 先去遍历一遍中心dom，判断是否一致
      item.centerDomArr.forEach((center) => {
        if (center.data.mac === mac) {
          this.drag.moveTargetToCenter(center.dom);
        }
      });
      // 再去遍历一遍叶子dom，判断是否一致
      item.leafsArr.forEach((leaf) => {
        if (leaf.node.data.mac === mac) {
          this.drag.moveTargetToCenter(leaf.node.dom);
        }
      });
    });
  }

  // 图表渲染完毕的回调
  onRenderReady(callback) {
    this.renderCallBack = callback;
  }

  // 销毁图表
  uninstall() {
    this.dom.innerHTML = '';
  }

  // 移除所有的节点高亮状态
  removeNodeActive() {
    this.branchs.forEach((item) => {
      item.centerDomArr.forEach((center) => {
        if ([...center.dom.classList].indexOf('nodeActive') !== -1) {
          center.dom.classList.remove('nodeActive');
        }
      });
      item.leafsArr.forEach((leaf) => {
        if ([...leaf.node.dom.classList].indexOf('nodeActive') !== -1) {
          leaf.node.dom.classList.remove('nodeActive');
          // 叶子节点高亮前后内部的dom变更了，需要重新调用一下它的渲染内容方法
          leaf.node.insertContent();
          // 恢复tag的定位值
          leaf.tag.setAngle(tagPosition);
        }
      });
    });
  }

  // 刷新line，不会重构dom
  refreshLine(data) {
    this.data = data;
    compareRefresh(data, this.branchs, {
      centerArr: 'centerLineArr',
      target: 'line'
    }, this);
  }

  // 刷新tag，不会重构dom
  refreshTag(data) {
    this.data = data;
    compareRefresh(data, this.branchs, {
      centerArr: 'centerTagArr',
      target: 'tag'
    }, this);
  }

  // 刷新node，不会重构dom
  refreshNode(data, callback) {
    this.data = data;
    compareRefresh(data, this.branchs, {
      centerArr: 'centerDomArr',
      target: 'node'
    }, this);
    callback && callback();
  }

  // 刷新option,会重构dom
  refresh(option, callback) {
    this.branchs = [];
    this.container.innerHTML = null;
    this.setSimpleOption(null, option, { drag: this.drag });
    this.renderBranch();
    callback && callback();
  }

  // 刷新data，会重构dom
  refreshData(data, callback) {
    this.option.data = data;
    this.refresh(this.option, callback);
  }
}