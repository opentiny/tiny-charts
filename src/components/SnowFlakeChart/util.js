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
import { opacity, singlecolor, singleWarnColor, singleMin2G, singleMin5G, singleMax, direction } from './CommonConstant';

const setAttribute = (dom, attribute) => {
  for (let i in attribute) {
    if (Object.hasOwnProperty.call(attribute, i)) {
      dom.setAttribute(i, attribute[i]);
    }
  }
};

const setStyle = (dom, styles) => {
  for (let i in styles) {
    if (Object.hasOwnProperty.call(styles, i)) {
      dom.style[i] = styles[i];
    }

  }
};

const onImageLoad = (imageList, callback) => {
  let onloadNum = 0;
  const loadEvent = () => {
    onloadNum++;
    if (onloadNum === Object.keys(imageList).length) {
      callback();
    }
  };

  for (let item in imageList) {
    if (Object.hasOwnProperty.call(imageList, item)) {
      imageList[item]['image'].addEventListener('load', loadEvent);
    }
  }
};

const pxToNumber = pxText => {
  return pxText.split('px')[0] - 0;
};

const pctToNumber = pctText => {
  return pctText.split('%')[0] - 0;
};

const createDom = (type = 'div') => {
  return document.createElement(type);
};

const insertDom = (container, attribute, styles, type) => {
  const dom = createDom(type);
  setAttribute(dom, attribute);
  setStyle(dom, styles);
  container.appendChild(dom);
  return dom;
};

const getStyle = (dom, cssName) => {
  return window.getComputedStyle(dom)[cssName];
};

// 将角度控制在0-360区间内
const degPositive = angle => {
  let deg;
  if (angle >= 0 && angle <= 360) {
    deg = angle;
  } else if (angle > 360) {
    deg = angle % 360;
  } else {
    deg = 360 + (angle % 360);
  }
  return deg;
};

// 提取一段字符串中的数值和小数点部分
function extractNumbersAndDots(str) {
  return str.match(/[\d.]+/g)[0];
}

// 获取文本的非数值部分
const getUnitText = text => {
  const valString = extractNumbersAndDots(text).toString();
  const unit = text.slice(valString.length);
  return unit;
};

// 补全默认值
const setDefault = (userOption, defaultOption) => {
  for (let key in defaultOption) {
    if (userOption[key] === undefined || userOption[key] === null) {
      userOption[key] = defaultOption[key];
    }
  }
};

// 判断两个数是否为倍数关系，是则存在角度重叠问题
const isMultiple = (dividend, divisor) => {
  if (dividend === 0 || divisor === 0) {
    return false;
  }
  if (Math.max(dividend, divisor) % Math.min(dividend, divisor) === 0) {
    return true;
  }
  return false;
};

// 判断某个值是否在区间内
const judgeValue = (value, min, max) => {
  let flag = true;
  if (parseFloat(value) <= parseFloat(max) && parseFloat(value) >= parseFloat(min)) {
    flag = true;
  } else {
    flag = false;
  }
  return flag;
};

const loopData = (data, newData) => {
  data.forEach((item, index) => {
    newData.push(item);
    if (item.children && item.children.length) {
      loopData(item.children, newData);
    }
  });
};

// 树形数组平铺
const arrFlat = (data) => {
  let newData = [];
  loopData(data, newData);
  return newData;
};

// 判断数据的disabled，给外层容器挂上类名
const isDataDisabled = (data, container, option) => {
  const disabledData = data.filter((item) => {
    return item.disabled === true;
  });
  // overAll视图下，不展示disabled状态
  if (disabledData.length && !option.overAll) {
    container.classList.add('disabled');
  } else {
    container.classList.remove('disabled');
  }
};

// 刷新node、line、tag，需要判断mac一致则更新
const compareRefresh = (data, branchs, { centerArr, target }, that) => {
  const flatData = arrFlat(data);
  branchs.forEach((item) => {
    flatData.forEach((dataItem) => {
      item[centerArr].forEach((val) => {
        if (val.data.mac === dataItem.mac) {
          val.refreshData(dataItem);
        }
      });
      item.leafsArr.forEach((val) => {
        if (val.data.mac === dataItem.mac) {
          val[target].refreshData(dataItem);
        }
      });
    });
  });
  isDataDisabled(flatData, that.container, that.option);
};

// 遍历平铺数据，发现有没有disabled属性，有则设置透明度
const judgeDisabled = (option, domArr, isLeaf, dataItem, isNode) => {
  const { data, overAll } = option;
  if (overAll) { // 全网视口不用置灰
    return;
  }
  let hasDisabled = false;
  let tagDisabled = false;
  const flatData = arrFlat(data);
  if (!isLeaf) {
    if (!isNode) {
      flatData.forEach((item) => {
        if (item.disabled) { // 有一个disabled，非叶子节点tag、line全部置灰
          hasDisabled = true;
        }
      });
    } else {
      if (dataItem.disabled) { // 非叶子节点的node是否置灰由自己决定
        hasDisabled = true;
      }
    }
  } else if (isLeaf) {
    flatData.forEach((item) => {
      if (item.disabled) { // 有一个disabled，叶子节点的tag、line全部置灰
        tagDisabled = true;
      }
    });
    if (dataItem.disabled) { // 叶子节点的node是否置灰由自己决定
      hasDisabled = true;
    }
  }
  domArr.forEach((item) => {
    setStyle(item, {
      opacity: hasDisabled ? opacity : 1
    });
  });
  if (isLeaf && tagDisabled) { // 叶子节点需要置灰tag
    setStyle(domArr[1], {
      opacity: opacity
    });
  }
};

