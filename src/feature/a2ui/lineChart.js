export default function getLineDefOpt(iChartOpt){
  let defOption = {
    padding: [32,2,0,2],
    theme:  iChartOpt.theme,
    adaptive:true,
    tooltip:{
      show:true
    },
    legend:{
      show: true,
      top: 2,
      right: 6,
      left: 'auto'
    },
    yAxis:{
      splitNumber: 4,
      name: iChartOpt.yAxisTitle || ''
    },
    xAxis: {
      fullGrid: true,
      axisLabel:{
        interval:'auto',
        alignMinLabel: 'left',
        alignMaxLabel: 'right'
      }
    }
  }

  const dataLen = Object.keys(iChartOpt.data[0]).length || 0;
  const defArea = dataLen < 5  ? true : false;
  defOption.area = iChartOpt.area !== undefined ? iChartOpt.area : defArea;
  return defOption
}
