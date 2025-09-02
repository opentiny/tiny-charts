import { createSvgElement, updateSvgs } from './utils.js';
import { HEADER_HEIGHT, SCROLL } from './constants.js';
import chartToken from './chartToken.js';

class ScrollArea {
  constructor(rootSvg, container, rowList, width, height, paddingConfig) {
    this.svg = rootSvg;                // 根SVG
    this.container = container;        // 容器元素
    this.rowList = rowList;            // 行列表实例
    this.width = width;
    this.height = height;
    this.paddingConfig = paddingConfig;
    this.headerHeight = HEADER_HEIGHT;
    this.scrollY = 0;                  // 当前滚动位置
    this.lastClientY = 0;              // 拖动时最后鼠标Y坐标
    this.isDragging = false;           // 是否正在拖动滚动条
    this.viewHeight = height - HEADER_HEIGHT;
    this.isVisible = false;            // 滚动条是否可见

    this.show_transition = SCROLL.SHOW_TRANSITION; // 鼠标显示设置
    this.hide_transition = SCROLL.HIDE_TRANSITION; // 鼠标隐藏设置
    this.scrollThumbWidth = SCROLL.THUMBWIDTH;     // 滚动条轨道宽度

    this.init();
    this.renderScrollBar(); // 创建滚动条
    this.calcHeight();      // 计算内容高度和滚动条尺寸
    this.bindEvents();      // 绑定事件处理函数
  }

  init() {
    this.rowList.updateVisibleRange(0);

   this.viewArea = createSvgElement('g', {
      transform: `translate(0, 0)`,
      style: 'transition: all 0.6s ease',
    });

    this.scrollArea = createSvgElement('g', {
      transform: 'translate(0, 0)',
      style: 'transition: all 0.6s ease',
    });
    this.scrollArea.appendChild(this.rowList.getContainer());
    this.viewArea.appendChild(this.scrollArea);

    this.container.appendChild(this.viewArea);
  }

  renderScrollBar() {
    // 确保滚动条在页面最右侧
    const rootSvgWidth = this.svg.clientWidth;
    this.scrollBarX = rootSvgWidth - this.scrollThumbWidth;
    
    this.scrollThumbTrack = createSvgElement('rect', {
      x: this.scrollBarX,
      y: this.paddingConfig.top + this.headerHeight,
      width: this.scrollThumbWidth,
      height: this.viewHeight,
      fill: chartToken.scroll.trackColor,
      rx: this.scrollThumbWidth / 2,
      ry: this.scrollThumbWidth / 2,
      opacity: '0',
    });
    
    this.scrollThumb = createSvgElement('rect', {
      x: this.scrollBarX,
      y: this.paddingConfig.top + this.headerHeight,
      width: this.scrollThumbWidth,
      fill: chartToken.scroll.thumbColor,
      rx: this.scrollThumbWidth / 2,
      ry: this.scrollThumbWidth / 2,
      cursor: 'pointer',
      opacity: '0',
    });

    this.svg.appendChild(this.scrollThumbTrack);
    this.svg.appendChild(this.scrollThumb);
  }

  calcHeight() {
    this.contentHeight = this.rowList.getTotalHeight();
    this.maxScrollY = Math.max(0, this.contentHeight - this.viewHeight);

    //数据未超出可视区域时不显示滚动条
    if(this.maxScrollY === 0) {
      this.scrollThumb.style.opacity = '0';
      this.scrollThumbTrack.style.opacity = '0';
      this.isVisible = false;
      return;
    }
    
    this.isVisible = true;

    const scrollThumbHeight = Math.max(30, (this.viewHeight / this.contentHeight) * this.viewHeight);
    this.scrollThumb.setAttribute('height', scrollThumbHeight);
    this.scrollThumbMaxY = this.viewHeight - scrollThumbHeight;

    this.updateView();
  }

  // 更新视图
  updateView() {
    this.scrollArea.setAttribute('transform', `translate(0, ${-this.scrollY})`);

    this.rowList.updateVisibleRange(this.scrollY);

    const scrollThumbY = this.maxScrollY > 0 ? (this.scrollY / this.maxScrollY) * this.scrollThumbMaxY : 0;
    
    const scrollThumbBaseY = this.paddingConfig.top + this.headerHeight;
    this.scrollThumb.setAttribute('y', scrollThumbBaseY + scrollThumbY);
  }

  bindEvents() {
    this.container.addEventListener('wheel', this.handleWheel.bind(this));             // 鼠标滚动内容事件
    this.scrollThumb.addEventListener('mousedown', this.startDrag.bind(this));         // 鼠标拖动事件
    this.scrollThumbTrack.addEventListener('click', this.handleClickTrack.bind(this)); // 点击内容移动事件
    
    // 滚动条显隐挂载在根svg上
    this.svg.addEventListener('mouseenter', this.showScrollBar.bind(this));
    this.svg.addEventListener('mouseleave', this.hideScrollBar.bind(this));
  }

