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