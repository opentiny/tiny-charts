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
import { createEl, addClass, setStyle, renderSvgDom } from './util';
import Belt from './Belt';
// 河流的节点
export default class Node {
  // 节点的初始数据
  initalNode;
  // 节点名称
  name;
  // 节点的取值
  value;
  // 节点所在的行
  row;
  // 节点所在的列
  col;
  // 节点的配置
  config;
  //   节点的父节点
  parent = null;
  //   节点的子节点
  children = null;
  //   节点的x坐标
  x = 0;
  //   节点的y坐标
  y = 0;
  //   节点的宽
  width = 0;
  //   节点的高
  height = 0;
  //   节点的颜色
  color;
  //   节点的前后间距
  margin;
  //   连接带的集合
  belts;
  //   连接的子节点
  childLink = null;
  //   连接的父节点
  parentLink = null;

  constructor(initalNode, config, initaData, belts) {
    this.belts = belts;
    this.initalNode = initalNode;
    this.config = config;
    this.links = initaData.links;
    this.name = initalNode.name;
    this.value = initalNode.value;
    this.row = initalNode.row;
    this.col = initalNode.col;
    this.margin = config.marginWidth[this.col];
    this.setColor();
    this.setPosition(initaData.nodes);
  }

  // 初次属性赋值
  initPorperty(propertyName, value) {
    if (!this[propertyName]) this[propertyName] = value;
  }

  // 增加节点的父子节点
  addPorpertyValue(node, propertyName) {
    this.initPorperty(propertyName, []);
    this[propertyName].push(node);
  }

  setParent(node) {
    this.addPorpertyValue(node, 'parent');
  }

  setChildren(node) {
    this.addPorpertyValue(node, 'children');
  }

  // 获取列的起始坐标
  getColStart(col) {
    const { width, depthWidth } = this.config;
    // 将百分比转换为相应的数字比例
    const depthWidthNumber = depthWidth.map(item => {
      return parseInt(item) / 100;
    });
    // 获取当前的起点
    const depthWidthPercent = depthWidthNumber.slice(0, col).reduce((pre, cur) => pre + cur, 0);
    return depthWidthPercent * width;
  }

  // 找出在同一列的节点
  getColNodes(initalNodes) {
    return initalNodes.filter(node => node.col === this.col);
  }

  getX() {
    const colStart = this.getColStart(this.col);
    const x = colStart + this.margin.left;
    return x;
  }

  getY(colNodes) {
    const { nodeSpace, scaleBar, offsetY } = this.config;
    const nodes = colNodes.filter(node => node.row < this.row);
    const totalVal = nodes.reduce((pre, cur) => pre + cur.value, 0);
    const y = nodeSpace * this.row + totalVal * scaleBar + offsetY;
    return y;
  }

  getWidth(x) {
    const { space } = this.config;
    const nextColStart = this.getColStart(this.col + 1);
    const width = nextColStart - space - this.margin.right - x;
    return width;
  }

  setColor() {
    const { statusColor, background } = this.config;
    const { nodes } = this.initalNode;
    if (!nodes || (nodes && nodes.length === 0)) {
      this.color = background;
      return;
    }
    const length = nodes.length;
    const colors = [];
    const startColor = statusColor[nodes[0].status];
    const colorStart = {
      percent: '0%',
      color: startColor,
    };
    colors.push(colorStart);
    if (length - 2 > 0) {
      const step = Math.round(100 / (length - 1));
      for (let i = 0; i < length - 2; i++) {
        const itemNodeColor = statusColor[nodes[i + 1].status];
        const offset = step * (i + 1);
        const colorItemData = {
          percent: `${offset}%`,
          color: itemNodeColor,
        };
        colors.push(colorItemData);
      }
    }
    const EndColor = statusColor[nodes[length - 1].status];
    const colorEnd = {
      percent: '100%',
      color: EndColor,
    };
    colors.push(colorEnd);
    this.color = colors;
  }

