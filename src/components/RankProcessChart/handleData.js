import { DEFAULT_DATA_ITEM } from './constants.js';
import { isArray, isObject, isString, isUndef } from '../../util/type.js';
import { isValidNumber } from './utils.js';

// 字段验证规则配置
const fieldValidators = {
  name: (value) => {
    return isString(value) && value.trim().length > 0 ? value.trim() : null;
  },
  
  value: (value) => {
    return isValidNumber(value) ? value : null;
  },
  
  percent: (value) => {
    return isValidNumber(value) 
      ? Math.max(0, Math.min(100, value)) 
      : null;
  },
  
  color: (value) => {
    return isString(value) && value.trim().length > 0 ? value.trim() : null;
  },
  
  content: (value) => {
    return isString(value) ? value.trim() : null;
  }
};

// 验证传入data中的字段以及值
function validateFieldValue(fieldName, value) {
  // 检测待测项中有无传入的字段，没有则返回null
  const validator = fieldValidators[fieldName];
  if (!validator) {
    return null;
  }

  // 处理value为undefined的情况，命中则返回默认值
  if (isUndef(value)) {
    return DEFAULT_DATA_ITEM[fieldName];
  }

  // 使用fieldValidators中的函数检测
  const validatedValue = validator(value);
  
  // 如果验证失败，使用默认值
  if (validatedValue === null) {
    return DEFAULT_DATA_ITEM[fieldName];
  }

  // 如果验证成功，返回验证后的值
  return validatedValue;
}

// 验证单个data
function validateDataItem(item) {
  // 先复制一个默认值，然后根据检测结果替换
  const validatedItem = { ...DEFAULT_DATA_ITEM };

  // 非对象类型直接返回默认值
  if (!isObject(item)) {
    return validatedItem;
  }

  // 验证每个字段，如果有值且合法就替换，否则使用默认值
  Object.keys(validatedItem).forEach(fieldName => {
    const currValue = item[fieldName];
    const validatedValue = validateFieldValue(fieldName, currValue);
    validatedItem[fieldName] = validatedValue;
  });

  return validatedItem;
}

// 验证数据数组
export function validateData(data) {
  // 对于空数据，返回空数组
  if (!data) {
    return [];
  }

  // 如果数据非数组，传入检验并包装为数组
  if (!isArray(data)) {
    return [validateDataItem(data)];
  }

  // 验证数据中的每个数据项
  const validatedData = data.map(item => validateDataItem(item));
  
  return validatedData;
}


