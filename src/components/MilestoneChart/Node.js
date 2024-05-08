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
import Layout from './Layout';
import { insertIcon } from './insertIcon';
import defendXSS from '../../util/defendXSS';
import tips from '../../util/tips';
import { insertSvg } from './insertSvg';
export const NODE_ID_PREFIX = 'mc-node-';

export default class NodeManager {
  // 节点数据
  data;
  layoutNodes;
  dom;
  // 节点容器
  scaleCon = null;
  NODE_ID_PREFIX = 'mc-node-';
  defaultColor = '#F3F3F3';
  
  constructor(data, option, container) {
    this.option = option;
    this.dom = container;
    this.render = option.render;
    
  }

  create(data, option, Theme) {
    this.option.Theme = Theme;
    this.scaleCon = this.dom.getElementsByClassName('mc-scales')[0];
    this.layoutNodes = new Layout(data, option, this.dom);
    
    this.createNodes(this.option, this.scaleCon);
    this.computePitch();
    if (this.option.assign == 'date') {
      this.option = this.layoutNodes.computePositions(this.option);
    } else {
      this.option = this.layoutNodes.computeAveragePositions(this.option);
    }
    this.layoutNodes.setTipsPosition(this.option);
    if (this.option.current) this.createCurrentNode(this.option.current, this.dom.getElementsByClassName('mc-current')[0]);
    
  }

  /**
   * 创建tooltip节点
   */
  createTooltipDom(nodeDom, data) {
    let tooltipDom = document.createElement('div');
    tooltipDom.classList.add('mc-scales-item-tooltip');
    if (this.option.tooltip) {
      this.option.tooltip(tooltipDom, data);
    }
    else {
      const date = new Date(data.date * 1000); // 将时间戳转换成毫秒
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      tooltipDom.textContent = year + '/' + month + '/' + day;
    }
    nodeDom.appendChild(tooltipDom);
  }

  /**
   * 创建节点
   */
  createNode(ndata,nextData,size) {
    let { id, render, date,  icon, tilte, tooltip, prompt, promptIcon } = ndata;
    if (!date) tips.error('The second parameter date is required');
    this.getDefBg(ndata,this.option.Theme);
    let nodeDom = document.createElement('div');
    let lineBg = nextData && nextData.line && (nextData.line.color || nextData.line.defColor) || ndata.line.defColor;
    let lineHeight = nextData && nextData.line && nextData.line.height ||8;
    let classList = [];
    let tooltipClass = tooltip && tooltip.show ? 'tooltip' : '';
    nodeDom.innerHTML = `<div class="mc-scales-item-line" style="background:${lineBg};height:${lineHeight}px;width: ${ndata.width || ndata.tipsWidth + 20}px"></div>
                         <div class='mc-scales-item-icon ${tooltipClass}' style="width:${size}px;height:${size}px;">
                         </div>`;
    nodeDom.style.left = ndata.x + 'px';
    classList.push('mc-scales-item');
    const type = icon && icon.name && icon.name.split('-') || ['done', 'main'];
    classList.push(type[0]);
    classList.push(type[1]);
    if (ndata.position) classList.push(ndata.position);
    if (this.option.line) classList.push('line');
    nodeDom.classList.add(...classList);
    nodeDom.id = this.NODE_ID_PREFIX + id;
    const iconDom = nodeDom.getElementsByClassName('mc-scales-item-icon')[0];
    insertSvg(iconDom, { theme: this.option.theme, icon}, this.option.Theme);
    // 高亮标注
    if (prompt) {
      let promptDom = document.createElement('img');
      promptDom.classList.add('prompt');
      promptDom.src = promptIcon ? promptIcon : insertIcon('prompt');
      iconDom.appendChild(promptDom);
    }
    // 悬浮显示
    if (tooltip && tooltip.show) {
      this.createTooltipDom(nodeDom, ndata);
    }
    // 节点信息
    let renderFun = render || this.render;
    let tipsDom = this.createTips(renderFun, ndata);
    tipsDom && nodeDom.appendChild(tipsDom);
    return nodeDom;
  }

