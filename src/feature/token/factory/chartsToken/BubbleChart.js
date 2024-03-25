function BubbleChart (aliasToken){
  const { colorLabel } = aliasToken;

  return {
    emphasisLabelColor: colorLabel,
    labelColor: colorLabel,
  };

};

export default BubbleChart;
