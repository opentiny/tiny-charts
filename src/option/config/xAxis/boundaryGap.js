function boundaryGap(xAxisUnit, xAxisItem, iChartOption) {
  let xAxisFullGrid = iChartOption.xAxisFullGrid || xAxisItem.fullGrid;
  xAxisUnit.boundaryGap = xAxisFullGrid === true ? false : true;
}

export default boundaryGap;
