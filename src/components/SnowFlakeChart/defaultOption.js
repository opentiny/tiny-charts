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
import { setStyle, getSingle } from './util';
import defendXSS from '../../util/defendXSS';

// 主从网关。
const rootDefault = (data, nodeContainer, isRoot, option, scale) => {
  const { theme, overAll } = option;
  setStyle(nodeContainer, {
    width: isRoot ? '150px' : '110px',
    height: isRoot ? '150px' : '110px',
  });
  const { single, singleTextColor } = getSingle(data, isRoot ? 'root' : 'ap');
  let mainColor = theme.indexOf('dark') !== -1 ? '#f5f5f5' : '#191919';
  let subColor = theme.indexOf('dark') !== -1 ? '#bbbbbb' : '#999999';
  nodeContainer.innerHTML = `
  <div class='centerNode_defaultRender'>
    <img 
      class=${isRoot ? 'rootImg' : 'apImg'}  
      src='./image/device/${defendXSS(data.deviceType)}.png' 
      draggable=false>
    </img>
    <div 
      class='deviceName ${isRoot ? 'rootName' : 'apName'}' 
      style='color:${mainColor};' 
      title=${defendXSS(data.deviceName)}>
      ${defendXSS(data.deviceName)}
    </div>
    <div 
      class='onlineDuration' 
      style='color:${subColor};display:${data.onlineDuration ? 'block' : 'none'};' 
      title=${defendXSS(data.onlineDuration)}>
      ${defendXSS(data.onlineDuration)}
    </div>
    <div 
      style='color:${defendXSS(singleTextColor)};display:${single ? 'block' : 'none'}' 
      title=${defendXSS(single)}>
      ${defendXSS(single)}
    </div>
    <div 
      style='color:${subColor};display:${data.trafficStatistics ? 'block' : 'none'}' 
      title=${defendXSS(data.trafficStatistics)}>
      ${defendXSS(data.trafficStatistics)}
    </div>
    <div 
      class='terminalNumTip'
      style='color:${mainColor}'>
      终端：${data.children?.filter(item => !item.isAP).length || 0}个
    </div>
  </div>`;

  if (scale >= 0.5 && scale < 0.95) {
    nodeContainer.innerHTML = `
    <div class='centerNode_defaultRender'>
      <div 
        class='deviceName ${isRoot ? 'rootName' : 'apName'}' 
        style='color:${mainColor};' 
        title=${defendXSS(data.deviceName)}>
        ${defendXSS(data.deviceName)}
      </div>
    </div>`;
  }
};

const overAllTag = (data, tagContainer) => {
  // tag节点
  setStyle(tagContainer, {
    width: 0,
    height: 0,
    border: 0
  });
  tagContainer.innerHTML = null;
};

// 正常态叶子节点样式
const houseLeaf = (data, nodeContainer, isActive, theme, scale) => {
  setStyle(nodeContainer, {
    width: '100px',
    height: '100px',
    display: 'block'
  });
  let imageSrc = data.deviceType;
  let imgBg = 'staSelected'; // 终端选中态的图片周边阴影
  if (data.faultNumber) {
    imageSrc += '_error';
    imgBg += '_error';
  }
  if (isActive) {  // 点击态的图片
    imageSrc = data.deviceType;
  } else {
    imgBg = 'unset';
  }
  const { single, singleTextColor } = getSingle(data, 'leaf');
  let mainColor = theme.indexOf('dark') !== -1 ? '#ffffff' : '#191919';
  let subColor = theme.indexOf('dark') !== -1 ? '#bbbbbb' : '#999999';
  let leafBg = theme.indexOf('dark') !== -1 ? 'rgba(25,25,25,.6)' : 'rgba(25,25,25,.1)';
  let HTMLstr = `
  <div class='leafNode_defaultRender'>
    <div class='imgBg' 
      style='background:${imgBg !== 'unset' ? `url(./image/device/${defendXSS(imgBg)}.svg)` : imgBg};'>
      <img 
        src='./image/device/${defendXSS(imageSrc)}.svg' 
        draggable=false>
      </img>
      <div class='deviceName' 
        style='color:${mainColor};' 
        title=${defendXSS(data.deviceName)}>
        ${defendXSS(data.deviceName)}
      </div>
      <div 
        style='color:${defendXSS(singleTextColor)};display:${single ? 'block' : 'none'}' 
        title=${defendXSS(single)}>
        ${defendXSS(single)}
      </div>
      <div 
        style='color:${subColor};display:${data.trafficStatistics ? 'block' : 'none'}' 
        title=${defendXSS(data.trafficStatistics)}>
        ${defendXSS(data.trafficStatistics)}
      </div>
    </div>
  </div>
  <div class='leafNodeShadow'
    style='background:${leafBg};display:${isActive ? 'none' : 'block'}'>
  </div>`;
  setTimeout(() => {
    nodeContainer.innerHTML = HTMLstr;
  }, 20);

  if (scale >= 0.5 && scale <= 0.75) {
    setStyle(nodeContainer, {
      display: 'none'
    });
  }
};

