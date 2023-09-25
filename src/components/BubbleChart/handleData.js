/**
 * 从数据中拿出legend-data
 */
export function getLegendData(data) {
  return Object.keys(data);
}

/**
 * 从数据中拿出x轴的坐标数据
 */
export function getXAxisData(data) {
  const xAxisData = [];
  data.forEach(item => {
    xAxisData.push(item[0]);
  });
  return xAxisData;
}
