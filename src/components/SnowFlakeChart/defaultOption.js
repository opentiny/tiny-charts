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
import { setStyle, getSingle } from './util';
import defendXSS from '../../util/defendXSS';

// 全网视口的次级根节点和家庭视口的叶子节点样式一致。
const subRootDefault = (data, nodeContainer, isLeaf, theme) => {
  setStyle(nodeContainer, {
    width: '104px',
    height: '104px'
  });
  const { single, singleTextColor } = getSingle(data, isLeaf ? 'leaf' : 'ap');
  let mainColor = theme === 'dark' ? '#ffffff' : '#191919';
  nodeContainer.innerHTML = `<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;text-align:center;flex-direction:column;'>
  <img src='./image/device/${defendXSS(data.deviceType)}.png' style='width:24px;height:24px' draggable=false></img>
  <div style='font-size:12px;color:${mainColor};line-height:16px;margin:4px 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%' title=${defendXSS(data.deviceName)}>${defendXSS(data.deviceName)}</div>
  <div style='font-size:10px;color:${defendXSS(singleTextColor)};line-height:14px;margin-bottom:4px;display:${single ? 'block' : 'none'}' title=${defendXSS(single)}>${defendXSS(single)}</div>
  <div style='font-size:10px;color:${mainColor};line-height:14px;display:${data.trafficStatistics ? 'block' : 'none'}' title=${defendXSS(data.trafficStatistics)}>${defendXSS(data.trafficStatistics)}</div>
  </div>`;
};

