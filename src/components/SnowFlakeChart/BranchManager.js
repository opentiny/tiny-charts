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
import { insertDom, setStyle, pctToNumber, degPositive, getSideLength, pxToNumber, getStyle, getWaistLength, getTriangleAngle, getCssNumber } from './util';
import LeafManager from './LeafManager';
import NodeManager from './NodeManager';
import LineManager from './line';
import TagManager from './TagManager';

class BranchManager {
  constructor(data, container, snowInstance, subRootConfig = {}, parentInstance = {}) {
    const { option, imageList, drag } = snowInstance; // 雪花图实例
    const { parentDeg = 0, isSubRoot = false, style = {}, equalDeg = 0 } = subRootConfig; // 递归生成次级根节点，携带来的配置
    const { leafsArr = [], centerDomArr = [], centerLineArr = [],
      centerTagArr = [], activeMac = null, leafTrigger = null, distance = null } = parentInstance; // 父级branchManager实例
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
    this.distance = distance;
    this.leafData = []; // 叶子节点数据
    this.branchData = []; // 分支节点数据
    this.equalDeg = equalDeg;
    this.mount(data, style);
  }

  mount(data, style) {
    const group = this.grouping(style);
    this.initCenterDom(data, group);
    this.loopData(data.isRoot ? { ...data, level: 0 } : data, group);
  }

  // dom分组
  grouping(style) {
    // 雪花图容器
    const wrapper = insertDom(this.container, { class: `sfc-branch ${!this.isSubRoot ? 'rootBranch' : ''}` }, { ...style });
    wrapper.setAttribute('data-mac', this.data.mac);
    // 用于多级嵌套，反向旋转回正内部dom
    const coreWrapper = insertDom(wrapper, { class: 'sfc-core' },
      { transform: `rotate(${360 - this.parentDeg}deg)` });
    const nodeWrapper = insertDom(coreWrapper, { class: 'sfc-node-container' });
    const lineWrapper = insertDom(coreWrapper, { class: 'sfc-line-container' });
    const tagWrapper = insertDom(coreWrapper, { class: 'sfc-tag-container' });
    this.wrapper = wrapper;
    return { wrapper, coreWrapper, nodeWrapper, lineWrapper, tagWrapper };
  }

  // 中心dom、中心到子网关的连线和tag。容器创建及处理
  initCenterDom(data, { nodeWrapper }) {
    this.centerDom = new NodeManager(nodeWrapper, data, 0, true, this);
    this.centerDomArr.push(this.centerDom);
    // 更新从网关的宽度，要在自身render完毕，和其叶子节点render之间调用（故不能在upDateSubRootStyle回调中执行）
    this.centerDom.setSubRootWidth();
  }

