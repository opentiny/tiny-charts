const LineChart = (basicToken, mapToken) => {
  const { symbolSizeXS, symbolSize } = mapToken;
  const { lineWidthLG, borderZero, lineWidth, borderLG, colorTP } = basicToken;

  return {
    symbolSize: {
      symbolSizeXS,
      symbolSize,
    },
    lineStyle: {
      lineWidthLG,
      lineWidth,
    },
    itemStyle: {
      borderZero,
      borderLG,
    },
    markLine: {
      lineStyle: {
        color: colorTP,
      },
    },
  };
};

export default LineChart;
