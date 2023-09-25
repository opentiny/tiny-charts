function icon(legend, iChartOption) {
    if(iChartOption.legend.icon == 'line'){
        legend.icon = 'rect';
        legend.itemHeight = 2;
        legend.itemWidth = 12;
    }
}
  
export default icon;