function LineChart(aliasToken) {
  const { colorBorder, borderWidthLG, borderWidthNone, symbolSizeLG, symbolSizeSM, lineWidth, colorLineTransparent } =
    aliasToken;

  return {
    symbolSizeSM,
    symbolSizeLG,
    lineWidth,
    borderZero: borderWidthNone,
    border: borderWidthLG,
    borderColor: colorBorder,
    color: colorLineTransparent,
  };
};

export default LineChart;
