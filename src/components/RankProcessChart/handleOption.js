import { FIELD_CHECKS } from './constants.js';
import { isChanged } from './utils.js';
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
    contentWidth,
    contentHeight
  };
}

// 封装配置检查
function checkFieldChange(currOption, lastOption, fieldName) {
    const currValue = currOption[fieldName];
    const lastValue = lastOption[fieldName];
    const res = isChanged(currValue, lastValue);
    if (res) return fieldName;
}

// 根据变化判断是否更新
export function isUpdate(currOption, lastOption) {
  const updates = [];

  // 检查字段变化
  FIELD_CHECKS.forEach(field => {
    const result = checkFieldChange(currOption, lastOption, field);
    if (result) updates.push(result);
  });

  // 根据是否有update走下一步
  return updates.length > 0 ? updates : false;
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


