function SunburstChart(aliasToken) {
  const { colorBorder, colorLabel } = aliasToken;

  return {
    itemBorderColor: colorBorder,
    labelColor: colorLabel,
  };

};

export default SunburstChart;
