// 计算一段字符的像素长度
function getTextWidth(text, fontSize = 12) {
  let result = 0;
  const ele = document.createElement('span');
  // 字符串中带有换行符时，会被自动转换成<br/>标签，若需要考虑这种情况，可以替换成空格，以获取正确的宽度
  ele.innerText = text;
  // 不同的大小和不同的字体都会导致渲染出来的字符串宽度变化，可以传入尽可能完备的样式信息
  ele.setAttribute('style', `font-size: ${fontSize}px`);
  document.documentElement.append(ele);
  result = ele.offsetWidth;
  document.documentElement.removeChild(ele);
  return result;
}

// 生成安全随机数算法
function getRandom() {
  const array = new Uint32Array(1);
  self.crypto.getRandomValues(array);
  const random = parseFloat(`0.${array[0].toString()}`);
  return random;
}


export {
  getRandom,
  getTextWidth,
}


