import {
  createSvgElement, 
  setEllipsisWithTooltip, 
  calcColumnX,
  updateSvgs,
  handleEvents,
  unbindAllEvents
} from './utils.js';
import { showTooltip, hideTooltip } from './handleTooltip.js';
import { getRowStyles, getRankColor } from './style.js';
import { ROW, TEXT } from './constants.js'
import chartToken from './chartToken.js'

export class ContentRow {
  constructor(option) {
    const { data, index, rowWidth, rowHeight, colorArray } = option;

    this.data = data;
    this.index = index;
    this.rowWidth = rowWidth;
    this.rowHeight = rowHeight;
    this.colorArray = colorArray;
    this.padding = TEXT.PADDING
    this.textBaselineY = ROW.TEXTBASELINEY;
    this.rankBgSize = ROW.RANKBGSIZE;
    
    this.init();
  }

  init() {
    this.styles = getRowStyles(chartToken);
    this.progressBarWidth = this.rowWidth - 2 * this.padding;
    this.progressBarHeight = chartToken.row.progressBarHeight;
    // 计算文本x坐标
    this.columnX = calcColumnX(TEXT.FLEX_SPACE, this.rowWidth, this.padding);
  }

  // 获取进度条颜色
  getProgressBarColor() {
    // 如果data中有颜色，直接使用
    if (this.data.color) {
      return this.data.color;
    }
    
    // 否则使用colorArray中的颜色
    if (this.colorArray && this.colorArray.length > 0) {
      return this.colorArray[this.index % this.colorArray.length];
    }
    
  }

  render() {
    // 创建行容器
    this.row = createSvgElement(
      'g', 
      this.styles.getRowContainer(this.index, this.rowHeight)
    );

    this.renderRowBg();       // 渲染行背景
    this.renderRank();        // 渲染排名
    this.renderName();        // 渲染名称
    this.renderValue();       // 渲染数值
    this.renderPercent();     // 渲染百分比
    this.renderProgressBar(); // 渲染进度条

    return this.row;
  }

  renderRowBg() {
    this.rowBg = createSvgElement(
      'rect', 
      this.styles.getRowBg(this.rowWidth, this.rowHeight),
      this.row
    );
  }

  renderRank() {
    const rankColor = getRankColor(this.index + 1);
    this.rankBg = createSvgElement(
      'rect', 
      this.styles.getRankBg(this.columnX[0], this.textBaselineY, this.rankBgSize, rankColor),
      this.row
    );

    this.rankText = createSvgElement(
      'text', 
      this.styles.getRankText(this.columnX[0], this.textBaselineY, this.rankBgSize),
      this.row
    );
    this.rankText.textContent = `${this.index + 1}`;
  }

  renderName() {
    this.nameText = createSvgElement(
      'text', 
      this.styles.getNameText(this.padding, this.rankBgSize, this.textBaselineY),
      this.row
    );
    // 判断是否省略文本和挂载tooltip
    setEllipsisWithTooltip(this.nameText, this.data.name || '', TEXT.MAX_NAME_LENGTH);
  }

  renderValue() {
    this.valueText = createSvgElement(
      'text', 
      this.styles.getValueText(this.columnX[1], this.textBaselineY),
      this.row
    );
    this.valueText.textContent = this.data.value || 0;
  }

  renderPercent() {
    this.percentText = createSvgElement(
      'text', 
      this.styles.getPercentText(this.columnX[2], this.textBaselineY),
      this.row
    );
    this.percentText.textContent = this.data.percent ? `${this.data.percent}%` : '';
  }

  renderProgressBar() {
    this.progressBarBg = createSvgElement(
      'rect', 
      this.styles.getProgressBarBg(this.padding, this.rowHeight, this.progressBarWidth, this.progressBarHeight),
      this.row
    );
    this.addTooltipEvents(this.progressBarBg);

    const progressBarColor = this.getProgressBarColor();
    this.progressBar = createSvgElement(
      'rect', 
      this.styles.getProgressBar(this.padding, this.rowHeight, this.progressBarHeight, progressBarColor),
      this.row
    );
    this.addTooltipEvents(this.progressBar);

    // 进度条动画
    const animate = createSvgElement(
      'animate', 
      this.styles.getAnimation(this.progressBarWidth, this.data.percent || 0),
      this.progressBar
    );
    animate.beginElement();
  }

  addTooltipEvents(el) {
    const handleMouseOver = (e) => {
      // data在handleData中已做处理
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

    handleEvents(el, 'mouseenter', [handleMouseOver], true);
    handleEvents(el, 'mouseleave', [handleMouseOut], true);
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

    const textX = this.styles.updateText(this.columnX);
    updateSvgs([
      { 
        el: this.rowBg, 
        attrs: this.styles.updateRowBg(newWidth) 
      },
      { 
        el: this.rankBg, 
        attrs: this.styles.updateRank(this.columnX[0], this.textBaselineY, this.rankBgSize) 
      },
      { 
        el: this.rankText, attrs: 
        this.styles.updateRankText(this.columnX[0], this.textBaselineY, this.rankBgSize) 
      },
      { 
        el: this.valueText, 
        attrs: textX[0] 
      },
      { 
        el: this.percentText, 
        attrs: textX[1] 
      },
      { 
        el: this.progressBarBg, 
        attrs: this.styles.updateProgressBarBg(this.progressBarWidth) 
      },
      { 
        el: this.progressBar, 
        attrs: this.styles.updateProgressBar(this.progressBarWidth, this.data.percent) 
      }
    ]);
  }

  // 更新样式和颜色
  updateStyles(latestChartToken, colorArray) {
    // 更新样式对象
    this.styles = getRowStyles(latestChartToken);
    const newStyles = this.styles.getThemeUpdates();

    // 更新colorArray
    if (colorArray) {
      this.colorArray = colorArray;
    }

    const progressBarColor = this.getProgressBarColor();

    updateSvgs([
      { 
        el: this.rowBg, 
        attrs: newStyles.rowBackground 
      },
      { 
        el: this.rankText, 
        attrs: newStyles.rankText 
      },
      { 
        el: this.nameText, attrs: newStyles.nameText 
      },
      { 
        el: this.valueText, attrs: newStyles.valueText 
      },
      { 
        el: this.percentText, 
        attrs: newStyles.percentText 
      },
      { 
        el: this.progressBar, 
        attrs: {
        ...newStyles.progressBar,
        fill: progressBarColor,
        width: this.progressBarWidth * ((this.data.percent || 0) / 100)
      }},
      { 
        el: this.progressBarBg, 
        attrs: {
        ...newStyles.progressBarBackground,
        width: this.progressBarWidth
      }},
    ]);
  }

  destroy() {
    // 组件卸载时移除事件监听
    if(this.progressBar) {
      unbindAllEvents(this.progressBar)
    }
    if(this.progressBarBg) {
      unbindAllEvents(this.progressBarBg)
    }
    if (this.nameText) {
      unbindAllEvents(this.nameText);
    }
  }
}
