import {
  createSvgElement, 
  setEllipsisWithTooltip, 
  calcColumnX,
  updateSvgs
} from './utils.js';

import { ROW, TEXT } from './constants.js'
import { showTooltip, hideTooltip } from './handleTooltip.js';
import chartToken from './chartToken.js'

export class ContentRow {
  constructor(option) {
    const { data, index, rowWidth, rowHeight } = option;
    this.data = data;
    this.index = index;
    this.rowWidth = rowWidth;
    this.rowHeight = rowHeight;
    this.padding = TEXT.PADDING

    this.init();
  }

  init() {
    this.textBaselineY = ROW.TEXTBASELINEY;
    this.rankBgSize = ROW.RANKBGSIZE;
    this.progressBarWidth = this.rowWidth - 2 * this.padding;
    this.progressBarHeight = chartToken.row.progressBarHeight;

    // 计算文本x坐标
    this.columnX = calcColumnX(TEXT.FLEX_SPACE, this.rowWidth, this.padding);
  }

  render() {
    // 创建行容器
    this.row = createSvgElement('g', {
      style: `
        transform: translate(0, ${this.index * this.rowHeight}px);
        transition: transform 0.5s ease;
        transform-box: fill-box;
      `
    });

    this.renderRowBg();       // 渲染行背景
    this.renderRank();        // 渲染排名
    this.renderName();        // 渲染名称
    this.renderValue();       // 渲染数值
    this.renderPercent();     // 渲染百分比
    this.renderProgressBar(); // 渲染进度条

    return this.row;
  }

  renderRowBg() {
    this.rowBg = createSvgElement('rect', {
      x: '0',
      y: '0',
      width: this.rowWidth,
      height: this.rowHeight,
      fill: chartToken.row.bgColor
    });
    this.row.appendChild(this.rowBg);
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
      fill: '#fff',
      'font-size': chartToken.fontSize,
      'font-weight': '500',
      'text-anchor': 'middle',
    });
    this.rankText.textContent = `${this.index + 1}`;
    this.row.appendChild(this.rankText);
  }

  renderName() {
    this.nameText = createSvgElement('text', {
      x: this.padding + this.rankBgSize + this.rowHeight * 0.08,
      y: this.textBaselineY,
      fill: chartToken.textPaleColor,
      'font-size': chartToken.fontSize,
      'font-weight': '400',
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
      fill: chartToken.textDeepColor,
      'font-size': chartToken.fontSize,
      'font-weight': '600',
      'text-anchor': 'start',
    });
    this.valueText.textContent = this.data.value;
    this.row.appendChild(this.valueText);
  }

  renderPercent() {
    this.percentText = createSvgElement('text', {
      x: this.columnX[2],
      y: this.textBaselineY,
      fill: chartToken.textDeepColor,
      'font-size': chartToken.fontSize,
      'font-weight': '600',
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
      style: 'transition: all 0.6s ease',
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
      style: 'transition: all 0.6s ease',
    });

    this.addTooltipEvents(this.progressBar);
    this.row.appendChild(this.progressBar);

    // 进度条动画
    const animate = createSvgElement('animate', {
      attributeName: 'width',
      from:           '0',
      to:             this.progressBarWidth * ((this.data.percent || 0) / 100),
      dur:            '1.2s',
      fill:           'freeze',
      calcMode:       'spline',
      keyTimes:       '0;1',
      keySplines:     '0.42 0 0.58 1'
    });

    this.progressBar.appendChild(animate);
    animate.beginElement();

  }

  addTooltipEvents(el) {
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

    el.addEventListener('mouseenter', handleMouseOver);
    el.addEventListener('mouseleave', handleMouseOut);
  }

  //自适应计算布局
  resize(newWidth) {
    this.rowWidth = newWidth;
    this.progressBarWidth = this.rowWidth - 2 * this.padding;
    this.columnX = calcColumnX(TEXT.FLEX_SPACE, this.rowWidth, this.padding);

    // 移除原有的动画
    if (this.progressBar) {
      const anim = this.progressBar.querySelector('animate');
      if (anim) anim.remove();
    }

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

  // 更新主题样式
  updateTheme(latestChartToken) {

    updateSvgs([
      { el: this.rowBg, attrs: { 
        fill: latestChartToken.row.bgColor
      }},
      { el: this.rankText, attrs: { 
        'font-size': latestChartToken.fontSize
      }},
      { el: this.nameText, attrs: { 
        fill: latestChartToken.textPaleColor,
        'font-size': latestChartToken.fontSize
      }},
      { el: this.valueText, attrs: { 
        fill: latestChartToken.textDeepColor,
        'font-size': latestChartToken.fontSize
      }},
      { el: this.percentText, attrs: { 
        fill: latestChartToken.textDeepColor,
        'font-size': latestChartToken.fontSize
      }},
      { el: this.progressBar, attrs: { 
        width: this.progressBarWidth * ((this.data.percent || 0) / 100),
        height: latestChartToken.row.progressBarHeight,
        rx: latestChartToken.row.progressBarRadius,
        ry: latestChartToken.row.progressBarRadius
      }},
      { el: this.progressBg, attrs: { 
        width: this.progressBarWidth,
        height: latestChartToken.row.progressBarHeight,
        rx: latestChartToken.row.progressBarRadius,
        ry: latestChartToken.row.progressBarRadius
      }},
    ]);
  }
}

// 获取排名对应的颜色
function getRankColor(rank) {
  const rankColors = {
    1: '#E7434A',    // 第1名红色
    2: '#F4840C',    // 第2名橙色
    3: '#FCC800',    // 第3名金色
  };
  return rankColors[rank] || '#C9C9C9'; // 其他灰色
}
