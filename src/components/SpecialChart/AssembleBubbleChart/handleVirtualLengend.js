export function handleVirtualLengend(findColor) {
  // 自定义生成图例
  const virtualLegend = findColor.map(item => {
    return {
      name: item,
      type: 'pie',
      data: [],
      radius: ['0%', '0%'],
      colorBy: 'data',
    };
  });
  return virtualLegend;
}
