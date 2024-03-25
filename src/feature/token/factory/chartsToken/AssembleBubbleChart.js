function AssembleBubbleChart(aliasToken){
  const { colorLabel, colorLabelDisabled, colorBorderDisabled, colorInactive } = aliasToken;
  //    此图为自定义echarts不知道怎么排布数据结构，todo
  
  return {
    labelColor: colorLabel,
    disabledLabelColor: colorLabelDisabled,
    disabledBorderColor: colorBorderDisabled,
    disabledItemColor: colorInactive,
  };

};

export default AssembleBubbleChart;



