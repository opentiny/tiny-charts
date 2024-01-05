export const isArray = value => {
  return Object.prototype.toString.call(value) === '[object Array]' ? true : false;
};

export const isObject = value => {
  return value !== null && typeof value === 'object';
};

export const isFunction = value => {
  return typeof value === 'function';
};

export const isString = value => {
  return typeof value === 'string';
};

export const isBoolean = value => {
  return typeof value === 'boolean';
};

export const isNumber = value => {
  return typeof value === 'number';
};

export const isUndef = value => {
  return typeof value === 'undefined';
};

export const isDOM =
  typeof HTMLElement === 'object'
    ? function (dom) {
        return dom instanceof HTMLElement;
      }
    : function (dom) {
        return dom && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
      };

export const toArray = (value) => {
  if (!isArray(value)) {
    return [value];
  } else {
    return value;
  }
};
