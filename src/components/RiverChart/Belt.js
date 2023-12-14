import { renderSvgDom, getPathD, getSmoothPathD } from './util.js';

// 河流的连接带
export default class Belt {
  // 连接带的名字
  name;
  //  起点信息
  start;
  // 终点信息
  end;
  // 当前连接带的位置
  isLeft;
  颜色;
  color;
  // 归属节点是否有子节点
  hasNodes;
  // 图表配置
  config;
  // 归属节点
  belongNode;

  constructor(node, config, isLeft) {
    this.belongNode = node;
    this.config = config;
    this.isLeft = isLeft;
    this.hasNodes = !!(node.initalNode.nodes && node.initalNode.nodes.length > 0);
  }

  init(name, start, end) {
    this.setName(name);
    this.setStart(start);
    this.setEnd(end);
  }

  setName(name) {
    this.name = name;
  }

  setStart(start) {
    this.start = start;
  }

  setEnd(end) {
    this.end = end;
  }

  //  当前的belongNode没有父子节点，颜色取决于当前belongNode.nodes的首尾node颜色
  setCommonColor() {
    const { statusColor, background } = this.config;
    let color = background;
    if (this.hasNodes) {
      const len = this.belongNode.initalNode.nodes.length;
      const itemNode = this.isLeft ? this.belongNode.initalNode.nodes[0] : this.belongNode.initalNode.nodes[len - 1];
      color = statusColor[itemNode.status];
    }
    this.color = color;
  }

  setGradientColor(parentNode) {
    const { statusColor, background } = this.config;
    const colorList = [];
    const initalNode = this.belongNode.initalNode;
    let startColor = background,
      endColor = background;
    if (initalNode.nodes && initalNode.nodes.length !== 0) {
      const itemNode = initalNode.nodes[0];
      endColor = statusColor[itemNode.status];
    }
    const parentInitalNode = parentNode.initalNode;
    if (parentInitalNode.nodes && parentInitalNode.nodes.length !== 0) {
      const len = parentInitalNode.nodes.length;
      const itemNode = parentInitalNode.nodes[len - 1];
      startColor = statusColor[itemNode.status];
    }
    const start = {
      percent: '0%',
      color: startColor,
    };
    const end = {
      percent: '100%',
      color: endColor,
    };
    colorList.push(start);
    colorList.push(end);
    this.color = colorList;
  }

  getBeltPoint(startLen) {
    const endLen = this.end.value;
    // 绘画的坐标点
    let point;
    if (this.config.smoothingCurves) {
      point = {
        // 连线的起点
        x1: this.start.x,
        y1: this.start.y + startLen / 2,
        // 连线的终点
        x3: this.end.x,
        y3: this.end.y + endLen / 2,
      };
    } else {
      point = {
        // 前置节点起点坐标
        x1: this.start.x,
        y1: this.start.y,
        // 前置节点终点坐标
        x2: this.start.x,
        y2: this.start.y + startLen,
        // 后置节点终点坐标
        x3: this.end.x,
        y3: this.end.y,
        // 后置节点终点坐标
        x4: this.end.x,
        y4: this.end.y + endLen,
      };
    }
    return point;
  }

  getLinearGradientfillColor(svgBeltGradientDefs) {
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
    svgBeltGradientDefs.appendChild(lineGradientDom);
    return `url(#linearGradient_${this.name}_node)`;
  }

  render(svgBeltPathGroup, svgBeltGradientDefs) {
    const startLen = this.start.value;
    const { smoothingCurves } = this.config;
    const point = this.getBeltPoint(startLen);
    // 获取路径
    const path = smoothingCurves ? getSmoothPathD(point, startLen) : getPathD(point);
    const isNotgarident = typeof this.color === 'string';
    let fillColor = this.color;
    if (!isNotgarident) {
      fillColor = this.getLinearGradientfillColor(svgBeltGradientDefs);
    }
    // 不是渐变色
    const pathAttributes = {
      id: `link_${this.name}_${this.isLeft ? 'left' : 'right'}`,
      fill: fillColor,
      d: path,
      opacity: isNotgarident ? 0.2 : 1,
    };
    if (smoothingCurves && !(point.y1 === point.y3)) {
      pathAttributes['fill'] = 'none';
      pathAttributes['stroke'] = fillColor;
      pathAttributes['stroke-width'] = startLen;
    }
    const pathDom = renderSvgDom('path', pathAttributes);
    svgBeltPathGroup.appendChild(pathDom);
  }
}
