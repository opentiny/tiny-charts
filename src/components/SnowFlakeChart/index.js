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
import { insertDom, onImageLoad, setDefault, arrFlat, isDataDisabled, compareRefresh, setAttribute, getDistance, pxToNumber, getStyle, setStyle, getAreaScope, getWaistLength } from './util.js';
import BranchManager from './BranchManager';
import BaseChart from '../BaseChart';
import defaultOption from './defaultOption.js';
import { tagPosition } from './CommonConstant.js';
import image5R from './assets/image5R.svg';
import image5L from './assets/image5L.svg';
import image2R from './assets/image2R.svg';
import image2L from './assets/image2L.svg';
import imageUp from './assets/up.svg';
import imageDown from './assets/down.svg';
import wirelessR from './assets/wirelessR.svg';
import wirelessL from './assets/wirelessL.svg';
import { CHART_TYPE } from '../../util/constants';

// 1、在全网进行缩放会影响家庭的canvas连线和定位 ok
// 2、悬浮提示框的定位问题   ok
// 3、branchManager代码整理
// 下钻前得到缩放不回印象下钻后的，下钻后开启自适应。

// 最顶层：用来管理所有branch和下转功能
export default class SnowFlakeChart extends BaseChart {

  static name = CHART_TYPE.SNOWFLAKE;

  constructor() {
    super();
    this.dom;
    this.drag;
    this.option;
    this.data;
    this.branchs = []; // branch的集合
    this.renderCallBack = null; // 图表渲染完毕的回调
    this.firstRecordStatus = true; // 只需要在首次获取到0.5-0.75 缩放值的时候，记录下主从网关的距离、宽高等。 不需要每次都记录，会导致0.75-0.5过渡也记录，再切换到1的时候，视图异常。
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
    // 监听drag：每次达到预设的缩放界限值时，触发视图更新
    window.addEventListener('dragScaleChange', this.dragScaleChange.bind(this));
  }