  setPosition(initalNodes) {
    const { scaleBar } = this.config;
    const colNodes = this.getColNodes(initalNodes);
    const x = this.getX();
    const y = this.getY(colNodes);
    const nodeWidth = this.getWidth(x);
    const height = scaleBar * this.value;
    this.x = x;
    this.y = y;
    this.width = nodeWidth;
    this.height = height;
  }
  // 生成node的dom节点
  renderDom(nodeContainer) {
    // 公共的render方法
    const renderPar = this.config.render;
    // 节点的render方法
    const { render } = this.initalNode;
    const nodeEl = createEl('div');
    addClass(nodeEl, ['rc_node', this.name]);
    setStyle(nodeEl, 'left', `${this.x}px`);
    setStyle(nodeEl, 'top', `${this.y}px`);
    setStyle(nodeEl, 'width', `${this.width}px`);
    setStyle(nodeEl, 'height', `${this.height}px`);
    const renderFn = render || renderPar;
    if (renderFn) {
      const customNode = renderFn(this);
      if (customNode) nodeEl.appendChild(customNode);
    }
    nodeContainer.appendChild(nodeEl);
  }

  renderSvg(svgNodeGroup, svgNodeGradientDefs) {
    const { background, scaleBar } = this.config;
    let fillColor = background;
    const isNotgarident = typeof this.color === 'string';
    if (!isNotgarident) {
      // 渐变的属性
      const lineGradientAttributes = {
        id: `linearGradient_${this.name}_node`,
        x1: '0%',
        y1: '0%',
        x2: '100%',
        y2: '0%',
      };
      const lineGradientDom = renderSvgDom('linearGradient', lineGradientAttributes);
      // 生成stop
      this.color.forEach(el => {
        const stopAttributes = {
          offset: el.percent,
          'stop-color': el.color,
          'stop-opacity': 0.2,
        };
        const stopDom = renderSvgDom('stop', stopAttributes);
        lineGradientDom.appendChild(stopDom);
      });
      svgNodeGradientDefs.appendChild(lineGradientDom);
      fillColor = `url(#linearGradient_${this.name}_node)`;
    }
    const nodeAttributes = {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.value * scaleBar,
      fill: fillColor,
      opacity: isNotgarident ? 0.2 : 1,
    };
    const nodeRect = renderSvgDom('rect', nodeAttributes);
    svgNodeGroup.appendChild(nodeRect);
  }

  render(nodeContainer, svgNodeGroup, svgNodeGradientDefs) {
    this.renderDom(nodeContainer);
    this.renderSvg(svgNodeGroup, svgNodeGradientDefs);
  }
  //   获取节点之间连接的值
  getLinkVal(parName, childName) {
    let val = 0;
    this.links.forEach(item => {
      if (item.source === parName && item.target === childName) {
        val = item.value;
      }
    });
    return val;
  }

  creatBelt(node, isLeft = true) {
    return new Belt(node, this.config, isLeft);
  }

  addBelt(belt) {
    this.belts.push(belt);
  }

  //  自身的连接带
  addSelfBelt(isLeft = true, isLast = true) {
    const selfBelt = this.creatBelt(this, isLeft);
    const name = `${this.name}_${isLeft ? 'l' : 'r'}`;
    const startX = isLeft ? this.x - this.margin.left : this.x + this.width;
    const start = {
      x: startX,
      y: this.y,
      value: this.height,
    };
    const lastSpace = isLast ? 0 : this.config.space;
    const endX = isLeft ? this.x : this.x + this.width + this.margin.right - lastSpace;
    const end = {
      x: endX,
      y: this.y,
      value: this.height,
    };
    selfBelt.init(name, start, end);
    selfBelt.setCommonColor();
    this.addBelt(selfBelt);
  }

  initLink(name) {
    this.initPorperty(name, []);
  }

  addLink(name, node) {
    this[name].push(node);
  }

  getTotalLinkValue(linkValue) {
    return linkValue.reduce((cur, pre) => cur + pre.height, 0);
  }

