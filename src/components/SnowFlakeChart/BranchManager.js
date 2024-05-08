/**
 * Copyright (c) 2024 - present TinyCharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { insertDom, setStyle, pctToNumber, degPositive } from './util';
import LeafManager from './LeafManager';
import NodeManager from './NodeManager';
import LineManager from './line';
import TagManager from './TagManager';

class BranchManager {
  constructor(data, container, snowInstance, subRootConfig = {}, parentInstance = {}) {
    const { option, imageList, drag } = snowInstance; // 雪花图实例
    const { parentDeg = 0, isSubRoot = false, style = {} } = subRootConfig; // 递归生成次级根节点，携带来的配置
    const { leafsArr = [], centerDomArr = [], centerLineArr = [],
      centerTagArr = [], activeMac = null, leafTrigger = null } = parentInstance; // 父级branchManager实例
    this.data = data;
    this.container = container;
    this.snowInstance = snowInstance;
    this.option = option;
    this.imageList = imageList;
    this.drag = drag;
    this.chartContainer = snowInstance.container; // 画布容器,给Node下钻时，管理画布容器的类名
    this.parentDeg = parentDeg; // 父节点的旋转角度
    this.isSubRoot = isSubRoot; // 是否为次级根节点
    this.leafsArr = leafsArr; // Leaf的集合
    this.centerDomArr = centerDomArr; // 中心dom集合
    this.centerLineArr = centerLineArr; // 中心line集合
    this.centerTagArr = centerTagArr; // 中心tag集合
    this.activeMac = activeMac; // 下钻选中的设备mac
    this.leafTrigger = leafTrigger; // 触发下钻的是否为叶子节点
    this.leafData = []; // 叶子节点数据
    this.branchData = []; // 分支节点数据
    this.mount(data, style);
  }

  mount(data, style) {
    const group = this.grouping(style);
    this.initCenterDom(data, group);
    this.loopData(data, group);
  }

  // dom分组
  grouping(style) {
    // 雪花图容器
    const wrapper = insertDom(this.container, { class: `sfc-branch ${!this.isSubRoot ? 'rootBranch' : ''}` }, { ...style });
    // 用于多级嵌套，反向旋转回正内部dom
    const coreWrapper = insertDom(wrapper, { class: 'sfc-core' },
      { transform: `rotate(${360 - this.parentDeg}deg)` });
    const nodeWrapper = insertDom(coreWrapper, { class: 'sfc-node-container' });
    const lineWrapper = insertDom(coreWrapper, { class: 'sfc-line-container' });
    const tagWrapper = insertDom(coreWrapper, { class: 'sfc-tag-container' });
    return { wrapper, coreWrapper, nodeWrapper, lineWrapper, tagWrapper };
  }

  // 中心dom、中心到子网关的连线和tag。容器创建及处理
  initCenterDom(data, { nodeWrapper }) {
    this.centerDom = new NodeManager(nodeWrapper, data, 0, true, this);
    this.centerDomArr.push(this.centerDom);
  }

  // 循环处理：外层node、line、tag
  loopData(data, group) {
    // 数据拆分为叶子和非叶子两种类型
    data.children?.forEach((dataItem) => {
      if (dataItem.isAP || dataItem.children?.length) {
        this.branchData.push(dataItem);
      } else {
        this.leafData.push(dataItem);
      }
    });
    // 分支节点平分角度，将整个圆分为几个区间，几个区间再去分布叶子
    let degInterval = this.arrangSubRoot(this.branchData, group);
    // 在平分的区间内排布叶子节点
    this.arrangeLeaf(degInterval, group);
  }


  arrangSubRoot(data, group) {
    let startAngle = 0; // 起始角度，给父节点留出一个位置
    let splitNum = data.length; // 360拆分成多少数量
    let degInterval = [this.isSubRoot ? degPositive(this.parentDeg + 180) : 0]; // 次级根节点将360分为的角度区间
    if (this.isSubRoot) {
      splitNum = data.length + 1;
      startAngle = (180 + this.parentDeg) - (360 / splitNum) * data.length;
      degInterval.push(degPositive(startAngle));
    } else {
      if (this.option.isLink) { // isLink，判断主网关右侧是否需要预留一个位置
        splitNum = data.length + 1;
        startAngle = 360 / splitNum;
      }
      degInterval.push(0);
    }
    data.forEach((dataItem, index) => {
      const deg = (dataItem.deg !== undefined && dataItem.deg !== null) ? dataItem.deg : (360 / splitNum) * index + startAngle;
      degInterval.push(deg);
      this.loopSubRootData(dataItem, group, deg);
    });
    degInterval.sort((a, b) => {
      return a - b;
    });
    return [...new Set(degInterval)];
  }

  arrangeLeaf(degInterval, group) {
    let arrLength = degInterval.length;
    let leafInterval = new Array(arrLength).fill(1); // 每个区间的叶子节点分布数量:如[2,2,1]
    this.leafData.forEach((item, index) => {
      if (index >= arrLength) {
        leafInterval[index % arrLength]++;
      }
    });
    this.leafData.forEach((item, index) => {
      // 获取角度区间的差值，循环取值。大的角减去小的角
      let degSpace = (degInterval[index % arrLength + 1] || (degInterval[0] + 360)) - degInterval[index % arrLength];
      // 当前叶子角=差值/每个区间分布数*分布索引+起始角(小的角)
      let deg = degSpace / (leafInterval[index % arrLength] + 1) * (parseInt(index / arrLength) + 1) + degInterval[index % arrLength];
      this.loopLeafData(item, group, deg);
    });
  }

  // 处理次级根节点数据
  loopSubRootData(dataItem, { wrapper, tagWrapper, lineWrapper }, deg) {
    new BranchManager(dataItem, wrapper, this.snowInstance, {
      style: {
        position: 'absolute',
        left: `${50 + pctToNumber(this.option.distance)}%`,
        // 以主网关圆心为旋转点(scale缩放功能，需要重新确定left值和旋转中心)
        transformOrigin: `${50 - pctToNumber(this.option.distance) * (1 / this.option.scale)}% center`,
        transform: `translate(-50%,-50%) rotate(${deg - this.parentDeg}deg)`,
        width: `${this.option.scale * 100}%`,
        height: `${this.option.scale * 100}%`
      },
      parentDeg: deg,
      isSubRoot: true,
    }, this);
    this.initCenterLine(dataItem, deg, { tagWrapper, lineWrapper });
  }

  // 处理叶子节点数据
  loopLeafData(dataItem, group, deg) {
    const leaf = new LeafManager(dataItem, group, deg, this);
    this.leafsArr.push(leaf);
  }

  // 主网关到从网关的line及tag
  initCenterLine(data, deg, { tagWrapper, lineWrapper }) {
    const leafNode = this.centerDomArr.filter((item) => { // 获取子节点，用于计算连线宽度
      return item.data.mac === data.mac;
    })[0];
    this.centerLineArr.push(new LineManager({ lineWrapper, leafNode }, data, deg, this, true));
    this.centerTagArr.push(new TagManager(tagWrapper, data, this.option, deg, true));
  }

  // 点击下钻后需要将isLink改为false，需要重新刷新dom结构，计算全部的角度
  reRender(activeMac, leafTrigger) {
    this.branchData = [];
    this.leafData = [];
    this.leafsArr = [];
    this.centerLineArr = [];
    this.centerTagArr = [];
    this.centerDomArr = [];
    this.container.innerHTML = null;

    this.activeMac = activeMac;
    this.leafTrigger = leafTrigger;
    // 下钻后，如果在此之前刷新了node、line、tag。不能使用this.data。数据还是旧的
    this.mount(this.snowInstance.data[0], {});
  }
};

export default BranchManager;