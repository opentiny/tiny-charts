function GaugeChart (aliasToken){
  const { colorAxisLine, colorBgEmpty, colorTextSecondary, colorTextPrimary } = aliasToken;
  
  return {
    axisLineColor: colorAxisLine,
    // 用于轨道，特殊使用空数据颜色
    splitLineColor: colorBgEmpty,
    axisLabelColor: colorTextSecondary,
    detailRichColor: colorTextPrimary,
  };

};

export default GaugeChart;
