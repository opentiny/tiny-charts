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
import Tag from './Tag.js';
import Round from './type/Round';
import Direct from './type/Direct';
import Bezier from './type/Bezier';
import Circle from './type/Circle';
import Ellipse from './type/Ellipse';
import Animation from './Animation.js';
import { attr, addClass, createDom } from '../../../util/dom';

const TYPE_ROUND = 'Round';// 折线
const TYPE_BEZIER = 'Bezier';// 贝塞尔曲线
const TYPE_DIRECT = 'Direct'; // 直线
const TYPE_CIRCLE = 'Circle'; // 半圆
const TYPE_ELLIPSE = 'Ellipse'; // 椭圆

const EVENT_CLICK = 'click';// 点击事件
const EVENT_HOVER = 'hover'; // hover事件
const EVENT_MOUSEENTER = 'mouseenter'; // 鼠标移入事件
const EVENT_MOUSELEAVE = 'mouseleave'; // 鼠标移出事件

const LINE_STATUS_DEFAULT = 'default';
const LINE_STATUS_HOVER = 'hover';
const LINE_STATUS_ACTIVE = 'active';
const LINE_STATUS_DISABLE = 'disable';
const TAG_DEFAULT = {
  background: '#656565',
  color: '#fff',
  radius: '3',
  position: 0.5
};

const LineFactory = {
  [TYPE_ROUND]: Round,
  [TYPE_DIRECT]: Direct,
  [TYPE_BEZIER]: Bezier,
  [TYPE_CIRCLE]: Circle,
  [TYPE_ELLIPSE]: Ellipse
}

export default class Line {
  // 标签管理器
  TagManager;
  // 线动效管理器
  AnimationManager = {};
  // 连线是否已渲染
  hasRender;

  constructor(data, ArrowManager, option) {
    this.data = data;
    this.lineOption = data.lineOption;
    this.style = data.lineOption.style;
    this.ArrowManager = ArrowManager;
    this.option = option;
    this.hasRender = false;
  }

  // 创建连线dom
  create(d) {
    let g = createDom('g');
    let path = createDom('path');
    let id = this.data.id;
    attr(path, 'startNode', this.data.start);
    attr(path, 'endNode', this.data.end);
    attr(path, 'd', d);
    attr(path, 'id', id);
    attr(path, 'stroke', this.style.color);
    addClass(path, 'huicharts-line');
    addClass(g, 'huicharts-line-wrap');
    if (this.style.mode === 'dash') {
      attr(path, 'stroke-dasharray', 5);
    }
    attr(path, 'stroke-width', this.style.width + 'px');
    g.appendChild(path);
    // 线动效需要1s的时间，延时生成箭头
    setTimeout(() => {
      this.creatMarker(path);
    }, 1000);
    // 创建线的热区，便于hover、click触发
    this.createTriggerPath(path, g);
    // 创建tag标签
    this.createTag(this.data, g);
    return g;
  }

  createTriggerPath(path, g) {
    let triggerPath = path.cloneNode(true);
    let removeAttr = ['id', 'stroke', 'stroke-width', 'marker-end', 'marker-start'];
    // 循环遍历并删除属性
    removeAttr.forEach(function (attr) {
      triggerPath.removeAttribute(attr);
    });
    addClass(triggerPath, 'huicharts-line-trigger');
    g.appendChild(triggerPath);
  }

  // 创建Tag标签
  createTag(edge, g) {
    if (!edge.tag) return;
    let defaultStyle = Object.assign({}, this.lineOption.style.tag, edge.tag);
    edge.tag.style = Object.assign({}, TAG_DEFAULT, defaultStyle);
    this.TagManager = new Tag(edge);
    let tagDom = this.TagManager.render();
    g.appendChild(tagDom);
    this.TagManager.setPosition(g, edge);
  }

  // 创建首尾箭头
  creatMarker(path) {
    // 用户配置了startMarker，则给path增加marker-start标签，并使用对应的url
    const startMarker = this.ArrowManager.lineOption.startMarker;
    // 用户配置了endMarker，则给path增加marker-end标签，并使用对应的url
    const endMarker = this.ArrowManager.lineOption.endMarker;
    this.ArrowManager.hasStartMarker && this.ArrowManager.render(path, startMarker, 'start');
    this.ArrowManager.hasEndMarker && this.ArrowManager.render(path, endMarker, 'end');
  }