  getDefBg(data,Theme) {
    let color = '';
    const name = data.icon.name || '';
    switch (name) {
      case 'success':
          color = Theme.config.colorState.colorSuccess;
          break;
      case 'done':
          color = Theme.config.colorState.colorSuccess;
          break;
      case 'doing':
          color = Theme.config.colorState.colorInfo;
          break;
      case 'todo':
          color = Theme.config.colorState.colorNone;
          break;
      default:
          color = Theme.config.colorState.colorNone;
          break;
    }
    if (!data.line) data.line = {};
    data.line.defColor = color;
    data.icon.defColor = color;
  }

  /**
   * 创建节点, 用户数据是否包含render
   */
  createTips(renderFun, ndata) {
    let tipsDom = document.createElement('div');
    tipsDom.style['border-color'] = ndata.line && (ndata.icon.color || ndata.icon.defColor) || this.defaultColor;
    tipsDom.classList.add('mc-scales-item-tips');
    if (renderFun) {
      renderFun(tipsDom, ndata);
      this.createTipsDom(tipsDom, ndata);
    }else {
      const date = new Date(ndata.date * 1000); // 将时间戳转换成毫秒
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      tipsDom.textContent = year + '/' + month + '/' + day;
      this.createTipsDom(tipsDom, ndata);
    }
    return tipsDom;
  }

  /**
   * 创建节点dom
   */
  createTipsDom(tipsDom, data) {
    // 克隆一个元素用于计算宽高
    let cloneNode = tipsDom.cloneNode(true);
    cloneNode.style.opacity = 0;
    document.body.appendChild(cloneNode);
    // 获取div的宽度和高度
    const prevWidth = cloneNode.offsetWidth;
    // 移除div元素
    document.body.removeChild(cloneNode);
    data.tipsWidth = prevWidth;
    return tipsDom;
  }

  /**
   * 根据用户传入数据生成节点Dom，并插入进container中
   */
  createNodes(option, scaleCon) {
    option.data.forEach((node,index) => {
      let nodeDom = this.createNode(node,option.data[index+1], node.icon && node.icon.size || option.itemStyle && option.itemStyle.iconSize || 12);
      node.dom = nodeDom;
      scaleCon.appendChild(nodeDom);
    });
    this.initHoverEvent();
    this.initItemClickEvent();
    this.setActions();
  }

  setActions() {
    
    const domWidth = this.dom.offsetWidth;
    const contentWidth = this.dom.getElementsByClassName('mc-content')[0].scrollWidth;
    if (domWidth < contentWidth) {
      const prevDom = this.dom.getElementsByClassName('mc-btn-prev')[0];
      const nextDom = this.dom.getElementsByClassName('mc-btn-next')[0];
      prevDom.style.display = 'block';
      nextDom.style.display = 'block';
      this.initHandoffEvent();
    }
  }

  //  创建今天节点
  createCurrentNode(current, dom) {
    let className = 'top';
    const data = this.option.data;
    data.forEach((item, index) => {
      let prev = data[index - 1];
      const tipsWidth = item.dom && item.dom.getElementsByClassName('mc-scales-item-tips')[0].scrollWidth || 0;
      const prevTipsWidth = prev && prev.dom.getElementsByClassName('mc-scales-item-tips')[0].scrollWidth || 0;
      const itemPos = item.position.split('-');
      const prevPos = prev && prev.position.split('-') || '';
      if (current.x === item.x) {
        current.x = item.x;
        if (itemPos[0] === 'up') {
          className = 'bottom';
        }
      }
      else if ((prev && prev.x < current.x) && current.x < item.x) {
        current.x = prev.x + ((current.date - prev.date) / this.option.dateSpan * this.option.newConWidth);
        if (prevPos[0] === 'up' && current.x < prev.x + prevTipsWidth) {
          className = 'bottom';
        }
        if (itemPos[0] === 'up' && current.x > item.x - tipsWidth) {
          className = 'bottom';
        }
      }
    });
    dom.classList.add(className);
    dom.getElementsByClassName('mc-current-text')[0].textContent = current.tip;
    dom.style.left = current.x + 'px';
    insertSvg(dom, { theme: this.option.theme, icon:{src: current.icon || '' ,name: 'current'}}, this.option.Theme);
  }

