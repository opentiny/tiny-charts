//创建svg元素
export function renderSvgDom(type, property) {
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
export function setStyle(target, key, value) {
  target.style[key] = value;
}


// 创造元素
export function createEl(elName) {
  return document.createElement(elName);
  
}

// 添加元素
export function appendEL(parNode, chiNode) {
  parNode.appendChild(chiNode);
}

// 判断数组
function isArray(data) {
  return Object.prototype.toString.call(data) === '[object Array]' ? true : false;
}

//给指定dom添加class类名，classList为数组类型
export function addClass(dom, classes) {
  if (isArray(classes)) {
    classes.forEach(cls => {
      dom.classList.add(cls);
    });
  } else {
    dom.classList.add(classes);
  }
}

//给指定dom添加或更改属性
export function attr(dom, key, value) {
  dom.setAttribute(key, value);
}