  // 拼接连线信息
  render() {
    const CreatorClass = LineFactory[this.lineOption.type || TYPE_DIRECT];
    this.lineCreator = new CreatorClass(this.data)
    const path = this.lineCreator.creatPath(this.data, this.option);
    // 设置节点为已渲染
    this.hasRender = true;
    this.AnimationManager = new Animation();
    this.path = this.create(path)
    return this.path;
  }

  // 连线绑定事件
  bindEvent(path, event, callback) {
    let linePath = path.firstChild;
    let self = this;
    if (event === EVENT_CLICK) {
      path.addEventListener(EVENT_CLICK, function () {
        if (self.style.active) {
          self.isClick = true;
          self.setActiveStatus(linePath);
        }
        callback && callback(linePath)
      });
    } else if (event === EVENT_HOVER) {
      path.addEventListener(EVENT_MOUSEENTER, function () {
        if (self.style.hover && !self.isClick) {
          self.setHoverStatus(linePath);
        }
        callback && callback(linePath)
      });
      path.addEventListener(EVENT_MOUSELEAVE, function () {
        if (self.style.hover && !self.isClick) {
          self.setDefaultStatus(linePath);
        }
      });
    }
  }

  setDefaultStatus(path) {
    this.setStatus(path, LINE_STATUS_DEFAULT);
  }

  setActiveStatus(path) {
    this.setStatus(path, LINE_STATUS_ACTIVE);
  }

  setHoverStatus(path) {
    this.setStatus(path, LINE_STATUS_HOVER);
  }

  setDisableStatus(path) {
    this.setStatus(path, LINE_STATUS_DISABLE);
  }

  // 设定连线到指定状态
  setStatus(path, status) {
    if (status === LINE_STATUS_DEFAULT) {
      attr(path, 'stroke', this.style.color);
      attr(path, 'stroke-width', this.style.width + 'px');
    } else {
      this.style[status].color && attr(path, 'stroke', this.style[status].color);
      this.style[status].width && attr(path, 'stroke-width', this.style[status].width + 'px');
    }
    this.ArrowManager.hasStartMarker && this.ArrowManager.setMarker(path, 'start', status);
    this.ArrowManager.hasEndMarker && this.ArrowManager.setMarker(path, 'end', status);
  }

  // 连线动效
  animation(option) {
    option.color && this.ArrowManager.changeMarkerColor(option.path, option.color);
    this.AnimationManager.start(option);
  }

  // 更新连线
  update(line) {
    const lineDom = document.getElementById(line.id);
    if (!lineDom) return;
    let dasharray = lineDom.getTotalLength();
    const triggerLine = lineDom.nextSibling;
    const CreatorClass = LineFactory[line.lineOption.type || TYPE_DIRECT];
    this.lineCreator = new CreatorClass(this.data)
    const path = this.lineCreator.creatPath(line, this.option);
    attr(lineDom, 'd', path);
    attr(lineDom, 'stroke-dasharray', dasharray);
    attr(lineDom, 'stroke', line.lineOption.style.color);
    if (line.lineOption.style.mode === 'dash') {
      attr(lineDom, 'stroke-dasharray', 5);
    }
    attr(lineDom, 'stroke-width', line.lineOption.style.width + 'px');
    attr(triggerLine, 'd', path);
    this.updateTransPath(line, path);
    this.updateTag(lineDom,line);
  }
  
  // 隐藏连线,一般用于折叠后，终点折叠到起点的另一边后，线仍然显示在页面中的问题
  hide(line) {
    const lineDom = document.getElementById(line.id);
    if (!lineDom) return;
    const triggerLine = lineDom.nextSibling;
    attr(lineDom, 'd', '');
    attr(triggerLine, 'd', '');
  }
  
  // 更新流光的路径
  updateTransPath(line, path) {
    let transDom = document.getElementById(`${line.id}-trans-streamer`);
    if (!transDom) return;
    for (var i = 0; i < transDom.children.length; i++) {
      var child = transDom.children[i];
      child.style.offsetPath = `path("${path}")`;
    }
  }

  // 更新tag标签位置
  updateTag(line, lineData) {
    const g = line.parentNode;
    this.TagManager?.setPosition(g, lineData);
  }

  // 删除连线
  unmount(id) {
    const line = document.getElementById(id);
    if (line) {
      line.parentNode.remove();
      this.AnimationManager.unmount()
    }
  }
}