import getTooltipContentHtmlStr from '../../option/config/tooltip/formatter';
import { TOOLTIP } from './constants.js'
import { getTooltipStyles } from './style.js';
import { handleEvents } from './utils.js';

// 全局tooltip实例
let tooltip = null;

class Tooltip {
  constructor(dom, theme, tooltipConfig) {
    this.dom = dom;
    this.theme = theme;
    this.config = tooltipConfig;
    this.tooltip = null;
    this.offset = TOOLTIP.OFFSET;

    // 获取样式配置
    this.styles = getTooltipStyles();

    if (this.config.show) {
      this.createTooltip();
      this.followMouse();
    }
  }

  createTooltip() {
    this.tooltip = document.createElement('div');
    this.tooltip.style.cssText = this.styles.getBaseStyles(this.theme);
    this.tooltip.style.visibility = 'hidden';
    document.body.appendChild(this.tooltip);
  }


  getContent(data) {
    const config = {
      title: '',
      children: []
    };
 
    let displayValue = '';
      
    if (data.value) {
      displayValue += data.value;
    }
      
    if (data.percent) {
      displayValue += ' ' + data.percent + '%';
    }
      
    config.children.push({
      name: data.name,
      value: displayValue,
      iconColor: data.color
    });
    
    // 用户自定义内容
    if (data.content) {
      config.children.push({
        name: '',
        value: data.content,
      });
    }
    
    return getTooltipContentHtmlStr(config);
  }

  // 绑定鼠标跟随事件
  followMouse() {
    if (!this.tooltip) return;

    this.mouseMoveHandler = (e) => {
      // 只有当tooltip可见时才跟随
      if (!this.tooltip || this.tooltip.style.visibility !== 'visible') return;
      
      this.updateTooltipPosition(e);
    };

    handleEvents(this.dom, 'mousemove', [this.mouseMoveHandler], true);
  }

  // 更新tooltip位置
  updateTooltipPosition(e) {
    if (!this.tooltip || !this.dom) return;

    // 获取容器边界信息，同时做一些默认处理
    const domRect = this.dom.getBoundingClientRect();
    const domLeft = domRect.left || 0;
    const domTop = domRect.top || 0;
    const domWidth = domRect.width || 0;
    const domHeight = domRect.height || 0;
    const maxX = domLeft + domWidth; // 容器右边界
    const maxY = domTop + domHeight; // 容器下边界
    
    // 获取tooltip尺寸，同样做一些默认处理
    const tooltipRect = this.tooltip.getBoundingClientRect();
    const tooltipWidth = tooltipRect.width || 200;
    const tooltipHeight = tooltipRect.height || 100;

    let left = e.clientX + this.offset; // 初始left位置
    let top = e.clientY + this.offset;  // 初始top位置

    // 边界检测和调整
    if (left + tooltipWidth >= maxX) {
      left = e.clientX - tooltipWidth - this.offset;
    }
    if (top + tooltipHeight >= maxY) {
      top = e.clientY - tooltipHeight - this.offset;
    }

    const position = this.styles.getPosition(left, top);
    Object.assign(this.tooltip.style, position);
  }

  show(data, e) {
    // show方法封装后只暴露给row，row的data经过handleData的处理，已具有默认值
    if (!this.tooltip || !this.config.show) return;

    let content;
    if (this.config.formatter && typeof this.config.formatter === 'function') {
      const params = {
        name: data.name,
        value: data.value,
        percent: data.percent,
        color: data.color,
        content: data.content
      };
      content = this.config.formatter(params);
    } else {
      content = this.getContent(data);
    }

    this.tooltip.innerHTML = content;

    // 初始定位
    if (e) {
      this.updateTooltipPosition(e);
    }

    requestAnimationFrame(() => {
      const visibilityStyles = this.styles.getVisibility(true);
      Object.assign(this.tooltip.style, visibilityStyles);
    });
  }

  hide() {
    if (!this.tooltip) return;

    requestAnimationFrame(() => {
      const visibilityStyles = this.styles.getVisibility(false);
      Object.assign(this.tooltip.style, visibilityStyles);
    })
  }

  // 更新主题
  updateTheme(newTheme) {
    this.theme = newTheme;
    
    if (this.tooltip) {
      this.tooltip.style.cssText = this.styles.getThemeUpdate(newTheme);
    }
  }

  destroy() {
    if (this.dom) {
      handleEvents(this.dom, 'mousemove', [this.mouseMoveHandler], false);
    }
    if (this.tooltip && this.tooltip.parentNode) {
      this.tooltip.parentNode.removeChild(this.tooltip);
      this.tooltip = null;
    }
  }
}

export function createTooltip(dom, theme, tooltipConfig) {
  if (tooltip) {
    tooltip.destroy();
  }
  
  tooltip = new Tooltip(dom, theme, tooltipConfig);
  return tooltip;
}

export function showTooltip(data, e) {
  if (tooltip) {
    tooltip.show(data, e);
  }
}

export function hideTooltip() {
  if (tooltip) {
    tooltip.hide();
  }
}
