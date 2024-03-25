function TreeChart(aliasToken) {
  const { colorLabel, colorAxisLine } = aliasToken;

  return {
    lineColor: colorAxisLine,
    labelColor: colorLabel,
  };

};
export default TreeChart;
