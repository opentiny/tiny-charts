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
class HashMap {
  data;

  constructor(initObj) {
    this.data = newMap();
    for (const key in initObj) {
        if (Object.hasOwnProperty.call(initObj, key)) {
            this.set(key, initObj[key])
        }
    }
  }

  hasKey(key) {
    return this.data.has(key);
  }

  get(key) {
    return this.data.get(key);
  }

  set(key, value) {
    this.data.set(key, value);
    return value;
  }

  each(callback, context) {
    this.data.forEach((value, key) => {
      callback.call(context, value, key);
    });
  }

  keys() {
    const keys = this.data.keys();
    return typeof Map === 'function' ? Array.from(keys) : keys;
  }

  removeKey(key) {
    this.data.delete(key);
  }
}

function newMap() {
  return typeof Map === 'function' ? new Map() : new MapPolyfill();
}

class MapPolyfill {
  data;

  delete(key) {
    const existed = this.has(key);
    if (existed) {
      delete this.data[key];
    }
    return existed;
  }

  has(key) {
    return Object.hasOwnProperty.call(this.data, key);
  }

  get(key) {
    return this.data[key];
  }

  set(key, value) {
    this.data[key] = value;
    return this;
  }

  keys() {
    return keys(this.data);
  }

  forEach(callback) {
    const data = this.data;
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        callback(data[key], key);
      }
    }
  }
}

function keys(obj) {
  if (!obj) {
    return [];
  }
  if (Object.keys) {
    return Object.keys(obj);
  }
  let keyList = [];
  for (let key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      keyList.push(key);
    }
  }
  return keyList;
}

export default HashMap;
