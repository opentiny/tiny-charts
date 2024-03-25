function  HeatMapChart  (aliasToken) {
  const { colorAxisLine, colorTextPrimary, colorLabel, colorBorder } = aliasToken;

  return {
    axisLineColor: colorAxisLine,
    visualMapTextColor: colorTextPrimary,
    labelColor: colorLabel,
    customStrokeColor: colorBorder,
  };
};

export default HeatMapChart;