// 全网视口的根节点和家庭视口的次级根节点样式一致。
const rootDefault = (data, nodeContainer, isRoot, theme) => {
  setStyle(nodeContainer, {
    width: '166px',
    height: '166px',
  });
  const { single, singleTextColor } = getSingle(data, isRoot ? 'root' : 'ap');
  let mainColor = theme === 'dark' ? '#ffffff' : '#191919';
  let subColor = theme === 'dark' ? '#bbbbbb' : '#999999';
  nodeContainer.innerHTML = `<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;text-align:center;flex-direction:column;'>
  <img src='./image/device/${defendXSS(data.deviceType)}.png' style='width:48px;height:48px' draggable=false></img>
  <div style='font-size:16px;color:${mainColor};line-height:24px;margin:4px 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%' title=${defendXSS(data.deviceName)}>${defendXSS(data.deviceName)}</div>
  <div style='font-size:12px;color:${subColor};line-height:18px;margin-bottom:4px;display:${data.onlineDuration ? 'block' : 'none'};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%' title=${defendXSS(data.onlineDuration)}>${defendXSS(data.onlineDuration)}</div>
  <div style='font-size:12px;color:${defendXSS(singleTextColor)};line-height:18px;margin-bottom:4px;display:${single ? 'block' : 'none'}' title=${defendXSS(single)}>${defendXSS(single)}</div>
  <div style='font-size:12px;color:${mainColor};line-height:18px;display:${data.trafficStatistics ? 'block' : 'none'}' title=${defendXSS(data.trafficStatistics)}>${defendXSS(data.trafficStatistics)}</div>
  </div>`;
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
const houseLeaf = (data, nodeContainer, isActive, theme) => {
  setStyle(nodeContainer, {
    width: '166px',
    height: '166px'
  });
  let imageSrc = data.deviceType;
  if (data.faultNumber) {
    if (data.faultLevel == 2) {
      imageSrc += '_warning';
    } else {
      imageSrc += '_error';
    }
  }
  if (isActive) {  // 点击态的图片
    imageSrc = data.deviceType;
  }
  const { single, singleTextColor } = getSingle(data, 'leaf');
  let mainColor = theme === 'dark' ? '#ffffff' : '#191919';
  let leafBg = theme === 'dark' ? 'rgba(25,25,25,.6)' : 'rgba(25,25,25,.1)';
  let HTMLstr = `<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;text-align:center;flex-direction:column;position:relative;z-index:2'>
  <img src='./image/device/${defendXSS(imageSrc)}.png' draggable=false></img>
  <div style='font-size:12px;color:${mainColor};line-height:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;min-height:16px' title=${defendXSS(data.deviceName)}>${defendXSS(data.deviceName)}</div>
  <div style='font-size:10px;color:${defendXSS(singleTextColor)};line-height:14px;display:${single ? 'block' : 'none'}' title=${defendXSS(single)}>${defendXSS(single)}</div>
  <div style='font-size:10px;color:${mainColor};line-height:14px;display:${data.trafficStatistics ? 'block' : 'none'}' title=${defendXSS(data.trafficStatistics)}>${defendXSS(data.trafficStatistics)}</div>
  </div>
  <div style='width:100%;height:100%;position:absolute;left:0;top:0;border-radius:50%;background:${leafBg};filter:blur(20px);display:${isActive ? 'none' : 'block'}'></div>`;
  setTimeout(() => {
    nodeContainer.innerHTML = HTMLstr;
  }, 20);
};

const overAllLeaf = (data, nodeContainer) => {
  setStyle(nodeContainer, {
    width: '30px',
    height: '30px'
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
      rootDefault(data, nodeContainer, true, option.theme);
    } else {
      // 次级根节点(默认104*104)
      subRootDefault(data, nodeContainer, false, option.theme);
    }
  } else {
    // 叶子节点(默认38*38)
    overAllLeaf(data, nodeContainer);
  }
  // tag节点
  overAllTag(data, tagContainer);
};

const houseTag = (data, tagContainer, theme) => {
  const commonStyle = {
    padding: '4px 12px',
    background: theme === 'dark' ? '#191919' : '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '999px'
  };
  if (data.connectInterface?.indexOf('SSID') === -1) {
    setStyle(tagContainer, {
      ...commonStyle,
      border: '2px solid #777777',
      display: data.connectInterface?.indexOf('PON') === -1 ? 'flex' : 'none',

    });
    tagContainer.innerHTML = `<div>${defendXSS(data.connectInterface)}</div>`;
  } else {
    setStyle(tagContainer, {
      ...commonStyle,
      border: data.connectInterface?.indexOf('2.4G') !== -1 ? '2px solid #2070F3' : '2px solid #058358',
      display: data.wifiChannel ? 'flex' : 'none',
    });
    tagContainer.innerHTML = defendXSS(data.wifiChannel);
  }
};

/**
 * 家庭
 * @param {*} param0
 * @param {*} data
 * @param {*} option
 */
const handleHouse = ({ nodeContainer, tagContainer }, data, option) => {
  if (data.isRoot || data.isAP || data.children && data.children.length) {
    // 根节点(默认166*166)
    if (data.isRoot || data.mac === option.data[0].mac) {
      rootDefault(data, nodeContainer, true, option.theme);
    } else {
      // 次级根节点(默认166*166)
      rootDefault(data, nodeContainer, false, option.theme);
    }
  } else {
    // 叶子节点(默认104*104)
    const classList = nodeContainer?.parentNode?.classList || [];
    const isActive = [...classList].indexOf('nodeActive') !== -1;
    houseLeaf(data, nodeContainer, isActive, option.theme);
  }
  // tag节点
  houseTag(data, tagContainer, option.theme);
};

const defaultOption = {
  isLink: false,// 主网关是否预留一个位置
  distance: '100%', // 网关之间的间距
  scale: 1, // 递归生成节点容器的缩放比例
  overAll: true, // 是否为全局视口（节点变小，不显示tag、line)
  // 默认渲染配置
  render: ({ nodeContainer, tagContainer }, data, option) => {
    if (option.overAll) {
      // 全网
      handleOverall({ nodeContainer, tagContainer }, data, option);
    } else {
      // 家庭
      handleHouse({ nodeContainer, tagContainer }, data, option);
    }
  }
};

export default defaultOption;