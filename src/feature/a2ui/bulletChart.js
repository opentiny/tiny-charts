export default function getBarDefOpt(iChartOpt){
  let defOption = {
    padding: [32,2,0,2],
    theme:  iChartOpt.theme,
    adaptive: true,
    background: [{
      name: 'error',
      data: 100,
    },{
      name: 'warning',
      data: 200,
    },{
      name: 'subwarning',
      data: 300,
    },{
      name: 'success',
      data: 400,
    }],
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
      axisLabel:{
        interval:'auto',
        alignMaxLabel: 'right'
      }
    }
  }
  if (iChartOpt.direction === 'horizontal') {
    defOption.yAxis.axisLabel = {
      alignMaxLabel: 'right'
    }
  }
  return defOption
}
