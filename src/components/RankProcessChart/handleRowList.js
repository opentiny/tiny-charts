import { createSvgElement, isChanged } from './utils.js';
import { ContentRow } from './handleRow.js'; 
import { ROW, HEADER_HEIGHT } from './constants.js'

class RowList { 
  constructor(options) { 
    const { data, containerWidth, scrollCallback }= options; 

    this.data = data;
    this.containerWidth = containerWidth;
    this.rowHeight = ROW.HEIGHT;
    this.headerHeight = HEADER_HEIGHT;
    this.lastData = data;
    this.scrollInfo = scrollCallback();    // 回调函数获取滚动相关信息
    this.visibleRows = new Map();          // 缓存可见行元素的Map
    this.startIndex = 0;                   // 当前可见起始索引
    this.endIndex = 0;                     // 当前可见结束索引
    this.visibleCount = 0;                 // 可见行数量
    this.totalHeight = 0;                  // 总内容高度

    this.init();
  }


  init() {
    // 创建容器元素
    this.container = createSvgElement('g', { 
      transform: `translate(0, ${this.headerHeight})` 
    }); 

    this.totalHeight = this.data.length * this.rowHeight; 
    this.visibleCount = Math.ceil( this.scrollInfo.viewHeight / this.rowHeight) + 4;
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
        const row = new ContentRow({
          data: this.data[i],
          index: i,
          rowWidth: this.containerWidth,
          rowHeight: this.rowHeight
        }); 
        this.RegRow(i, row);
      }
    } 
  }

  RegRow(i, row) {
    this.visibleRows.set(i, row); 
    const renderedRow = row.render();
    renderedRow.setAttribute('data-index', i);
    this.container.appendChild(renderedRow);
  }

  delRow(i) {
    this.visibleRows.delete(i)
    const existingRow = this.container.querySelector(`[data-index="${i}"]`);
    if (existingRow) {
      this.container.removeChild(existingRow);
    }
  }

// 获取容器元素
  getContainer() { 
    return this.container; 
  }


// 获取总内容高度
  getTotalHeight() { 
    return this.totalHeight; 
  }

  // 自适应计算布局
  resize(newWidth) {
    this.containerWidth = newWidth;

    for (const [_, row] of this.visibleRows.entries()) {
      row.resize(this.containerWidth);  
    }
  }

  // 更新主题样式
  updateTheme(latestChartToken) {
    for (const [_, row] of this.visibleRows.entries()) {
      row.updateTheme(latestChartToken);
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
    
    const { newStart, newEnd } = this.calculateVisibleRange(this.scrollInfo.scrollY);
    this.startIndex = newStart;
    this.endIndex = newEnd;
    
    // 对所有的行进行检查
    for (let i = 0; i < maxLength; i++) {
      const lastRowData = this.lastData[i] || null;
      const currRowData = data[i] || null;
      
      // 如果新旧数据均存在，再对比更新
      if (currRowData && lastRowData) {
        const hasChanged = isChanged(currRowData, lastRowData);
        
        if (hasChanged) {
          if(this.visibleRows.has(i)) {
             const row = new ContentRow({
              data: currRowData,
              index: i,
              rowWidth: this.containerWidth,
              rowHeight: this.rowHeight
          });
          this.delRow(i);
          this.RegRow(i, row);
          }
        }
      }
      else if (!currRowData && lastRowData) {
        this.delRow(i);
      }
    }
  
    this.renderVisibleRows();
    this.lastData = data;
  }
} 

export function createRowList(options) { 
  return new RowList(options);
}

