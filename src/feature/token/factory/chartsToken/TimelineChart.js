function TimelineChart(aliasToken) {
  const { colorBgPrimary, colorBgEmpty } = aliasToken;

  return {
    backgroundColor: colorBgPrimary,
    roundRectBg: colorBgEmpty
  };

};

export default TimelineChart;