// 下钻/取消下钻，移动选中dom到视口中心
const moveToCenter = ({ activeMac, leafTrigger, drag, chartContainer }, that, isNode) => {
  if (activeMac && that.data.mac === activeMac) {
    if (that.option.overAll) {
      // 全网，使画布在视口中心(业务场景有可能需要将对应dom居中，待调整)
      drag.moveTargetToCenter(chartContainer);
    } else {
      // 家庭，使点击的dom在视口中心(点击的是叶子节点，叶子节点居中，否则是叶子节点的外层容器居中)
      if (isNode) {
        drag.moveTargetToCenter(leafTrigger ? that.wrapper : that.wrapper.parentNode.parentNode);
      } else {
        drag.moveTargetToCenter(leafTrigger ? that.node.returnWrapper() : that.node.returnWrapper().parentNode.parentNode);
      }
    }
  }
};

// 主网关信号强度判断
const getRootTextColor = (data) => {
  return judgeValue(data.rxPower, data.rxPowerMin, data.rxPowerMax) ? singlecolor : singleWarnColor;
};

// sta信号强度判断
const getLeafTextColor = (data) => {
  return judgeValue(data.signalStrength, data.connectInterface?.indexOf('2.4G') !== -1 ? singleMin2G : singleMin5G, singleMax) ? singlecolor : singleWarnColor;
};

// 从网关信号强度判断
const getAPTextColor = (data) => {
  let single;
  let singleTextColor;
  if (data.connectInterface?.indexOf('SSID') !== -1) {
    single = data.signalStrength;
    singleTextColor = getLeafTextColor(data);
  } else {
    single = data.rxPower;
    singleTextColor = getRootTextColor(data);
  }
  return { single, singleTextColor };
};



// 根据设备类型获取信号强度字段和色值
const getSingle = (data, type) => {
  let single;
  let singleTextColor;
  switch (type) {
    case 'root':
      single = data.rxPower;
      singleTextColor = getRootTextColor(data);
      break;
    case 'leaf':
      single = data.signalStrength;
      singleTextColor = getLeafTextColor(data);
      break;
    case 'ap':
      single = getAPTextColor(data).single;
      singleTextColor = getAPTextColor(data).singleTextColor;
      break;
  }
  return { single, singleTextColor };
};

// 根据角度确定箭头/tag 朝向
const setDirection = (deg) => {
  let flag;
  const { left, right } = direction;
  if (deg > 90 && deg < 270) {
    flag = left;
  } else {
    flag = right;
  }
  return flag;
};

// 计算一段字符的像素长度
const getTextWidth = (text, fontSize = 12) => {
  let result = 0;
  const ele = document.createElement('span');
  // 字符串中带有换行符时，会被自动转换成<br/>标签，若需要考虑这种情况，可以替换成空格，以获取正确的宽度
  ele.innerText = text;
  // 不同的大小和不同的字体都会导致渲染出来的字符串宽度变化，可以传入尽可能完备的样式信息
  ele.setAttribute('style', `font-size: ${fontSize}px`);
  document.documentElement.append(ele);
  result = ele.offsetWidth;
  document.documentElement.removeChild(ele);
  return result;
};

// 计算等腰三角形的弧长
const getArcLength = (arc, r) => {
  return arc / 360 * 2 * Math.PI * r;
};

// 计算等腰三角形的对边边长
const getSideLength = (arc, r) => {
  return Math.sin(arc / 2 / 180 * Math.PI) * r * 2;
};

// 计算等腰三角形的腰长
const getWaistLength = (arc, sideLength) => {
  return sideLength / 2 / Math.sin(arc / 2 / 180 * Math.PI);
};

// 弧度转角度
function radiansToDegrees(radian) {
  return (180 * radian / Math.PI);
}

// 计算等腰三角形的夹角
const getTriangleAngle = (sideLength, r) => {
  return radiansToDegrees(Math.asin(sideLength / 2 / r)) * 2;
};

export {
  setAttribute,
  setStyle,
  onImageLoad,
  pxToNumber,
  createDom,
  insertDom,
  getStyle,
  pctToNumber,
  degPositive,
  getUnitText,
  setDefault,
  isMultiple,
  judgeValue,
  arrFlat,
  getTextWidth,
  judgeDisabled,
  isDataDisabled,
  compareRefresh,
  moveToCenter,
  getSingle,
  getArcLength,
  setDirection,
  getSideLength,
  getTriangleAngle,
  getWaistLength,
  extractNumbersAndDots
};
