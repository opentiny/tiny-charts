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
import { getTextHeight, removeOuterSpaces } from '../../../util/dom';
import { percentToDecimal } from '../../../util/math';

function updateTitle(position, chartInstance, baseOption, iChartOption) {
  // 获取圆环主副文本
  baseOption.title.text = removeOuterSpaces(baseOption.title.text);
  baseOption.title.subtext = removeOuterSpaces(baseOption.title.subtext);
  const textContent = baseOption.title.text;
  const subtextContent = baseOption.title.subtext;
  const textStyle = baseOption.title.textStyle;
  const subtextStyle = baseOption.title.subtextStyle;
  // fontSize有默认值60
  const textFontSize = textStyle.fontSize;
  // subtext有默认值20
  const subtextFontSize = subtextStyle.fontSize;
  // itemGap有默认值16
  const itemGap = baseOption.title.itemGap;
  // 主副文本行高默认值1
  const textLineHeight = textStyle?.lineHeight || textFontSize;
  const subtextLineHeight = subtextStyle?.lineHeight || subtextFontSize;
  // 圆环图中心位置
  const newPosition = (position && position.center && Array.isArray(position.center)) ? position.center : ['50%', '45%'];

  const chartWidth = chartInstance?.getWidth?.();
  // 容器高度
  const chartHeight = chartInstance?.getHeight?.();
  // 圆环中心到容器的距离
  const chartCenterX = chartWidth * percentToDecimal(newPosition[0]);
  const chartCenterY = chartHeight * percentToDecimal(newPosition[1]);

  // 主文本的高度
  let textHeight;
  if (isRichText(textContent)) {
    textHeight = parseRichText(textContent, textStyle);
  } else {
    textHeight = getTextHeight(textContent, textFontSize, textLineHeight);
  }

  // 副文本的高度
  let subtextHeight;
  if (isRichText(subtextContent)) {
    subtextHeight = parseRichText(subtextContent, subtextStyle);
  } else {
    subtextHeight = getTextHeight(subtextContent, subtextFontSize, subtextLineHeight);
  }
  // textAlign为center时无需计算文本宽度，自动居中对齐，-5为了修正canvas和svg的偏移
  const leftOffset = `${chartCenterX - 5}`;
  // 文本中心到顶部容器的px
  let topOffset;
  let offset = 0;
  if (chartInstance?._dom?.querySelector('svg')) {
    offset = 5;
  }
  if (textHeight !== 0 && subtextHeight !== 0) {
    // 主文本和副文本都存在
    topOffset = `${(chartCenterY - (textHeight + itemGap + subtextHeight) / 2) - offset}`;
  } else if (textHeight !== 0 && subtextHeight === 0) {
    // 只有主文本存在
    topOffset = `${(chartCenterY - textHeight / 2) - offset}`;
  } else if (textHeight === 0 && subtextHeight !== 0) {
    // 只有副文本存在
    topOffset = `${(chartCenterY - itemGap - subtextHeight / 2) - offset}`;
  }
  baseOption.title.left = iChartOption?.title?.left || leftOffset;
  baseOption.title.top = iChartOption?.title?.top || topOffset;
}

// 判断文本是否为富文本格式
function isRichText(text) {
  return typeof text === 'string' && text.includes('{');
}
// 解析富文本并计算总高度
function parseRichText(text, style) {
  let totalHeight = 0;
  if (typeof text === 'string') {
    if (text.includes('\n')) {
      // 多行文本处理
      const lines = text.split('\n');
      lines.forEach(line => {
        totalHeight += calculateLineHeight(line, style);
      });
    } else {
      // 单行文本处理
      totalHeight = calculateLineHeight(text, style);
    }
  }
  return totalHeight;
}

// 计算单行富文本的高度
function calculateLineHeight(line, style) {
  let maxHeight = 0;
  const parts = line.split('}');

  parts.forEach(part => {
    if (part.includes('|')) {
      const [name, value] = part.split('|');
      const partStyleName = name.replace(/[{}]/g, '').trim();
      const partFontSize = extractStyle(style.rich, partStyleName, 'fontSize') || style.fontSize;
      const partLineHeight = extractStyle(style.rich, partStyleName, 'lineHeight') || style.lineHeight || partFontSize;
      const partPadding = extractStyle(style.rich, partStyleName, 'padding');
      const partHeight = getTextHeight(value, partFontSize, partLineHeight, partPadding);
      maxHeight = Math.max(maxHeight, partHeight);
    }
  });

  return maxHeight;
}

// 提取富文本中的指定样式属性
function extractStyle(richStyles, styleName, attrName) {
  if (!richStyles || !richStyles[styleName]) {
    return null;
  }
  const attrValue = richStyles[styleName][attrName];
  return attrValue !== undefined ? (isNaN(attrValue) ? attrValue : parseFloat(attrValue)) : null;
}

export default updateTitle;