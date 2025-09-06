import getTooltipContentHtmlStr from '../../option/config/tooltip/formatter';
import { getTooltipStyles } from './style.js';

// 全局tooltip实例
let tooltip = null;

class Tooltip {
  constructor(dom, theme, tooltipConfig) {
    this.dom = dom;
    this.theme = theme;
    this.config = tooltipConfig;
    this.tooltip = null;
    this.offset = 10;

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

    this.dom.addEventListener('mousemove', (e) => {
      // 只有当tooltip可见时才跟随
      if (!this.tooltip || this.tooltip.style.visibility !== 'visible') return;
      
      this.updateTooltipPosition(e);
    });
  }

  // 更新tooltip位置
  updateTooltipPosition(e) {
    if (!this.tooltip) return;

    // 获取容器边界信息
    const { left: domLeft, top: domTop, width: domWidth, height: domHeight } = this.dom.getBoundingClientRect();
    const maxX = domLeft + domWidth; // 容器右边界
    const maxY = domTop + domHeight; // 容器下边界
    
    // 获取tooltip尺寸
    const { width: tooltipWidth, height: tooltipHeight } = this.tooltip.getBoundingClientRect();

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
