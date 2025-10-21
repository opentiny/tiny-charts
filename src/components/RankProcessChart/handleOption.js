import { isArray, isObject } from '../../util/type.js';
import { validateData } from './handleData.js'
import { FIELD_CHECKS } from './constants.js';
import { isChanged, getColorsFromToken } from './utils.js';
import merge from '../../util/merge.js';
import init from '../../option/init/index.js';
import Token from '../../feature/token/index.js';

export function handlePadding(padding, containerWidth, containerHeight) {
  const res = { top: 0, right: 0, bottom: 0, left: 0 };

  if (!padding || !Array.isArray(padding)) {
    return res;
  }

  // 如果padding中存在未设置的方向，默认为0
  const [top, right, bottom, left] = padding.concat([0, 0, 0, 0]);

  // 先判断top和left，如果是位置词会覆盖对应位置的padding
  const topIsKeyword = typeof top === 'string' && ['top', 'middle', 'bottom'].includes(top);
  const leftIsKeyword = typeof left === 'string' && ['left', 'center', 'right'].includes(left);

  if (topIsKeyword) {
    switch (top) {
      case 'top':
        res.top = 0;
        res.bottom = containerHeight / 2;
        break;
      case 'middle':
        res.top = containerHeight / 4;
        res.bottom = containerHeight / 4;
        break;
      case 'bottom':
        res.top = containerHeight / 2;
        res.bottom = 0;
        break;
      default:
        res.top = 0;
        res.bottom = 0;
    }
  } else {
    res.top = parsePadding(top, 'vertical', containerWidth, containerHeight);
    res.bottom = parsePadding(bottom, 'vertical', containerWidth, containerHeight);
  }

  if (leftIsKeyword) {
    switch (left) {
      case 'left':
        res.left = 0;
        res.right = containerWidth / 2;
        break;
      case 'center':
        res.left = containerWidth / 4;
        res.right = containerWidth / 4;
        break;
      case 'right':
        res.left = containerWidth / 2;
        res.right = 0;
        break;
      default:
        res.left = 0;
        res.right = 0;
    }
  } else {
    res.left = parsePadding(left, 'horizontal', containerWidth, containerHeight);
    res.right = parsePadding(right, 'horizontal', containerWidth, containerHeight);
  }

  return res;
}

function parsePadding(value, direction, containerWidth, containerHeight) {
  if (typeof value === 'number') return value;

  if (typeof value === 'string' && value.endsWith('%')) {
    const num = parseFloat(value.slice(0, -1));
    if (!isNaN(num)) {
      const ratio = num / 100;
      return direction === 'vertical' ? containerHeight * ratio : containerWidth * ratio;
    }
  }

  return 0;
}

// 数据排序
export function sortData(data, sortField, sortOrder) {
  if (sortOrder === 'none') {
    return data;
  }

  const sortedData = [...data].sort((a, b) => {
    let aValue, bValue;

    switch (sortField) {
      case 'value':
        aValue = a.value || 0;
        bValue = b.value || 0;
        break;
      case 'percent':
        aValue = a.percent || 0;
        bValue = b.percent || 0;
        break;
      default:
        return data;
    }

    const diff = aValue - bValue;
    return sortOrder === 'asc' ? diff : -diff;

  });

  return sortedData;
}

// 封装排序处理
function processData(data, sort) {
  // 排序
  const { field, order } = sort || { field: 'value', order: 'desc' };
  const sortedData = sortData(data, field, order);

  return sortedData;
}

function processColor(color) {
  if(color && !isArray(color)) {
    color = [color]
  }

  if(!color || color.length === 0) color = getColorsFromToken();

  return color
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

  let { data, color, padding, sort } = initedOption;
  
  // 验证数据
  const validatedData = validateData(data);
  
  // 处理数据
  const processedData = processData(validatedData, sort);

  // 处理其他配置
  const processedColor = processColor(color)
  const paddingConfig = handlePadding(padding, containerWidth, containerHeight);
  const { contentWidth, contentHeight } = calcContentSize(containerWidth, containerHeight, paddingConfig);

  return {
    ...initedOption,
    data: processedData,
    color: processedColor,
    paddingConfig,
    contentWidth,
    contentHeight,
  };
}