  // 绑定hover事件
  initHoverEvent() {
    let elements = this.scaleCon.getElementsByClassName('tooltip');
    Array.prototype.forEach.call(elements, (element) => {
      // 鼠标滑入
      element.onmouseover = () => {
        let parentNode = element.parentNode;
        let tooltipDom = parentNode.getElementsByClassName('mc-scales-item-tooltip')[0];
        tooltipDom.style.display = 'block';
        element.style.zIndex = 2;
        let x = parentNode.offsetLeft;
        tooltipDom.style.left = '-' + ((x - tooltipDom.offsetWidth / 2) >= 0 ? tooltipDom.offsetWidth / 2 : 0) + 'px';
        tooltipDom.style.top = 'calc(50% - ' + (tooltipDom.offsetHeight / 2 + 24) + 'px)';
      };
      // 鼠标滑出
      element.onmouseleave = () => {
        let parentNode = element.parentNode;
        let tooltipDom = parentNode.getElementsByClassName('mc-scales-item-tooltip')[0];
        tooltipDom.style.display = 'none';
      };
    });
  }

  // 绑定click事件
  initItemClickEvent() {
    let elements = this.scaleCon.getElementsByClassName('mc-scales-item');
    this.option.data.forEach((item, index) => {
      elements[index].onmousedown = () => {
        this.option.onClick && this.option.onClick(elements[index], item);
      };
    });
  }

  // 绑定前后切换click事件
  initHandoffEvent() {
    let position = 0;
    let prev = false;
    let next = true;
    let num = this.option.newPitch;
    const alignment = this.option.alignment;
    num = alignment === 'left' ? 30 : alignment === 'right' ? num[0] + 10 : num;
    const domWidth = this.dom.offsetWidth;
    const contentWidth = this.dom.getElementsByClassName('mc-content')[0].scrollWidth;
    const contentDom = this.dom.getElementsByClassName('mc-content')[0];
    const prevDom = this.dom.getElementsByClassName('mc-btn-prev')[0];
    const nextDom = this.dom.getElementsByClassName('mc-btn-next')[0];
    prevDom.onmousedown = () => {
      if (!prev) return;
      next = true;
      position -= 0.5;
      let left = position * domWidth;
      const newnum = alignment == 'center' ? num[0] : num;
      if (left <= newnum) {
        left = 0;
        position = 0;
        prev = false;
      };
      contentDom.style.left = -left +'px'
    };
    nextDom.onmousedown = () => {
      if (!next) return;
      prev = true;
      position += 0.5;
      let left = position * domWidth;
      const newnum = alignment == 'center' ? num[1] : num;
      if (domWidth + left > contentWidth) {
        left = contentWidth - domWidth + newnum;
        next = false;
      }
      contentDom.style.left = -left +'px'
    };
  }

  computePitch() {
    let num = [];
    let padding = '';
    const len = this.option.data.length;
    if (this.option.alignment === 'left') {
      num = this.option.data[len - 1].tipsWidth + 20;
      padding = '0 ' + num + 'px' + ' 0 20px';
      num = [num];
    } else if (this.option.alignment === 'right') {
      num = this.option.data[0].tipsWidth + 20;
      padding = '0 20px 0 ' + num + 'px';
      num = [num];
    } else {
      num = [this.option.data[0].tipsWidth / 2 , this.option.data[len - 1].tipsWidth / 2 + 20];
      padding = '0 '+ num[1]+ 'px'+' 0 '+ num[0]+'px';
    }
    this.option.padding = padding;
    this.option.newPitch = num;
  }
}
