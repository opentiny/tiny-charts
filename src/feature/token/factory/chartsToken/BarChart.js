function BarChart (aliasToken) {
  const { borderWidth, barWidth, colorLabel, labelFontSize, colorBorderTransparent, borderRadius, colorBgTransparent } =
    aliasToken;

  return {
    borderWidth,
    borderColor:colorBorderTransparent,
    borderRadius,
    color: colorBgTransparent,
    labelColor: colorLabel,
    fontSize: labelFontSize,
    barWidth,
  };
};

export default BarChart;
