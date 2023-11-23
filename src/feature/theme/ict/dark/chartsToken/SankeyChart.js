const SankeyChart = (basicToken, mapToken) => {
  const { fontSizeSM, spaceSM } = basicToken;

  return {
    label: {
      fontSize: fontSizeSM,
      distance: spaceSM,
    },
  };
};

export default SankeyChart;
