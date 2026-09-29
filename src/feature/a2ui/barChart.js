export default function getBarDefOpt(iChartOpt){
  let defOption = {
    padding: [32,2,0,2],
    theme: iChartOpt.theme,
    adaptive: true,
    datazoom:{
      left: 0
    },
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
  if (iChartOpt.direction === 'horizontal'){
    defOption.yAxis.axisLabel = {
      alignMaxLabel: 'right'
    }
    defOption.xAxis = {
      axisLabel:{
        alignMinLabel: 'right',
      }
    }
  }
  return defOption
}
