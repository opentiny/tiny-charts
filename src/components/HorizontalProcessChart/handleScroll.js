import { createSvgElement, updateSvgs } from './utils.js';
import { HEADER_HEIGHT, SCROLL } from './constants.js';
import chartToken from './chartToken';

class ScrollArea {
  constructor(svg, rowList, width, height) {
    this.svg = svg;                    // SVG容器元素
    this.rowList = rowList;    // 虚拟列表实例
    this.width = width;                // 容器区域总宽度
    this.height = height;              // 容器区域总高度
    this.headerHeight = HEADER_HEIGHT; // 首部高度
    this.scrollY = 0;                  // 当前垂直滚动位置
    this.lastClientY = 0;              // 拖动时最后鼠标Y坐标
    this.isDragging = false;           // 是否正在拖动滚动条
    this.viewHeight = height - HEADER_HEIGHT; // 内容可视区域高度

    this.scrollOffset = SCROLL.offset;                   // 滚动条偏移量
    this.scrollThumbTrackWidth = SCROLL.thumbTrackWidth; // 滚动条轨道宽度

    this.init();
    this.calcHeight();   // 计算内容高度和滚动条尺寸
    this.bindEvents();   // 绑定事件处理函数
  }

  init() {
    this.rowList.updateVisibleRange(0);

    // 用于限制内容可视区域
    this.clipPath = createSvgElement('clipPath', { id: 'viewport' });
    this.clipRect = createSvgElement('rect', {
      x: '0',
      y: this.headerHeight,
      width: this.width - this.scrollThumbTrackWidth - this.scrollOffset * 2,
      height: this.viewHeight
    });
    this.clipPath.appendChild(this.clipRect);
    this.svg.appendChild(this.clipPath);

    this.scrollArea = createSvgElement('g', {
      clipPath: 'url(#viewport)',
      transform: `translate(0, 0)`
    });

    this.contentGroup = createSvgElement('g', {
      id: 'content',
      transform: 'translate(0, 0)'
    });
    this.contentGroup.appendChild(this.rowList.getContainer());
    this.scrollArea.appendChild(this.contentGroup);

    this.scrollThumbTrack = createSvgElement('rect', {
      x: this.width - this.scrollThumbTrackWidth - this.scrollOffset,
      y: this.headerHeight + this.scrollOffset,
      width: this.scrollThumbTrackWidth,
      height: this.viewHeight - this.scrollOffset * 2,
      fill: chartToken.scroll.trackColor,
      rx: this.scrollThumbTrackWidth / 2,
      ry: this.scrollThumbTrackWidth / 2
    });
    this.scrollArea.appendChild(this.scrollThumbTrack);

    this.scrollThumb = createSvgElement('rect', {
      x: this.width - this.scrollThumbTrackWidth - this.scrollOffset,
      y: this.headerHeight + this.scrollOffset,
      width: this.scrollThumbTrackWidth,
      fill: chartToken.scroll.thumbColor,
      rx: this.scrollThumbTrackWidth / 2,
      ry: this.scrollThumbTrackWidth / 2,
      cursor: 'pointer'
    });

    this.scrollThumb.addEventListener('mouseover', () => {
      this.scrollThumb.setAttribute('fill', chartToken.scroll.thumbHoverColor);
    });
    this.scrollThumb.addEventListener('mouseout', () => {
      this.scrollThumb.setAttribute('fill', chartToken.scroll.thumbColor);
    });
    this.scrollArea.appendChild(this.scrollThumb);

    this.svg.appendChild(this.scrollArea);
  }


  calcHeight() {
    this.contentHeight = this.rowList.getTotalHeight()
    this.viewHeight = this.viewHeight;
    this.maxScrollY = Math.max(0, this.contentHeight - this.viewHeight);

    //数据未超出可视区域时不显示滚动条
    if(this.maxScrollY === 0 || !this.contentHeight || !this.viewHeight) {
      this.scrollThumb.style.visibility = 'hidden';
      this.scrollThumbTrack.style.visibility = 'hidden';
      return;
    }

    const scrollThumbHeight = Math.max(30, (this.viewHeight / this.contentHeight) * this.viewHeight);
    this.scrollThumb.setAttribute('height', scrollThumbHeight);
    this.scrollThumbMaxY = this.viewHeight - scrollThumbHeight - this.scrollOffset * 2;

    this.updateView();
  }

  // 更新视图
  updateView() {
    this.contentGroup.setAttribute('transform', `translate(0, ${-this.scrollY})`);

    this.rowList.updateVisibleRange(this.scrollY);

    const scrollThumbY = this.maxScrollY > 0 ? (this.scrollY / this.maxScrollY) * this.scrollThumbMaxY : 0;
    this.scrollThumb.setAttribute('y', this.headerHeight + this.scrollOffset + scrollThumbY);
  }

  bindEvents() {
    this.svg.addEventListener('wheel', this.handleWheel.bind(this)); // 鼠标滚动内容
    this.scrollThumb.addEventListener('mousedown', this.startDrag.bind(this)); // 挂载鼠标拖动事件
    this.scrollThumbTrack.addEventListener('click', this.handleClickTrack.bind(this)); // 内容移动到鼠标点击滚动区域
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

    window.addEventListener('mousemove', this.onDrag.bind(this));
    window.addEventListener('mouseup', this.stopDrag.bind(this));
  }

  onDrag(e) {
    if (!this.isDragging) return;

    const dy = e.clientY - this.lastClientY;
    this.lastClientY = e.clientY;

    const currentscrollThumbY = parseFloat(this.scrollThumb.getAttribute('y')) - this.headerHeight - this.scrollOffset;
    const newscrollThumbY = this.clamp(currentscrollThumbY + dy, 0, this.scrollThumbMaxY);

    this.scrollY = (newscrollThumbY / this.scrollThumbMaxY) * this.maxScrollY;
    this.updateView();
  }

  stopDrag() {
    this.isDragging = false;
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
  resize(newWidth, newHeight) {
    this.width = newWidth || this.width;
    this.height = newHeight || this.height;
    this.viewHeight = this.height - this.headerHeight;
    this.scrollY = this.clamp(this.scrollY, 0, this.maxScrollY);

    this.calcHeight();

    updateSvgs([
      { el: this.clipRect, attrs: { width: this.width - this.scrollThumbTrackWidth - this.scrollOffset * 2, height: this.viewHeight } },
      { el: this.scrollThumbTrack, attrs: { x: this.width - this.scrollThumbTrackWidth - this.scrollOffset } },
      { el: this.scrollThumb, attrs: { x: this.width - this.scrollThumbTrackWidth - this.scrollOffset } }
    ]);

  }

}

export function createScrollArea(svg, rowList, width, height) {
  return new ScrollArea(svg, rowList, width, height);
}