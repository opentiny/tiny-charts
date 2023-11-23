const BarChart = (basicToken, mapToken) => {
  const { borderSM, borderRadiusSM, colorGray10, fontSizeSM } = basicToken;
  const { colorBorderTP, barWidth } = mapToken;
  return {
    itemStyle: {
      borderWidth: borderSM,
      borderColor: colorBorderTP,
      borderRadius: borderRadiusSM,
      color: colorBorderTP,
    },
    label: {
      color: colorGray10,
      fontSize: fontSizeSM,
    },
    barWidth,
  };
};

export default BarChart;
