// 字号基础数值
const basicFont = 14;
// 字号算法函数
const getFontSizes = base => {
  const fontSizes = new Array(10).fill(null).map((_, index) => {
    const i = index - 1;
    const baseSize = base * 2.71828 ** (i / 5);
    const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
    return Math.floor(intSize / 2) * 2;
  });
  fontSizes[1] = base;
  return fontSizes.map(size => {
    const height = size + 8;
    return {
      size,
      lineHeight: height / size,
    };
  });
};
const getFont = fontSize => {
  const fontSizePairs = getFontSizes(fontSize);
  const fontSizes = fontSizePairs.map(pair => pair.size);
  const lineHeights = fontSizePairs.map(pair => pair.lineHeight);
  return {
    fontSizeSM: fontSizes[0], // 12
    fontSize: fontSizes[1], // 14
    fontSizeLG: fontSizes[2], // 16
    fontSizeXL: fontSizes[3], // 20
    lineHeight: lineHeights[1], // 1.57
    lineHeightLG: lineHeights[2], // 1.5
    lineHeightSM: lineHeights[0], // 1.67
  };
};
// 字号梯度变量
const font = {
  ...getFont(basicFont),
};
export default font;
