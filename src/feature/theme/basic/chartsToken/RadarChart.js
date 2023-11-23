const RadarChart = (basicToken, mapToken) => {
  const { fontSizeSM, lineHeightSM, colorTP, border, borderSM, lineWidth, lineWidthLG, lineWidthZero } = basicToken;
  const { symbolSize, symbolSizeSM, symbolSizeLG } = mapToken;

  return {
    symbolSize,
    symbolSizeSM,
    symbolSizeLG,
    areaStyle: {
      color: colorTP,
    },
    rich: {
      fontSize: fontSizeSM,
      lineHeight: lineHeightSM * fontSizeSM,
      lineHeightSmall: fontSizeSM,
    },
    itemStyle: {
      borderWidth: {
        border,
        borderSM,
      },
    },
    lineStyle: {
      width: {
        lineWidth,
        lineWidthLG,
        lineWidthZero,
      },
    },
  };
};
export default RadarChart;
