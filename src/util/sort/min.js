export default function min(arrMin) {
  // 处理数组中不为数字的部分
  function handleMin(arrMin) {
    return arrMin.filter(item => {
      return Object.prototype.toString.call(item) === '[object Number]';
    });
  }

  // 堆调整函数，即调整当前data为大根堆
  function heapJustMin(dataMin, iMin, length) {
    let childMin = 2 * iMin + 1;
    // 如果有孩子结点，默认情况是左孩子
    while (childMin <= length) {
      const temp = dataMin[iMin];
      // 如果右孩子存在且其值大于左孩子的值，则将child指向右孩子
      if (childMin + 1 <= length && dataMin[childMin] < dataMin[childMin + 1]) {
        childMin = childMin + 1;
      }
      // 如果当前结点的值小于其孩子结点的值，则交换，直至循环结束
      if (dataMin[iMin] < dataMin[childMin]) {
        dataMin[iMin] = dataMin[childMin];
        dataMin[childMin] = temp;
        iMin = childMin;
        childMin = 2 * iMin + 1;
      } else {
        break;
      }
    }
  }

  // 创建堆，其实是对data数组做一个结构调整，使其具有堆的特性
  function buildHeapMin(dataMin) {
    for (let iMin = Math.floor(dataMin.length / 2); iMin >= 0; iMin--) {
      heapJustMin(dataMin, iMin, dataMin.length);
    }
  }

  function swap(arrMin, iMin, jMin) {
    const temp = arrMin[iMin];
    arrMin[iMin] = arrMin[jMin];
    arrMin[jMin] = temp;
  }

  // 排序
  function heapSort(arrMin) {
    const dataMin = handleMin(arrMin).slice(0);
    if (!(dataMin instanceof Array)) return;
    if (dataMin instanceof Array && dataMin.length === 1) {
      return dataMin;
    }
    // 将data数组改造为“堆”的结构
    buildHeapMin(dataMin);
    for (let iMin = dataMin.length - 1; iMin >= 0; iMin--) {
      swap(dataMin, iMin, 0);
      heapJustMin(dataMin, 0, iMin - 1);
    }
    return dataMin[0];
  }

  return heapSort(arrMin);
}
