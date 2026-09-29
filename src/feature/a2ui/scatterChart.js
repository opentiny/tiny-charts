export default function getBarDefOpt(iChartOpt){
  let defOption = {
    padding: [32,2,0,2],
    theme:  iChartOpt.theme,
    adaptive: true,
    legend:{
      show: true,
      top: 2,
      right: 6,
      left: 'auto'
    },
    xAxis: {
      axisLabel:{
        interval:'auto',
        alignMaxLabel: 'right'
      }
    },
    yAxis: {
      name: iChartOpt.yAxisTitle || ''
    }
  }
  return defOption
}
