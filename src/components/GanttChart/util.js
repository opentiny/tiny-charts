// 毫秒数
export const second = {
  seconds: 1000,
  minuteSeconds: 60 * 1000,
  hourSeconds: 60 * 60 * 1000,
  daySeconds: 24 * 60 * 60 * 1000,
  weekSeconds: 7 * 24 * 60 * 60 * 1000,
};

// 创造元素
export function createEl(elName) {
  return document.createElement(elName);
}

// 添加元素
export function appendEL(parNode, chiNode) {
  parNode.appendChild(chiNode);
}

// 设置类名
export function className(node, name) {
  node.className = name;
}

// 添加文本
export function appendText(node, text) {
  node.innerText = text;
}

// 添加dom节点
export function appendNode(node, nodeContent) {
  node.innerHTML = nodeContent;
}

// 设置样式
export function setStyle(target, key, value) {
  target.style[key] = value;
}
