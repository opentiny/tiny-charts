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
import Token from '../token';
import { isArray, isBoolean } from '../../util/type';

const distanceX = 16; // 鼠标与气泡框之间的左右偏移量
const distanceY = 24; // 鼠标与气泡框之间的上偏移量
const axisType = ['xAxis', 'yAxis'];

function allFalse(obj){
  return Object.keys(obj).every(key => obj[key] === false);
}

// 设置 TriggerEvent
function setAxisTriggerEvent(eChartOption, type) {
  if (!eChartOption[type]) return;
  if (isArray(eChartOption[type])) {
    eChartOption[type].forEach((subitem) => {
      subitem.triggerEvent = true;
    })
  } else {
    eChartOption[type].triggerEvent = true;
  }
}

// 设置气泡的位置
function setPosition(tipContainer, echartsDom, param) {
  const tipContainerReact = tipContainer.getBoundingClientRect();
  const echartsDomRect = echartsDom.getBoundingClientRect();
  const echartsDomStyle = getComputedStyle(echartsDom);
  const echartsDomBorder = parseFloat(echartsDomStyle.borderRightWidth) + parseFloat(echartsDomStyle.borderLeftWidth);
  const tipContainerW = tipContainerReact.width;
  const tipContainerH = tipContainerReact.height;
  const { offsetX, offsetY } = param.event;
  let tipLeft = 0;
  let tipTop = 0;
  let tipBottom = 0;
  let rightOffset = echartsDomRect.width - 2 * echartsDomBorder - offsetX - distanceX;
  let bottomOffset = echartsDomRect.height - offsetY + distanceX;
  
  // 判断右侧是否可以放下tips
  if (tipContainerW < rightOffset) {
    tipLeft = offsetX + distanceX + 'px';
    tipTop = offsetY - distanceY + 'px';
    tipBottom = 'unset';
  } else {
    // 图表容器左侧部分
    if (offsetX < (echartsDomRect.width / 2)){
      if (tipContainerW < rightOffset) {
        tipLeft = distanceX + 'px';
        tipTop = 'unset';
        tipBottom = bottomOffset + 'px';
      }else{
        tipLeft = (echartsDomRect.width - tipContainerW) / 2 + 'px';
        tipTop = 'unset';
        tipBottom = bottomOffset + 'px';
      }
    } else {
      if (tipContainerW > rightOffset) {
        if (tipContainerW < offsetX) {
          tipLeft = offsetX - tipContainerW - distanceX + 'px';
          tipTop = offsetY - distanceY + 'px';
          tipBottom = 'unset';
        } else {
          tipLeft = distanceX + 'px';
          tipTop = 'unset';
          tipBottom = bottomOffset + 'px';
        }
      }
    }
  }

  tipContainer.style.cssText = `
    position: absolute;
    display: inline-block;
    word-break: break-all;
    opacity: '1';
    padding: 8px;
    top:${tipTop};
    left:${tipLeft};
    bottom:${tipBottom};
    color: ${Token.config.tooltipTextColor};
    font-size: ${Token.config.tooltipTextFontSize};
    background: ${Token.config.tooltipBg};
    max-width:calc(100% - ${2*distanceX}px);
    box-shadow:0 ${Token.config.tooltipShadowOffsetY}px
    ${Token.config.tooltipShadowBlur}px 0 ${Token.config.tooltipShadowColor};
  `
}

// 坐标轴文本添加tip提示
function axistip(echartsDom, echartsIns, eChartOption, axistip) {
  if (!axistip) return;
  if (isBoolean(axistip)) {
    axistip = {};
    axisType.forEach(item => {
      axistip[item] = true;
    })
  }
  if(allFalse(axistip)) return;
  Object.keys(axistip).forEach(item => {
    if(!axistip[item]) return;
    setAxisTriggerEvent(eChartOption, item);
  })
  // 气泡容器
  const tipContainer = document.createElement('div');
  tipContainer.className = 'labeltip';
  tipContainer.style.position = 'absolute';
  tipContainer.style.display = 'inline-block';
  tipContainer.style.opacity = '0';
  tipContainer.style.top = 0;
  tipContainer.style.left = 0;
  let textFormatter = {};
  echartsIns.on('mousemove', (param) => {
    let type = param.componentType;
    if(param.name){
      tipContainer.textContent = param.name;
    }else{
      if (isArray(eChartOption[type])) {
        eChartOption[type].forEach(item=>{
          textFormatter[type] = undefined;
          if(item.axisLabel.formatter && typeof item.axisLabel.formatter === 'function') {
            textFormatter[type] = item.axisLabel.formatter
          }
        })
      }else{
        textFormatter[type] = undefined;
        if(eChartOption?.axisLabel?.formatter && typeof eChartOption?.axisLabel?.formatter === 'function') {
          textFormatter[type] = eChartOption.axisLabel.formatter
        }
      }
      tipContainer.textContent = textFormatter[type] !== undefined ? textFormatter[type](param.value) : param.value;
    }
    if(axisType.indexOf(type) !== -1) {
      setPosition(tipContainer, echartsDom, param);
    }
  });
  echartsIns.on('mouseout', (param) => {
    textFormatter = {};
    if (axisType.indexOf(param.componentType) !== -1) {
      tipContainer.textContent = '';
      tipContainer.style.cssText = `
        opacity:0;
        padding: 8px;
        font-size: ${Token.config.tooltipTextFontSize};
        position: absolute;
        display: inline-block;
        word-break: break-all;
        top: 0;
        left: 0;
      `;
    }
  })
  const labeltipDom = echartsDom.getElementsByClassName('labeltip')[0];
  if(labeltipDom) {
    echartsDom.removeChild(labeltipDom);
  }
  echartsDom.appendChild(tipContainer);
}

export default axistip;