  //   连接到父节点的连接带
  addParentBelt(islast = true) {
    const belt = this.creatBelt(this);
    const { scaleBar, marginWidth } = this.config;
    // 父节点
    const parentNode = this.parent[0];
    const parX = parentNode.x;
    const parY = parentNode.y;
    const parName = parentNode.name;
    const parWidth = parentNode.width;
    const isFistLink = !parentNode.childLink;
    const marginRight = marginWidth[this.col - 1].right;
    const isSecondDepthsNode = !parentNode.parent;
    isSecondDepthsNode ? belt.setGradientColor(parentNode) : belt.setCommonColor();
    let preChilHeight = 0;
    // 没连接过生成新的childLinkList
    if (isFistLink && isSecondDepthsNode) {
      parentNode.initLink('childLink');
    } else {
      // 连接过计算之前链接的值
      preChilHeight = this.getTotalLinkValue(parentNode.childLink);
    }
    if (isSecondDepthsNode) {
      const childLink = {
        name: this.name,
        height: this.height,
      };
      parentNode.addLink('childLink', childLink);
    }
    const name = isSecondDepthsNode ? `${parName}_${this.name}` : `${this.name}${islast ? '_l' : ''} `;
    let beltHeight = this.height;
    if (islast) {
      const linkVal = this.getLinkVal(parName, this.name);
      beltHeight = linkVal * scaleBar;
    }
    const start = {
      x: isSecondDepthsNode ? parX + parWidth + marginRight : this.x - this.margin.left,
      y: isSecondDepthsNode ? parY + preChilHeight : this.y,
      value: isSecondDepthsNode ? beltHeight : this.height,
    };
    const end = {
      x: this.x,
      y: this.y,
      value: isSecondDepthsNode ? beltHeight : this.height,
    };
    belt.init(name, start, end);
    this.addBelt(belt);
  }

  //   连接到子节点的连接带
  addChildrenBelt() {
    const { scaleBar, marginWidth, space } = this.config;
    this.children.forEach(child => {
      const belt = this.creatBelt(child, false);
      belt.setGradientColor(this);
      const linkVal = this.getLinkVal(this.name, child.name);
      const linkHeight = linkVal * scaleBar;
      const childX = child.x;
      const childY = child.y;
      const childName = child.name;
      const childMarign = marginWidth[this.col + 1].left;
      const isFirstLinkChild = !this.childLink;
      const isFistLinkPar = !child.parentLink;
      let preChildHeight = 0;
      let preParentHeight = 0;
      // 判断当前节点的子节点没有连接过父节点
      if (isFistLinkPar) {
        child.initLink('parentLink');
      } else {
        preParentHeight = this.getTotalLinkValue(child.parentLink);
      }
      // 判断节点有没有连接过子节点
      if (isFirstLinkChild) {
        this.initLink('childLink');
      } else {
        preChildHeight = this.getTotalLinkValue(this.childLink);
      }
      const name = `${this.name}_${childName}`;
      const start = {
        x: this.x + this.width,
        y: this.y + preChildHeight,
        value: linkHeight,
      };
      const end = {
        x: childX - childMarign - space,
        y: childY + preParentHeight,
        value: linkHeight,
      };
      belt.init(name, start, end);
      const childLink = {
        name: child.name,
        height: linkHeight,
      };
      this.addLink('childLink', childLink);
      const parentLink = {
        name,
        height: linkHeight,
      };
      child.addLink('parentLink', parentLink);
      this.addBelt(belt);
    });
  }
  // 生成前部的连接带
  setBeforeBelt() {
    // 根节点
    if (!this.parent && this.children) {
      this.addSelfBelt();
    }
    // 最后一层节点
    if (this.parent && !this.children) {
      this.addParentBelt();
    }
    // 中间节点
    if (this.parent && this.children) {
      this.addParentBelt(false);
    }
  }
  // 生成后部的连接带
  setAfterBelt() {
    // 根节点
    if (!this.parent && this.children) {
      this.addSelfBelt(false, false);
    }
    // 最后一层节点
    if (this.parent && !this.children) {
      this.addSelfBelt(false, true);
    }

    // 中间节点
    if (this.parent && this.children) {
      this.addChildrenBelt();
    }
  }

  // 生成对应节点的连接带
  initBelts() {
    this.setBeforeBelt();
    this.setAfterBelt();
  }
}
