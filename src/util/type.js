/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
export function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]' ? true : false;
}

export const isObject = value => value !== null && typeof value === 'object';

export const isFunction = value => typeof value === 'function';

export const isString = value => typeof value === 'string';

export const isBoolean = value => typeof value === 'boolean';

export const isNumber = value => typeof value === 'number';

export const isUndef = value => typeof value === 'undefined';

export const isDOM = typeof HTMLElement === 'object'
    ? function (dom) { return dom instanceof HTMLElement; }
    : function (dom) { return dom && typeof dom === 'object' && dom.nodeType === 1 && typeof dom.nodeName === 'string'; };

export const toArray = value => {
    if (!isArray(value)) {
        return [value];
    } else {
        return value;
    }
}

/**
 * 
 * 返回对相应的数据类型
 */
export const getType = data => {
    return Object.prototype.toString.call(data).substring(8).split(/]/)[0]
}