const AreaChart = (basicToken, mapToken) => {
  const { colorAreaTP } = mapToken;
  return {
    areaStyle: {
      color: colorAreaTP,
    },
  };
};

export default AreaChart;
