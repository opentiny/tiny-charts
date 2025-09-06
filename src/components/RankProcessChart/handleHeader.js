import { createSvgElement, calcColumnX, updateSvgs } from './utils.js';
import { HEADER_HEIGHT, TEXT } from './constants.js';
import { getHeaderStyles } from './style.js';
import chartToken from './chartToken.js';

class HeaderRow {
  constructor(option) {
    const { titleName, valueName, percentName, headerWidth } = option;
    
    this.headerFields = [titleName, valueName, percentName];
    this.headerWidth = headerWidth;
    this.headerHeight = HEADER_HEIGHT;
    this.padding = TEXT.PADDING

    // 获取样式配置
    this.styles = getHeaderStyles(chartToken);
    // 计算文本的X坐标位置
    this.columnX = calcColumnX(TEXT.FLEX_SPACE, this.headerWidth, this.padding);
  }

  render() {
    this.headerRow = createSvgElement('g');

    this.renderBg();   // 渲染首部背景
    this.renderText(); // 渲染首部文本

    return this.headerRow;
  }

  renderBg() {
    this.headerBg = createSvgElement(
      'rect', 
      this.styles.getHeaderBg(this.headerWidth, this.headerHeight)
    );
    this.headerRow.appendChild(this.headerBg);
  }

  renderText() {
    // 存放svg文本元素
    this.textElements = [];
    
    this.textContainer = createSvgElement(
      'g', 
      this.styles.getHeaderContainer(this.headerHeight)
    );
    this.headerRow.appendChild(this.textContainer);

    const textConfigs = this.styles.getHeaderText(this.columnX);
    this.headerFields.forEach((text, index) => {
      const content = createSvgElement(
        'text', 
        textConfigs[index]
      );
      content.textContent = text;
      this.textContainer.appendChild(content);
      this.textElements.push(content);
    });
  }

  // 自适应计算布局
  resize(newWidth) {
    this.headerWidth = newWidth;
    this.columnX = calcColumnX(TEXT.FLEX_SPACE, newWidth, this.padding);

    updateSvgs([
      { 
        el: this.headerBg, 
        attrs: this.styles.updateHeaderBg(newWidth) 
      },
      ...this.textElements.map((text, index) => ({
        el: text,
        attrs: this.styles.updateHeaderText(this.columnX)[index]
      }))
    ]);
  }

  // 更新主题样式
  updateTheme(latestChartToken) {
    this.styles = getHeaderStyles(latestChartToken);
    const newStyle = this.styles.getThemeUpdates();
    
    updateSvgs([
      { 
        el: this.headerBg, 
        attrs: newStyle.headerBg 
      },
      ...this.textElements.map(text => ({
        el: text,
        attrs: newStyle.headerText
      }))
    ]);
  }

  // 更新内容
  updateText(options) {
    const { titleName, valueName, percentName, headerWidth } = options;
    
    const newFields = [titleName, valueName, percentName];
    this.headerFields = newFields;
    
    // 如果宽度变化，需要重新计算列位置
    if (headerWidth && headerWidth !== this.headerWidth) {
      this.headerWidth = headerWidth;
      this.columnX = calcColumnX(TEXT.FLEX_SPACE, headerWidth, this.padding);
      
      // 更新背景宽度和文本位置
      updateSvgs([
        { 
          el: this.headerBg, 
          attrs: this.styles.updateHeaderBg(this.headerWidth) 
        },
        ...this.textElements.map((text, index) => ({
          el: text,
          attrs: this.styles.updateHeaderText(this.columnX)[index]
        }))
      ]);
    }
    
    // 更新文本内容
    this.textElements.forEach((text, index) => {
      text.textContent = this.headerFields[index];
    });
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
