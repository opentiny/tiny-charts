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
import { getTextHeight } from './dom';
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
                totalHeight += calculateRichTextLineHeight(line, style);
            });
        } else {
            // 单行文本处理
            totalHeight = calculateRichTextLineHeight(text, style);
        }
    }
    return totalHeight;
}

// 解析富文本的文本和单位
function parseRichTextContent(textContent) {
    if (typeof textContent !== 'string' || !textContent.includes('|')) return {};
    const result = {};
    const regex = /{(\w+)\|([^}]*)}/g;
    let match;
    while ((match = regex.exec(textContent)) !== null) {
        result[match[1]] = match[2];
    }
    return result;
}

// 计算单行富文本的高度
function calculateRichTextLineHeight(line, style) {
    let maxHeight = 0;
    const parts = line.split('}');

    parts.forEach(part => {
        if (part.includes('|')) {
            const [name, value] = part.split('|');
            const partStyleName = name.replace(/[{}]/g, '').trim();
            const partFontSize = extractRichTextStyle(style.rich, partStyleName, 'fontSize') || style.fontSize;
            const partLineHeight = extractRichTextStyle(style.rich, partStyleName, 'lineHeight') || style.lineHeight || partFontSize;
            const partPadding = extractRichTextStyle(style.rich, partStyleName, 'padding');
            const partHeight = getTextHeight(value, partFontSize, partLineHeight, partPadding);
            maxHeight = Math.max(maxHeight, partHeight);
        }
    });

    return maxHeight;
}

// 提取富文本中的指定样式属性
function extractRichTextStyle(richStyles, styleName, attrName) {
    if (!richStyles || !richStyles[styleName]) {
        return null;
    }
    const attrValue = richStyles[styleName][attrName];
    return attrValue !== undefined ? (isNaN(attrValue) ? attrValue : parseFloat(attrValue)) : null;
}

export {
    isRichText,
    parseRichText,
    parseRichTextContent
}