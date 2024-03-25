function PieChart(aliasToken) {
  const {
    colorBorder,
    borderWidthLG,
    borderWidthNone,
    colorLabel,
    labelFontSize,
    labelLineLength,
    colorLabelLine,
    borderRadiusNone,
    colorBgEmpty,
  } = aliasToken;


  return {
    borderWidth: borderWidthLG,
    borderColor:colorBorder,
    borderWidthNone,
    borderRadius:borderRadiusNone,
    distance: labelLineLength,
    labelColor: colorLabel,
    labelLineColor: colorLabelLine,
    emptyColor:colorBgEmpty,
    fontSize: labelFontSize,
  };
  
};

export default PieChart;
