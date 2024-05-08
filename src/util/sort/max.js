/**
 * Copyright (c) 2024 - present TinyCharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
export default function max(arr) {
  function handle(arr) {
    return arr.filter(item => {
      return Object.prototype.toString.call(item) === '[object Number]';
    });
  }

  function heapAjust(data, i, length) {
    let child = 2 * i + 1;
    while (child <= length) {
      const temp = data[i];
      if (child + 1 <= length && data[child] < data[child + 1]) {
        child = child + 1;
      }
      if (data[i] < data[child]) {
        data[i] = data[child];
        data[child] = temp;
        i = child;
        child = 2 * i + 1;
      } else {
        break;
      }
    }
  }

  function buildHeap(data) {
    for (let i = Math.floor(data.length / 2); i >= 0; i--) {
      heapAjust(data, i, data.length);
    }
  }

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function heapSort(arr) {
    const data = handle(arr).slice(0);
    if (!(data instanceof Array)) return;
    if (data instanceof Array && data.length === 1) {
      return data;
    }
    buildHeap(data);
    for (let i = data.length - 1; i >= 0; i--) {
      swap(data, i, 0);
      heapAjust(data, 0, i - 1);
    }
    return data[data.length - 1];
  }

  return heapSort(arr);
}
