import { createSvgElement, isChanged } from './utils.js';
import { ROW, HEADER, DEFAULT_SCROLL_INFO } from './constants.js'
import { ContentRow } from './handleRow.js'; 

class RowList { 
  constructor(options) { 
    const { data, containerWidth, scrollCallback, colorArray }= options; 

    this.data = data;
    this.containerWidth = containerWidth;
    this.colorArray = colorArray;
    this.rowHeight = ROW.HEIGHT;
    this.headerHeight = HEADER.HEIGHT;
    this.lastData = data;
    this.scrollCallback = scrollCallback;  // 保存回调函数引用
    this.visibleRows = new Map();          // 缓存可见行元素的Map
    this.startIndex = 0;                   // 当前可见起始索引
    this.endIndex = 0;                     // 当前可见结束索引
    this.visibleCount = 0;                 // 可见行数量
    this.totalHeight = 0;                  // 总内容高度

    this.init();
  }

   // 封装滚动信息的获取，确保返回时有默认值
   scrollInfo() {
      const info = this.scrollCallback();
      return {
        scrollY: info.scrollY || DEFAULT_SCROLL_INFO.SCROLLY,
        viewHeight: info.viewHeight || DEFAULT_SCROLL_INFO.VIEWHEIGHT
    }
  }

  init() {
    // 创建容器元素
    this.container = createSvgElement('g', { 
      transform: `translate(0, ${this.headerHeight})`
    }); 

    this.totalHeight = this.data.length * this.rowHeight; 
    this.visibleCount = Math.ceil(this.scrollInfo().viewHeight / this.rowHeight) + 4;
  }

  // 计算可见行范围
  calculateVisibleRange(scrollY) {
    const newStart = Math.max(0, Math.floor(scrollY / this.rowHeight)); 
    const newEnd = Math.min( 
      this.data.length, 
      newStart + this.visibleCount 
    ); 
    return { newStart, newEnd };
  }

  // 更新可见行数量
  updateVisibleRange(scrollY) { 
    const { newStart, newEnd } = this.calculateVisibleRange(scrollY);

    if (newStart !== this.startIndex || newEnd !== this.endIndex) { 
      this.startIndex = newStart; 
      this.endIndex = newEnd; 
      this.renderVisibleRows();
    } 
  }

  // 渲染可见行
  renderVisibleRows() { 
    for (let i = this.startIndex; i < this.endIndex; i++) { 
    
      if (!this.visibleRows.has(i)) { 
        this.createAndRegisterRow(i);
      }
    } 
  }

  // 创建并注册行
  createAndRegisterRow(index) {
    const row = new ContentRow({
      data: this.data[index],
      index,
      rowWidth: this.containerWidth,
      rowHeight: this.rowHeight,
      colorArray: this.colorArray
    }); 
    this.registerRow(index, row);
  }

  registerRow(index, row) {
    this.visibleRows.set(index, row); 
    const renderedRow = row.render();
    renderedRow.setAttribute('data-index', index);
    this.container.appendChild(renderedRow);
  }

  deleteRow(index) {
    const row = this.visibleRows.get(index);
    if (row) {
      row.destroy();
    }
    this.visibleRows.delete(index); // 这里清除在map中的记录，后续更新不会再比较
    const existingRow = this.container.querySelector(`[data-index="${index}"]`);
    if (existingRow) {
      this.container.removeChild(existingRow); // 这里清除在页面上的渲染
    }
  }

  // 获取容器元素
  getContainer() { 
    return this.container || null; 
  }

  // 获取总内容高度
  getTotalHeight() { 
    return this.totalHeight || 0; 
  }

  // 自适应计算布局
  resize(newWidth) {
    this.containerWidth = newWidth;
    for (const [_, row] of this.visibleRows.entries()) {
      row.resize(this.containerWidth);  
    }
  }

  // 更新样式和颜色
  updateStyles(latestChartToken, colorArray) {
    for (const [_, row] of this.visibleRows.entries()) {
      row.updateStyles(latestChartToken, colorArray);
    }
  }

  updateRows(options) {
    const { data, containerWidth } = options;

    // 更新数据
    this.data = data;
    
    if (containerWidth && containerWidth !== this.containerWidth) {
      this.containerWidth = containerWidth;
      this.resize(containerWidth);
    }
    
    this.totalHeight = data.length * this.rowHeight;
    const maxLength = Math.max(data.length, this.lastData.length);
    
    const { newStart, newEnd } = this.calculateVisibleRange(this.scrollInfo().scrollY);
    this.startIndex = newStart;
    this.endIndex = newEnd;
    
    // 对所有的行进行检查
    for (let i = 0; i < maxLength; i++) {
      const lastRowData = this.lastData[i] || null;
      const currRowData = data[i] || null;
      
      // 如果新旧数据均存在，再对比更新
      if (currRowData && lastRowData) {
        const hasChanged = isChanged(currRowData, lastRowData);
        
        if (hasChanged && this.visibleRows.has(i)) {
          this.deleteRow(i);
          this.createAndRegisterRow(i);
        }
      }
      else if (!currRowData && lastRowData) {
        this.deleteRow(i);
      }
    }
  
    this.renderVisibleRows();
    this.lastData = data;
  }

  // 销毁行列表
  destroy() {
    this.visibleRows.forEach((row) => {
      if (row) {
        row.destroy();
      }
    });
    this.visibleRows.clear();
    if(this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
      this.container = null;
    }
  }
} 

export function createRowList(options) { 
  return new RowList(options);
}

