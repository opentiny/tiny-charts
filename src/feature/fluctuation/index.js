import { isArray } from '../../util/type';

// 获取getAxisRangeFromData方法数据格式
export function getNewData(origindata) {
  let newData = {}
  let count = Object.keys(origindata[0]).length
  for (let i = 1; i < count; i++) {
    let arr = []
    origindata.forEach((key) => {
      let firstKey = Object.keys(key)[i];
      var firstValue = key[firstKey];
      arr.push(firstValue);
      newData[firstKey] = arr;
    })
  }
  return newData;
}

// 修改轴数据 data：图表数据 allowRange：允许轴的范围
export function getAxisRangeFromData(data, allowRange) {
  let min = Infinity;
  let max = -Infinity;

  const range = allowRange || [-Infinity, Infinity];
  const dataKeys = Object.keys(data);

  dataKeys.forEach((key) => {
    data[key].forEach((item) => {
      if (isArray(item)) {
        const arr = item.filter((t) => !isNaN(Number(t)) && Number(t) > range[0] && Number(t) < range[1]);
        const curMin = Math.min(...arr);
        const curMax = Math.max(...arr);

        if (min > Number(curMin)) {
          min = Number(curMin);
        }

        if (max < Number(curMax)) {
          max = Number(curMax);
        }
      } else {
        if (Number(item) < range[0] || Number(item) > range[1]) {
          return;
        }
        if (min > Number(item)) {
          min = Number(item);
        }

        if (max < Number(item)) {
          max = Number(item);
        }
      }
    });
  });

  let axisMin = Math.floor(min - ((max - min) / 5) * 4);
  if (min > 0 && axisMin < 0) {
    axisMin = 0;
  }
  const axisMax = Math.ceil(max + (max - min) / 5);
  return [axisMin, axisMax];
}