  // 显示滚动条
  showScrollBar() {
    if (!this.isVisible) return;
    
    this.scrollThumbTrack.style.transition = this.show_transition;
    this.scrollThumb.style.transition = this.show_transition;
    
    this.scrollThumbTrack.style.opacity = '1';
    this.scrollThumb.style.opacity = '1';
  }

  // 隐藏滚动条
  hideScrollBar() {
    if (!this.isVisible || this.isDragging) return;
    
    this.scrollThumbTrack.style.transition = this.hide_transition;
    this.scrollThumb.style.transition = this.hide_transition;
    
    this.scrollThumbTrack.style.opacity = '0';
    this.scrollThumb.style.opacity = '0';
  }

  handleWheel(e) {
    e.preventDefault();
    this.scrollY = this.clamp(this.scrollY + e.deltaY, 0, this.maxScrollY);
    this.updateView();
  }

  startDrag(e) {
    e.preventDefault();
    this.isDragging = true;
    this.lastClientY = e.clientY;
    
    // 拖拽时保持滚动条可见
    this.showScrollBar();

    window.addEventListener('mousemove', this.onDrag.bind(this));
    window.addEventListener('mouseup', this.stopDrag.bind(this));
  }

  onDrag(e) {
    if (!this.isDragging) return;

    const dy = e.clientY - this.lastClientY;
    this.lastClientY = e.clientY;

    const currentscrollThumbY = parseFloat(this.scrollThumb.getAttribute('y')) - this.paddingConfig.top - this.headerHeight;
    const newscrollThumbY = this.clamp(currentscrollThumbY + dy, 0, this.scrollThumbMaxY);

    this.scrollY = (newscrollThumbY / this.scrollThumbMaxY) * this.maxScrollY;
    this.updateView();
  }

  stopDrag() {
    this.isDragging = false;
    
    this.hideScrollBar();
    
    window.removeEventListener('mousemove', this.onDrag.bind(this));
    window.removeEventListener('mouseup', this.stopDrag.bind(this));
  }

  handleClickTrack(e) {
    const trackRect = this.scrollThumbTrack.getBoundingClientRect();
    // 计算点击位置在轨道中的比例
    const clickY = e.clientY - trackRect.top;
    const trackClickRatio = Math.max(0, Math.min(1, clickY / trackRect.height));

    // 根据点击比例设置滚动位置
    this.scrollY = trackClickRatio * this.maxScrollY;
    this.updateView();
  }

  // 限制数据范围
  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  // 自适应计算布局
  resize(newWidth, newHeight, paddingConfig) {
    this.width = newWidth;
    this.height = newHeight;
    this.paddingConfig = paddingConfig;
    
    this.viewHeight = newHeight - this.headerHeight;
    
    this.scrollY = this.clamp(this.scrollY, 0, this.maxScrollY);
    this.calcHeight();

    const rootSvgWidth = this.svg.clientWidth;
    const scrollBarX = rootSvgWidth - this.scrollThumbWidth;
    
    updateSvgs([
      { 
        el: this.scrollThumbTrack, 
        attrs: { 
          x: scrollBarX, 
          y: this.paddingConfig.top + this.headerHeight,
          height: this.viewHeight
        } 
      },
      { 
        el: this.scrollThumb, 
        attrs: { 
          x: scrollBarX,
          y: this.paddingConfig.top + this.headerHeight,
          height: this.scrollThumb.getAttribute('height') || 30,
        } 
      }
    ]);
  }

  // 更新主题样式
  updateTheme(latestChartToken) {
    updateSvgs([
      { el: this.scrollThumbTrack, attrs: { fill: latestChartToken.scroll.trackColor } },
      { el: this.scrollThumb, attrs: { fill: latestChartToken.scroll.thumbColor } }
    ]);
  }

  // 更新滚动区域
  updateScrollArea(options) {
    const { width, height, paddingConfig } = options;
    
    // 保存当前滚动位置
    const currentScrollY = this.scrollY;
    
    this.resize(width, height, paddingConfig);
    
    // 如果滚动位置超出范围或没有滚动条，则重置到顶部
    if (this.maxScrollY === 0 || currentScrollY > this.maxScrollY) {
      this.scrollY = 0;
      this.updateView();
    }
  }

}

export function createScrollArea(rootSvg, container, rowList, width, height, paddingConfig) {
  return new ScrollArea(rootSvg, container, rowList, width, height, paddingConfig);
}
