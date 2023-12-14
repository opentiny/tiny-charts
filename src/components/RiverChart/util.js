// 创建svg元素
function renderSvgDom(type, property) {
  const version = 'http://www.w3.org/2000/svg';
  const svgEl = document.createElementNS(version, type);
  if (property) {
    const keys = Object.keys(property);
    keys.forEach(key => {
      svgEl.setAttribute(key, property[key]);
    });
  }
  return svgEl;
}

// 设置样式
function setStyle(target, key, value) {
  target.style[key] = value;
}

// 创造元素
function createEl(elName) {
  return document.createElement(elName);
}

// 添加元素
function appendEL(parNode, chiNode) {
  parNode.appendChild(chiNode);
}

// 判断数组
function isArray(data) {
  return Object.prototype.toString.call(data) === '[object Array]' ? true : false;
}

// 给指定dom添加class类名，classList为数组类型
function addClass(dom, classes) {
  if (isArray(classes)) {
    classes.forEach(cls => {
      dom.classList.add(cls);
    });
  } else {
    dom.classList.add(classes);
  }
}

// 给指定dom添加或更改属性
function attr(dom, key, value) {
  dom.setAttribute(key, value);
}

function getPathD(point) {
  const { x1, y1, x2, y2, x3, y3, x4, y4 } = point;
  // 两个节点之间的距离用来算贝塞尔曲线的控制点
  const distance = (x3 - x1) / 2;

  let path;

  // 前后节点在同一水平线，高度也相等
  if (y1 === y3 && y2 === y4) {
    path = `M${x1} ${y1} L${x3} ${y3} L${x4} ${y4} L${x2} ${y2} L${x1} ${y1}Z`;
  }

  // 前后节点顶部同一水平线
  if (y1 === y3 && y2 !== y4) {
    path = `M${x1} ${y1} L${x3} ${y3} L${x4} ${y4} C${x4 - distance} ${y4} ${
      x2 + distance
    } ${y2} ${x2} ${y2} L${x1} ${y1}Z`;
  }

  // 前后节点底部同一水平线
  if (y1 !== y3 && y2 === y4) {
    path = `M${x1} ${y1} C${x1 + distance} ${y1} ${
      x3 - distance
    } ${y3} ${x3} ${y3} L${x4} ${y4} L${x2} ${y2} L${x1} ${y1}Z`;
  }

  // 前后节点交错重合
  if (y1 !== y3 && y2 !== y4) {
    path = `M${x1} ${y1} C${x1 + distance} ${y1} ${x3 - distance} ${y3} ${x3} ${y3} L${x4} ${y4} C${
      x4 - distance
    } ${y4} ${x2 + distance} ${y2} ${x2} ${y2} L${x1} ${y1}Z`;
  }

  return path;
}

function getSmoothPathD(point, height) {
  const { x1, y1, x3, y3 } = point;
  // 两个节点之间的距离用来算贝塞尔曲线的控制点
  const distance = (x3 - x1) / 2;
  let path;
  if (y1 === y3) {
    path = `M${x1} ${y1 - height / 2} L${x3} ${y3 - height / 2} L${x3} ${y3 + height / 2} L${x1} ${y1 + height / 2}Z`;
  } else {
    path = `M${x1} ${y1} C${x1 + distance} ${y1} ${x3 - distance} ${y3} ${x3} ${y3}`;
  }
  return path;
}

function setChartSize(svgContainer, nodeContainer, option) {
  const { width, height } = option;
  if (width) {
    setStyle(svgContainer, 'width', `${width}px`);
    setStyle(nodeContainer, 'width', `${width}px`);
  }
  if (height) {
    setStyle(svgContainer, 'height', `${height}px`);
    setStyle(nodeContainer, 'height', `${height}px`);
  }
}

function initSvgContainer(wrapper, _this) {
  const svgEl = renderSvgDom('svg');
  _this.svgElement = svgEl;
  attr(svgEl, 'xmlns', 'http://www.w3.org/2000/svg');
  attr(svgEl, 'version', '1.1');
  attr(svgEl, 'width', '100%');
  attr(svgEl, 'height', '100%');
  attr(svgEl, 'class', 'rc_svg_container');
  appendEL(wrapper, svgEl);
}

function initNodeContainer(wrapper, _this) {
  const nodeContainerEl = createEl('div');
  _this.nodeContainer = nodeContainerEl;
  addClass(nodeContainerEl, 'rc_node_container');
  appendEL(wrapper, nodeContainerEl);
}

function initWrapper(container, _this) {
  const wrapperEl = createEl('div');
  _this.wrapper = wrapperEl;
  addClass(wrapperEl, 'rc_wrapper');
  appendEL(container, wrapperEl);
  initSvgContainer(wrapperEl, _this);
  initNodeContainer(wrapperEl, _this);
}

export {
  setChartSize,
  renderSvgDom,
  setStyle,
  createEl,
  appendEL,
  addClass,
  attr,
  getPathD,
  getSmoothPathD,
  initWrapper,
};
