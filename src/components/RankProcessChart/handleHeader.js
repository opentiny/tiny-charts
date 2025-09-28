import { createSvgElement, calcColumnX, updateSvgs } from './utils.js';
import { HEADER, TEXT } from './constants.js';
import { getHeaderStyles } from './style.js';
import chartToken from './chartToken.js';

class HeaderRow {
  constructor(option) {
    const { titleName, valueName, percentName, headerWidth } = option;

    this.headerFields = [titleName, valueName, percentName];
    this.headerWidth = headerWidth;
    this.headerHeight = HEADER.HEIGHT;
    this.padding = TEXT.PADDING;

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
      this.styles.getHeaderBg(this.headerWidth, this.headerHeight),
      this.headerRow
    );
  }

  renderText() {
    // 存放svg文本元素
    this.textElements = [];
    
    this.textContainer = createSvgElement(
      'g', 
      this.styles.getHeaderContainer(this.headerHeight),
      this.headerRow
    );

    const textStyles = this.styles.getHeaderText(this.columnX);
    this.headerFields.forEach((text, index) => {
      const content = createSvgElement(
        'text', 
        textStyles[index],
        this.textContainer
      );
      content.textContent = text;
      this.textElements.push(content);
    });
  }

  // 重新计算布局
  recalculateLayout(width) {
    this.headerWidth = width;
    this.columnX = calcColumnX(TEXT.FLEX_SPACE, width, this.padding);
  }

  // 自适应计算布局
  resize(newWidth) {
    this.recalculateLayout(newWidth);

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
    
    // 更新文本字段
    const newFields = [titleName, valueName, percentName];
    this.headerFields = newFields;
    
    // 更新文本内容
    this.textElements.forEach((text, index) => {
      text.textContent = this.headerFields[index];
    });
    
    // 如果宽度变化，调用resize更新布局
    this.resize(headerWidth);

  }

}

export function renderHeader(svg, containerWidth, titleName, valueName, percentName) {
  // 参数验证
  if (!svg || !containerWidth || containerWidth <= 0) {
    return null;
  }

  const headerRow = new HeaderRow({
    titleName: titleName || '名称',
    valueName: valueName || '数值',
    percentName: percentName || '百分比',
    headerWidth: containerWidth,
  });

  const headerGroup = headerRow.render();
  svg.appendChild(headerGroup);
  return headerRow;
}
