import getTooltipContentHtmlStr from '../../option/config/tooltip/formatter';

// 全局tooltip实例
let tooltip = null;

class Tooltip {
  constructor(dom, theme, tooltip) {
    this.dom = dom;
    this.isDark = theme && theme.includes('dark');
    this.config = tooltip;
    this.tooltip = null;
    this.offset = 10;

    if (this.config.show) {
      this.createTooltip();
      this.followMouse();
    }
  }

  createTooltip() {
    this.tooltip = document.createElement('div');
    this.tooltip.style.cssText = this.getBaseStyles();
    this.tooltip.style.visibility = 'hidden';
    document.body.appendChild(this.tooltip);
  }

  getBaseStyles() {
    // 使用项目标准的 tooltip 样式（不直接依赖Token，手动设置标准值）
    const lightTheme = {
      background: '#FAFAFA',
      textColor: '#191919',
      borderColor: 'transparent',
      shadowColor: 'rgba(0, 0, 0, 0.2)'
    };
    
    const darkTheme = {
      background: '#393939',
      textColor: '#FFFFFF',
      borderColor: 'transparent',
      shadowColor: 'rgba(210, 210, 210, 0.2)'
    };
    
    const theme = this.isDark ? darkTheme : lightTheme;
    
    return `
      position: fixed;
      z-index: 9999;
      padding: 16px;
      background-color: ${theme.background};
      color: ${theme.textColor};
      border: 1px solid ${theme.borderColor};
      border-radius: 4px;
      box-shadow: 0 2px 8px 0 ${theme.shadowColor};
      font-size: 14px;
      font-weight: normal;
      pointer-events: none;
      line-height: 1.6;
      text-align: left;
      opacity: 0;
      visibility: hidden;
      transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
    `;
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
      displayValue += (displayValue ? ' ' : '') + data.percent + '%';
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

    // 设置最终位置
    this.tooltip.style.left = `${left}px`;
    this.tooltip.style.top = `${top}px`;
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
      this.tooltip.style.visibility = 'visible';
      this.tooltip.style.opacity = '1';
    });
  }

  hide() {
    if (this.tooltip) {
      this.tooltip.style.opacity = '0';
      
      setTimeout(() => {
        if (this.tooltip) {
          this.tooltip.style.visibility = 'hidden';
        }
      }, 250);
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
