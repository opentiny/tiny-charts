function HillChart (aliasToken) {
  const { colorLabel, colorBorder } = aliasToken;
  
  return {
    labelColor: colorLabel,
    emphasisItemBorderColor: colorBorder,
  };
};

export default HillChart;
