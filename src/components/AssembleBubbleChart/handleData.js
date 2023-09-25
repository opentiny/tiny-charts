// 从数据中拿出legend-data
export function getLegendData(data) {
  const legendData = [];
  if (data.length > 0) {
    data.forEach(item => {
      if (!legendData.includes(item.type) && item.type !== '') {
        legendData.push(item.type);
      }
    });
  }
  return legendData;
}
