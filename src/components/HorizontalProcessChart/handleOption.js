export function handlePadding(padding, containerWidth, containerHeight) {

  const [top, right, bottom, left] = padding;
  
  return {
    top: parseValue(top, 'vertical', containerWidth, containerHeight),
    right: parseValue(right, 'horizontal', containerWidth, containerHeight),
    bottom: parseValue(bottom, 'vertical', containerWidth, containerHeight),
    left: parseValue(left, 'horizontal', containerWidth, containerHeight)
  };
}

// 用于解析padding值
function parseValue(value, direction, containerWidth, containerHeight) {
  // 处理数值
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string') {
    // 处理百分比
    if (value.endsWith('%')) {
      const percentage = parseFloat(value) / 100;
      return direction === 'vertical' 
        ? containerHeight * percentage 
        : containerWidth * percentage;
    }

    // 处理位置词
    if (direction === 'vertical') {
      switch (value) {
        case 'top': return 0;
        case 'middle': return containerHeight / 2;
        case 'bottom': return containerHeight;
        default: return 0;
      }
    } else {
      switch (value) {
        case 'left': return 0;
        case 'center': return containerWidth / 2;
        case 'right': return containerWidth;
        default: return containerWidth / 2;
      }
    }
  }

  return 0;
}

// 计算内容尺寸
export function calcContentSize(containerWidth, containerHeight, padding) {
  const contentWidth = containerWidth - padding.left - padding.right;
  const contentHeight = containerHeight - padding.top - padding.bottom;
  
  return {
    contentWidth: Math.max(0, contentWidth),
    contentHeight: Math.max(0, contentHeight)
  };
}
