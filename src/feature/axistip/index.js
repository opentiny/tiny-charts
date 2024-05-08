/**
 * Copyright (c) 2022 - present TinyCharts Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import Theme from '../token';
import { isArray, isBoolean } from '../../util/type';

const distanceX = 16; // 鼠标与气泡框之间的左右偏移量
const distanceY = 24; // 鼠标与气泡框之间的上偏移量
const axisType = ['xAxis', 'yAxis'];

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
  // 判断tips 容器宽度是否小于图表容器
  if (tipContainerW < echartsDomRect.width - echartsDomBorder) {
    tipTop = offsetY - distanceY;
    // 处理临界值 >0 时向右，<0 时向左
    const reviseL = echartsDomRect.width - echartsDomBorder - offsetX - tipContainerW - distanceX;
    if (reviseL > 0) {
      tipLeft = offsetX + distanceX;
    } else {
      tipLeft = offsetX - tipContainerW - distanceX;
    }
  } else {
    tipTop = offsetY - tipContainerH - distanceY;
  }
  tipContainer.style.cssText = `
    position: absolute;
    display: inline-block;
    word-break: break-all;
    opacity: '1';
    padding: 8px;
    top:${tipTop}px;
    left:${tipLeft}px;
    color: ${Theme.config.tooltipTextColor};
    font-size: ${Theme.config.tooltipTextFontSize};
    background: ${Theme.config.tooltipBg};
    box-shadow:0 ${Theme.config.tooltipShadowOffsetY}px
    ${Theme.config.tooltipShadowBlur}px 0 ${Theme.config.tooltipShadowColor};
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
  Object.keys(axistip).forEach(item => {
    setAxisTriggerEvent(eChartOption, item);
  })
  // 气泡容器
  const tipContainer = document.createElement('div');
  tipContainer.className = 'labeltip';
  tipContainer.style.display = 'inline-block';
  echartsIns.on('mousemove', (param) => {
    tipContainer.textContent = param.value;

    if(axisType.indexOf(param.componentType) !== -1) {
      setPosition(tipContainer, echartsDom, param);
    }
  });
  echartsIns.on('mouseout', (param) => {
    if (axisType.indexOf(param.componentType) !== -1) {
      tipContainer.textContent = '';
      tipContainer.style.cssText = `
        opacity:0;
        padding: 8px;
        font-size: ${Theme.config.tooltipTextFontSize};
        position: absolute;
        display: inline-block;
        word-break: break-all;
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

