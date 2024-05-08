/**
 * Copyright (c) 2022 - present TinyCharts Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
const escapeScript = (string) => {
  let str = string.replace('<script>', '').replace('</script>', '');
  return str;
};

const defendScript = (obj) => {
  if (typeof obj === 'string') {
    return escapeScript(obj);
  } else if (typeof obj === 'number') {
    return obj;
  } else if (typeof obj === 'object') {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const xssKey = defendScript(key);
        const xssValue = defendScript(obj[key]);
        delete obj[key];
        obj[xssKey] = xssValue;
      }
    }
    return obj;
  } else {
    return obj;
  }
};

/**
 * 对图表option的键值对进行过滤限制
 */
const xssOption = (option) => {
  for (let key in option) {
    if (Object.hasOwnProperty.call(option, key)) {
      const xssKey = defendScript(key);
      const xssValue = defendScript(option[key]);
      delete option[key];
      option[xssKey] = xssValue;
    }
  }
  return option;
};

export default xssOption;