  // 创建canvas用到图片的实例对象
  initImage(assets = {}) {
    this.imageList = {
      'image5R': { src: assets.image5R || image5R },
      'image5L': { src: assets.image5L || image5L },
      'image2R': { src: assets.image2R || image2R },
      'image2L': { src: assets.image2L || image2L },
      'imageUp': { src: assets.imageUp || imageUp },
      'imageDown': { src: assets.imageDown || imageDown },
      'wirelessR': { src: assets.wirelessR || wirelessR },
      'wirelessL': { src: assets.wirelessL || wirelessL }
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
    if (this.option.theme.indexOf('dark') === -1) {
      this.container.classList.add('snowLight');
    }
    if (this.data && this.data.length > 0) {
      this.data.forEach((dataItem) => {
        this.branchs.push(new BranchManager(dataItem, this.container, this));
      });
      // 判断数据的disabled，给外层容器挂上类名,设置容器外环的样式
      isDataDisabled(arrFlat(this.data), this.container, this.option);
    }
    if (!this.option.overAll) {
      this.setPositionLeft();
      this.setTransformOrigin();
      this.setTagPosition();
    }
    // 首次进入家庭视口，开启自适应缩放功能后，寻找合适的drag缩放值
    this.findFitScale();
    setTimeout(() => {
      this.renderCallBack && this.renderCallBack(this);
    }, 0);
  }

  // 考虑多个多终端的容器，相邻不得重叠。需要调整其定位值
  // 这样的方法有bug会导致两个很小的从网关之间插了个很大的从网关。从网关到主网关的连线会特别长
  setPositionLeft() {
    const centerDomArr = [...this.branchs[0].centerDomArr];
    centerDomArr.splice(0, 1);
    centerDomArr.forEach((item, index) => {
      const { equalDeg, data: { level } } = item;
      const itemBranch = item.container.parentNode.parentNode;
      const itemBranchWidth = pxToNumber(getStyle(itemBranch, 'width'));
      // newLeftVal和oldLeftVal得到的都是从主网关最右侧到从网关圆心的距离，定位直接从100%开始累计
      let newLeftVal = (itemBranchWidth / 2 + 40) / Math.sin(equalDeg / 2 * Math.PI / 180)
        - pxToNumber(getStyle(itemBranch.parentNode, 'width')) / 2; // 给相邻容器设置一个40的间隔
      let oldLeftVal = pxToNumber(getStyle(itemBranch, 'left'))
        - pxToNumber(getStyle(itemBranch.parentNode, 'width'));
      if (newLeftVal > oldLeftVal) {
        // 进入到这个判断内说明是个多终端的从网关，要计算最合适的newLeftVal
        if (centerDomArr.length >= 3) { // 获取其相邻branch的尺寸
          let sameLevelArr = centerDomArr.filter((node) => node.data.level === level);
          let getIndex = sameLevelArr.findIndex(same => same.data.mac === item.data.mac);
          const lastBranch = sameLevelArr[getIndex - 1 === -1 ? sameLevelArr.length - 1 : getIndex - 1].container.parentNode.parentNode;
          const nextBranch = sameLevelArr[getIndex + 1 === sameLevelArr.length ? 0 : getIndex + 1].container.parentNode.parentNode;
          const lastBranchWidth = pxToNumber(getStyle(lastBranch, 'width'));
          const nextBranchWidth = pxToNumber(getStyle(nextBranch, 'width'));
          if (itemBranchWidth > lastBranchWidth && itemBranchWidth > nextBranchWidth) { // 至少满足当前分支要大于兄弟分支的尺寸(有bug，待解决)
            const minEqual = itemBranchWidth / (Math.max(lastBranchWidth, nextBranchWidth) + itemBranchWidth + 40) * equalDeg;
            newLeftVal = (itemBranchWidth / 2 + 40) / Math.sin(minEqual * Math.PI / 180)
              - pxToNumber(getStyle(itemBranch.parentNode, 'width')) / 2;
          }
        }
        itemBranch.style.left = `calc(100% + ${newLeftVal}px)`;
      }
    });
  }

  // 给所有的外环容器设置旋转中心（因为要等全部的外环大小确定下来，才能统一计算）
  setTransformOrigin() {
    const centerDomArr = this.branchs[0].centerDomArr;
    centerDomArr.forEach((item, index) => {
      if (index === 0) return;
      let branchContainer = item.container;
      while (!branchContainer.classList.contains('sfc-branch')) {
        branchContainer = branchContainer.parentNode;
      }
      const centerNode = branchContainer.querySelector('.sfc-node-center');
      const parentCenterNode = branchContainer.parentNode.querySelector('.sfc-node-center');
      const scale = getStyle(this.drag.dom, 'transform').replace('matrix(', '').split(',')[0];
      const distance = getDistance(centerNode, parentCenterNode) / scale;// getBoundingClientRect获取的x,y要去掉scale的影响。未避免用户修改，不直接从drag拿
      branchContainer.style.transformOrigin = `calc(50% - ${distance}px) center`;
      // 更新主从网关间的canvas连线
      const centerLine = this.branchs[0].centerLineArr.find(line => line.data.mac === branchContainer.getAttribute('data-mac'));
      centerLine.distance = distance - pxToNumber(getStyle(branchContainer.parentNode, 'width')) / 2;
      centerLine.destroyCanvas();
      centerLine.createCanvas();
      centerLine.draw();
    });
  }

  setTagPosition() {
    const centerTagArr = this.branchs[0].centerTagArr;
    centerTagArr.forEach((tag) => {
      tag.setAngle();
    });
  }

  // 切换下钻状态（需要重刷dom结构）,下钻后可以设置居中的dom。默认中心dom(允许传入mac，自定义居中的dom)下钻后居中
  switchView(drill = true, mac, callback) {
    if (!drill) this.drag.reset();// 取消下钻，切换为全网，恢复drag初始值
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
    window.removeEventListener('dragScaleChange', this.dragScaleChange.bind(this));
  }

  // 移除所有的节点高亮状态
  removeNodeActive() {
    this.branchs.forEach((item) => {
      item.centerDomArr.forEach((center) => {
        if (center.dom.classList.contains('nodeActive')) {
          center.dom.classList.remove('nodeActive');
        }
      });
      item.leafsArr.forEach((leaf) => {
        if (leaf.node.dom.classList.contains('nodeActive')) {
          leaf.node.dom.classList.remove('nodeActive');
          // 叶子节点高亮前后内部的dom变更了，需要重新调用一下它的渲染内容方法
          leaf.node.insertContent();
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
    this.firstRecordStatus = true;
    this.setSimpleOption(null, option, { drag: this.drag });
    this.renderBranch();
    callback && callback();
  }

  // 刷新data，会重构dom
  refreshData(data, callback) {
    this.option.data = data;
    this.refresh(this.option, callback);
  }

  findFitScale(callback) {
    if (!this.option.scaleAdaptive || this.option.overAll) return;
    let dragScale = this.drag.scale;
    let branchArr = Array.from(this.dom.querySelectorAll('.sfc-branch'));
    let leafArr = Array.from(this.dom.querySelectorAll('.sfc-branch .sfc-node-item'));
    let centerNodeArr = Array.from(this.dom.querySelectorAll('.sfc-branch .sfc-node-center'));
    let { width: snowWidth, height: snowHeight } = getAreaScope(leafArr.length ? leafArr : branchArr);
    const viewContainer = this.drag.container;
    const { width: viewWidth, height: viewHeight, x, y } = viewContainer.getBoundingClientRect();
    let fitScale;
    // 判定scale=0.75时，能否显示全雪花图
    if (viewWidth >= (snowWidth * 0.75 / dragScale) && viewHeight >= (snowHeight * 0.75 / dragScale)) {
      // 0.75以上展示的下，不改变主从网关的距离,只需调整到合适的scale值
      fitScale = Math.min(viewWidth / (snowWidth / dragScale), viewHeight / (snowHeight / dragScale));
      fitScale = Math.min(this.drag.scaleLimit.max, Math.floor(fitScale * 10) / 10);
      fitScale = Math.max(0.75, Math.floor(fitScale * 10) / 10);
    } else {
      // 0.75以上展示不下，需要拉近主从网关的距离,同时需调整到合适的scale值
      this.lowScaleView();
      let { width: snowWidth, height: snowHeight } = getAreaScope(centerNodeArr);
      fitScale = Math.min(viewWidth / (snowWidth / dragScale), viewHeight / (snowHeight / dragScale));
      fitScale = Math.min(0.75, Math.floor(fitScale * 10) / 10);
      fitScale = Math.max(this.drag.scaleLimit.min, Math.floor(fitScale * 10) / 10);
    }
    this.drag.scale = fitScale;
    this.drag.scaleDom(x + viewWidth / 2, y + viewHeight / 2, fitScale - dragScale, false);
    const dragCurrentVal = this.drag.container.querySelector('.drag-currentVal');
    dragCurrentVal.innerHTML = (fitScale * 100).toFixed(0) + '%';

    this.refreshNode(this.data);
    this.refreshLine(this.data);
    this.refreshTag(this.data);

    callback && callback();
  }

  dragScaleChange(e) {
    if (this.option.overAll || !this.option.scaleAdaptive) return;
    const scale = e.detail.scaleVal;

    // 0.75以下隐藏主从网关的外环边框，拉近主从网关的间距
    if (scale >= 0.5 && scale <= 0.75) {
      this.lowScaleView();
      // 如果叶子节点居中的，但是缩小了，叶子节点都隐藏了，为了视觉效果，将整个图表居中
      setTimeout(() => { this.drag.moveTargetToCenter(this.container); }, this.drag.throldHold);
    } else {
      this.highScaleView();
    }

    this.refreshNode(this.data);
    this.refreshLine(this.data);
    this.refreshTag(this.data);
  };

  // 0.5-0.75倍的显示
  lowScaleView() {
    // 拉近主从网关的间距
    const branchArr = Array.from(this.dom.querySelectorAll('.sfc-branch'));
    if (this.firstRecordStatus) {
      setAttribute(branchArr[0], {
        'data-width': branchArr[0].style.width,
        'data-height': branchArr[0].style.height
      });
    }
    branchArr[0].style.width = '150px';
    branchArr[0].style.height = '150px';
    branchArr.shift();
    branchArr.forEach((branch, index) => {
      let equalDeg = this.branchs[0].centerDomArr[index + 1].equalDeg;
      let centerDomWidth = pxToNumber(getStyle(branch.querySelector('.sfc-node-center'), 'width'));
      let distance = Math.max(getWaistLength(equalDeg, centerDomWidth + 20), this.option.distance.minDistanceDrill); // 避免ap重叠，需要动态计算distance
      const parentBranchWidth = pxToNumber(getStyle(branch.parentNode, 'width'));
      const centerLine = this.branchs[0].centerLineArr.find(item => item.data.mac === branch.getAttribute('data-mac'));
      if (this.firstRecordStatus) {
        setAttribute(branch, { // 需要将scle为1的left和transformOrigin记录下来；也需要将其width和height切换掉。不然中心节点无法点击，会被容器盖住
          'data-left': branch.style.left,
          'data-transformOrigin': branch.style.transformOrigin,
          'data-distance': centerLine.distance,
          'data-width': branch.style.width,
          'data-height': branch.style.height
        });
      }
      branch.style.transformOrigin = `calc(50% - ${distance}px) center`;
      branch.style.left = `calc(100% + ${distance}px - ${parentBranchWidth / 2}px)`;
      branch.style.width = '150px';
      branch.style.height = '150px';
      // 更新主从网关间的canvas连线     
      centerLine.distance = distance - parentBranchWidth / 2;
      centerLine.destroyCanvas();
      centerLine.createCanvas();
      centerLine.draw();
    });
    const coreContainerArr = this.dom.querySelectorAll('.sfc-core');
    coreContainerArr.forEach(item => {
      setStyle(item, { backgroundSize: 0 });
    });
    this.firstRecordStatus = false;
  }

  // 0.75-1.5倍的显示
  highScaleView() {
    if (this.firstRecordStatus) this.lowScaleView(); // 如果设备比较少，初始化scale的时候，没走lowScaleView。那么首次放大时需要这边手动调一次，拿到自定义数据
    const branchArr = Array.from(this.dom.querySelectorAll('.sfc-branch'));
    branchArr[0].style.width = branchArr[0].getAttribute('data-width');
    branchArr[0].style.height = branchArr[0].getAttribute('data-height');
    branchArr.shift();
    branchArr.forEach(item => {
      item.style.left = item.getAttribute('data-left');
      item.style.transformOrigin = item.getAttribute('data-transformOrigin');
      item.style.width = item.getAttribute('data-width');
      item.style.height = item.getAttribute('data-height');
      // 更新主从网关间的canvas连线
      const centerLine = this.branchs[0].centerLineArr.find(line => line.data.mac === item.getAttribute('data-mac'));
      centerLine.distance = item.getAttribute('data-distance');
      centerLine.destroyCanvas();
      centerLine.createCanvas();
      centerLine.draw();
    });
    const coreContainerArr = this.dom.querySelectorAll('.sfc-core');
    coreContainerArr.forEach(item => {
      setStyle(item, { backgroundSize: '100% 100%' });
    });
  }
}