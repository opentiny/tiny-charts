import { createSvgElement, calcColumnX, updateSvgs } from './utils.js';
import { HEADER_HEIGHT, TEXT } from './constants.js';
import chartToken from './chartToken';

class HeaderRow {
  constructor(option) {
    const { titleName, valueName, percentName, headerWidth } = option;
    
    this.headerFields = [titleName, valueName, percentName];
    this.headerWidth = headerWidth;
    this.headerHeight = HEADER_HEIGHT;
    this.padding = TEXT.padding;

    // 计算文本的X坐标位置
    this.columnX = calcColumnX(TEXT.flex_space, this.headerWidth, this.padding);
  }

  render() {
    this.headerRow = createSvgElement('g');

    this.renderBg();   //渲染首部背景
    this.renderText(); //渲染首部文本

    return this.headerRow;
  }

  renderBg() {
    this.headerBg = createSvgElement('rect', {
      width: this.headerWidth,
      height: this.headerHeight,
      fill: chartToken.header.bgColor,
    });
    this.headerRow.appendChild(this.headerBg);
  }

  renderText() {
    // 存放svg文本元素
    this.textElements = [];
    
    this.textContainer = createSvgElement('g', {
      transform: `translate(0, ${this.headerHeight * 0.65})`
    });
    this.headerRow.appendChild(this.textContainer);

    this.headerFields.forEach((text, index) => {
      const content = createSvgElement('text', {
        x: this.columnX[index],
        'font-size': chartToken.fontSize,
        'font-weight': 'bold',
        fill: chartToken.header.textColor
      });
      content.textContent = text;
      this.textContainer.appendChild(content);
      this.textElements.push(content);
    });
  }

  // 自适应计算布局
  resize(newWidth) {
    this.headerWidth = newWidth;
    this.columnX = calcColumnX(TEXT.flex_space, newWidth, this.padding);

    updateSvgs([
      { el: this.headerBg, attrs: { width: newWidth } },
      ...this.textElements.map((text, index) => ({
        el: text,
        attrs: { x: this.columnX[index] }
      }))
    ]);
  }

}

export function renderHeader(svg, containerWidth, titleName, valueName, percentName) {
  const headerRow = new HeaderRow({
    titleName,
    valueName,
    percentName,
    headerWidth: containerWidth,
  });

  const headerGroup = headerRow.render();
  svg.appendChild(headerGroup);
  return headerRow;
}
