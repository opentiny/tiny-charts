const PieChart = (basicToken, mapToken) => {
  const { borderLG, colorGray0, borderZero } = basicToken;
  const { labelDistanceLG } = mapToken;

  return {
    itemStyle: {
      borderWidthLG: borderLG,
      borderColor: colorGray0,
      borderWidthZero: borderZero,
    },
    label: {
      distance: labelDistanceLG,
    },
  };
};

export default PieChart;
