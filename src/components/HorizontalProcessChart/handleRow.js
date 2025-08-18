import {
  createSvgElement, 
  setEllipsisWithTooltip, 
  calcColumnX,
  updateSvgs
} from './utils.js';

import {ROW, TEXT} from './constants.js'
import { showTooltip, hideTooltip } from './handleTooltip.js';
import chartToken from './chartToken';

export class ContentRow {
  constructor(option) {
    const { data, index, rowWidth, rowHeight } = option;
    this.data = data;                            // 行数据
    this.index = index;                          // 行索引
    this.rowWidth = rowWidth;                    // 行宽度
    this.rowHeight = rowHeight;                  // 行高度

    this.init();
  }

  init() {
    this.padding = 24;                                         // 内边距
    this.textBaselineY = ROW.textBaseLineY;                    // 文本Y轴基线
    this.rankBgSize = ROW.rankBgSize;                          // 排名背景尺寸
    this.progressBarWidth = this.rowWidth - 2 * this.padding;  // 进度条宽度
    this.progressBarHeight = chartToken.row.progressBarHeight; // 进度条高度

    // 计算文本x坐标
    this.columnX = calcColumnX(TEXT.flex_space, this.rowWidth, this.padding);
  }

  render() {
    // 创建行容器
    this.row = createSvgElement('g', {
      style: `
        transform: translate(0, ${this.index * this.rowHeight}px);
        transition: transform 0.5s ease;
        transform-box: fill-box;
        transform-origin: 0 0;
      `
    });

    // 创建行背景
    this.rowBg = createSvgElement('rect', {
      x: '0',
      y: '0',
      width: this.rowWidth,
      height: this.rowHeight,
      fill: chartToken.row.bgColor
    });
    this.row.appendChild(this.rowBg);

    this.renderRank();        // 渲染排名
    this.renderName();        // 渲染名称
    this.renderValue();       // 渲染数值
    this.renderPercent();     // 渲染百分比
    this.renderProgressBar(); // 渲染进度条

    return this.row;
  }

  renderRank() {
    this.rankBg = createSvgElement('rect', {
      x: this.columnX[0],
      y: this.textBaselineY - chartToken.fontSize,
      width: this.rankBgSize,
      height: this.rankBgSize,
      rx: chartToken.borderRadius,
      ry: chartToken.borderRadius,
      fill: getRankColor(this.index + 1) // 获取排名对应的颜色
    });
    this.row.appendChild(this.rankBg);

    this.rankText = createSvgElement('text', {
      x: this.columnX[0] + this.rankBgSize / 2,
      y: this.textBaselineY,
      'font-size': chartToken.fontSize,
      'font-weight': '500',
      fill: '#fff',
      'text-anchor': 'middle',
    });
    this.rankText.textContent = `${this.index + 1}`;
    this.row.appendChild(this.rankText);
  }

  renderName() {
    this.nameText = createSvgElement('text', {
      x: this.padding + this.rankBgSize + this.rowHeight * 0.08,
      y: this.textBaselineY,
      fill: chartToken.row.infoColor,
      'font-size': chartToken.fontSize,
      'font-weight': '500',
      'text-anchor': 'start',
    });
    // 判断是否省略文本和挂载tooltip
    setEllipsisWithTooltip(this.nameText, this.data.name || '', 8);
    this.row.appendChild(this.nameText);
  }

  renderValue() {
    this.valueText = createSvgElement('text', {
      x: this.columnX[1],
      y: this.textBaselineY,
      fill: chartToken.row.infoColor,
      'font-size': chartToken.fontSize,
      'font-weight': 'bold',
      'text-anchor': 'start',
    });
    this.valueText.textContent = this.data.value;
    this.row.appendChild(this.valueText);
  }

  renderPercent() {
    this.percentText = createSvgElement('text', {
      x: this.columnX[2],
      y: this.textBaselineY,
      fill: chartToken.row.infoColor,
      'font-size': chartToken.fontSize,
      'font-weight': 'bold',
      'text-anchor': 'start',
    });
    this.percentText.textContent = `${this.data.percent}%`;
    this.row.appendChild(this.percentText);
  }

  renderProgressBar() {
    this.progressBg = createSvgElement('rect', {
      x: this.padding,
      y: this.rowHeight * 0.55,
      width: this.progressBarWidth,
      height: this.progressBarHeight,
      rx: chartToken.row.progressBarRadius,
      ry: chartToken.row.progressBarRadius,
      fill: chartToken.row.itemBgEmpty,
    });
    
    this.addTooltipEvents(this.progressBg);
    this.row.appendChild(this.progressBg);

    this.progressBar = createSvgElement('rect', {
      x: this.padding,
      y: this.rowHeight * 0.55,
      width: '0', 
      height: this.progressBarHeight,
      rx: chartToken.row.progressBarRadius,
      ry: chartToken.row.progressBarRadius,
      fill: this.data.color,
      style: 'transition: width 0.6s ease',
    });


    // 创建进度条动画
    const animate = createSvgElement('animate', {
      attributeName: 'width',
      from:           '0',
      to:             this.progressBarWidth * ((this.data.percent || 0) / 100),
      dur:            '1s',
      fill:           'freeze',
      calcMode:       'spline',
      keyTimes:       '0;1',
      keySplines:     '0.42 0 0.58 1'
    });

    this.progressBar.appendChild(animate);
    animate.beginElement();
    
    this.addTooltipEvents(this.progressBar);
    this.row.appendChild(this.progressBar);

    if (this.data.content) {
      this.row.setAttribute('data-content', this.data.content);
    }
  }

  addTooltipEvents(element) {
    const handleMouseOver = (e) => {
      const data = {
        name: this.data.name,
        value: this.data.value,
        percent: this.data.percent,
        color: this.data.color,
        content: this.data.content || ''
      };
      showTooltip(data, e);
    };

    const handleMouseOut = () => {
      hideTooltip();
    };

    element.addEventListener('mouseenter', handleMouseOver);
    element.addEventListener('mouseleave', handleMouseOut);
  }

  //自适应计算布局
  resize(newWidth) {
    this.rowWidth = newWidth;
    this.progressBarWidth = this.rowWidth - 2 * this.padding;
    this.columnX = calcColumnX(TEXT.flex_space, this.rowWidth, this.padding);

    const anim = this.progressBar.querySelector('animate');
    if (anim) anim.remove();

    updateSvgs([
      { el: this.rowBg, attrs: { width: this.rowWidth } },
      { el: this.rankBg, attrs: { x: this.columnX[0] } },
      { el: this.rankText, attrs: { x: this.columnX[0] + this.rankBgSize / 2, y: this.textBaselineY } },
      { el: this.valueText, attrs: { x: this.columnX[1] } },
      { el: this.percentText, attrs: { x: this.columnX[2] } },
      { el: this.progressBg, attrs: { width: this.progressBarWidth } },
      { el: this.progressBar, attrs: { width: this.progressBarWidth * ((this.data.percent || 0) / 100) } }
    ]);
    
  }
}

// 获取排名对应的颜色
function getRankColor(rank) {
  const rankColors = {
    1: '#e74c3c',  // 第1名：红色
    2: '#ffa600',  // 第2名：橙色
    3: '#FFD700',  // 第3名：金色
  };
  return rankColors[rank] || '#cacaca'; // 默认：浅灰色
}
