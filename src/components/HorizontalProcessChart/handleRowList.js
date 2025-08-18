import { createSvgElement } from './utils.js';
import { ContentRow } from './handleRow.js'; 
import { ROW, HEADER_HEIGHT } from './constants.js'



class RowList { 
  constructor(options) { 
    const { data, containerWidth, scrollCallback }= options; 

    this.data = data;                      // 完整数据
    this.containerWidth = containerWidth;  // 容器宽度
    this.rowHeight = ROW.height;           // 行高度
    this.headerHeight = HEADER_HEIGHT;     // 首部高度
    this.scrollCallback = scrollCallback;  // 回调函数
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
    this.visibleCount = Math.ceil(this.scrollCallback().viewHeight / this.rowHeight) + 4;
  }



  // 计算可见行数量
  updateVisibleRange(scrollY) { 
    const newStart = Math.max(0, Math.floor(scrollY / this.rowHeight)); 
    const newEnd = Math.min( 
      this.data.length, 
      newStart + this.visibleCount 
    ); 

    if (newStart !== this.startIndex || newEnd !== this.endIndex) { 
      this.startIndex = newStart; 
      this.endIndex = newEnd; 
      this.renderVisibleRows();
    } 
  }

  // 渲染可见行
  renderVisibleRows() { 
    for (let i = this.startIndex; i < this.endIndex; i++) { 
      // 如果该行尚未创建，则创建并添加到容器
      if (!this.visibleRows.has(i)) { 
        const row = new ContentRow({ 
          data: this.data[i],            // 行数据
          index: i,                      // 行索引
          rowWidth: this.containerWidth, // 行宽度
          rowHeight: this.rowHeight      // 行高度
        }); 
        this.visibleRows.set(i, row); 

        const renderedRow = row.render();
        this.container.appendChild(renderedRow); 
      } 
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
    this.visibleCount = Math.ceil(this.scrollCallback().viewHeight / this.rowHeight) + 4;
    this.totalHeight = this.data.length * this.rowHeight;

    for (const [_, row] of this.visibleRows.entries()) {
      row.resize(this.containerWidth);  
    }
  }
} 

export function createRowList(options) { 
  return new RowList(options);
}