  // 循环处理：外层node、line、tag
  loopData(data, group) {
    // 数据拆分为叶子和非叶子两种类型
    data.children?.forEach((dataItem) => {
      if (dataItem.isAP || dataItem.children?.length) {
        this.branchData.push({ ...dataItem, level: data.level + 1 });
      } else {
        this.leafData.push({ ...dataItem, level: data.level + 1 });
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
      degInterval.push(degPositive(deg));
      const equalDeg = Math.min(360 / splitNum, 180);
      this.loopSubRootData(dataItem, group, deg, equalDeg);
    });
    degInterval.sort((a, b) => {
      return a - b;
    });
    return Array.from(new Set(degInterval));
  }

  arrangeLeaf(degInterval, group) {
    let intervalNum = degInterval.length; // 360度分割区间的数量
    let intervalLeafNum = new Array(intervalNum).fill(1); // 每个区间的叶子节点分布数量:如[2,2,1]
    this.leafData.forEach((item, index) => {
      if (index >= intervalNum) {
        intervalLeafNum[index % intervalNum]++;
      }
    });
    let leafDegArr = []; // 全部区间的叶子节点的角度集合
    let cloneLeafsArr = [...this.leafsArr];
    this.leafData.forEach((item, index) => {
      // 获取角度区间的差值，循环取值。大的角减去小的角
      let degSpace = (degInterval[index % intervalNum + 1] || (degInterval[0] + 360)) - degInterval[index % intervalNum];
      // 当前叶子角=差值/每个区间分布数*分布索引+起始角(小的角)
      let deg = degSpace / (intervalLeafNum[index % intervalNum] + 1) * (parseInt(index / intervalNum) + 1) + degInterval[index % intervalNum];
      leafDegArr.push(deg);
      this.loopLeafData(item, group, deg);
    });
    this.multipleTerminal(leafDegArr, group, cloneLeafsArr, intervalNum, degInterval, intervalLeafNum);
  }

  // 处理多终端场景。先按照原始算法排列，
  multipleTerminal(leafDegArr, group, cloneLeafsArr, intervalNum, degInterval, intervalLeafNum) {
    if (!leafDegArr.length) return; // 无叶子节点，直接返回
    leafDegArr.sort((a, b) => { return a - b; });
    let minAngleDiff = leafDegArr[1] - leafDegArr[0]; // 寻找最小夹角，用它来计算终端分布的数量
    leafDegArr.forEach((item, index) => {
      if (index <= leafDegArr.length - 2) {
        if ((leafDegArr[index + 1] - leafDegArr[index]) < minAngleDiff) {
          minAngleDiff = leafDegArr[index + 1] - leafDegArr[index];
        }
      }
    });
    const { wrapper } = group;
    // 腰长
    let waistLength = pxToNumber(getStyle(wrapper, 'width')) / 2;
    // 对边
    let sideLength = getSideLength(minAngleDiff, waistLength);
    const leafDom = this.leafsArr[0].node.returnWrapper();
    const leafDomWidth = pxToNumber(getStyle(leafDom, 'width'));
    // 保证每个叶子节点的圆心间距为20,重新计算其夹角
    if (sideLength < leafDomWidth + 20) {
      sideLength = leafDomWidth + 20;
      for (let i = cloneLeafsArr.length; i < this.leafsArr.length; i++) { // 不符合条件，直接删除，并且移除创建的dom
        this.leafsArr[i].node.container.removeChild(this.leafsArr[i].node.dom);
        this.leafsArr[i].tag.container.removeChild(this.leafsArr[i].tag.dom);
        this.leafsArr[i].line.container.removeChild(this.leafsArr[i].line.canvas);
      }
      this.leafsArr.splice(cloneLeafsArr.length);
      if (this.option.overAll) { // 全网视口超出展示...
        minAngleDiff = getTriangleAngle(sideLength, waistLength);
        const maxLeafNum = Math.floor(360 / intervalNum / minAngleDiff) * intervalNum; // 外环上最多分布终端的数量(每个区间分别计算数量累计，这样就能避免与连线重叠)
        let newLeafDegArr = [];  // 更新leafDegArr 全部区间的叶子节点的角度集合
        let intervalLeafNum = new Array(intervalNum).fill(1); // 每个区间的叶子节点分布数量
        this.leafData.forEach((item, index) => {
          if (index > maxLeafNum - 1) return;
          if (index >= intervalNum) {
            intervalLeafNum[index % intervalNum]++;
          }
        });
        this.leafData.forEach((item, index) => {
          // 获取角度区间的差值，循环取值。大的角减去小的角
          let degSpace = (degInterval[index % intervalNum + 1] || (degInterval[0] + 360)) - degInterval[index % intervalNum];
          // 当前叶子角=差值/每个区间分布数*分布索引+起始角(小的角)
          let deg = degSpace / (intervalLeafNum[index % intervalNum] + 1) * (parseInt(index / intervalNum) + 1) + degInterval[index % intervalNum];
          newLeafDegArr.push(deg);
        });
        this.leafData.forEach((item, index) => {
          const deg = newLeafDegArr[index];
          if (index >= maxLeafNum) return;  // 遍历终端，如果他超过最多分布的数量，则不渲染了
          this.loopLeafData(item, group, deg);
        });
      } else { // 家庭视口超出拉大从网关容器、拉长主从网关距离。从而展示全部终端
        let equalDeg = 360 / intervalNum;
        // waistLength = Math.min(getWaistLength(equalDeg, (leafDomWidth + 20) * Math.max(...intervalLeafNum) - 20 + 40), getWaistLength(minAngleDiff, sideLength)); // +40是给终端和上下主从网关的连线设置各20间距
        waistLength = getWaistLength(minAngleDiff, sideLength);
        const wrapperSize = pxToNumber(getStyle(wrapper, 'width'));
        setStyle(wrapper, {
          width: waistLength * 2 + 'px',
          height: waistLength * 2 + 'px',
          // 多终端的话，根节点定位中心还是50%，其它次级根节点需要额外计算自身宽度的变化
          left: this.isSubRoot ? `calc(100% + ${this.distance + waistLength - wrapperSize / 2}px)` : '50%'
        });
        // 新增：因为waistLength的获取方式调整了，为了区间内的终端不重叠，需要重新计算其角度
        // if (getWaistLength(equalDeg, (leafDomWidth + 20) * Math.max(...intervalLeafNum) - 20 + 40) < getWaistLength(minAngleDiff, sideLength)) {
        //   intervalLeafNum.forEach((leafNum, index) => {
        //     if (leafNum > 1) {
        //       const triangleAngle = getTriangleAngle(sideLength, waistLength);
        //       for (let i = 0; i < leafNum; i++) {
        //         let recordNum = 0; // 记录之前已经排列了多少个兄弟叶子节点，用来更新对应索引的角度
        //         if (index >= 1) {
        //           for (let k = 0; k <= index - 1; k++) {
        //             recordNum += intervalLeafNum[k];
        //           }
        //         }
        //         leafDegArr[i + recordNum] = (equalDeg - triangleAngle * (leafNum - 1)) / leafNum + i * triangleAngle + 360 / intervalLeafNum.length * index;
        //       }
        //     }
        //   });
        // }
        this.leafData.forEach((item, index) => {
          this.loopLeafData(item, group, leafDegArr[index]);
        });
      }
    }
  }

  // 处理次级根节点数据
  loopSubRootData(dataItem, { wrapper, tagWrapper, lineWrapper }, deg, equalDeg) {
    const { overAll, distance } = this.option;
    const { minDistance, minDistanceDrill } = distance;
    this.distance = overAll ? minDistance : minDistanceDrill;
    this.subBranch = new BranchManager(dataItem, wrapper, this.snowInstance, {
      style: {
        position: 'absolute',
        transform: `translate(-50%,-50%) rotate(${deg - this.parentDeg}deg)`,
      },
      parentDeg: deg,
      isSubRoot: true,
      equalDeg
    }, this);
    this.upDateSubRootStyle(equalDeg, wrapper, dataItem, overAll);
    this.initCenterLine(dataItem, deg, { tagWrapper, lineWrapper });
  }

  upDateSubRootStyle(equalDeg, wrapper, dataItem, overAll) {
    // 更新从网关的distance、设置其left和旋转中心
    let waistLength = getWaistLength(equalDeg, getCssNumber(this.subBranch.wrapper, 'width') + 50 * 2); // 从网关间距给个50
    this.distance = dataItem.distance || Math.max(waistLength - getCssNumber(wrapper, 'width'), this.distance);
    let sizeRatio = pxToNumber(getStyle(this.subBranch.wrapper, 'width')) / pxToNumber(getStyle(wrapper, 'width'));
    let transformOrigin = `calc(${50 * (1 - 1 / sizeRatio) + '%'} - ${this.distance}px) center`;
    let subBranchStyle = {};
    if (overAll) {
      subBranchStyle = {
        left: `calc(100% + ${this.distance}px)`,
        transformOrigin
      };
    } else {
      subBranchStyle = {
        transformOrigin: 'unset',  // 设置旋转中心，如果是家庭拓扑，会在setTransformOrigin中处理。
      };
      if (getCssNumber(this.subBranch.wrapper, 'left') < getCssNumber(this.subBranch.wrapper.parentNode, 'width') + this.distance) {
        subBranchStyle.left = `calc(100% + ${this.distance}px)`;
      }
    }
    setStyle(this.subBranch.wrapper, subBranchStyle);
  }

  // 处理叶子节点数据
  loopLeafData(dataItem, group, deg) {
    this.leaf = new LeafManager(dataItem, group, deg, this);
    this.leafsArr.push(this.leaf);
  }

  // 主网关到从网关的line及tag
  initCenterLine(data, deg, { tagWrapper, lineWrapper }) {
    const leafNode = this.centerDomArr.filter((item) => { // 获取子节点，用于计算连线宽度
      return item.data.mac === data.mac;
    })[0];
    this.centerLineArr.push(new LineManager({ lineWrapper, leafNode }, data, deg, this, true));
    this.centerTagArr.push(new TagManager(tagWrapper, data, this.option, deg, true, this.drag));
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
    // 下钻完之后如果有多设备情况，需要重新设置定位值和旋转中心（必须在this.mount后面执行，算重构节点）
    if (!this.option.overAll) {
      this.snowInstance.setPositionLeft();
      this.snowInstance.setTransformOrigin();
      this.snowInstance.setTagPosition();
    }
    // 为了解决：重设定位值和旋转中心还未结束，就执行了NodeManager/moveToCenter,导致下钻聚焦的节点不对。
    const { centerDomArr, leafsArr } = this.snowInstance.branchs[0];
    if (leafTrigger) { // 叶子节点触发的下钻
      leafsArr.forEach((leaf) => {
        if (leaf.node.data.mac === activeMac) {
          this.drag.moveTargetToCenter(leaf.node.wrapper);
        }
      });
    } else { // 容器触发的下钻
      centerDomArr.forEach((node) => {
        if (node.data.mac === activeMac) {
          this.drag.moveTargetToCenter(node.returnWrapper().parentNode);
        }
      });
    }
  }
};

export default BranchManager;