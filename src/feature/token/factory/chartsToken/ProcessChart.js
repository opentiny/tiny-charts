function ProcessChart(aliasToken) {
  const { colorAxisLine, colorLabel, colorTextDisabled, colorBgEmpty, colorTextSecondary } = aliasToken;

  return {
    labeColor: colorLabel,
    disabledColor: colorTextDisabled,
    axisLineColor: colorAxisLine,
    axisLabelColor: colorTextSecondary,
    itemBgEmpty: colorBgEmpty,
  };
};

export default ProcessChart;
