export default function max(arr) {
  // 处理数组中不为数字的部分
  function handle(arr) {
    return arr.filter(item => {
      return Object.prototype.toString.call(item) === '[object Number]';
    });
  }

  // 堆调整函数，即调整当前data为大根堆
  function heapAjust(data, i, length) {
    let child = 2 * i + 1;
    // 如果有孩子结点，默认情况是左孩子
    while (child <= length) {
      const temp = data[i];
      // 如果右孩子存在且其值大于左孩子的值，则将child指向右孩子
      if (child + 1 <= length && data[child] < data[child + 1]) {
        child = child + 1;
      }
      // 如果当前结点的值小于其孩子结点的值，则交换，直至循环结束
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

  // 创建堆，其实是对data数组做一个结构调整，使其具有堆的特性
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

  // 排序
  function heapSort(arr) {
    const data = handle(arr).slice(0);
    if (!(data instanceof Array)) return;
    if (data instanceof Array && data.length === 1) {
      return data;
    }
    // 将data数组改造为“堆”的结构
    buildHeap(data);
    for (let i = data.length - 1; i >= 0; i--) {
      swap(data, i, 0);
      heapAjust(data, 0, i - 1);
    }
    return data[data.length - 1];
  }

  return heapSort(arr);
}
