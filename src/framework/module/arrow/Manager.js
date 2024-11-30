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
import Arrow from './index';
import merge from '../../../util/merge';
import { hashString } from '../../../util/math';
import { attr } from '../../../util/dom';

const DEFAULT_ARROW = {
  size: 8,
  type: 'block',
  color: '#d1d1d1'
};

// 起始箭头
const MARK_POSITION_START = 'startMarker';

// 结束箭头
const MARK_POSITION_END = 'endMarker';

// 箭头的状态：默认、hover、active、disable
const MARK_STATUS_DEFAULT = 'default';
const MARK_STATUS_HOVER = 'hover';
const MARK_STATUS_ACTIVE = 'active';
const MARK_STATUS_DISABLE = 'disable';

const MARK_MANAGER_DEFAULT = 'defaultArrow';
const MARK_MANAGER_HOVER = 'hoverArrow';
const MARK_MANAGER_ACTIVE = 'activeArrow';
const MARK_MANAGER_DISABLE = 'disableArrow';

export default class ArrowManager {
  // 用户传进来的连线配置
  lineOption;
  // 是否存在起始箭头
  hasStartMarker = false;
  // 是否存在结束箭头
  hasEndMarker = false;
  // 箭头管理器
  instance = {
    startMarker: {
      [MARK_MANAGER_DEFAULT]: null,
      [MARK_MANAGER_HOVER]: null,
      [MARK_MANAGER_ACTIVE]: null,
      [MARK_MANAGER_DISABLE]: null
    },
    endMarker: {
      [MARK_MANAGER_DEFAULT]: null,
      [MARK_MANAGER_HOVER]: null,
      [MARK_MANAGER_ACTIVE]: null,
      [MARK_MANAGER_DISABLE]: null
    }
  };

  constructor(lineOption, container) {
    this.lineOption = lineOption;
    this.container = container;
    if (lineOption[MARK_POSITION_START]) {
      this.createMarkers(MARK_POSITION_START);
      this.hasStartMarker = true;
    }
    if (lineOption[MARK_POSITION_END] && lineOption[MARK_POSITION_END].type !== 'none') {
      this.createMarkers(MARK_POSITION_END);
      this.hasEndMarker = true;
    }
  }

  createMarkers(markPosition) {
    const id = hashString();
    this.lineOption[markPosition].id = id;
    // 创建默认箭头
    this.createMarker(MARK_STATUS_DEFAULT, MARK_MANAGER_DEFAULT, markPosition, id)
    // 创建hover箭头
    this.createMarker(MARK_STATUS_HOVER, MARK_MANAGER_HOVER, markPosition, `${id}-hover`)
    this.lineOption.style.active && this.createMarker(MARK_STATUS_ACTIVE, MARK_MANAGER_ACTIVE, markPosition, `${id}-active`)
    this.lineOption.style.disable && this.createMarker(MARK_STATUS_DISABLE, MARK_MANAGER_DISABLE, markPosition, `${id}-disable`)
  }

  createMarker(status, statusManager, markPosition, id) {
    let arrow = merge(DEFAULT_ARROW, this.lineOption[markPosition]);
    arrow.id = id;
    arrow.position = markPosition == MARK_POSITION_START ? 'start' : 'end';
    arrow.color = status === MARK_STATUS_DEFAULT ? this.lineOption[markPosition].color : this.lineOption.style[status].color
    this.instance[markPosition][statusManager] = new Arrow(arrow, this.container);
    this.instance[markPosition][statusManager].render();
  }

  render(path, marker, position) {
    const markerType = marker.type;
    const id = marker.id;
    attr(path, `marker-${position}`, `url(#${position}-marker-${markerType}-${id.replace(/-hover|-active|-disable/g, '')})`);
  }

  // 设置箭头到指定状态
  // status: default / hover / active / disable
  setMarker(path, position, status) {
    if(path.getAttribute(`marker-${position}`)){
      const url = path.getAttribute(`marker-${position}`).replace(/-hover|-active|-disable/g, '');
      const markerUrl = status === MARK_STATUS_DEFAULT ? url : url.replace(')', `-${status})`);
      attr(path, `marker-${position}`, markerUrl);
    }
  }

  // position: startMarker / endMarker
  getData(position) {
    return this.instance[position];
  }
  
  changeMarkerColor(path, color) {
    const url = path.firstChild.getAttribute('marker-end');
    if (!url) return;
    const str = url.replace('url(#', '');
    const markerId = str.replace(')', '')
    const markerPath = document.getElementById(markerId);
    let cloneNode = markerPath.cloneNode(true)
    let defsDom = markerPath.parentNode;
    let pathDom = cloneNode.querySelector('path');
    attr(pathDom,'stroke',color)
    attr(pathDom,'fill',color);
    let id = `${markerId}-animation-${color}`;
    cloneNode.id = id;
    !document.getElementById(id) && defsDom.appendChild(cloneNode)
    attr(path,'marker-end',`url(#${id})`)
  }
}