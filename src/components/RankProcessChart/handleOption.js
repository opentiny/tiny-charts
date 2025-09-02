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

// 检查是否theme变化
function isThemeChange(currOption, lastOption) {
  const res = currOption.theme !== lastOption.theme
  if(res) return 'theme';
}

// 检查是否padding变化
function isPaddingChange(currOption, lastOption) {
  const currPadding = currOption.padding;
  const lastPadding = lastOption.padding;
  const res = JSON.stringify(currPadding) !== JSON.stringify(lastPadding);
  if(res) return 'padding';
}

// 检查是否data变化
function isDataChange(currOption, lastOption) {
  const currData = currOption.data;
  const lastData = lastOption.data;
  const res = JSON.stringify(currData) !== JSON.stringify(lastData);
  if(res) return 'data';
}

// 检查是否color变化
function isColorChange(currOption, lastOption) {
  const currColor = currOption.color;
  const lastColor = lastOption.color;
  const res = JSON.stringify(currColor) !== JSON.stringify(lastColor);
  if(res) return 'color';
}

// 检查是否titleName变化
function isTitleNameChange(currOption, lastOption) {
  const res = currOption.titleName !== lastOption.titleName;
  if(res) return 'titleName';
}

// 检查是否valueName变化
function isValueNameChange(currOption, lastOption) {
  const res = currOption.valueName !== lastOption.valueName;
  if(res) return 'valueName';
}

// 检查是否percentName变化
function isPercentNameChange(currOption, lastOption) {
  const res = currOption.percentName !== lastOption.percentName;
  if(res) return 'percentName';
}

// 根据变化判断是否更新
export function isUpdate(currOption, lastOption) {
  const updates = []

  updates.push(isThemeChange(currOption, lastOption));
  updates.push(isPaddingChange(currOption, lastOption));
  updates.push(isDataChange(currOption, lastOption));
  updates.push(isColorChange(currOption, lastOption));
  updates.push(isTitleNameChange(currOption, lastOption));
  updates.push(isValueNameChange(currOption, lastOption));
  updates.push(isPercentNameChange(currOption, lastOption));

  // 如果没有字段变化，跳过渲染
  if (updates.length === 0) {
    return false;
  }

  return updates; 
}

export function resolveOption(option, containerWidth, containerHeight) {
  const { data, color, padding } = option;
  
  // 处理数据颜色
  const newData = data.map((item, index) => ({
    ...item,
    color: item.color || color[index % color.length]
  }));

  // 处理配置选项
  const paddingConfig = handlePadding(padding, containerWidth, containerHeight);
  const { contentWidth, contentHeight } = calcContentSize(containerWidth, containerHeight, paddingConfig);

  return {
    processedData: newData,
    paddingConfig,
    contentWidth,
    contentHeight,
  };
}