const overAllLeaf = (data, nodeContainer, option) => {
  setStyle(nodeContainer, { // 宽高用户可自定义配置。
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });
  nodeContainer.innerHTML = null;
};
/**
 * 全网
 * @param {*} param0
 * @param {*} data
 * @param {*} option
 */
const handleOverall = ({ nodeContainer, tagContainer }, data, option) => {
  if (data.isRoot || data.isAP || data.children && data.children.length) {
    // 根节点(默认166*166)
    if (data.isRoot || data.mac === option.data[0].mac) {
      rootDefault(data, nodeContainer, true, option);
    } else {
      // 次级根节点(默认104*104)
      rootDefault(data, nodeContainer, false, option);
    }
  } else {
    // 叶子节点(默认38*38)
    overAllLeaf(data, nodeContainer, option);
  }
  // tag节点
  overAllTag(data, tagContainer);
};

const houseTag = (data, tagContainer, theme, scale) => {
  const commonStyle = {
    padding: '4px 12px',
    background: theme.indexOf('dark') !== -1 ? '#191919' : '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '999px'
  };
  if (data.connectInterface?.indexOf('SSID') === -1 && data.connectInterface?.indexOf('wireless') === -1) {
    setStyle(tagContainer, {
      ...commonStyle,
      border: '1px solid #777777',
      display: data.connectInterface?.indexOf('PON') === -1 ? 'flex' : 'none',

    });
    tagContainer.innerHTML = `<div>${defendXSS(data.connectInterface.replace('Straight-', ''))}</div>`;
  } else {
    setStyle(tagContainer, {
      ...commonStyle,
      border: data.connectInterface?.indexOf('2.4G') !== -1 ? '1px solid #2070F3' : '1px solid #058358',
      display: data.wifiChannel ? 'flex' : 'none',
    });
    setStyle(tagContainer, { // 当信道为三位数以下，固定宽度为40px
      width: String(data.wifiChannel).length <= 2 ? '40px' : 'unset'
    });
    tagContainer.innerHTML = defendXSS(data.wifiChannel);
  }
  if (scale >= 0.5 && scale < 0.95) {
    setStyle(tagContainer, {
      display: 'none'
    });
  }
};

/**
 * 家庭
 * @param {*} param0
 * @param {*} data
 * @param {*} option
 */
const handleHouse = ({ nodeContainer, tagContainer }, data, option, scale) => {
  if (data.isRoot || data.isAP || data.children && data.children.length) {
    // 根节点(默认166*166)
    if (data.isRoot || data.mac === option.data[0].mac) {
      rootDefault(data, nodeContainer, true, option, scale);
    } else {
      // 次级根节点(默认166*166)
      rootDefault(data, nodeContainer, false, option, scale);
    }
  } else {
    // 叶子节点(默认104*104)
    const classList = nodeContainer?.parentNode?.classList || [];
    const isActive = [...classList].indexOf('nodeActive') !== -1;
    houseLeaf(data, nodeContainer, isActive, option.theme, scale);
  }
  // tag节点
  houseTag(data, tagContainer, option.theme, scale);
};

const defaultOption = {
  isLink: false,// 主网关是否预留一个位置
  distance: {
    minDistance: 200, // 全网视口，主从网关的圆心的最小距离
    minDistanceDrill: 400 // 下钻视口，主从网关的圆心的最小距离
  },
  ratio: {
    // 全网视口，递归生成的节点必定在minRatio-maxRatio之间，如果终端设备数量超过了该网关能展示的最大数量，后续终端不会展示出来，出现...
    minRatio: 0.5, // 全网视口 递归节点的最小尺寸占比
    maxRatio: 0.75, // 全网视口 递归节点的最大尺寸占比
    // 家庭视口，如果终端设备数量超过了该网关能展示的最大数量，则允许尺寸占比超出maxRatioDrill
    minRatioDrill: 0.7, // 家庭视口 递归节点的最小尺寸占比
    maxRatioDrill: 0.8 // 家庭视口 递归节点的最大尺寸占比
  },
  overAll: true, // 是否为全局视口（节点变小，隐藏tag、line)
  scaleAdaptive: false, // 家庭视口下，drag的不同缩放值会产生不同的视图（且首次进入家庭视口，会开启自适应缩放功能）
  // 默认渲染配置
  render: ({ nodeContainer, tagContainer }, data, option, scale) => {
    if (option.overAll) {
      // 全网
      handleOverall({ nodeContainer, tagContainer }, data, option);
    } else {
      // 家庭
      handleHouse({ nodeContainer, tagContainer }, data, option, option.scaleAdaptive ? scale : null);
    }
  }
};

const defaultToolTip = (data, isLeaf) => {
  let HTMLstr = `
  <div class='sfcTipContainer'>
    <div>${data.deviceName}</div>
    <div class='rateInfo'>
      <img src='./image/device/up.svg' />
      ${data.upRate}
    </div>
    <div class='rateInfo'>
      <img src='./image/device/down.svg' />
      ${data.downRate}
    </div>
  </div>`;
  if (!isLeaf) {
    HTMLstr = '点击查看详细拓扑';
  }
  return HTMLstr;
};

export default defaultOption;
export { defaultToolTip };