import { isArray, isObject } from '../../util/type.js';
import { validateData } from './handleData.js'
import { FIELD_CHECKS } from './constants.js';
import { isChanged } from './utils.js';
import merge from '../../util/merge.js';
import init from '../../option/init/index.js';
import Token from '../../feature/token/index.js';
export function handlePadding(padding, containerWidth, containerHeight) {
  // 如果padding为空或者不是数组，则返回默认值
  if(!padding || !isArray(padding)) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

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
        default: return 0;
      }
    }
  }

  return 0;
}

// 计算内容尺寸
export function calcContentSize(containerWidth, containerHeight, padding) {
  // 确保宽高存在且不为负数，padding在上一步已做处理
  const width = Math.max(0, containerWidth || 0);
  const height = Math.max(0, containerHeight || 0);

  // 计算内容尺寸，确保不为负数
  const contentWidth = Math.max(0, width - padding.left - padding.right);
  const contentHeight = Math.max(0, height - padding.top - padding.bottom);

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
  if(!isObject(currOption) || !isObject(lastOption)) return false

  const updates = [];

  // 检查字段变化
  FIELD_CHECKS.forEach(field => {
    const res = checkFieldChange(currOption, lastOption, field);
    if (res) updates.push(res);
  });

  // 根据是否有update走下一步
  return updates.length > 0 ? updates : false;
}

export function resolveOption(lastOption, currOption, containerWidth, containerHeight) {
  const mergedOption = merge(lastOption, currOption);
  const initedOption = init(mergedOption);
  Token.setDefaultTheme(initedOption.theme);

  let { data, color, padding } = initedOption;
  
  // 验证数据
  const validatedData = validateData(data);
  
  // 处理默认颜色配置
  if(color && !isArray(color)) {
    color = [color];
  }

  // 处理进度条颜色，如果item有就使用，否则换为用户自定义或者默认颜色
  const resolvedData = validatedData.map((item, index) => ({
    ...item,
    color: item.color || color[index % color.length]
  }));

  // 处理其他配置
  const paddingConfig = handlePadding(padding, containerWidth, containerHeight);
  const { contentWidth, contentHeight } = calcContentSize(containerWidth, containerHeight, paddingConfig);

  return {
    ...initedOption,
    data: resolvedData,
    paddingConfig,
    contentWidth,
    contentHeight,
  };
}


