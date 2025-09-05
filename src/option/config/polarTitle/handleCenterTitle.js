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
import { getTextHeight, removeOuterSpaces, getTextWidth } from '../../../util/dom';
import { isRichText, parseRichText, parseRichTextContent } from '../../../util/richText';
import { percentToDecimal } from '../../../util/math';

export default function updateTitle(position, chartInstance, baseOption, iChartOption) {
  // 去除空格影响获取纯洁的圆环主副文本
  if (typeof baseOption.title?.text === 'string') {
    baseOption.title.text = removeOuterSpaces(baseOption.title.text);
  }
  if (typeof baseOption.title?.subtext === 'string') {
    baseOption.title.subtext = removeOuterSpaces(baseOption.title.subtext);
  }
  // 只要存在title下面的这些属性都有默认值
  const textContent = baseOption.title.text;
  const subtextContent = baseOption.title.subtext;
  const textStyle = baseOption.title.textStyle;
  const subtextStyle = baseOption.title.subtextStyle;
  // 自适应标志
  const adaptive = iChartOption?.adaptive;
  // 暂时用来只开放华为云主题
  const theme = iChartOption?.theme;

  // 计算自适应的中心文本大小 
  let fontSize;
  if (adaptive && theme.includes('cloud')) {
    // 外直径
    const circleDiameter = position.radius * 2;
    // 富文本计算字号
    if (isRichText(textContent)) {
      // 解析富文本 {a|225}{b|GB} -> { a: '225', b: 'GB' }
      const parsed = parseRichTextContent(textContent);
      const keys = Object.keys(parsed);
      const values = Object.values(parsed);

      // 使用解析后的文本重新计算字体大小
      fontSize = calculateFontSize(circleDiameter, values, iChartOption.barWidth);

      // 根据主字体大小计算上padding使文本和单位底对齐
      function getTopPadding(fontSizeMain) {
        return Math.max(0, Math.round(0.5 * fontSizeMain - 6)); // 防止负数
      };

      function getSVGTopPadding(fontSizeMain, fontSizeUnit) {
        const diff = fontSizeMain - fontSizeUnit;
        if (diff <= 0) return 0; // 单位不比主文本大
        if (fontSizeMain >= 36) {
          return Math.round(diff * 0.7 + 2);  // 数字可微调
        } else if (fontSizeMain >= 24) {
          return Math.round(diff * 0.65 + 1.5);
        } else {
          return Math.round(diff * 0.55 + 2);
        }
      }
      let topPadding = getTopPadding(fontSize.mainFontSize);
      // svg渲染时规律不一样
      if (chartInstance?._dom?.querySelector('svg')) {
        topPadding = getSVGTopPadding(fontSize.mainFontSize, fontSize.subFontSize);
      }

      // 重新构建rich样式
      // keys.forEach((key, index) => {
      //   richStyle[key] = {
      //     fontSize: index === 0 ? fontSize.mainFontSize : fontSize.subFontSize,
      //     ...(index > 0 ? {
      //       padding: [topPadding, 0, 0, 0,]
      //     } : {})
      //   };
      // });
      const richStyle = { ...baseOption.title.textStyle.rich } || {}; // 浅拷贝，避免修改原对象

      keys.forEach((key, index) => {
        // 获取该 key 的原始样式（如果存在）
        const originalStyle = richStyle[key] || {};

        // 构建新样式：保留原始属性，只覆盖 fontSize 和 padding
        richStyle[key] = {
          ...originalStyle, // 保留原有样式：color, fontFamily, backgroundColor 等
          fontSize: index === 0 ? fontSize.mainFontSize : fontSize.subFontSize,
          // 只在非第一个（单位）添加 padding
          ...(index > 0 ? {
            padding: [topPadding, 0, 0, 0]
          } : {})
        };
      });

      baseOption.title.textStyle.rich = richStyle;
      baseOption.title.subtextStyle.fontSize = fontSize.subFontSize;
    } else {
      // 普通文本：先计算再赋值
      fontSize = calculateFontSize(circleDiameter, textContent, iChartOption.barWidth);
      baseOption.title.textStyle.fontSize = fontSize.mainFontSize;
      baseOption.title.subtextStyle.fontSize = fontSize.subFontSize;
    }
  }

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
  const centerPosition = (position && position.center && Array.isArray(position.center)) ? position.center : ['50%', '45%'];
  // 容器宽高
  const chartWidth = chartInstance?.getWidth?.();
  const chartHeight = chartInstance?.getHeight?.();
  // 圆环中心到容器的距离
  const chartCenterX = typeof centerPosition[0] === 'number' ? centerPosition[0] : chartWidth * percentToDecimal(centerPosition[0]);
  const chartCenterY = typeof centerPosition[1] === 'number' ? centerPosition[1] : chartHeight * percentToDecimal(centerPosition[1]);

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

// 动态计算圆环中心文本字号大小
export function calculateFontSize(circleSize, textContent, barWidth) {
  // 1. 计算主文本最大可用宽度（内环直径的 80%）
  const maxMainTextWidth = (circleSize - barWidth) * 0.8;

  // 2. 解析文本内容
  let mainText = '';
  let unitText = '';
  // 解析普通文本和处理后的富文本
  if (Array.isArray(textContent)) {
    [mainText, unitText] = textContent;
  } else if (typeof textContent === 'string') {
    mainText = textContent;
  } else {
    console.warn('Invalid textContent:', textContent);
    mainText = '';
  }

  // 3. 根据尺寸确定主文本候选字号区间（从大到小）
  const getMainFontSizeRange = (size) => {
    if (size > 160 && size <= 200) {
      return [48, 36, 32, 24];
    } else if (size >= 120 && size <= 160) {
      return [36, 32, 24, 18, 16];
    } else {
      return [16]; // 默认值，暂时用不上
    }
  };

  // 4. 确定副文本候选字号
  const getSubFontSize = (size) => {
    if (size >= 200) return 14;
    if (size >= 120) return 12;
    return 12;
  };

  // 5. 获取字号区间
  const mainSizes = getMainFontSizeRange(circleSize);
  const subFontSize = getSubFontSize(circleSize);

  // 6. 尝试主文本每个字号，找到第一个不超宽的
  let mainFontSize = mainSizes[0]; // 默认最大字号
  let flag = false;
  for (const size of mainSizes) {
    const mainWidth = getTextWidth(mainText, size);
    const unitWidth = unitText ? getTextWidth(unitText, subFontSize) : 0;
    const totalWidth = mainWidth + unitWidth;
    if (totalWidth <= maxMainTextWidth) {
      flag = true
      mainFontSize = size;
      break;
    }
  }
  if (!flag) mainFontSize = mainSizes[mainSizes.length - 1];
  return { mainFontSize, subFontSize };
}